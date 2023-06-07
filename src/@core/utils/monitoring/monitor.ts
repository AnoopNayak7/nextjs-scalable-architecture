// monitoring.js

function sendMetrics(metricName: String, value: any) {
  // Replace this with the code to send the metrics data to your backend or analytics service
  console.log(`Sending metrics - ${metricName}: ${value}`);
}

function sendError(error: Error) {
  // Replace this with the code to send the error data to your backend or error tracking service
  console.error('Error:', error);
}

export function trackPageLoadTime() {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    sendMetrics('Page Load Time', loadTime);
  }
}

export function trackAjaxRequests() {
  const originalFetch = window.fetch;
  window.fetch = function (...args) {
    const startTime = window.performance.now();
    return originalFetch.apply(this, args).then((response) => {
      const endTime = window.performance.now();
      const responseTime = endTime - startTime;
      sendMetrics('AJAX Request Response Time', responseTime);
      return response;
    });
  };
}

export function trackErrors() {
  window.addEventListener('error', function (event) {
    sendError(event.error);
  });

  window.addEventListener('unhandledrejection', function (event) {
    sendError(event.reason);
  });
}
