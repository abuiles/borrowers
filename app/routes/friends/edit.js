import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      model.rollback();
    }
  }
});
