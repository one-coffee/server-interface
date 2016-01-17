import Ember from 'ember';
const { sort } = Ember.computed;

export default Ember.Controller.extend({
  sortedLogs: sort('logs', (a, b) => parseInt(a.get('id')) < parseInt(b.get('id')) ? 1 : -1)
});
