// This snippet file was generated by processing the source file:
// ./auth-next/phone-auth.js
//
// To update the snippets in this file, edit the source and then run
// 'npm run snippets'.

// [START auth_phone_recaptcha_render_modular]
recaptchaVerifier.render().then((widgetId) => {
  window.recaptchaWidgetId = widgetId;
});
// [END auth_phone_recaptcha_render_modular]