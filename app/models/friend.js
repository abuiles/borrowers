import DS from 'ember-data';
import Ember from 'ember';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
  articles:      DS.hasMany('articles', {async: true}),
  email:         DS.attr('string'),
  firstName:     DS.attr('string'),
  lastName:      DS.attr('string'),
  totalArticles: DS.attr('number'),
  twitter:       DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
