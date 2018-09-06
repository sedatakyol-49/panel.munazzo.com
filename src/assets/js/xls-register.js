function checkVat() {
    $.ajax({
        url: "/api/vat",
        type: "GET",
        data: {
            country: $('#country').val(),
            vat: $('#vat').val()
        },
        cache: false,
        success: function (data) {
            var result = JSON.parse(data);

            if (result.valid) {
                $('#vat-submit').hide();
                $('#vat-result').show();

                $('#name').val(result.name);
                $('#address').val(result.street + ' ' + result.number);
                $('#postal').val(result.postal);
                $('#city').val(result.city);
            } else {
                var $toastContent = $('<span>Het ingevoerd btw nummer is ongeldig.</span>');
                Materialize.toast($toastContent, 5000);
            }
        },
        error: function (data) {
            var $toastContent = $('<span>Europese Commissie BTW nummer controle systeem is tijdelijk niet beschikbaar, wacht een paar minuten of probeer het nog eens op een ander tijdstip.</span>');
            Materialize.toast($toastContent, 5000);
        }
    });
}
