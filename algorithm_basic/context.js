//
//   Should this class be called OutputCollector?
//
var tq84 = tq84 || {};

tq84.context = function() {

  this.keys = {};

};

tq84.context.prototype.write = function (key, value) {

  if (typeof (this.keys[key]) == 'undefined' ) {
    console.log('context key ' + key + ' did not yet exist');

    this.keys[key] = [];
  }
  else {
    console.log('context key ' + key + ' already existed');
  }

  this.keys[key].push(value);

}
