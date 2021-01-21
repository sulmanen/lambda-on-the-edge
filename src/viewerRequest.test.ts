
import { Event } from './lambda@Edge';
import { handler } from './viewerRequest';
import event from './request.json';
import { CloudFrontRequest } from './lambda@EdgeRequest';
import { getCookie } from './getCookie';

const e: Event = event as Event;

test('handler with cookie', done => {
    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const abHeader = request.headers['X-AB'];
        const { userId } = getCookie(request.headers.cookie[0].value);

        expect(userId).toBeDefined()
        expect(abHeader).toBeDefined();
        expect(abHeader[0].value).toBe('0');
        done();
    });
});

test('handler no cookie', done => {
    delete e.Records[0].cf.request.headers.cookie;

    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const abHeader = request.headers['X-AB'];

        expect(request.headers.cookie).not.toBeDefined()
        expect(abHeader).toBeDefined();
        expect(abHeader[0].value === '1' || abHeader[0].value === '0').toBe(true);
        done();
    });
});