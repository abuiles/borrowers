import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BorrowersENV.locationType
});

Router.map(function() {
  this.resource('friends', function(){
    this.route('new');
    this.route('show', { path: ':friend_id' });
    this.route('edit', { path: ':friend_id/edit' });
  });

});

export default Router;
