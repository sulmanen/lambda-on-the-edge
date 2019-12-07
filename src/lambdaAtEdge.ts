interface CloudFrontRecordConfig {
  distributionDomainName: string;
  distributionId: string;
  eventType: 'viewer-request' | 'origin-request';
  requestId: string;
}

interface CloudFrontRequestBody {
  action: 'read-only' | 'replace';
  data: string;
  encoding: 'text' | 'base64';
  inputTruncated: boolean; // Body truncated by Lambda@Edge
}

interface CharSets { };
interface MimeTypes { };
interface Encodings { };
interface DateTime { };
interface Languages { };
interface HTTPAuthorization { };
interface HeaderCacheControl { };
interface HTTPConnection { };
interface Cookie { };
interface HTTPExpect { };
interface Forwarded;

interface StandardHTTPRequestHeaders {
  accept: MimeTypes[];
  'accept-charset': CharSets;
  'accept-encoding': Encodings;
  'accept-language': Languages;
  'accept-datetime': DateTime;
  'access-control-request-method': HTTPMethod;
  'access-control-request-headers': StandardHTTPRequestHeaders[];
  authorization: HTTPAuthorization;
  'cache-control': HeaderCacheControl;
  connection: HTTPConnection;
  'content-length': number;
  'content-type': MimeTypes;
  cookie: Cookie;
  date: DateTime;
  expect: HTTPExpect;
  forwarded: Forwarded;
  from: string;
  host: string;
  'if-match': string;
  'if-modified-since': string;
  'if-none-match': string;
  'if-range': string;
  'if-unmodified-since': DateTime;
  'max-forwards': number;
  origin: string;
  pragma: string
  'proxy-authorization': string;
  range: string;
  referer: string;
  TE: string;
  'user-agent': string;
  upgrade: string;
  via: string;
  warning: string;
}

interface RequestHeaders {

}

interface RequestOrigin {

}

type HTTPMethod = 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD';

interface CloudFrontRequest {
  body: CloudFrontRequestBody;
  clientIp: string;
  querystring: string;
  uri: string;
  method: HTTPMethod;
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
