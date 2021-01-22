import {
    Event,
    LambdaContext,
    LambdaResponseCallback
} from './lambda@Edge';

export const handler = (event: Event, context: LambdaContext | null, callback: LambdaResponseCallback) => {
  const { response } = event.Records[0].cf;
  if (response) {
    response.headers['x-look-ma-random-number'] = [{ key: 'x-look-ma-random-number', value: Math.round(Math.random()).toString() }];
    callback(null, response);
  }
};
