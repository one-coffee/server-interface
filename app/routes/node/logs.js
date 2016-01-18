import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const node = this.modelFor('node');
    return this.get('store').query('log', {node: node.get('id')});
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('node', this.modelFor('node'));
  }
});
