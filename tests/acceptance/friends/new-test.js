import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: FriendsNew', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /friends/new', function() {
  visit('/friends/new');

  andThen(function() {
    equal(currentPath(), 'friends.new');
  });
});

test('Creating a new friends', function() {
  visit('/');
  click('a[href="/friends/new"]');
  andThen(function() {
    equal(currentPath(), 'friends.new');
  });
  fillIn('input[placeholder="First Name"]', 'Johnny');
  fillIn('input[placeholder="Last Name"]', 'Cash');
  fillIn('input[placeholder="email"]', 'j@cash.com');
  fillIn('input[placeholder="twitter"]', 'jcash');
  click('input[value="Save"]');

  //
  // Clicking save will fire an async event
  // We can use andThen which will called once the promises above
  // have been resolved
  //

  andThen(function() {
    equal(
      currentRouteName(),
      'friends.show.index',
      'Redirects to friends.show after create'
    );
  });

});

test('Clicking save without filling fields', function() {
  visit('/friends/new');
  click('input[value="Save"]');
  andThen(function() {
    equal(
      currentRouteName(),
      'friends.new',
      'Stays on new page'
    );
    equal(
      find("h2:contains(You have to fill all the fields)").length,
      1,
      "Displays error message"
    );
  });

});
