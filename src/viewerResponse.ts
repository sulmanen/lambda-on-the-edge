import {
    Event,
    LambdaContext,
    LambdaResponseCallback
} from './lambda@Edge';

export const handler = (event: Event, context: LambdaContext, callback: LambdaResponseCallback) => {
  event.Records[0].cf.request.headers['x-random'] = [{key: 'X-Random', value: Math.round(Math.random()) }];
};
