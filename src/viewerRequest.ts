import {
  Event,
  LambdaContext,
  LambdaCallback
} from './lambda@Edge';

// split users into a/b groups for test color
export const handler = (event: Event, context: LambdaContext, callback: LambdaCallback) => {
  event.Record[0].cf.request.headers.push({'x-random': {key: 'X-Random', value: Math.round(Math.random())}});
};
