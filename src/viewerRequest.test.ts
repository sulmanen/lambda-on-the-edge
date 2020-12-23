
import { Event } from './lambda@Edge';
import { handler } from './viewerRequest';
import { lambdaContextFake } from './lambdaContext.fake';
import event from './request.json';
import { CloudFrontResponse } from './lambda@EdgeResponse';

const e: Event = event as Event;

test('handler', done => {
    handler(e, lambdaContextFake('MyViewerRequest', '128', true), (e: Error | null, response: CloudFrontResponse) => {
        expect(response.status).toEqual(200);
        done();
    });
});