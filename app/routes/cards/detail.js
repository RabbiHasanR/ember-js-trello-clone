import Route from '@ember/routing/route';
import { inject as servie } from '@ember/service';
export default class CardsDetailRoute extends Route {
  @servie store;
  model(params) {
    return this.store.findRecord('card', params.cardId);
  }
}
