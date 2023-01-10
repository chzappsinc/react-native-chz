type methods = 'get' | 'post' | 'put' | 'delete' | 'options' | 'patch' | 'head';
export interface makeNetworkCallSchema {
  /**
   * send body
   * @example body : {
   * username : "Hello",
   * password : "x_chz_dev_ency"
   * }
   */
  body?: object;
  /**
   * Request URL
   * @example url : "https://myurl.com/api/find/672673"
   */
  ulr: string;
  /**
   * Methods for request
   * @example method : "post"
   */
  method: methods;
  /**
   * Custom headers, this will overlap initial headers
   *
   * for Authorization or Content-type, Please use authorization,contentType schema
   */
  headers?: object;
  /**
   * request contentType
   * @example contentType : 'multipart/form-data'
   */
  contentType: contentType;
  /**
   * authorization method
   * @example authorization : 'Bearer TOKEN'
   */
  authorization: string;
}

type contentType =
  | 'application/json; charset=UTF-8'
  | 'multipart/form-data'
  | 'application/json'
  | 'application/EDI-X12'
  | 'application/EDIFACT'
  | 'application/javascript'
  | 'application/octet-stream'
  | 'application/ogg'
  | 'application/pdf'
  | 'application/xhtml+xml'
  | 'application/x-shockwave-flash'
  | 'application/ld+json'
  | 'application/xml'
  | 'application/zip'
  | 'application/x-www-form-urlencoded'
  | 'audio/mpeg'
  | 'audio/x-ms-wma'
  | 'audio/vnd.rn-realaudio'
  | 'audio/x-wav'
  | 'chz/request'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/png'
  | 'image/tiff'
  | 'image/vnd.microsoft.icon'
  | 'image/x-icon'
  | 'image/vnd.djvu'
  | 'image/svg+xml'
  | 'multipart/mixed'
  | 'multipart/alternative'
  | 'multipart/related'
  | 'text/css'
  | 'text/csv'
  | 'text/html'
  | 'text/javascript'
  | 'text/plain'
  | 'text/xml'
  | 'video/mpeg'
  | 'video/mp4'
  | 'video/quicktime'
  | 'video/x-ms-wmv'
  | 'video/x-msvideo'
  | 'video/x-flv'
  | 'video/webm'
  | 'application/vnd.oasis.opendocument.text'
  | 'application/vnd.oasis.opendocument.spreadsheet'
  | 'application/vnd.oasis.opendocument.presentation'
  | 'application/vnd.oasis.opendocument.graphics'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.mozilla.xul+xml';
