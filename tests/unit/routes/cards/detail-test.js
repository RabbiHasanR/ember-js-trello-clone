import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cards/detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cards/detail');
    assert.ok(route);
  });
});
