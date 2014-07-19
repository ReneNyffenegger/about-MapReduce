//
//  This class manages the calling of the mapper and
//  reducer of a MapReduce job.
//
var tq84 = tq84 || {};

tq84.job = function (data_reader, mapper, reducer) {

  // data_reader: currently an instance of -> html_table_data_fetcher.
  // mapper: a function (see -> map.js)
  // reducer: a function (see -> reduce.js)

  if (! data_reader.next_record) {
    alert('A Data Reader must implement next_record!');
  }

  this.data_reader = data_reader;
  this.mapper      = mapper;
  this.reducer     = reducer;

}

tq84.job.prototype.run = function() {
  console.log('job started');

  var key_value_pair;
  var context_map    = new tq84.context();
  var context_reduce = {};

  while (tr = this.data_reader.next_record() ) {
    console.log('Job has fetched next tr-record: ' + tr);

    this.mapper('TODO RECORD NO?', tr, context_map);
  }

  for (var context_key in context_map.keys) {
    this.reducer(context_key, context_map.keys[context_key], context_reduce);
  }

  console.log('job finished');

  return context_reduce;

}
