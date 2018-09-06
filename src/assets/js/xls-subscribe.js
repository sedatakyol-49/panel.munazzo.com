$(document).ready(function () {
    checkAuthentication();

    $('#iban').on('change keydown paste input', function () {
        checkIban();
    });

    $("#allow").click(function (event) {
        checkIban();
    });

    $("#owner").click(function (event) {
        checkIban();
    });
});

function checkIban() {
    $($($($('#iban').parent().parent().parent().parent().children()[2]).children()[0]).children()[0]).hide();

    if (xhriban && xhriban.readystate != 4) {
        xhriban.abort();
    }

    var iban = $('#iban').val();
    if (iban.length == 18) {
        xhriban = $.ajax({
            url: "/api/checkiban?iban=" + iban,
            type: "GET",
            success: function (response) {
                if (JSON.parse(response).valid == true) {
                    $('#iban').val(JSON.parse(response).iban);
                    if ($('#allow').is(":checked") && $('#iban').val().length == 18 && $('#owner').val().length > 0) {
                        $($($($('#iban').parent().parent().parent().parent().children()[2]).children()[0]).children()[0]).show();
                    }
                }
            }
        });
    }
}
