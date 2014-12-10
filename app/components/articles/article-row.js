import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  articleStates: ['borrowed', 'returned'],
  autoSave: function() {
    var article = this.get('article');
    if (!article.get('isNew')) {
      this.sendAction('save', article);
    }
  },
  isDirtyChanged: function() {
    var article = this.get('article');
    if (article.get('isDirty') && !article.get('isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }.on('init').observes('article.isDirty')
});
