import Component from '@glimmer/component';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class EditCardFormComponent extends Component {
    @tracked list = this.args.list;
    @tracked title = this.args.title;
    @action save(ev){
        ev.preventDefault();
        console.log('edit card form:',this.list, this.title)
        this.args.onSubmit(this.list, this.title);
    }
}
