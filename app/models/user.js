import DS from 'ember-data';

export default DS.Model.extend({
  nodes: DS.hasMany('node'),

  email: DS.attr('string'),
  hash: DS.attr('string')
});
