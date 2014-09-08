import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('save action bubbled to application route');

      return true;
    },
    cancel: function() {
      console.log('cancel action bubbled to application route');

      return true;
    }
  }
});
