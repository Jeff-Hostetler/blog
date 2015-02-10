import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['term'],
  term: null,

  actions: {
    search: function () {

      var that = this;
      this.store.find('post', {q: this.get('term')}).then(function(posts) {
        that.set('model', posts)
      })

    }
  }

});
