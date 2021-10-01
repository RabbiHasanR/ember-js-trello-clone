import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class NewListFormComponent extends Component {
  @tracked list = '';
  @tracked title = '';
  @action save(ev) {
    ev.preventDefault();
    this.args.onSubmit(this.list, this.title);
    this.list = '';
    this.title = '';
  }
}
