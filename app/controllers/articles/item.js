import Ember from 'ember';

export default Ember.ObjectController.extend({
  states: ['borrowed', 'returned'],
  autoSave: function() {
    this.send('save', this.get('model'));
  },
  isDirtyChanged: function() {
    if (this.get('isDirty') && !this.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }.on('init').observes('isDirty')
});
