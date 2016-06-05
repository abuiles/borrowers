import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';

export default ActiveModelAdapter.extend({
  namespace: 'api/v4',
  host: config.host,
  coalesceFindRequests: true
});
