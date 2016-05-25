import { Template } from 'meteor/templating';
//import { Articles } from '../../../imports/api/articles.js';
//import { Users } from '../../../imports/api/users.js';

//import './body.html';

Template.crudUsersForm.events({
    'submit form'(event, template) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        let name = template.find("[name='name']").value,
            email = template.find("[name='email']").value,
            password = template.find("[name='password']").value;

        //logging values
        console.log(name);
        console.log(email);
        console.log(password);

        // Insert a task into the collection
        //Meteor.call('users.insert', {name: name, email: email, password: password}, function (error) {
        //    if (error) {
        //        console.log(error.reason);
        //    }
        //});

        Accounts.createUser({ name: name, email: email, password: password }, error => {
            if (error) {
                console.log(error.reason);
            }
        });

        // Clear form
        //template.name.value = '';
        //template.email.value = '';
        //template.password.value = '';
    }
});

//# sourceMappingURL=crudUsersForm-compiled.js.map