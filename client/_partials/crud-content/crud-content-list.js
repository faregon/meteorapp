import { Template } from 'meteor/templating';
import { Articles } from '../../../imports/api/articles.js';


Template.crudContentList.helpers({

  articles() {

    return Articles.find({});

  },

});


Template.crudContentList.events({
    'click .remove'() {
    	console.log('remove clicked');
        Meteor.call('articles.remove', this._id);
    },
});