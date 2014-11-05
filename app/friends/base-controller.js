import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasEmail:     Ember.computed.notEmpty('email'),
  hasFirstName: Ember.computed.notEmpty('firstName'),
  hasLastName:  Ember.computed.notEmpty('lastName'),
  hasTwitter:   Ember.computed.notEmpty('twitter'),
  isValid:      Ember.computed.and('hasEmail', 'hasFirstName', 'hasLastName', 'hasTwitter'),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');

        return false;
      }
    },
    cancel: function() {
      return true;
    }
  }
});
