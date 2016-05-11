Template.contentModal.events({
  'click #save' (e) {
    e.preventDefault();
    var articleId = this._id;
    var article = {
      title: $('#contentTitle').val(), 
      headline: $('#contentHeadline').val(), 
      body: $('#contentArticle').val()
    }

    if (!articleId) {
      console.log('new item');
      Meteor.call('articles.insert', article, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    } else {
      console.log(articleId);
      console.log(article);
     // _.extend(animal, {id: _id});
      Meteor.call('articles.update', articleId, article, function(error, result) {
        if (error) {
          alert(error);
        }
      });
    }

    Modal.hide('contentModal');
  }
});

//Tutorial for modals 
//http://experimentsinmeteor.com/modal-dialogs-part-2/index.html
