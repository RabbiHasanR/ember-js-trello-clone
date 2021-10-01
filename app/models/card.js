import Model, { attr } from '@ember-data/model';

export default class CardModel extends Model {
  @attr() title;
  @attr() list;
}
