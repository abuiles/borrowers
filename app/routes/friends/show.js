import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(friend) {
      friend.destroyRecord().then(() => {
        this.transitionTo('friends.index');
      });
    }
  }
});
