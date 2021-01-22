
import { Event } from './lambda@Edge';
import { handler } from './originResponse';
import event from '../fakes/response.json';
import { CloudFrontResponse } from './lambda@EdgeResponse';


test('handle response status 404 as 302', done => {
    const errorEvent: Event = {...event as Event};
    if (errorEvent.Records[0].cf.response) {
        errorEvent.Records[0].cf.response.status = 404;
    }

    handler(errorEvent, null, (e: Error | null, response: CloudFrontResponse) => {
        expect(response.status).toBe(302)
        expect(response.headers.location[0].value).toBe('/');
        done();
    });

    if (errorEvent.Records[0].cf.response) {
        errorEvent.Records[0].cf.response.status = 200;
    }
});

test('handle response status 200 as pass through', done => {
    const okEvent: Event = {...event as Event};
    expect(okEvent.Records[0].cf.response?.status).toBe(200);
    handler(okEvent, null, (e: Error | null, response: CloudFrontResponse) => {
        expect(response.status).toBe(200)
        done();
    });
});