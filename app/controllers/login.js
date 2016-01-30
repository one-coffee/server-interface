import Ember from 'ember';
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),

  email: 'hello@keo.tz',
  password: 'super-password',
  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:application', email, password).catch(reason => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
