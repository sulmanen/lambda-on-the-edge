
import { Event } from '../src/lambda@Edge';
import { handler } from '../src/viewerResponse';
import event from './fakes/response.json';
import { CloudFrontResponse } from '../src/lambda@EdgeResponse';

const okEvent: Event = event as Event;

test('handle there is an additional x-look-ma-random-number', done => {
    handler(okEvent, null, (e: Error | null, response: CloudFrontResponse) => {
        expect(response.status).toBe(200)
        expect(response.headers['x-look-ma-random-number'][0].value).toBeDefined();
        done();
    });
});
