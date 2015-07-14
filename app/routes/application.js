import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      console.log('+---- save action bubbled up to application route');

      return true;
    },
    cancel() {
      console.log('+---- cancel action bubbled up to application route');

      return true;
    }
  }
});
