Template.usersModal.events({
    'click #save'(e) {
        e.preventDefault();
        var userId = this._id;
        var user = {
            name: $('#userName').val(),
            email: $('#userEmail').val(),
            password: $('#userPassword').val()
        };

        if (!userId) {
            console.log('new user');
            Meteor.call('users.insert', user, function (error, result) {
                if (error) {
                    alert(error);
                }
            });
        } else {
            console.log(userId);
            console.log(user);
            // _.extend(animal, {id: _id});
            Meteor.call('users.update', userId, user, function (error, result) {
                if (error) {
                    alert(error);
                }
            });
        }

        Modal.hide('usersModal');
    }
});

//Tutorial for modals
//http://experimentsinmeteor.com/modal-dialogs-part-2/index.html

//# sourceMappingURL=crudUsersModal-compiled.js.map