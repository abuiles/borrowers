import Ember from 'ember';
import startApp from '../../helpers/start-app';
import Pretender from 'pretender';

var App;
var server;

module('Acceptance: FriendsNew', {
  setup: function() {
    App = startApp();

    server = new Pretender(function(){
      var all =  JSON.stringify({
        friends: []
      });

      this.post('/api/v4/friends', function(request) {
        var friend = {};

        return [422, {"Content-Type": "application/json"}, friend];
      });
    });
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Creating a new friends', function() {
  visit('/friends/new');
  click('a[href="/friends/new"]');
  andThen(function() {
    equal(currentPath(), 'friends.new');
  });
  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Foo');
  fillIn('input[placeholder="email"]', 'j@cash.com');
  fillIn('input[placeholder="twitter"]', 'jcash');
  click('input[value="Save"]');

  //
  // Clicking save will fire an async event
  // We can use andThen which will called once the promises above
  // have been resolved
  //

  andThen(function() {
    equal(find('.error-message').text(), 'Friend was not saved', 'shows error');
    // equal(
    //   currentRouteName(),
    //   'friends.show.index',
    //   'Redirects to friends.show after create'
    // );
  });

});

// test('Clicking save without filling fields', function() {
//   visit('/friends/new');
//   click('input[value="Save"]');
//   andThen(function() {
//     equal(
//       currentRouteName(),
//       'friends.new',
//       'Stays on new page'
//     );
//     equal(
//       find("h2:contains(You have to fill all the fields)").length,
//       1,
//       "Displays error message"
//     );
//   });

// });
