import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class CardsDetailController extends Controller {
  @service router;
  @action update(list, title) {
    // this.model.setProperties(list, title);
    this.model.setProperties({ list, title });
    // console.log('detail controller:', list, title);
    // this.model.set('list', list);
    // this.model.set('title', title);
    this.model.save();
  }

  @action deleteCard() {
    this.model.destroyRecord().then(() => {
      this.router.transitionTo('cards');
    });
  }
}
