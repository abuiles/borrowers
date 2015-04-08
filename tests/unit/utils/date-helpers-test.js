import { formatDate } from 'borrowers/utils/date-helpers';

import {module, test} from 'qunit';

module('Utils: formatDate');

test('formats a date object', function(assert) {
  var date = new Date("11-3-2014");
  var result = formatDate(date);

  assert.equal(result, 'Mon Nov 03 2014', 'returns a readable string');
});
