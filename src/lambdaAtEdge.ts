interface CloudFrontRecordConfig {
  distributionDomainName: string;
  distributionId: string;
  eventType: 'viewer-request' | 'origin-request';
  requestId: string;
}

interface CloudFrontRequestBody {

}

interface RequestHeaders {

}

interface RequestOrigin {

}

interface CloudFrontRequest {
  body: CloudFrontRequestBody;
  clientIp: string;
  querystring: string;
  uri: string;
  method: 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD';
  headers: RequestHeaders;
  origin: RequestOrigin;
}

interface CloudFrontRecord {
  config: CloudFrontRecordConfig;
  request: CloudFrontRequest;
}

interface Record {
  cf: CloudFrontRecord;
}
