(function(){
  'use strict';

  const config = window.WEDDING_UMAMI_CONFIG || {};
  const localHosts = new Set(['localhost', '127.0.0.1', '[::1]']);

  if(location.protocol === 'file:' || localHosts.has(location.hostname)){
    window.__weddingAnalyticsState = 'disabled-local';
    return;
  }

  const websiteId = String(config.websiteId || '').trim();
  if(!websiteId){
    window.__weddingAnalyticsState = 'not-configured';
    return;
  }

  const tracker = document.createElement('script');
  tracker.defer = true;
  tracker.src = String(config.scriptUrl || 'https://cloud.umami.is/script.js');
  tracker.dataset.websiteId = websiteId;
  tracker.addEventListener('load', () => {
    window.__weddingAnalyticsState = 'enabled';
  });
  tracker.addEventListener('error', () => {
    window.__weddingAnalyticsState = 'error';
    console.warn('Umami Analytics could not be loaded.');
  });
  window.__weddingAnalyticsState = 'loading';
  document.head.appendChild(tracker);
})();