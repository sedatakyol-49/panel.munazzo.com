$(document).ready(function () {
    checkAuthentication();
});

function startApp() {
    loadBrands(1);
}

function loadBrands(page) {
    $.ajax({
        url: "/api/brands",
        type: "GET",
        data: {
            page: page
        },
        cache: true,
        success: function (data) {
            html = '';
            $.each(JSON.parse(data), function (index, value) {
                html += '<div class="col s4 m2 l1">';
                html += '<a href="/app?view=1&brand=' + value.intProductBrandID + '">';
                html += '<div class="card tooltipped" data-position="bottom" data-delay="50" data-tooltip="' + value.strName + '">';
                html += '<img src="' + value.strImageURL + '">';
                html += '</div>';
                html += '</a>';
                html += '</div>';
            });
            if (page == 1) {
                $('#brands').html(html);
            } else {
                $('#brands').append(html);
            }

            $('.tooltipped').tooltip({
                delay: 50
            });

            if (JSON.parse(data).length > 0 && page < 50) {
                loadBrands(page + 1);
            }
        },
        error: function (data) {

        }
    });
}