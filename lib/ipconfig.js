import os from 'os';

function getIPAddress() {
  const networkInterfaces = os.networkInterfaces();
  // it is only works on wifi add ethernet and global later
  const wifiInterface = networkInterfaces['Wi-Fi'];
  if (!wifiInterface) {
    return 'Wi-Fi interface not found or no IPv4 address available';
  }

  const ipv4Address = wifiInterface.find(detail => detail.family === 'IPv4');

  if (!ipv4Address) {
    return 'No IPv4 address found for Wi-Fi interface';
  }

  return ipv4Address.address;
};

export default getIPAddress


