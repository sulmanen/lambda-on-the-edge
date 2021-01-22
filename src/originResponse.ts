import {
    Event,
    LambdaContext,
    LambdaResponseCallback
  } from './lambda@Edge';

  export const handler = (event: Event, context: LambdaContext | null, callback: LambdaResponseCallback) => {
    const { response } = event.Records[0].cf;

    if (response) {
      if (response.status >= 400) { // you can modify the body only if origin returns error status
        response.status = 302;
        response.statusDescription = 'Found';

        response.body = '';
        response.headers.location = [{ key: 'Location', value: '/' }];
      }

      callback(null, response);
    }
  };
