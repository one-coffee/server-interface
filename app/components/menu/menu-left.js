import Ember from 'ember';
const { computed } = Ember;
const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  store: service(),
  collapsedNodes: false,
  nodes: computed('session.isAuthenticated', function() {
    return this.get('session.isAuthenticated') ? this.get('store').findAll('node') : false;
  }),
  actions: {
    toggleNodes() {
      this.toggleProperty('collapsedNodes');
    }
  }
});
