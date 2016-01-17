import Ember from 'ember';
import Session from 'ember-simple-auth/services/session';
const { computed } = Ember;
const { service } = Ember.inject;

export default Session.extend({
  store: service(),
  user: computed('session.authenticated.userId', function() {
    const userId = this.get('session.authenticated.userId');
    return userId ? this.get('store').findRecord('user', userId) : null;
  })
});
