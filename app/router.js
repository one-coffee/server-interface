import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {resetNamespace: true, path: '/'});
  this.route('skeleton', {resetNamespace: true, path: '/skeleton'});
  this.route('node', {path: '/node/:node_id'}, function() {
    this.route('logs', {path: '/logs'});
  });
  this.route('login');
  this.route('nodes', function() {});
});

export default Router;
