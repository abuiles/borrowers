import Ember from 'ember';

export default Ember.ObjectController.extend({
  isValid: Ember.computed(
    'email',
    'firstName',
    'lastName',
    'twitter',
    function() {
      return !Ember.isEmpty(this.get('email')) &&
        !Ember.isEmpty(this.get('firstName')) &&
        !Ember.isEmpty(this.get('lastName')) &&
        !Ember.isEmpty(this.get('twitter'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel: function() {
      return true;
    }
  }
});
