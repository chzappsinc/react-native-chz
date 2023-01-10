type shortUrlProviders = 'is.gd' | 'cdpt.in';
export interface shortUrl {
  /**
   * URL that you want to short
   * @example url : "https://chzapps.com"
   */
  url: string;
  /**
   * Select provider
   * @example provider : "is.gd"
   */
  provider: shortUrlProviders;
}
