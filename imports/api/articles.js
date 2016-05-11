import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Articles = new Mongo.Collection('articles');

Meteor.methods({
    'articles.insert'(articleModel){
        check(articleModel.title, String);
        check(articleModel.headline, String);
        check(articleModel.body, String);

        if( !Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }

        console.log(articleModel);
        Articles.insert({
            title: articleModel.title,
            headline: articleModel.headline,
            body: articleModel.headline,
            createdAt: new Date(), 
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    'articles.remove'(articleId){
        check(articleId, String);

        const article = Articles.findOne(articleId);
        //if (article.private && article.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            //throw new Meteor.Error('not-authorized');
        //}

        Articles.remove(articleId);
    },
    'articles.update'(articleId, articleModel){
        check(articleId, String);
        check(articleModel.title, String);
        check(articleModel.headline, String);
        check(articleModel.body, String);

        if( !Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }

        articleModel.lastEdited = new Date();
        articleModel.lastEditedByUser = Meteor.user().username;

        const article = Articles.findOne(articleId);
        //if (article.private && article.owner !== this.userId) {
            // If the task is private, make sure only the owner can check it off
            //throw new Meteor.Error('not-authorized');
        //}

        Articles.update(articleId, { $set: articleModel });
    },
});


