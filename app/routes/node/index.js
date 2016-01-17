import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(node){
    this.set('logs', this.store.query('log', {'node': node.get('id')}));
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('logs', this.get('logs'));
  }
});
