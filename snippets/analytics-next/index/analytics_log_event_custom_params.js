// This snippet file was generated by processing the source file:
// ./analytics-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START analytics_log_event_custom_params_modular]
import { getAnalytics, logEvent } from "firebase/analytics";

const analytics = getAnalytics();
logEvent(analytics, 'goal_completion', { name: 'lever_puzzle'});
// [END analytics_log_event_custom_params_modular]