import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export function formattedDate(date, format) {
  return formatDate(date, format);
}

export default Ember.Handlebars.makeBoundHelper(formattedDate);
