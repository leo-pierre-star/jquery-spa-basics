
$("a").click(function (event) {
  $.get("data/product.json", function (products) {
    $.each(products, function (id, product) {
      if (product.id == event.target.id) {
        total += parseFloat(product.price);
        PANIER[product.id] += product.title;
        $(".total").html(total + "€");
        console.log(PANIER);
      }
    });
  });
    

  

});
