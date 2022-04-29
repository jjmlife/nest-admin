import * as Crypto from 'crypto-js';

const crypto_private_key = 'jm_nest_todo.com';

export const cryptoString = (str) => {
  return Crypto.HmacSHA1(str, crypto_private_key).toString();
};
