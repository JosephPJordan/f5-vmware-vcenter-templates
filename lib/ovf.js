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
var util = require('./utility');
var apiPath = '/rest/com/vmware/vcenter/ovf/library-item?~action='

function listOvfSettings() {
    data = {
        "ovf_library_item_id": "fe24eb73-35c3-4637-9bc0-3c37fd71c0c0",
            "target": {
                "resource_pool_id": "resgroup-21"
            }
    }
  return util.p( apiPath + 'filter', 'post', data);
}
function deployOvf( datastoreId, contentItemId, mgmtNet, intNet, extNet, haNet, resourcePool, vmname) {
    data = {
        "deployment_spec": {
            "accept_all_EULA": true,
            "default_datastore_id": datastoreId,
            "name": vmname,
            "network_mappings": [
                {
                    "key": "Internal",
                    "value": intNet
                },
                {
                    "key": "External",
                    "value": extNet
                },
                {
                    "key": "HA",
                    "value": haNet
                },
                {
                    "key": "Managment",
                    "value": mgmtNet
                }
            ],
        },
        "ovf_library_item_id": contentItemId,
        "target": {
            "resource_pool_id": resourcePool
        }
    }
  return util.p( apiPath + 'deploy', 'post', data);
}
exports.listOvfSettings = listOvfSettings
exports.deployOvf = deployOvf