// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    publishableKey: 'pk_test_da7UuHXyzDQtckUoSVx3B4n4',
    secretKey: 'sk_test_pVXGtluvmTPLLhfHoRHwu7Db'
  },
  mailgun: {
    api_key: 'key-ad9a7e1a8f3099390af83736fbbbbd5f\n'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
