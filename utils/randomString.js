const crypto = require('crypto');

/**
 * Generates a random string using the crypto module in Node.js
 * @returns {string} a random string of 28 hexadecimal characters
 */
function randomString() {
  return crypto.randomBytes(28).toString('hex');
}

module.exports = { randomString };