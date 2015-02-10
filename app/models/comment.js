import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  title: DS.attr('string'),
  user_id: DS.attr('integer'),
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user')
});
