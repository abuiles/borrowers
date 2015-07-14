import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('friends.show', this.get('model'));

      return false;
    }
  }
});
