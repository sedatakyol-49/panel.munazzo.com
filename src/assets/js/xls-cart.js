$(document).ready(function () {
    checkAuthentication();
});

function startApp() {
    loadCart();
    autoCompleteAddress();
}

function loadCart() {
    $.ajax({
        url: "/api/cart",
        type: "GET",
        cache: false,
        success: function (data) {
            if (JSON.parse(data).objCartCollection.length > 0) {
                var html = '';
                $.each(JSON.parse(data).objCartCollection, function (index, value) {
                    if (stealthmode == 0) {
                        html += '<div class="row" style="margin-bottom: 0px;">';
                        html += '<div class="col s1 modal-trigger" style="cursor: pointer;" href="#editcart_' + value.intCartID + '" data-target="login-form"><i class="material-icons">mode_edit</i></div>';
                        html += '<div class="col s2">' + value.intQuantity + 'x</div>';
                        html += '<div class="col s6">' + value.strTitle + '</div>';
                        html += '<div class="col s2">&euro; ' + parseFloat(value.douPrice).toFixed(2).replace('.', ',') + '</div>';
                        html += '<div class="col s1" onclick="deleteCart(' + value.intCartID + ')" style="cursor: pointer;"><i class="material-icons">delete</i></div>';
                        html += '</div>';

                        html += '<div id="editcart_' + value.intCartID + '" class="modal">';
                        html += '<div class="card">';
                        html += '<div class="modal-content">';

                        html += '<h4>' + value.strTitle + '</h4>';
                        html += '<p>';

                        html += '<div class="row">';
                        html += '<div class="input-field col s10">';
                        html += '<input id="quantity_' + value.intCartID + '" name="quantity_' + value.intCartID + '" type="number" class="validate" value="' + value.intQuantity + '">';
                        html += '<label for="quantity_' + value.intCartID + '">Aantal</label>';
                        html += '</div>';

                        html += '<div class="input-field col s2 align-right"><input type="button" class=" modal-action modal-close waves-effect waves-green btn-flat" value="Wijzigen" onclick="editCart(' + value.intCartID + '); return false"></input></div>';

                        html += '</div>';

                        html += '</p>';

                        html += '</div>';

                        html += '</div>';
                        html += '</div>';
                    } else {
                        html += '<div class="row" style="margin-bottom: 0px;">';
                        html += '<div class="col s7">' + value.intQuantity + 'x&nbsp;&nbsp;' + value.strTitle + '</div>';
                        html += '<div class="col s4">&euro; ' + parseFloat(value.douPrice).toFixed(2).replace('.', ',') + '</div>';
                        html += '<div class="col s1" onclick="deleteCart(' + value.intCartID + ')" style="cursor: pointer;"><i class="material-icons">delete</i></div>';
                        html += '</div>';
                    }
                });

                $('#cart-products').html(html);

                var totalhtml = '<div class="row">';
                totalhtml += '<div class="col s4"></div><div class="col s4 right-align">Subtotaal:<br />BTW:<br/>Verzending:<br />Totaal:</div>';
                totalhtml += '<div class="col s4 right-align"><b>&euro; ' + parseFloat(JSON.parse(data).subtotal).toFixed(2).replace('.', ',') + '</b>';
                totalhtml += '<br /><b>&euro; ' + parseFloat(JSON.parse(data).vat).toFixed(2).replace('.', ',') + '</b>';
                totalhtml += '<br /><b>&euro; ' + parseFloat(JSON.parse(data).shipping).toFixed(2).replace('.', ',') + '</b>';
                totalhtml += '<br /><b>&euro; ' + parseFloat(JSON.parse(data).total).toFixed(2).replace('.', ',') + '</b>';
                totalhtml += '</div>';
                totalhtml += '</div>';

                $('#cart-total').html(totalhtml);

                Materialize.updateTextFields();
            }

            $('.modal-trigger').unbind().removeData();
            $('.modal-trigger').leanModal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
                starting_top: '4%', // Starting top style attribute
                ending_top: '10%' // Ending top style attribute
            });
        },
        error: function (data) {
            $('.modal-trigger').unbind().removeData();
            $('.modal-trigger').leanModal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
                starting_top: '4%', // Starting top style attribute
                ending_top: '10%' // Ending top style attribute
            });
        }
    });
}

function editCart(cart) {
    $.ajax({
        url: "/api/editcart",
        type: "GET",
        data: {
            cart: cart,
            quantity: $('#quantity_' + cart + '').val()
        },
        cache: false,
        success: function (data) {
            loadCart();
        },
        error: function (data) {

        }
    });
}

function deleteCart(cart) {
    $.ajax({
        url: "/api/deletefromcart",
        type: "GET",
        data: {
            cart: cart
        },
        cache: false,
        success: function (data) {
            loadCart();
        },
        error: function (data) {

        }
    });
}
