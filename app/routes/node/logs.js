import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  model(params) {
    params.node = this.modelFor('node').get('id');
    params.order = '-id';
    params.paramMapping = {
      page: "page",
      perPage: "perPage",
      total_pages: "totalPageCount"
    };
    return this.findPaged('log', params);
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('node', this.modelFor('node'));
  }
});
