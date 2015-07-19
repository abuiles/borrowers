import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null,   // passed-in
  actions: {
    saveArticle() {
      this.sendAction('save', this.get('article'));
    }
  }
});
