import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Meteor.methods({
    //'users.insert'(usersModel){
    //    check(usersModel.name, String);
    //    check(usersModel.email, String);
    //    check(usersModel.password, String);
    //
    //    if( !Meteor.userId()){
    //        throw new Meteor.Error('not-authorized');
    //    }
    //
    //    console.log(usersModel);
    //    Meteor.users.insert({
    //        name: usersModel.name.value,
    //        email: usersModel.email.value,
    //        password: usersModel.password.value,
    //        userId: Meteor.userId()
    //    });
    //
    //},
    'users.remove'(userId){
        check(userId, String);

        //const user = Meteor.users.findOne(userId);
        //if (article.private && article.owner !== this.userId) {
        // If the task is private, make sure only the owner can delete it
        //throw new Meteor.Error('not-authorized');
        //}

        Meteor.users.remove(userId);
    },
    'users.update'(userId, userModel){
        check(userId, String);
        check(userModel.name, String);
        check(userModel.email, String);
        check(userModel.password, String);

        if( !Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }

        //userModel.lastEdited = new Date();
        //userModel.lastEditedByUser = Meteor.user().username;

        //const user = Meteor.users.findOne(userId);
        //if (article.private && article.owner !== this.userId) {
        // If the task is private, make sure only the owner can check it off
        //throw new Meteor.Error('not-authorized');
        //}

        Meteor.users.update(userId, { $set: userModel });
    },
});

