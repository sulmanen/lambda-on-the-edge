import { CloudFrontRequest } from './lambda@EdgeRequest';
import { CloudFrontResponse } from './lambda@EdgeResponse';

export type LambdaResponseCallback = (e: Error | null, response: CloudFrontResponse) => void;

export type LambdaRequestCallback = (e: Error | null, response: CloudFrontRequest) => void;

export interface AmazonCognitoIdentity {
  cognitoIdentityId: string;
  cognitoIdentityPoolId: string;
}

export interface Client {
  installation_id: string;
  app_title: string;
  app_version_name: string;
  app_version_code: string;
  app_package_name: string;
}

export interface Environment {
  platform_version: string;
  platform: string;
  make: string;
  model: string;
  locale: string;
}

export interface ClientContext {
  client: Client;
  env: Environment;
}

export type MemoryLimitInMB = '128' | '3008';

// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
export interface LambdaContext {
  getRemainingTimeInMillis: () => number;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: MemoryLimitInMB;
  awsRequestId: string;
  logGroupName: string;
  logStreamName: string;
  identity?: AmazonCognitoIdentity;
  clientContext?: ClientContext;
  callbackWaitsForEmptyEventLoop: boolean;
}

export interface Event {
  Records: LambdaRecord[];
}

export interface LambdaRecord {
  cf: CloudFrontRecord;
}

export type LambdaAtEdgeEventType = 'viewer-request' | 'origin-request' | 'viewer-response' | 'origin-response'

export interface CloudFrontRecordConfig {
  distributionDomainName: string;
  distributionId: string;
  eventType: LambdaAtEdgeEventType;
  requestId: string;
}

export interface CloudFrontRecord {
  config: CloudFrontRecordConfig;
  request: CloudFrontRequest;
  response?: CloudFrontResponse;
}

export interface Header {
  key: string;
  value: string;
}
