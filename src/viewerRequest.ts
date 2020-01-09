import {
  Event,
  LambdaContext,
  LambdaCallback,
} from './lambda@Edge';

import { CloudFrontResponse } from './lambda@EdgeResponse';

/*
  Incoming user id. Divide users into two groups by hashing user id and setting a new cookie.
*/
export const handler = (event: Event, context: LambdaContext, callback: LambdaCallback) => {
  const response: CloudFrontResponse = {
    status: 200
  };

  callback(null, response);
};
