var xhrplatformcategories;
var isApp = 1;
var selectedplatform = 0;

$(document).ready(function () {
    checkAuthentication();
    getPlatformCategories(0);
});

function startApp() {
    $(".input-saleprice-product").on('change keydown paste input', function () {
        var product = $(this).attr('product');
        var excludevat = parseInt($(this).attr('excludevat'));
        var price = parseFloat($(this).val());
        var margin = parseInt(((price / 1.21) - parseFloat($(this).attr('price'))) / parseFloat($(this).attr('price')) * 100);
        if (excludevat == 1) {
            margin = parseInt((price - parseFloat($(this).attr('price'))) / parseFloat($(this).attr('price')) * 100);
        }
        $("#margin-product-" + product).val(margin);
    });

    $(".input-margin-product").on('change keydown paste input', function () {
        var product = $(this).attr('product');
        var excludevat = parseInt($(this).attr('excludevat'));
        var price = parseFloat($(this).attr('price'));
        var margin = (parseFloat($(this).val()) / 100) + 1;
        var result = (price * margin) * 1.21;
        if (excludevat == 1) {
            result = (price * margin);
        }
        $("#saleprice-product-" + product).val(result.toFixed(2).toString().split('.')[0] + ".99");
    });

    $('#select-app').change(function () {
        if ($("option:selected", this).attr('type') == "app") {
            isApp = 1;
            getPlatformCategories($(this).val());
        } else {
            isApp = 0;
            $('.category-product').hide();
        }
    });
    $('select').material_select();
    $('.tooltipped').tooltip({
        delay: 50
    });
    getPlatformCategories(0);
}

function filterQueueCategory(category) {

}

function clearQueue(id) {
    $.ajax({
        url: "/api/clearqueue",
        type: "GET",
        data: {
            intProductID: id
        },
        cache: true,
        success: function (data) {
            if (data == "1") {
                window.location = '/app/import';
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function processImports() {
    $.ajax({
        url: "/api/clearqueue",
        type: "GET",
        cache: true,
        success: function (data) {
            if (data == "1") {
                window.location = '/app/queue?start=1&index=' + selectedplatform;
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function addImports() {
    var loaderhtml = '<div class="center-align">';
    loaderhtml += '<div class="preloader-wrapper small active">';
    loaderhtml += '<div class="spinner-layer spinner-green-only">';
    loaderhtml += '<div class="circle-clipper left">';
    loaderhtml += '<div class="circle"></div>';
    loaderhtml += '</div><div class="gap-patch">';
    loaderhtml += '<div class="circle"></div>';
    loaderhtml += '</div><div class="circle-clipper right">';
    loaderhtml += '<div class="circle"></div>';
    loaderhtml += '</div>';
    loaderhtml += '</div>';
    loaderhtml += '</div>';
    loaderhtml += '</div>';

    $('.card-action').html(loaderhtml);

    var _products = '';
    var _error = 0;
    var _selected = 0;

    $(".category-product").each(function (index) {
        if ($(this).attr('product') != undefined) {
            if (_products != '') {
                _products += '|';
            }

            if (parseInt($("#margin-product-" + $(this).attr('product')).val()) < 1) {
                showMessageBox('Marge kleiner dan 1% is niet toegestaan.');
                $('.card-action').html('<a id="finish-import" href="#" class="waves-effect waves-light btn green white-text" onclick="addImports(); return false;">Importeren</a>');
                _error = 1;
                return;
            }

            if (parseInt($(this).val()) > 0) {
                _selected++;
            }

            _products += $(this).attr('product') + ':' + $("#margin-product-" + $(this).attr('product')).val() + ':' + $(this).val() + ':' + $("#saleprice-product-" + $(this).attr('product')).val();
        }
    });

    var marktplaceSelected = 0;
    var marketplaceIndex = 0;
    $.each(integrations, function (index, value) {
        if (value.arrProperties.objPlatform.arrProperties.strCategory == "Marktplaats") {
            var marketplaceProducts = '';
            $(".marketplace-checkbox-" + marketplaceIndex).each(function (index) {
                if (marketplaceProducts != '') {
                    marketplaceProducts += '|';
                }
                if ($(this).is(':checked')) {
                    marketplaceProducts += $(this).attr('product') + ':' + $("#margin-product-" + $(this).attr('product')).val() + ':' + $(this).val() + ':' + $("#saleprice-product-" + $(this).attr('product')).val();
                }
            });
            if (marketplaceProducts != '') {
                marktplaceSelected = 1;
                $.ajax({
                    url: "/api/addproduct",
                    type: "POST",
                    data: {
                        index: marketplaceIndex,
                        app: 0,
                        products: marketplaceProducts
                    },
                    cache: true,
                    success: function (data) {
                        if (data == "1") {

                        } else {
                            showMessageBox('U heeft uw product limiet bereikt.');
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            }
            marketplaceIndex++;
        }
    });

    if (_selected == 0) {
        if (marktplaceSelected == 0) {
            showMessageBox('U heeft geen categorieën geselecteerd, er worden geen producten geïmporteerd.');
            $('.card-action').html('<a id="finish-import" href="#" class="waves-effect waves-light btn green white-text" onclick="addImports(); return false;">Importeren</a>');
        } else {
            $.ajax({
                url: "/api/clearqueue",
                type: "GET",
                cache: true,
                success: function (data) {
                    if (data == "1") {
                        window.location = '/app/queue';
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }
    } else {
        if (_products != '' && _error == 0) {


            $.ajax({
                url: "/api/addproduct",
                type: "POST",
                data: {
                    index: selectedplatform,
                    app: isApp,
                    products: _products
                },
                cache: true,
                success: function (data) {
                    if (data == "1") {
                        processImports();
                    } else {
                        showMessageBox('U heeft uw product limiet bereikt.');
                    }
                },
                error: function (data) {
                    console.log(data);
                }
            });
        }
    }
}

function getPlatformCategories(index) {
    var loaderhtml = '<div class="center-align">';
    loaderhtml += '<div class="preloader-wrapper small active">';
    loaderhtml += '<div class="spinner-layer spinner-green-only">';
    loaderhtml += '<div class="circle-clipper left">';
    loaderhtml += '<div class="circle"></div>';
    loaderhtml += '</div><div class="gap-patch">';
    loaderhtml += '<div class="circle"></div>';
    loaderhtml += '</div><div class="circle-clipper right">';
    loaderhtml += '<div class="circle"></div>';
    loaderhtml += '</div>';
    loaderhtml += '</div>';
    loaderhtml += '</div>';
    loaderhtml += '</div>';

    $('.card-action').html(loaderhtml);
    $('.category-product').material_select('destroy');
    selectedplatform = index;

    if (isApp == 1) {
        if (xhrplatformcategories && xhrplatformcategories.readystate != 4) {
            xhrplatformcategories.abort();
        }
        xhrplatformcategories = $.ajax({
            url: "/api/platformcategories",
            type: "GET",
            data: {
                index: index
            },
            cache: true,
            success: function (data) {
                var html = '<option value="0">Kies uw categorie</option>';

                $.each(JSON.parse(data), function (index, value) {
                    var name = value.name;

                    for (i = 0; i < value.depth; i++) {
                        name = '&nbsp;&nbsp;&nbsp;&nbsp;' + name;
                    }

                    html += '<option value="' + value.id + '">' + name + '</option>';
                });

                $('.category-product').html(html);
                $('.category-product').show();
                $('.category-product').material_select();
                $('.card-action').html('<a id="finish-import" href="#" class="waves-effect waves-light btn green white-text" onclick="addImports(); return false;">Importeren</a>');
            },
            error: function (data) {
                console.log(data);
            }
        });
    } else {
        $('.category-product').hide();
        $('.card-action').html('<a id="finish-import" href="#" class="waves-effect waves-light btn green white-text" onclick="addImports(); return false;">Importeren</a>');
    }
}