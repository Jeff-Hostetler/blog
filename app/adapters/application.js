import DS from 'ember-data';
import ENV from '../config/environment';

console.log(ENV.adapterURL)

export default DS.ActiveModelAdapter.extend({
  host: ENV.adapterURL
});
