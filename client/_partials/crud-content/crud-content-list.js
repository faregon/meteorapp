import { Template } from 'meteor/templating';
import { Articles } from '../../../imports/api/articles.js';


Template.registerHelper("prettifyDate", function(timestamp) {
    if(timestamp){
        return new Date(timestamp).toLocaleDateString("da-DK");
    }
  
});


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

    'click .edit'(event) {
    	event.preventDefault();
    	//opening the modal 
    	//to pass values to the modal one way is to save the variable to session variables. 
    	//in this case I nstalled the package https://github.com/PeppeL-G/bootstrap-3-modal
    	//the package allows among others pass the variables from the caller to called objects. 
    	//another advantage is that the module allows to move modal templates to seperate modal files. 
    	
	   	//$('#contentModal').modal('show');
	   	console.log(this);
    	Modal.show('contentModal', this);
    },
    'click .new-content'(event) {
        event.preventDefault();
        Modal.show('contentModal');
    },
});

//Tutorial for modals 
//http://experimentsinmeteor.com/modal-dialogs-part-2/index.html
