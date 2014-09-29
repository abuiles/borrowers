import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasDescription: Ember.computed.notEmpty('description'),
  isValid: Ember.computed.and('hasDescription'),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');

        return false;
      }
    }
  }
});
