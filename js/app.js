  var updateSubtotal = function (el) {
    var quantity = Number($(el).find('.quantity input').val());
    var unitPrice = Number($(el).children('.unitPrice').text());
    // Calculate subtotal
    var subTotal = quantity * unitPrice;
    subTotal = subTotal;
    $(el).children('.subtotal').html('$' + subTotal + '.00');

    return subTotal;
  }

  // 2. Calculate and display the total price.
  var updateTotals = function () {
    var sum = function (accumulator, currentValue) {
      return accumulator + currentValue;
    };
    var itemSubtotals = [];
    // 1. Loop through each item in cart and calculate subtotal for each item
    $('tbody tr').each(function (i, el) {
      var subtotal = updateSubtotal(el);
      itemSubtotals.push(subtotal);
      console.log(itemSubtotals)
    });

    var total = itemSubtotals.reduce(sum);
    $('.totalPrice').html('$' + total + '.00');
  }

  // 5. Use Git to manage version control and push your work to a GitHub repository.

  // Once all DOM elements are ready, add functionality 
  $(document).ready(function () {
    updateTotals();

    // Update item subtotal and overall total when calculate button is clicked
    $('.btn-calculate').on('click', function (e) {
      e.preventDefault();
      updateTotals();
    });

    ////////////////////RESUME BELOW WITH ADD NEW ITEM
    // Add item
    $('#addItem').on('submit', function (e) {
      console.log('submitted new item');
      e.preventDefault();
      var item = $(this).find('[name=item]').val();
      console.log(item);
    })

    // Allow user to delete an item.
    $('.btn-remove').on('click', function () {
      $(this).closest('tr').remove();
      updateTotals();
    });
  });