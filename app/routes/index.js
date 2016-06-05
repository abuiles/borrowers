import Ember from 'ember';
import request from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  model()  {
    return request(config.host+'/api/v4/friends').then(function(data) {
      return {
        friendsCount: data.friends.length
      };
    });
  }
});
