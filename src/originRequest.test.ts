
import { Event } from './lambda@Edge';
import { handler } from './viewerRequest';
import event from './request.json';
import { CloudFrontRequest } from './lambda@EdgeRequest';

const e: Event = event as Event;
e.Records[0].cf.request.headers['X-AB'] = [{ value: '0' }];

test('origin request /a if X-AB header 0', done => {

    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const [ abHeader ] = request.headers['X-AB'];

        expect(request.uri).toBe('/a');
        expect(abHeader).toBeDefined();
        expect(abHeader.value).toBe('0');
        done();
    });
});