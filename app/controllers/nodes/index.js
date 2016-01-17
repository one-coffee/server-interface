import Ember from 'ember';
const { sort } = Ember.computed;

export default Ember.Controller.extend({
  sortedNodes: sort('model', 'name:asc'),
  actions: {
    open(node) {
      this.transitionToRoute('node', node);
    },
    createNewNode() {
      this.get('store').createRecord('node').save();
    }
  }
});
