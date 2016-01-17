import Ember from 'ember';

export function shorten([text = '', limit = 32, force = false]) {
  if (force) {
    return text.substring(0, limit) + (text.length > 32 ? '...' : '');
  } else {
    return S(text).truncate(limit).s;
  }
}

export default Ember.Helper.helper(shorten);
