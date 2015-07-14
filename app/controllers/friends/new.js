import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      console.log('+- save action in friends new controller');

      return true;
    },
    cancel() {
      console.log('+- cancel action in friends new controller');

      return true;

    }
  }
});
