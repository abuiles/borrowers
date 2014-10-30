import Ember from 'ember';
import request from 'ic-ajax';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function()  {
    var host = config.host || '';

    return request(host + 'api/friends').then(function(data){
      return {
        friendsCount: data.friends.length
      };
    });
  }
});
