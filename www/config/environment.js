'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'open-etc-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // PoolName
      PoolName: 'CryptoGunas Pool',
      // PoolTitle
      PoolTitle: 'CryptoGunas Ethereum Classic Pool',
      // API host and port
      ApiUrl: '//cryptogunas.dynu.net/',

      // HTTP mining endpoint
      HttpHost: 'http://cryptogunas.dynu.net',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: 'cryptogunas.dynu.net',
      StratumPort: 8008,

      // Fee and payout details
      PoolFee: '0%',
      PayoutThreshold: '0.5',
      PayoutInterval: '10m',
      Unit: 'ETC',
      EtherUnit: 'ETC',

      // For network hashrate (change for your favourite fork)
      BlockExplorerLink: 'https://etcblockexplorer.com',
      BlockExplorerAddrLink: 'https://etcblockexplorer.com/tx',
      BlockReward: 4,
      BlockUnlockDepth: 120,
      BlockTime: 14.4,
      highcharts: {
        main: {
          enabled: true,
          height: 200,
          type: 'spline',
          color: '',
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000
        },
        account: {
          enabled: true,
          height: 200,
          type: 'spline',
          color: [ '', '' ],
          title: '',
          ytitle: '',
          interval: 180000,
          chartInterval: 900000,
          paymentInterval: 300000
        }
      }
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8081/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
