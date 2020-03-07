
import {
    Event,
    LambdaContext,
    LambdaCallback
  } from './lambda@Edge';

  // modify cache key
  export const handler = (event: Event, context: LambdaContext, callback: LambdaCallback) => {
    event.Records[0].cf.request.headers['x-random'] = [{key: 'X-Random', value: Math.round(Math.random()) }];
  };
