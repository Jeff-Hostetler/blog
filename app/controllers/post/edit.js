import Ember from 'ember';

export default Ember.ObjectController.extend({


  actions: {
    editPost: function(post) {
      var that = this;
        post.save().then(function(){
          that.transitionToRoute('post');
        });
      }
    }

});
