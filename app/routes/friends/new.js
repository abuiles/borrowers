import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  activate() {
    console.log('----- activate hook called -----');
  },
  deactivate() {
    console.log('----- deactivate hook called -----');
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // We grab the model from the controller
      //
      var model = controller.get('model');

      // If we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the backend.
      //
      if (model.get('isNew')) {

        // We call DS#destroyRecord() which removes it from the store
        //
        model.destroyRecord();
      }
    }
  },
  actions: {
    save() {
      console.log('+-- save action bubbled up to friends new route');

      return true;
    },
    cancel() {
      console.log('+-- cancel action bubbled up to friends new route');

      return true;
    }
  }
});
