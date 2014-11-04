import { formatDate } from 'borrowers/utils/date-helpers';

module('Utils: formatDate');

test('formats a date object', function() {
  var date = new Date("11-3-2014");
  var result = formatDate(date);

  equal(result, 'Mon Nov 03 2014', 'returns a readable string');
});
