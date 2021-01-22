
import { Event } from './lambda@Edge';
import { handler } from './originRequest';
import event from '../fakes/request.json';
import { CloudFrontRequest } from './lambda@EdgeRequest';

const e: Event = event as Event;

test('origin request /a if X-AB header 0', done => {
    e.Records[0].cf.request.headers['X-AB'] = [{ value: '0' }];

    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const [ abHeader ] = request.headers['X-AB'];

        expect(request.uri).toBe('/a');
        expect(abHeader).toBeDefined();
        expect(abHeader.value).toBe('0');
        done();
    });
});

test('origin request /a if x-ab header 0', done => {
    e.Records[0].cf.request.headers['x-ab'] = [{ value: '0' }];

    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const [ abHeader ] = request.headers['x-ab'];

        expect(request.uri).toBe('/a');
        expect(abHeader).toBeDefined();
        expect(abHeader.value).toBe('0');
        done();
    });
});

test('origin request /a if X-AB header 1', done => {
    e.Records[0].cf.request.headers['X-AB'] = [{ value: '1' }];

    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const [ abHeader ] = request.headers['X-AB'];

        expect(request.uri).toBe('/b');
        expect(abHeader).toBeDefined();
        expect(abHeader.value).toBe('1');
        done();
    });
});

test('origin request /a if x-ab header 1', done => {
    e.Records[0].cf.request.headers['x-ab'] = [{ value: '1' }];

    handler(e, null, (e: Error | null, request: CloudFrontRequest) => {
        const [ abHeader ] = request.headers['x-ab'];

        expect(request.uri).toBe('/b');
        expect(abHeader).toBeDefined();
        expect(abHeader.value).toBe('1');
        done();
    });
});
