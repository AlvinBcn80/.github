// This snippet file was generated by processing the source file:
// ./auth-next/yahoo-oauth.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_yahoo_provider_scopes_modular]
// Request access to Yahoo Mail API.
provider.addScope('mail-r');
// Request read/write access to user contacts.
// This must be preconfigured in the app's API permissions.
provider.addScope('sdct-w');
// [END auth_yahoo_provider_scopes_modular]