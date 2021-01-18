import crypto from 'crypto';

import {
  Event,
  LambdaContext,
  LambdaRequestCallback,
} from './lambda@Edge';

const getCookie = (value: string): Record<string, string> => {
  const pairs = value.split('; ');
  const cookies: Record<string, string> = {};

  pairs.forEach((pair: string) => {
    const [ key, val ] = pair.split('=');
    cookies[key] = val;
  });

  return cookies;
}

const split = (userId: string) => {
  const hash = crypto.createHash('sha256').update(userId).digest('hex');
  return parseInt(hash.charAt(0), 16) % 2;
}

/*
  Incoming user id. Divide users into two groups by hashing user id and setting a new cookie.
*/
export const handler = (event: Event, context: LambdaContext | null, callback: LambdaRequestCallback) => {
  const { request } = event.Records[0].cf;
  const { userId } = getCookie(request.headers.cookie[0].value);

  request.headers['X-AB'] = split(userId);

  callback(null, request);
};
