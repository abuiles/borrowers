import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },
  actions: {
    save: function() {
      console.log('save action bubbled route');

      return true;
    },
    cancel: function() {
      console.log('cancel action bubbled to route');

      return true;
    }
  }
});
