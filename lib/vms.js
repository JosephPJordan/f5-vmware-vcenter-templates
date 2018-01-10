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
var unirest = require('unirest')
var util = require('./utility');
var apiPath = '/rest/vcenter/vm';

function list( uri) {
  return util.p( apiPath + uri, 'get');
}

function details( vm) {
  return util.p( apiPath + '/' + vm, 'get');
}

function find( filter) {
  return util.p( apiPath + '?' + filter, 'get');
}

function createDefaults( guestOS, datastore, folder, resourcePool) {
  data = {
    "spec": {
        "guest_OS": guestOS,
        "placement" : {
            "datastore": datastore,
            "folder": folder,
            "resource_pool": resourcePool
        },
        "cdroms": [
            {
                "allow_guest_control": true,
                "backing": {
                    "device_access_type": "EMULATION",
                    "iso_file": "string",
                    "type": "ISO_FILE"
                },
                "ide": {
                    "master": true,
                    "primary": true
                },
                "sata": {
                    "bus": 1,
                    "unit": 1
                },
                "start_connected": true,
                "type": "IDE"
            },
        ],
    }
  };

  return util.p( apiPath, 'post', data);
}

function del( vm) {
  return util.p( apiPath + '/' + vm, 'delete');
}

function createDetails( details) {
  return util.p( apiPath, 'post', details);
}

function powerOn( vm) {
  return util.p( apiPath + '/' + vm + '/power/start', 'post');
}

function powerOff( vm) {
  return util.p( apiPath + '/' + vm + '/power/stop', 'post');
}

exports.list = list
exports.details = details
exports.find = find
exports.createWithDefaults = createDefaults
exports.createWithDetails = createDetails
exports.powerOn = powerOn;
exports.powerOff = powerOff;
exports.delete = del;