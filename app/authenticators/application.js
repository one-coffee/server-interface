import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
const { RSVP, run } = Ember;
const { service } = Ember.inject;

export default Base.extend({
  session: service(),
  store: service(),

  restore(data) {
    return RSVP.Promise.resolve(data);
  },

  authenticate(email, password) {
    const store = this.get('store');
    return new RSVP.Promise(resolve => {
      const url = "http://localhost:4000/api/users/login";
      Ember.$.ajax({url: url, type: 'POST', data: {email: email, password: password}}).success(data => {
        store.pushPayload(data);
        run(() => resolve({token: data.user.hash, userId: data.user.id}));
      });
    });
  },

  invalidate() {
    return RSVP.Promise.resolve();
  }
});
