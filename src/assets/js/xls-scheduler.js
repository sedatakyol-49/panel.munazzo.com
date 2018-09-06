tasklist = [];

$(document).ready(function () {
    checkAuthentication();
});

function createScheduler(id) {
    $('#booEnabled').prop('checked', false);
    $('#booAutoPrice').prop('checked', false);
    $('#chkStockHelper').prop('checked', false);
    $('#chkPriceHelper').prop('checked', false);
    $('#chkInformationHelper').prop('checked', false);
    if (id == 0) {
        $('#intSchedulerID').val("0");
        $('#strName').val("");
        $('#intType').val(0);
        $('#intPricing').val(0);
        $('#booEnabled').val(0);
        $('#booAutoPrice').val(0);
        $('#intMoment').val(1);
        $('#intAppIndex').val(0);
        $('#booUpdate').prop('checked', true);
        $('#booIgnore').prop('checked', false);
        $('#booRemove').prop('checked', false);
        $('#chkStockHelper').prop('checked', true);
        $('#chkPriceHelper').prop('checked', true);
        $('#btnScheduler').val('Achtergrondtaak aanmaken');
        Materialize.updateTextFields();
    } else {
        $.each(tasklist, function (key, value) {
            if (value.intSchedulerID == id) {
                if (value.intType == 1) {
                    $('#chkStockHelper').prop('checked', true);
                } else if (value.intType == 2) {
                    $('#chkStockHelper').prop('checked', true);
                } else if (value.intType == 3) {
                    $('#chkStockHelper').prop('checked', true);
                    $('#chkInformationHelper').prop('checked', true);
                }

                $('#intSchedulerID').val(value.intSchedulerID);
                $('#strName').val(value.strName);
                $('#intType').val(value.intType);
                $('#intPricing').val(value.intPricing);
                if (value.intPricing == 1) {
                    $('#chkgroupSchedulePriceHelper1').prop('checked', true);
                } else {
                    $('#chkgroupSchedulePriceHelper2').prop('checked', true);
                }
                if (value.booEnabled == 1) {
                    $('#booEnabled').prop('checked', true);
                }
                $('#booEnabled').val(value.booEnabled);
                $('#booAutoPrice').val(value.booAutoPrice);
                if (value.booAutoPrice == 1) {
                    $('#booAutoPrice').prop('checked', true);
                    $('#chkPriceHelper').prop('checked', true);
                    $('#chkgroupSchedulePriceHelper3').prop('checked', true);
                }
                $('#intMoment').val(value.intMoment);
                if (value.intMoment == 1) {
                    $('#chkgroupScheduleMomentHelper1').prop('checked', true);
                } else if (value.intMoment == 2) {
                    $('#chkgroupScheduleMomentHelper2').prop('checked', true);
                } else if (value.intMoment == 3) {
                    $('#chkgroupScheduleMomentHelper3').prop('checked', true);
                }
                $('#intAppIndex').val(value.intAppIndex);
                if (value.booUpdate == 1) {
                    $('#booUpdate').prop('checked', true);
                    $('#chkgroupScheduleDisplayHelper2').prop('checked', true);
                }
                if (value.booIgnore == 1) {
                    $('#booIgnore').prop('checked', true);
                    $('#chkgroupScheduleDisplayHelper1').prop('checked', true);
                }
                if (value.booRemove == 1) {
                    $('#booRemove').prop('checked', true);
                    $('#chkgroupScheduleDisplayHelper3').prop('checked', true);
                }
                $('#btnScheduler').val('Achtergrondtaak wijzigen');
                Materialize.updateTextFields();
            }
        });
    }

    $("#scheduler-form").openModal();
}

function startApp() {
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

    $("#scheduler-list").html(loaderhtml);

    $.ajax({
        url: "/api/schedulers",
        type: "GET",
        cache: false,
        success: function (data) {
            var tasks = JSON.parse(data);

            tasklist = tasks;

            var html = '';

            if (tasks.length == 0) {
                html += '<div class="valign-wrapper" style="height:400px;">';
                html += '<div class="center" style="width: 100%;">';
                html += '<i class="medium mdi mdi-calendar grey-text"></i>';
                html += '<h6 class="valign center grey-text" style="width: 100%;">Er zijn geen achtergrondtaken ingesteld in uw account, klik op de <i class="material-icons">add_alert</i> knop om een achtergrond taak aan te maken.</h6>';
                html += '</div>';
                html += '<br>';
                html += '</div>';
            } else {
                $.each(tasks, function (index, task) {
                    html += '<div class="col s12 m6 l4">';
                    html += '<div class="card small" style="height: 10rem;">';
                    html += '<div class="card-content" style="max-height:100%;">';
                    html += '<span class="secondary-content">';
                    html += '<a href="/app/deletescheduler/' + task.intSchedulerID + '" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Verwijder Achtergrondtaak"><i class="material-icons">delete</i></a>';
                    html += '</span>';
                    html += '<p>';
                    html += '<span class="type bold text-primarycolor">' + task.strName + '</span>';
                    html += '</p>';
                    html += '</div>';
                    html += '<div class="card-action">';
                    html += '<span class="btn btn-flat" onclick="createScheduler(' + task.intSchedulerID + ');">Wijzigen</span>';
                    html += '<a class="btn right" href="/app/executescheduler/' + task.intSchedulerID + '">Uitvoeren</a>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                });
            }

            $("#scheduler-list").html(html);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

function helperClick() {
    if ($('#chkInformationHelper').is(':checked')) {
        $('#intType').val("3");
    } else {
        $('#intType').val("1");
    }

    if ($('#chkPriceHelper').is(':checked')) {
        $('#booAutoPrice').prop('checked', true);
    } else {
        $('#booAutoPrice').prop('checked', false);
    }

    if ($('#chkgroupSchedulePriceHelper1').is(':checked')) {
        $('#booAutoPrice').prop('checked', true);
        $('#intPricing').val('0');
    } else if ($('#chkgroupSchedulePriceHelper2').is(':checked')) {
        $('#booAutoPrice').prop('checked', true);
        $('#intPricing').val('1');
    } else if ($('#chkgroupSchedulePriceHelper3').is(':checked')) {
        $('#booAutoPrice').prop('checked', false);
    }

    if ($('#chkgroupScheduleMomentHelper1').is(':checked')) {
        $('#intMoment').val("1");
    } else if ($('#chkgroupScheduleMomentHelper2').is(':checked')) {
        $('#intMoment').val("2");
    } else if ($('#chkgroupScheduleMomentHelper3').is(':checked')) {
        $('#intMoment').val("3");
    }

    if ($('#chkgroupScheduleDisplayHelper1').is(':checked')) {
        $('#booIgnore').prop('checked', true);
    } else if ($('#chkgroupScheduleDisplayHelper2').is(':checked')) {
        $('#booUpdate').prop('checked', true);
    } else if ($('#chkgroupScheduleDisplayHelper3').is(':checked')) {
        $('#booRemove').prop('checked', true);
    }
}