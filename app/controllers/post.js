import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deletePost: function (post) {
      var that = this;
      if (window.confirm("Are you sure you want to delete this blog post?")){
        post.deleteRecord();
        post.save();
        that.transitionToRoute('posts');
      }
    }
  }

});
