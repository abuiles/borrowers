import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('friends', function() {
    this.route('new');
    this.route('show', { path: ':friend_id' }, function() {
      this.resource('articles', function() {
        this.route('new');
      });
    });
    this.route('edit', { path: ':friend_id/edit' });
  });
});

export default Router;
