import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class CardsController extends Controller {
  @service store;

  @action
  saveCard(list, title) {
    let card = this.store.createRecord('card', {
      list,
      title,
    });
    card.save();
  }

  @action
  updateCard(list, card) {
    card.set('list', list);
    card.save();
  }
}
