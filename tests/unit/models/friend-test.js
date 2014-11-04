import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Friend', {
  needs: ['model:article']
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
});

test('fullName concats first and last name', function() {
  var model = this.subject({firstName: 'Syd', lastName: 'Barrett'});

  equal(model.get('fullName'), 'Syd Barrett');

  Ember.run(function() {
    model.set('firstName', 'Geddy');
  });

  equal(model.get('fullName'), 'Geddy Barrett', 'Updates fullName');
});

test('articles relationship', function() {
  var klass  = this.subject({}).constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  equal(relationship.key, 'articles');
  equal(relationship.kind, 'hasMany');
});
