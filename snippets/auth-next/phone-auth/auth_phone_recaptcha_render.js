// This snippet file was generated by processing the source file:
// ./auth-next/phone-auth.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_phone_recaptcha_render_modular]
recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});
// [END auth_phone_recaptcha_render_modular]