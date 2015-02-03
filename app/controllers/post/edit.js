import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    editPost: function(post) {
        post.save().then(function(){
          that.transitionToRoute('post');
        });
      }
    }

});
