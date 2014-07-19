//
//  This class can be used to read records from a html
//  table. The method «next_record()» returns a TR-object,
//  each of which correspond to a record in the html table.
//
//  The class is used in -> job.js
//

var tq84 = tq84 || {};

tq84.html_table_data_fetcher = function(table_id) {
  var nof_header_rows = 1; // Skip rows in <thead>

  this.html_table_elem = document.getElementById(table_id);
  this.table_rows      = this.html_table_elem.rows;
  this.nof_records     = this.table_rows.length  - nof_header_rows;
  this.cur_record      =                           nof_header_rows;

  console.log('DataFetcher: nof_records: ' + this.nof_records);
}

tq84.html_table_data_fetcher.prototype.next_record = function() {

  if (this.cur_record >= this.nof_records) return false;

  var key_value_pair = {};

  var tr = this.table_rows[this.cur_record]

  this.cur_record ++;

  return tr;
}
