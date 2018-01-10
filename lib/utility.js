/*
 * *******************************************************
 * Copyright VMware, Inc. 2016.  All Rights Reserved.
 * SPDX-License-Identifier: MIT
 * *******************************************************
 *
 * DISCLAIMER. THIS PROGRAM IS PROVIDED TO YOU "AS IS" WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, WHETHER ORAL OR WRITTEN,
 * EXPRESS OR IMPLIED. THE AUTHOR SPECIFICALLY DISCLAIMS ANY IMPLIED
 * WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
 * NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE.
 */
var unirest = require('unirest');

/*
 * This is a helper function to return a new promise wrapped with a unirest
 * request. The purpose is to cut down on the creation of promise and unirest
 * code in the various other modules that do almost the same thing in every
 * function.
 */
function p(path, method, data) {
  var Request;

  switch (method.toLowerCase()) {
    case 'get':
        Request = unirest.get(global.host + path);
        break;
    case 'post':
        Request = unirest.post(global.host + path);
        if (undefined !== data && null !== data) {
          Request.send(JSON.stringify(data));
        }
        break;
    case 'put':
        Request = unirest.post(global.host + path);
        if (undefined !== data && null !== data) {
          Request.send(JSON.stringify(data));
        }
    case 'patch':
        Request = unirest.patch(global.host + path);
        if (undefined !== data && null !== data) {
          Request.send(data);
        }
        break;
    case 'delete':
        Request = unirest.delete(global.host + path);
        break;
  }
  // define the 3 headers. Cookie is required to pass in the API session id.
  // Accept and Content-Type are auto set to application/json These can be
  // overiden by passing in headers to define these values in the headers
  var mediaTypes = {'Cookie': 'vmware-api-session-id=' + global.sessionId, 'Accept': 'application/json', 'Content-Type': 'application/json'};

  return new Promise(function(resolve, reject) {
    Request.headers(mediaTypes).strictSSL(global.ssl).end(resp => {
      if (resp.code >= 200 && resp.code <= 299) {
        resolve(resp);
      } else {
        reject(resp);
      }
    });
  })
}
exports.p = p