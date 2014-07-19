use warnings;
use strict;

use List::Util qw(shuffle);

my @items  = qw(Knive Fork Spoon               );
my @months = qw(11/2013 12/2013 01/2014 02/2014 03/2014 04/2014);

my @sales;

for my $item (@items) { for my $month (@months) {
  push @sales, [$item, $month, int(rand 1000)];
}}

@sales = shuffle @sales;

for my $sale (@sales) {

  printf "           <tr><td>%-5s</td><td>%s</td><td>%4i</td></tr>\n", $sale->[0], $sale->[1], $sale->[2];
}
