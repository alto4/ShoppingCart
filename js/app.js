  var updateSubtotal = function (el) {
    var quantity = parseFloat($(el).find('.quantity input').val());
    var unitPrice = parseFloat($(el).children('.unitPrice').text());
    // Calculate subtotal
    var subTotal = quantity * unitPrice;
    subTotal = subTotal + '.00';
    $(el).children('.subtotal').html('$' + subTotal);

    return subTotal;
  }

  // 2. Calculate and display the total price.
  $('.subtotal').each(function (el) {
    console.log($(el).text());
  });
  // 3. Allow user to add a new item.

  // 4. Allow user to delete an item.

  // 5. Use Git to manage version control and push your work to a GitHub repository.

  // On DOM content loaded
  $(document).ready(function () {

    // 1. Loop through each item in cart and calculate subtotal for each item
    $('tbody tr').each(function (i, el) {
      updateSubtotal(el);
    });
  })