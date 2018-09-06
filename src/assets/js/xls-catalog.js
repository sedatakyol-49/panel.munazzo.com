$(document).ready(function () {
    checkAuthentication();
});

function startApp() {
    loadCatalog();
}

function loadCatalog() {
    $.ajax({
        url: "/api/catalog",
        type: "GET",
        cache: true,
        success: function (data) {
            html = '<ul class="collapsible popout" data-collapsible="accordion">';
            $.each(JSON.parse(data), function (index, value) {
                html += '<li class="">';
                html += '<div class="collapsible-header"><i class="material-icons">' + value.strIcon + '</i><span class="category-title">' + value.strName + '</span></div>';
                html += '<div class="collapsible-body" style="display: none;">';
                html += '<div class="row">';
                $.each(value.objProductCategoryCollection, function (subcategoryindex, subcategory) {
                    html += '<div class="col s12 m6 l3 subcat">';
                    html += '<div class="subcat-title">';
                    html += '<a href="/app?view=1&category=' + subcategory.intProductCategoryID + '">' + subcategory.strName + '</a>';
                    html += '</div>';
                    html += '<div class="subcat-children">';
                    $.each(subcategory.objProductCategoryCollection, function (childcategoryindex, childcategory) {
                        if (childcategoryindex < 4) {
                            html += '<div class="row">';
                            html += '<a href="/app?view=1&category=' + childcategory.intProductCategoryID + '">';
                            html += '<div class="chip">';
                            html += '<img src="' + childcategory.strImageURL + '">';
                            html += childcategory.strName;
                            html += '</div>';
                            html += '</a>';
                            html += '</div>';
                        }
                    });
                    html += '</div>';
                    html += '</div>';
                });
                html += '</div>';
                html += '</div>';
                html += '</li>';
            });
            html += '</ul>';
            $('#catalog').html(html);
            $('.collapsible').collapsible();
        },
        error: function (data) {

        }
    });
}