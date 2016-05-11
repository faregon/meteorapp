import { Template } from 'meteor/templating';
import { Articles } from '../../../imports/api/articles.js';

//import './body.html';

Template.crudContentForm.events({
    'submit form' (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target
        const title = target.title.value;
        const headline = target.headline.value;
        const body = target.article.value;
        
        //logging values
        console.log(title);
        console.log(headline);
        console.log(body);
        
        // Insert a task into the collection
        Meteor.call('articles.insert', {title: title, headline: headline, body: body});

        // Clear form
        target.title.value = '';
        target.headline.value = '';
        target.article.value = '';
    },
});