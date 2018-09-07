var xhrinformation;

$(document).ready(function () {
    checkAuthentication();

    $('.dropify').dropify({
        messages: {
            'default': 'Sleef afbeelding of klik om te kiezen',
            'replace': 'Sleep afbeelding of klik om te vervangen',
            'remove': 'Verwijder',
            'error': 'Er is een fout ontstaan.'
        }
    });
});

function startApp() {
    var start = getParameterByName('start');
    if (start == 1) {
        $(".button-import").each(function (index) {
            if (index.toString() == getParameterByName('index')) {
                $(this).click();
                window.history.pushState("", "", "/app/queue");
            }
        });
    } else {
        statusInterval();
    }
}

function saveProductInformation() {
    var intProductID = $('#intProductID').val();
    var strTitle = $('#strTitle').val();
    var strDescription = tinyMCE.get('strDescription').getContent();
    var strSummary = tinyMCE.get('strSummary').getContent();
    var intAppIndex = $('#intAppIndex').val();
    var douProductMargin = $('#douProductMargin').val();
    var douProductPrice = $('#douProductPrice').val();

    $('#divProductInformation').show();
    $('#frmProductInformation').hide();
    $('#strTitle').val('');
    $('#strDescription').val('');
    $('#strSummary').val('');
    $('#intAppIndex').val(0);
    $('#intProductID').val(0);
    $('#divProductImages').html('');
    $('#douOfferPrice').val(0);
    $('#douProductMargin').val(0);
    $('#douProductPrice').val(0);

    if (xhrinformation && xhrinformation.readystate != 4) {
        xhrinformation.abort();
    }

    xhrinformation = $.ajax({
        url: "/api/saveinformation",
        type: "POST",
        data: {
            intProductID: intProductID,
            strTitle: strTitle,
            strDescription: strDescription,
            strSummary: strSummary,
            douProductMargin: douProductMargin,
            douProductPrice: douProductPrice,
            intAppIndex: intAppIndex
        },
        cache: false,
        success: function (data) {
            console.log(data);
            $('#modal-product-information').closeModal();
            showMessageBox('Productinformatie is bijgewerkt, synchroniseer producten om te toepassen.');
        },
        error: function (data) {
            $('#modal-product-information').closeModal();
            showMessageBox('Fout onstaan bij het bijwerken van Productinformatie, controleer de velden.');
        }
    });
}

function editProductInformation(id, appindex) {
    $('#divProductInformation').show();
    $('#frmProductInformation').hide();
    $('#strTitle').val('');
    $('#strDescription').val('');
    $('#strSummary').val('');
    $('#strDescription').html('');
    $('#strSummary').html('');
    $('#intProductID').val(0);
    $('#divProductImages').html('');

    $('#douOfferPrice').val(0);
    $('#douProductMargin').val(0);
    $('#douProductPrice').val(0);
    $('#intAppIndex').val(appindex);

    try {
        tinymce.get('strDescription').remove();
        tinymce.get('strSummary').remove();
    } catch (e) {

    }

    Materialize.updateTextFields();

    $('#modal-product-information').openModal({
        dismissible: false
    });
    if (xhrinformation && xhrinformation.readystate != 4) {
        xhrinformation.abort();
    }
    xhrinformation = $.ajax({
        url: "/api/getuserinformation",
        type: "GET",
        data: {
            id: id,
            appindex: appindex
        },
        cache: false,
        success: function (data) {
            var information = JSON.parse(data);
            $('#strTitle').val(information.strTitle);
            $('#strDescription').val(information.strDescription);
            $('#strSummary').val(information.strSummary);
            $('#intProductID').val(id);

            $('#douOfferPrice').val(information.douOfferPrice);
            $('#douProductMargin').val(information.douProductMargin);
            $('#douProductPrice').val(information.douProductPrice);

            $('#frmProductInformation').show();
            $('#divProductInformation').hide();
            tinymce.init({selector: 'textarea'});
            Materialize.updateTextFields();
            var html = '';
            try {
                if (information.arrUserMedia != null) {
                    if (information.arrUserMedia.length > 0) {
                        html += '<div class="col s12">Toegevoegde Product Afbeeldingen</div>';
                        $.each(information.arrUserMedia, function (index, value) {
                            html += '<div class="col s6" style="height: 8rem; text-align: center; position: relative;">';
                            html += '<img src="https://services.munazzo.com/media/userimage?token=' + value.strToken + '&size=500&extension=' + value.strExtension + '" style="max-width: 100%; max-height: 8rem; vertical-align: middle;">';
                            html += '<i class="material-icons" style="position: absolute; right: 0px; top: 0px; cursor: pointer;" onclick="window.location = \'/app/removeusermedia/' + value.intUserProductMediaID + '\';">delete</i>';
                            html += '</div>';
                        });
                    }
                }
            } catch (e) {

            }

            if (information.arrImages != null) {
                if (information.arrImages.length > 0) {
                    html += '<div class="col s12">Standaard Product Afbeeldingen</div>';
                    $.each(information.arrImages, function (index, value) {
                        html += '<div class="col s6" style="height: 8rem; text-align: center;">';
                        html += '<img src="' + information.arrImages[index] + '" style="max-width: 100%; max-height: 8rem; vertical-align: middle;>';
                        html += '</div>';
                    });
                }
            }

            $('#divProductImages').html(html);
        },
        error: function (data) {
            console.log(data);
        }
    });
}