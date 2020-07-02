// Dynamic Shopping Cart Form
var shoppingCart = function () {
  // updateSubtotal function - updates the subtotal for each item by multiplying unit price by quantity
  var updateSubtotal = function (el) {
    var unitPrice = Number($(el).find(".unitPrice").text());
    console.log(unitPrice);

    var quantity = Number($(el).find(".quantity input").val());
    console.log(quantity);
    // Calculate subtotal
    var subTotal = quantity * unitPrice;
    console.log(subTotal);
    $(el)
      .children(".subtotal")
      .html("$" + subTotal + ".00");

    return subTotal;
  };

  // updateTotals Function - calculates and displays the total order price by adding up all item subtotals
  var updateTotals = function () {
    var itemSubtotals = [];

    // sum Function - accumlator function for looping through all subtotals
    var sum = function (accumulator, currentValue) {
      return accumulator + currentValue;
    };
    // Calculate the subtotal for each item and push it to an array
    $("tbody tr").each(function (i, el) {
      var subtotal = updateSubtotal(el);
      itemSubtotals.push(subtotal);
    });

    // Calculate the overall total using reduce and the sum function to add together all subtotals
    var total = itemSubtotals.reduce(sum);
    $(".totalPrice").html("$" + total + ".00");
  };

  // EVENT LISTENERS

  // DOM Loaded Event - once DOM is loaded, add functionality to elements
  $(document).ready(function () {
    // Update all subtotals and order total based on existing rows
    updateTotals();

    // Calculate Button Event - update item subtotals and overall total when calculate button is clicked
    $(".btn-calculate").on("click", function (e) {
      e.preventDefault();
      updateTotals();
    });

    // Add Item Event - when the add item button is clicked, retrieve input values and create a new item row
    $("#addItem").on("submit", function (e) {
      // Get input values from DOM
      e.preventDefault();
      var item = $(this).find("[name=item]").val();
      var itemUnitPrice = $(this).find("[name=unitPrice]").val();

      // Create new row with stored values
      var newRow =
        '<tr class="row">' +
        '<td class="item col-4">' +
        item +
        "</td>" +
        '<td class="unitPrice col-3">' +
        itemUnitPrice +
        "</td>" +
        '<td class="quantity col-4"><span class="font-weight-bold">QTY </span>' +
        '<input type="text" value="1" />' +
        '<button class="btn btn-sm btn-danger btn-remove">Cancel</button>' +
        "</td>" +
        '<td class="subtotal col-1">Subtotal</td>';

      // Append the row to items table
      $("tbody").append(newRow);

      // Update subtotal and total when new item is added and clear all input fields
      updateTotals();
      $("#addItem").find("[name=item]").val("");
      $("#addItem").find("[name=unitPrice]").val("");
    });

    // Remove Item Event - allow user to delete an item when the remove button is clicked
    $(document).on("click", ".btn-remove", function () {
      $(this).closest("tr").remove();
      updateTotals();
    });
  });
};

shoppingCart();
