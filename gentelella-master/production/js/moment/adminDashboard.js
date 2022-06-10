checkout_analytics_data

$(document).ready(function () {
    loadProducts();
});
var selectedRow = null;
function loadProducts() {

    var ajaxConfig = {
        url: "http://localhost:8000/cog-admin/checkout_analytics_data",
        method: "GET",
        async: 'json'
    }
    var i = 0;

    $.ajax(ajaxConfig).done(function (product, status, jQXHB) {
        for (var i = 0; i < product.length; i++) {
            var html = '<tr>' +
                '<td >' + product[i].id + '</td>' +
                '<td>' + product[i].name + '</td>' +
                '<td style="width: 5%">' + product[i].description + '</td>' +
                '<td>' + product[i].price + '</td>' +
                '<td>' + product[i].qty + '</td>' +
                '<td>' + product[i].shipping + '</td>' +
                '<td >' + '<img style="height: 35px; width: 35px;" src=' + product[i].image + '/>' + '</td>' +
                '<td><i class="fas fa-trash"></i></td>' +
                '</tr>';
            $("#datatable tbody").append(html);
        }
        console.log(product)
    }).fail(function (jqXHB, status, error) {
        console.log(error)
    })
}