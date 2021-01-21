import {
    Event,
    LambdaContext,
    LambdaRequestCallback
  } from './lambda@Edge';

  export const handler = (event: Event, context: LambdaContext, callback: LambdaRequestCallback) => {
    const { request } = event.Records[0].cf;
    const abHeader = request.headers['X-AB'] || request.headers['x-ab'];
    if (abHeader) {
      const [ firstHeader ] = abHeader;

      if (firstHeader.value === '1') {
        request.uri = '/b';
      }

      if (firstHeader.value === '0') {
        request.uri = '/a';
      }
    }
    callback(null, request);
  };
