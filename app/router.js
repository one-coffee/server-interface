import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {resetNamespace: true, path: '/'});
  this.route('skeleton', {resetNamespace: true, path: '/skeleton'});
  this.route('node', function() {
    this.route('index', {path: '/:node_id'});
  });
});

export default Router;
