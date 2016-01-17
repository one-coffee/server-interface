import Ember from 'ember';

export function capitalize([string]) {
  return typeof string === 'string' ? string.capitalize() : '';
}

export default Ember.Helper.helper(capitalize);
