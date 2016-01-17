import Ember from 'ember';

export default Ember.Component.extend({
  collapsedNodes: false,
  actions: {
    toggleNodes() {
      this.toggleProperty('collapsedNodes');
    }
  }
});
