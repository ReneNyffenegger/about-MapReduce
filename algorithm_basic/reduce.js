var tq84 = tq84 || {};

tq84.reduce = function (key, values, context) {

  // key is an Item.
  // value are the sales for this item.

  console.log('reduce: ' + key);

  var max_sales_for_item = 0;

  for (var i=0; i<values.length; i++) {
    if (values[i] > max_sales_for_item) max_sales_for_item = values[i];
  }

  context[key] = max_sales_for_item;

}
