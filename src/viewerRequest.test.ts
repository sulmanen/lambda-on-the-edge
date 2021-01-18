
import { Event } from './lambda@Edge';
import { handler } from './viewerRequest';
import event from './request.json';
import { CloudFrontRequest } from './lambda@EdgeRequest';

const e: Event = event as Event;

test('handler', done => {
    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const abHeader = request.headers['X-AB'];

        expect(abHeader).toBeDefined();
        expect(abHeader).toBe(0);
        done();
    });
});