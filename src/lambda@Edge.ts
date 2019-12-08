import { CloudFrontRequest } from './lambda@EdgeRequest';
import { CloudFrontResponse } from './lambda@EdgeResponse';

export interface LambdaRecord {
  cf: CloudFrontRecord;
}

export interface CloudFrontRecordConfig {
  distributionDomainName: string;
  distributionId: string;
  eventType: 'viewer-request' | 'origin-request' | 'viewer-response' | 'origin-response';
  requestId: string;
}

export interface CloudFrontRecord {
  config: CloudFrontRecordConfig;
  request: CloudFrontRequest;
  response: CloudFrontResponse;
}

export interface Header {
  key: string;
  value: string;
};
