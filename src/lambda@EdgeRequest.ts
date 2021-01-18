import { LambdaRecord, Header } from './lambda@Edge';


interface CloudFrontRequestBody {
  action: 'read-only' | 'replace';
  data: string;
  encoding: 'text' | 'base64';
  inputTruncated: boolean; // Body truncated by Lambda@Edge
}

interface StandardHTTPRequestHeaders {
  accept?: Header[];
  'accept-charset'?: Header[];
  'accept-encoding'?: Header[];
  'accept-language'?: Header[];
  'accept-datetime'?: Header[];
  'access-control-request-method'?: Header[];
  'access-control-request-headers'?: Header[];
  authorization?: Header[];
  'cache-control'?: Header[];
  connection?: Header[];
  'content-length'?: Header[];
  'content-type'?: Header[];
  cookie?: Header[];
  date?: Header[];
  expect?: Header[];
  forwarded?: Header[];
  from?: Header[];
  host?: Header[];
  'if-match'?: Header[];
  'if-modified-since'?: Header[];
  'if-none-match'?: Header[];
  'if-range'?: Header[];
  'if-unmodified-since'?: Header[];
  'max-forwards'?: Header[];
  origin?: Header[];
  pragma?: Header[];
  'proxy-authorization'?: Header[];
  range?: Header[];
  referer?: Header[];
  TE?: Header[];
  'user-agent'?: Header[];
  upgrade?: Header[];
  via?: Header[];
  warning?: Header[];
}

type RequestHeaders = StandardHTTPRequestHeaders;

interface CustomOrigin {
  customHeaders: RequestHeaders;
  domainName: string;
  keepaliveTimeout: number;
  path: string;
  port: number;
  protocol: "https" | "http";
  readTimeout: number;
  sslProtocols: string[];
};

interface S3Origin {
  authMethod: string;
  customHeaders: RequestHeaders;
  domainName: string;
  path: string;
  region: 'us-east-2' | 'us-east-1' | 'us-west-1' | 'us-west-2' | 'ap-east-1' | 'ap-south-1' | 'ap-northeast-3' | 'ap-southeast-1' | 'ap-northeast-2' | 'ap-southeast-2' | 'ap-northeast-1' | 'ca-central-1' | 'cn-north-1'
  | 'cn-northwest-1' | 'eu-central-1' | 'eu-west-1' | 'eu-west-2' | 'eu-west-3' | 'eu-north-1' | 'sa-east-1' | 'me-south-1'
}

interface RequestOrigin {
  custom: CustomOrigin;
  s3: S3Origin;
}

type HTTPMethod = 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD';

export interface CloudFrontRequest {
  body: CloudFrontRequestBody;
  clientIp: string;
  querystring: string;
  uri: string;
  method: HTTPMethod;
  headers: RequestHeaders | any;
  origin: RequestOrigin;
}
