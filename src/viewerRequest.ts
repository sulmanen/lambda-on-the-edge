import crypto from 'crypto';
import { getCookie } from './getCookie';

import {
  Event,
  LambdaContext,
  LambdaRequestCallback,
} from './lambda@Edge';

const split = (userId: string) => {
  const hash = crypto.createHash('sha256').update(userId).digest('hex');
  return parseInt(hash.charAt(0), 16) % 2;
}

export const handler = (event: Event, context: LambdaContext | null, callback: LambdaRequestCallback) => {
  const { request } = event.Records[0].cf;

  if (request.headers.cookie) {
    const { userId } = getCookie(request.headers.cookie[0].value);
    request.headers['X-AB'] = [
      { value: split(userId).toString() },
    ];
  } else {
    request.headers['X-AB'] = [
      { value: (Math.floor(Math.random() * Math.floor(2))).toString() },
    ];
  }


  callback(null, request);
};
