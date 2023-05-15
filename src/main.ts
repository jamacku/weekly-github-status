#! /usr/bin/env node

import { request } from '@octokit/request';

// TODO: take argument username from command line
// TODO: take argument weeks number e.g. it would generate report for multiple weeks
// TODO: loop through all pages until results are older then 1 week
// TODO: filter results: only opened issues, reviews and releases

const result = await request('GET /users/{username}/events', {
  headers: {
    accept: 'application/vnd.github+json',
  },
  username: 'jamacku',
});

console.log(`${JSON.stringify(result.data, null, 2)}`);
