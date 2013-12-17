// import the module
var mdns = require('mdns2');

var opts = {
  name: "NodeOS"
};

// advertise wssh service
var ad = mdns.createAdvertisement(mdns.tcp('wssh'), 36, opts);

ad.start();
