import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({
  authorize(data, cb) {
    if (data.token) {
      return cb('Authorization', 'Bearer ' + data.token);
    }
  }
});
