import Ember from 'ember';

export function momentDate([date]) {
  return date ? moment(date).format('llll') : '';
}

export default Ember.Helper.helper(momentDate);
