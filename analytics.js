// Owner-only GA4 reporting. No requests before explicit visitor consent.
// The measurement ID is public; reporting credentials never belong in the repository.
const MEASUREMENT_ID = 'G-X4CX9C1FEJ';
const OPT_OUT_KEY = 'drivescene-analytics-disabled';
const CONSENT_KEY = 'drivescene-analytics-choice';
let started = false;

export function analyticsAllowed() {
 try {
  return location.protocol === 'https:' && location.hostname === 'paxton0209.github.io'
   && /^\/DriveScene-Studio\/(?:index\.html)?$/.test(location.pathname)
   && navigator.doNotTrack !== '1' && navigator.doNotTrack !== 'yes'
   && navigator.globalPrivacyControl !== true
   && localStorage.getItem(OPT_OUT_KEY) !== '1'
   && localStorage.getItem(CONSENT_KEY) === 'allow';
 } catch { return false; }
}

export function startAnalytics() {
 if (started || !analyticsAllowed()) return;
 try {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  const gtag = window.gtag;
  gtag('consent', 'default', {
   analytics_storage: 'denied', ad_storage: 'denied',
   ad_user_data: 'denied', ad_personalization: 'denied'
  });
  gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);
  gtag('js', new Date());
  let referrer = '';
  try { referrer = document.referrer ? new URL(document.referrer).origin + '/' : ''; } catch {}
  gtag('config', MEASUREMENT_ID, {
   send_page_view: false,
   cookie_expires: 2592000,
   cookie_update: false,
   cookie_domain: 'paxton0209.github.io',
   cookie_path: '/DriveScene-Studio/',
   allow_google_signals: false,
   allow_ad_personalization_signals: false,
   page_location: 'https://paxton0209.github.io/DriveScene-Studio/',
   page_title: 'DriveScene Studio',
   page_referrer: referrer
  });
  // Exactly one explicit visit event per document. Scene/query changes are not visits.
  gtag('event', 'page_view', { send_to: MEASUREMENT_ID });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.referrerPolicy = 'strict-origin';
  document.head.append(script);
  started = true;
 } catch { /* Analytics must never interrupt the scene or export. */ }
}

export function trackPngExport(scene, theme) {
 if (!started || !analyticsAllowed()) return;
 try {
  const scenes = ['road', 'elevated', 'junction', 'ramp', 'indoor', 'outdoor', 'reference'];
  window.gtag('event', 'png_export', {
   send_to: MEASUREMENT_ID,
   scene: scenes.includes(scene) ? scene : 'other',
   theme: theme === 'dark' ? 'dark' : 'light',
   image_size: '1920x1080'
  });
 } catch { /* A blocked analytics provider must not affect the PNG download. */ }
}

// The prompt is non-modal and never obstructs the scene controls.
export function initAnalyticsChoice() {
 try {
  if (location.protocol !== 'https:' || location.hostname !== 'paxton0209.github.io'
   || !/^\/DriveScene-Studio\/(?:index\.html)?$/.test(location.pathname)) return;
  if (navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes'
   || navigator.globalPrivacyControl === true || localStorage.getItem(OPT_OUT_KEY) === '1') return;
  const choice = localStorage.getItem(CONSENT_KEY);
  if (choice === 'allow') { startAnalytics(); return; }
  if (choice === 'deny') return;
  const notice = document.getElementById('analytics-choice');
  notice.hidden = false;
  for (const button of notice.querySelectorAll('[data-analytics-choice]')) {
   button.addEventListener('click', () => {
    try { localStorage.setItem(CONSENT_KEY, button.dataset.analyticsChoice); } catch {}
    notice.hidden = true;
    if (button.dataset.analyticsChoice === 'allow') startAnalytics();
   }, { once: true });
  }
 } catch { /* Unavailable storage leaves analytics off. */ }
}
