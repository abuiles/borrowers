import DS from 'ember-data';
import config from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  host: config.host,
  namespace: 'api/v4',
  coalesceFindRequests: true
});
