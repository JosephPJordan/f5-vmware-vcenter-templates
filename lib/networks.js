var unirest = require('unirest')
var util = require('./utility');
var apiPath = '/rest/vcenter/network';

/*
 * This function will make a GET request to the apiPath returning the
 * list of network items.
 */
function list() {
  return util.p(apiPath, 'get');
}
/*
 * This function will make a GET request to the apiPath returning the
 * specific items that match the passed in filter criteria.
 */
function find(filter) {
  return util.p(apiPath + '?' + filter, 'get');
}
exports.list = list;
exports.find = find;