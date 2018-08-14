// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  accountServer: "http://localhost:5101",
  identityServer: "http://localhost:5100",
  clientAddress: "http://localhost:4200",
  identityClientId: "dev-customer-portal"
};
