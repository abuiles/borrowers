import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('article', 'Article', {
  needs: ['model:friend']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
