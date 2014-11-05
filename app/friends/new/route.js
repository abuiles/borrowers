import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },
  deactivate: function() {
    // We grab the model loaded in this route
    //
    var model = this.modelFor('friends/new');

    // If we are leaving the Route we verify if the model was let on
    // 'isNew' state, meaning it wasn't saved to the backend.
    //
    if (model.get('isNew')) {

      // We call #destroyRecord() which removes it from the store
      //
      model.destroyRecord();
    }
  }
});
