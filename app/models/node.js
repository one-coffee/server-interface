import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),

  hash: DS.attr('string'),
  name: DS.attr('string'),
  createdAt: DS.attr('date')
});
