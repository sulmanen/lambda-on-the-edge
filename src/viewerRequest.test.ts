import { handler } from './viewerRequest';
import { lambdaContextFake } from './lambdaContext.fake';
import event from './request.json';
import { CloudFrontResponse } from './lambda@EdgeResponse';

test('handler', done => {
    expect(handler(event, lambdaContextFake('MyViewerRequest', '128', true), (e: Error | null, response: CloudFrontResponse) => {
        expect(response.status).toEqual(200);
        done();
    }));
});