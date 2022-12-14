#!/usr/bin/env node

/* fetched from https://github.com/nickmerwin/node-coveralls/blob/master/bin/coveralls.js */

'use strict';

import { handleInput } from '..';

process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';

process.stdin.on('data', chunk => {
  input += chunk;
});

process.stdin.on('end', () => {
  handleInput(input, err => {
    if (err) {
      throw err;
    }
  });
});