import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Articles = new Mongo.Collection('articles');

Meteor.methods({
	'articles.get.all'(){
        return Articles.find();
    },
    'articles.insert'(articleModel){
        check(articleModel.title, String);
        check(articleModel.headline, String);
        check(articleModel.body, String);

        //if( !Meteor.userId()){
        //    throw new Meteor.Error('not-authorized');
        //}

        console.log(articleModel);
        Articles.insert({
            title: articleModel.title,
            headline: articleModel.headline,
            body: articleModel.headline,
            createdAt: new Date()
            //owner: Meteor.userId(),
            //username: Meteor.user().username
        });
    },
    'articles.remove'(taskId){
        check(taskId, String);

        const task = Articles.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }

        Articles.remove(taskId);
    },
    'articles.update'(taskId, setChecked){
        check(taskId, String);
        check(setChecked, Boolean);

        const task = Articles.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can check it off
            throw new Meteor.Error('not-authorized');
        }

        Articles.update(taskId, { $set: { checked: setChecked } });
    },
});


