$(document).ready(function () {
    checkAuthentication();
});

function startApp() {
    loadDashboard();
}

/*
function loadDashboard() {
    var loaderhtml = '<div class="center-align" style="padding-top: 4rem;">';
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

    $('#g1').html(loaderhtml);
    $('#g2').html(loaderhtml);
    $('#g3').html(loaderhtml);
    $('#g4').html(loaderhtml);
    $('#g5').html(loaderhtml);
    $('#g6').html(loaderhtml);
    $('#g7').html(loaderhtml);

    $.ajax({
        url: "/api/dashboard",
        type: "GET",
        cache: false,
        success: function (data) {
            $('#g1').html('');
            var g1 = new JustGage({
                id: "g1",
                value: JSON.parse(data).productcount,
                min: 0,
                max: JSON.parse(data).subscription.arrProperties['objSubscription'].arrProperties['intProductCount'],
                pointer: true,
                label: "Producten",
                pointerOptions: {
                    toplength: -15,
                    bottomlength: 10,
                    bottomwidth: 12,
                    color: '#8e8e93',
                    stroke: '#ffffff',
                    stroke_width: 3,
                    stroke_linecap: 'round'
                },
                gaugeWidthScale: 0.6,
                relativeGaugeSize: true,
                donut: true
            });
        },
        error: function (data) {

        }
    });

    $.ajax({
        url: "/api/orders",
        type: "GET",
        cache: false,
        success: function (data) {
            var unpaid = 0;
            var unshipped = 0;
            var paid = 0;

            $.each(JSON.parse(data), function (index, value) {
                if (value.intPayed == 0) {
                    unpaid++;
                } else {
                    paid++;
                    if (value.intShipped == 0) {
                        unshipped++;
                    }
                }
            });

            $('#g2').html('');
            var g2 = new JustGage({
                id: "g2",
                value: unpaid,
                min: 0,
                max: JSON.parse(data).length,
                pointer: true,
                label: "Openstaand",
                pointerOptions: {
                    toplength: -15,
                    bottomlength: 10,
                    bottomwidth: 12,
                    color: '#8e8e93',
                    stroke: '#ffffff',
                    stroke_width: 3,
                    stroke_linecap: 'round'
                },
                gaugeWidthScale: 0.6,
                relativeGaugeSize: true,
                donut: true
            });
        },
        error: function (data) {

        }
    });

    $.ajax({
        url: "/api/importqueue",
        type: "GET",
        cache: false,
        success: function (data) {
            var successCount = 0;
            var errorCount = 0;
            var pendingCount = 0;
            var disabledCount = 0;
            $.each(JSON.parse(data), function (index, log) {
                if (log.strStatus.indexOf('UPDATED') !== -1 || log.strStatus.indexOf('CREATED') !== -1) {
                    successCount++;
                } else {
                    if (log.strStatus == "") {
                        pendingCount++;
                    } else {
                        if (log.strStatus.indexOf('DISABLED') !== -1) {
                            disabledCount++;
                        } else {
                            errorCount++;
                        }
                    }
                }
            });

            $('#g3').html('');
            var g3 = new JustGage({
                id: "g3",
                value: successCount,
                min: 0,
                max: JSON.parse(data).length,
                pointer: true,
                label: "Geimporteerd",
                pointerOptions: {
                    toplength: -15,
                    bottomlength: 10,
                    bottomwidth: 12,
                    color: '#8e8e93',
                    stroke: '#ffffff',
                    stroke_width: 3,
                    stroke_linecap: 'round'
                },
                gaugeWidthScale: 0.6,
                relativeGaugeSize: true,
                donut: true
            });

            $('#g5').html('');
            var g6 = new JustGage({
                id: "g5",
                value: pendingCount,
                min: 0,
                max: JSON.parse(data).length,
                pointer: true,
                label: "Wachtrij",
                pointerOptions: {
                    toplength: -15,
                    bottomlength: 10,
                    bottomwidth: 12,
                    color: '#8e8e93',
                    stroke: '#ffffff',
                    stroke_width: 3,
                    stroke_linecap: 'round'
                },
                gaugeWidthScale: 0.6,
                relativeGaugeSize: true,
                donut: true
            });

            $('#g6').html('');
            var g6 = new JustGage({
                id: "g6",
                value: disabledCount,
                min: 0,
                max: JSON.parse(data).length,
                pointer: true,
                label: "Verborgen",
                title: "Niet op voorraad",
                pointerOptions: {
                    toplength: -15,
                    bottomlength: 10,
                    bottomwidth: 12,
                    color: '#8e8e93',
                    stroke: '#ffffff',
                    stroke_width: 3,
                    stroke_linecap: 'round'
                },
                gaugeWidthScale: 0.6,
                relativeGaugeSize: true,
                donut: true
            });

            $('#g7').html('');
            var g7 = new JustGage({
                id: "g7",
                value: errorCount,
                min: 0,
                max: JSON.parse(data).length,
                pointer: true,
                label: "Mislukt",
                pointerOptions: {
                    toplength: -15,
                    bottomlength: 10,
                    bottomwidth: 12,
                    color: '#8e8e93',
                    stroke: '#ffffff',
                    stroke_width: 3,
                    stroke_linecap: 'round'
                },
                gaugeWidthScale: 0.6,
                relativeGaugeSize: true,
                donut: true
            });
        },
        error: function (data) {

        }
    });
}
*/
