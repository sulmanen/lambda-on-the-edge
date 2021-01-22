import { LambdaRecord, Header } from './lambda@Edge';

export interface LambdaAtEdgeResponse {
  Records: LambdaRecord[];
}

export interface CloudFrontResponse {
  bodyEncoding?: 'text' | 'base64';
  body?: string;
  status: number;
  statusDescription?: string;
  headers?: StandardHTTPResponseHeaders | any;
}

interface StandardHTTPResponseHeaders {
  'accept-patch'?: Header[];
  'accept-ranges'?: Header[];
  age?: Header[];
  allow?: Header[];
  'alt-svc'?: Header[];
  'cache-control'?: Header[];
  connection?: Header[];
  'content-disposition': Header[];
  'content-encoding'?: Header[];
  'content-language'?: Header[];
  'content-length'?: Header[];
  'content-location'?: Header[];
  'content-range'?: Header[];
  'content-type'?: Header[];
  date?: Header[];
  'delta-base'?: Header[];
  etag?: Header[];
  expires?: Header[];
  im?: Header[];
  'last-modified'?: Header[];
  link?: Header[];
  location?: Header[];
  pragma?: Header[];
  'proxy-authenticate'?: Header[];
  'public-key-pins'?: Header[];
  'retry-after'?: Header[];
  server?: Header[];
  'set-cookie'?: Header[];
  'strict-transport-security'?: Header[];
  trailer?: Header[];
  'transfer-encoding'?: Header[];
  tk?: Header[];
  upgrade?: Header[];
  vary?: Header[];
  via?: Header[];
  warning?: Header[];
  'www-authenticate'?: Header[];
}
