import Route from '@ember/routing/route';

export default class CardsRoute extends Route {
  model() {
    return this.store.findAll('card');
  }
}
