import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu/menu-top', 'Integration | Component | menu/menu top', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{menu/menu-top}}`);

  assert.equal(this.$().text().trim().replace(/\s+/g,''), 'Monitoringserverinterfacedsadsa');
});
