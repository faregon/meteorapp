/**
 * Created by D'oh on 4/22/16.
 */
import { Template } from 'meteor/templating';

import './task.js';
import { Tasks } from '../api/tasks.js';
import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    }
});
Template.body.events({
    'submit .new-task'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const target = event.target;
        const text = target.text.value;

        // Insert a task into the collection
        Tasks.insert({
            text,
            createdAt: new Date() });

        // Clear form
        // current time
        target.text.value = '';
    }
});

//# sourceMappingURL=body-compiled.js.map