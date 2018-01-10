
 // This file contains required configuration parameters used in f5 templates.
module.exports = {
  //vCenter parameters
  host: 'https://10.146.1.18', //No default! Please provide a valid host URL.
  username: 'greg@vsphere.local', //username. No default! Please provide a value.
  password: 'P@ss1word', // password. No default! Please provide a value.
  datacenter: 'Seattle', // the name of the datacenter in which to provision vm
  datastore: 'Tintri', // the name of a datastore used to build vm
  contentlibName: 'tintri', // content library which contains big-ip ovf to deploy
  contentlibItem: 'BIGIP-13.0.0.3.0.1679.ALL-ide', //name of template in content library used to deploy big-ip
  managementNetwork: 'syseng_admin', // vCenter network name used for managment interface ***Note: network is required to have internet access
  internalNetwork: 'Trunk Mode', // vCenter network name used for internal Big-IP interface. Network contains internal/application traffic or route to internal application traffic.
  externalNetwork: 'Trunk Mode', // vCenter network name used for external Big-Ip interface. Network contains external traffic or route to external traffic.
  haNetwork: 'Trunk Mode', // vCenter network used for HA
  resourcePool: 'SDK Test Pool', // Resource pool used for this vm - Resources is default
  vmName: 'bigip-demo-13-22', // a name of a VM and hostname of big-ip
  ssl: false, // use strict ssl or not.. false allows you to accept all certs.
              // NOTE: SSL should be set to true in a production environment.

  // Big-ip Specific information
  vmIpAddress: '10.146.1.105', // ip address used to manage big-ip
  vmIpPrefix: '24', // mgmt subnet prefix
  vmGwAddress: '10.146.1.254', // management gw address
  extIpAddress: '10.133.84.5', // Big-Ip selfip (non-floating) used on external network
  extPrefix: '24', // external subnet prefix
  extGw: '10.133.84.254', // default gateway for tmm traffic
  extVlan: '1084', // VLAN for external subnet
  intIpAddress: '10.133.85.5', // Big-Ip selfip (non-floating) used on internal network
  intPrefix: '24', // prefix for internal subnet
  intVlan: '1085', // VLAN for internal subnet
  haIpAddress: '10.133.40.5', // Big-Ip selfip (non-floating) used on ha network
  haPrefix: '24',
  haVlan: '1040',
  vmFqdn: 'testing.local',
  ntp: 'pool.ntp.org',
  timezone: 'US/Pacific',
  dnsAddresses: '10.122.70.15 192.168.10.1',
  lickey1: 'HUSMU-GDJUI-HMUYW-LZMQU-UNOBINT',
}
