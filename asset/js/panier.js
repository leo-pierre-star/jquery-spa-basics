// console.log(PANIER);
if (Object.keys(PANIER).length != 0) {
  $(".badge").html(Object.keys(PANIER).length);
  Object.keys(PANIER).forEach(function (prop) {
    $.get("data/product.json", function (products) {
      $.each(products, function (id, product) {
        if (product.id == prop) {
          $(".panier").append(
            '<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 class="my-0">' +
              product.title +
              '</h6></div><span class="text-muted">' +
              product.price +
              "  €</span></li>"
          );
        }
      });
    });
  });
} else {
  window.location.hash = "#product";
}
