var tq84 = tq84 || {};

tq84.map = function (record_number /* key ? */, tr, context) {


  var key   =            tr.childNodes[0].innerHTML.trim() ;  // Item (Spoon, Knive...)
  var value = parseFloat(tr.childNodes[2].innerHTML.trim());  // Sales

  console.log('mapper has received record ' + record_number + ' and extracted key/value pair ' + key + "=" + value);

  context.write(key, value);


}
