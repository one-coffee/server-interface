import DS from 'ember-data';

export default DS.Model.extend({
  node: DS.belongsTo('node', {inverse: null}),

  severity: DS.attr('string'),
  message: DS.attr('string'),
  context: DS.attr('string'),
  clientCreatedAt: DS.attr('date'),
  createdAt: DS.attr('date')
});
