import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editPost: function() {
        var body = this.get(body);
        var title = this.get(title);
        if (!body) {
          return;
        }
        var that = this;
        var post = this.store.createRecord('post', {body: body, title: title});
        this.set('postBody', '');
        this.set('postTitle', '');
        post.save().then(function(){
          that.transitionToRoute('posts');
        });
      }

    }

});
