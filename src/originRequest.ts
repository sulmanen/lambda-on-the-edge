import {
    Event,
    LambdaContext,
    LambdaRequestCallback
  } from './lambda@Edge';

  // modify cache key
  export const handler = (event: Event, context: LambdaContext, callback: LambdaRequestCallback) => {
    event.Records[0].cf.request.headers.push({'x-random': {key: 'X-Random', value: Math.round(Math.random())}});
  };
