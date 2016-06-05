import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v4',
  host: 'http://api.ember-cli-101.com',
  coalesceFindRequests: true
});
