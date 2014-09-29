import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasDescription: Ember.computed.notEmpty('description'),
  hasNotes: Ember.computed.notEmpty('notes'),
  isValid: Ember.computed.and('hasDescription', 'hasNotes'),
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
