import EmberRouter from '@ember/routing/router';
import config from 'trello-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cards', function () {
    this.route('detail', { path: '/:cardId/detail' });
  });
});
