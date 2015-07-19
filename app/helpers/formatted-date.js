import Ember from 'ember';

// We are consuming the function defined in our utils/date-helpers.
import { formatDate } from '../utils/date-helpers';

export function formattedDate([date, format]) {
  return formatDate(date, format);
}

export default Ember.Helper.helper(formattedDate);
