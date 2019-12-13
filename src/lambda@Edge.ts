import { CloudFrontRequest } from './lambda@EdgeRequest';
import { CloudFrontResponse } from './lambda@EdgeResponse';

type StringifyCompatible = string | object | number;

export type LambdaCallback = (e: Error, response: StringifyCompatible) => void;

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

// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
export interface LambdaContext {
  getRemainingTimeInMillis: () => number;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: string;
  awsRequestId: string;
  logGroupName: string;
  logStreamName: string;
  identity?: AmazonCognitoIdentity;
  clientContext: ClientContext;
  callbackWaitsForEmptyEventLoop: boolean;
}

export interface Event {
  Record: LambdaRecord[];
}

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
  response?: CloudFrontResponse;
}

export interface Header {
  key: string;
  value: string;
};
