// This snippet file was generated by processing the source file:
// ./auth-next/apple.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_apple_nonce_node_modular]
const crypto = require("crypto");
const string_decoder = require("string_decoder");

// Generate a new random string for each sign-in
const generateNonce = (length) => {
  const decoder = new string_decoder.StringDecoder("ascii");
  const buf = Buffer.alloc(length);
  let nonce = "";
  while (nonce.length < length) {
    crypto.randomFillSync(buf);
    nonce = decoder.write(buf);
  }
  return nonce.substr(0, length);
};

const unhashedNonce = generateNonce(10);

// SHA256-hashed nonce in hex
const hashedNonceHex = crypto.createHash('sha256')
  .update(unhashedNonce).digest().toString('hex');
// [END auth_apple_nonce_node_modular]