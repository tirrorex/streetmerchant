import {Browser, PuppeteerLifeCycleEvent} from 'puppeteer';

export type Element = {
  container?: string;
  text: string[];
};

export type Pricing = {
  container: string;
  euroFormat?: boolean;
};

export type Brand =
  | 'test:brand'
  | 'captcha-deterrent'
  | 'amd'
  | 'asrock'
  | 'asus'
  | 'colorful'
  | 'corsair'
  | 'evga'
  | 'gainward'
  | 'galax'
  | 'gigabyte'
  | 'inno3d'
  | 'kfa2'
  | 'leadtek'
  | 'microsoft'
  | 'msi'
  | 'nvidia'
  | 'palit'
  | 'pny'
  | 'sapphire'
  | 'sony'
  | 'xfx'
  | 'powercolor'
  | 'zotac';

export type Series =
  | 'test:series'
  | 'captcha-deterrent'
  | '3060'
  | '3060ti'
  | '3070'
  | '3080'
  | '3090'
  | 'darkhero'
  | 'rx6800'
  | 'rx6800xt'
  | 'rx6900xt'
  | 'ryzen5600'
  | 'ryzen5800'
  | 'ryzen5900'
  | 'ryzen5950'
  | 'sonyps5c'
  | 'sonyps5de'
  | 'sf'
  | 'xboxsx'
  | 'xboxss';

export type Model =
  | 'test:model'
  | 'captcha-deterrent'
  | '(1-click oc)'
  | 'ex (1-click oc)'
  | 'sg (1-click oc)'
  | '5600x'
  | '5800x'
  | '5900x'
  | '5950x'
  | '600 platinum'
  | '600 gold'
  | '750 platinum'
  | 'amd reference'
  | 'amp extreme holo'
  | 'amp holo'
  | 'amp white'
  | 'aorus master'
  | 'aorus master type-c'
  | 'aorus xtreme'
  | 'aorus xtreme waterforce'
  | 'aorus xtreme waterforce wb'
  | 'aorus'
  | 'battle-ax'
  | 'challenger'
  | 'challenger pro'
  | 'crosshair viii'
  | 'dual fan'
  | 'dual oc'
  | 'dual'
  | 'dual mini'
  | 'dual mini oc'
  | 'eagle oc'
  | 'eagle'
  | 'epic x'
  | 'ekwb'
  | 'ex gamer'
  | 'founders edition'
  | 'ftw3'
  | 'ftw3 black'
  | 'ftw3 ultra'
  | 'ftw3 ultra hybrid'
  | 'ftw3 ultra hydro copper'
  | 'gamerock'
  | 'gamerock oc'
  | 'gaming oc'
  | 'gaming oc pro'
  | 'gaming pro oc'
  | 'gaming pro'
  | 'gaming trio'
  | 'gaming x trio'
  | 'gaming x'
  | 'gaming x3'
  | 'ghost oc'
  | 'suprim x'
  | 'suprim'
  | 'gaming'
  | 'hurricane'
  | 'ichill x2'
  | 'ichill x3'
  | 'ichill x4'
  | 'ichill frostbite'
  | 'igame advanced'
  | 'igame advanced oc'
  | 'igame ultra oc'
  | 'igame vulcan oc'
  | 'jetstream'
  | 'jetstream oc'
  | 'ko oc'
  | 'ko'
  | 'master'
  | 'master 10g'
  | 'nitro+'
  | 'nitro+ se'
  | 'nitro oc se'
  | 'nitro oc'
  | 'phantom'
  | 'phantom gaming'
  | 'phantom gs'
  | 'phoenix gs oc'
  | 'phoenix gs'
  | 'phoenix'
  | 'ps5 console'
  | 'ps5 digital'
  | 'pulse'
  | 'red devil'
  | 'red dragon'
  | 'rog strix'
  | 'rog strix oc'
  | 'rog strix oc white'
  | 'sg'
  | 'sg oc'
  | 'merc'
  | 'strix lc'
  | 'strix oc'
  | 'strix'
  | 'strix oc white'
  | 'strix white'
  | 'suprim x'
  | 'taichi'
  | 'trinity oc'
  | 'trinity'
  | 'tuf oc'
  | 'tuf'
  | 'turbo'
  | 'twin edge oc white'
  | 'twin edge oc'
  | 'twin edge'
  | 'twin x2 oc'
  | 'twin x2'
  | 'uprising'
  | 'uprising dual fan'
  | 'ventus 2x oc'
  | 'ventus 2x'
  | 'ventus 3x oc'
  | 'ventus 3x'
  | 'vision oc'
  | 'vision'
  | 'x trio'
  | 'xbox series s'
  | 'xbox series x'
  | 'xc black'
  | 'xc gaming'
  | 'xc3 black'
  | 'xc3 ultra'
  | 'xc3 ultra hybrid'
  | 'xc3'
  | 'xlr8 epic x'
  | 'xlr8 gaming'
  | 'xlr8 revel'
  | 'xlr8 uprising'
  | 'xtreme 10g'
  | 'xtreme waterforce 10g'
  | 'tuf o8g gaming'
  | 'tuf 8g gaming'
  | 'dual 08g'
  | 'dual 8g'
  | 'dual 08g mini'
  | 'dual 8g mini'
  | 'ftw3 ultra gaming'
  | 'ghost'
  | 'eagle 8g'
  | 'master 8g'
  | 'gaming oc 8g'
  | 'gaming oc pro 8g v2'
  | 'eagle oc 8g'
  | 'vision oc 8g'
  | 'ichill x3 rgb'
  | 'ventus 2x 8g v1'
  | 'ventus 3x 8g oc'
  | 'ventus 2x 8g ocv1'
  | 'gaming x trio 8g'
  | 'tuf 10g gaming'
  | 'tuf o10g gaming'
  | 'strix 010g gaming'
  | 'strix 10g gaming'
  | 'xc3 ultra gaming'
  | 'xc3 black gaming'
  | 'xc3 gaming'
  | 'xc3 ultra hybrid gaming'
  | 'ftw3 gaming'
  | 'ftw3 ultra hybrid gaming'
  | 'ftw3 ultra gaming'
  | 'gaming oc 10g'
  | 'eagle oc 10g'
  | 'aorus master 10g'
  | 'aorus xtreme 10g'
  | 'vision oc 10g'
  | 'aorus xtreme waterforce 10g'
  | 'eagle 10g'
  | 'aorus xtreme waterforce wb 10g'
  | 'ichill x4 rgb'
  | 'gaming x trio 10g'
  | 'gamingPro'
  | 'ventus 3x 10g oc'
  | 'suprim x 10g'
  | 'gameRock'
  | 'gameRock oc'
  | '024g gaming'
  | 'strix 024g gaming'
  | 'tuf 24g gaming'
  | 'kingpin hybrid gaming'
  | 'gaming oc 24g'
  | 'vision oc 24g'
  | 'aorus xtreme waterforce 24g'
  | 'eagle oc 24g'
  | 'turbo 24g'
  | 'aorus xtreme 24g'
  | 'aorus xtreme waterforce wb 24g'
  | 'master 24g'
  | 'hof'
  | 'suprim x 24g'
  | 'gaming x trio 24g'
  | 'ventus 3x 24g oc'
  | 'strix 08g gaming'
  | 'tuf o80g gaming'
  | '8g'
  | 'strix 8g white'
  | 'aorus master 8g'
  | 'ex'
  | 'suprim x 8g'
  | 'ventus 2x 8g oc'
  | 'gaming trio 8g'
  | 'ventus 2x 8g'
  | 'suprim 8g'
  | 'ventus 3x 8g'
  | 'gamingPro oc'
  | 'jetStream oc'
  | 'twin edge oc white edition'
  | 'ventus 2x v1'
  | 'ventus 2x ocv1'
  | 'xlr8 revel epic-x'
  | 'strix 8g gaming'
  | 'strix 08g white'
  | 'xlr8 gaming epic-x rgb metal'
  | 'tuf o8g gaming';

export type Link = {
  brand: Brand;
  cartUrl?: string;
  itemNumber?: string;
  labels?: Labels;
  model: Model;
  openCartAction?: (browser: Browser) => Promise<string>;
  price?: number | null;
  series: Series;
  screenshot?: string;
  url: string;
};

export type LabelQuery = Element[] | Element | string[];

export type Labels = {
  bannedSeller?: LabelQuery;
  captcha?: LabelQuery;
  container?: string;
  inStock?: LabelQuery;
  outOfStock?: LabelQuery;
  maxPrice?: Pricing;
};

export type CaptchaDeterrent = {
  hardLinks?: string[];
  searchUrl?: string;
  searchTerms?: string[];
};

export type StatusCodeRangeArray = Array<number | [number, number]>;

export type Store = {
  realTimeInventoryLookup?: (itemNumber: string) => Promise<boolean>;
  /**
   * The range of status codes which will trigger backoff, i.e. an increasing
   * delay between requests. Setting an empty array will disable the feature.
   * If not defined, the default range will be used: 403.
   */
  backoffStatusCodes?: StatusCodeRangeArray;
  disableAdBlocker?: boolean;
  links: Link[];
  linksBuilder?: {
    builder: (docElement: cheerio.Cheerio, series: Series) => Link[];
    ttl?: number;
    urls: Array<{series: Series; url: string | string[]}>;
  };
  labels: Labels;
  name: string;
  currency: '£' | '$' | '€' | 'R$' | 'kr.' | '';
  setupAction?: (browser: Browser) => void;
  /**
   * The range of status codes which considered successful, i.e. without error
   * allowing request parsing to continue. Setting an empty array will cause
   * all requests to fail. If not defined, the default range will be used:
   * 0 -> 399 inclusive.
   */
  successStatusCodes?: StatusCodeRangeArray;
  waitUntil?: PuppeteerLifeCycleEvent;
  minPageSleep?: number;
  maxPageSleep?: number;

  proxyList?: string[];
  currentProxyIndex?: number;
  captchaDeterrent?: CaptchaDeterrent;
};
