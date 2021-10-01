import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class NewCardFormComponent extends Component {
  @tracked showForm = false;
  @tracked title = '';

  @action toggleForm() {
    this.showForm = true;
  }

  @action save(ev) {
    ev.preventDefault();
    this.args.onSubmit(this.args.list, this.title);
    this.title = '';
    this.showForm = false;
  }
}
