import { Template } from 'meteor/templating';

import './main.html';

Template.demo.onRendered(function helloOnCreated() {
  AnimatedHeadlines();
});