chrome.webRequest.onBeforeRequest.addListener(
  function(details)
  {
    if (details.url.indexOf('.atlassian.net/browse/') != -1 && details.url.indexOf("oldIssueView") == -1)
    {
        return {redirectUrl: details.url + `${details.url.includes('?') ? '&' : '?'}oldIssueView=true`};
    }
  },
  {
    urls: [
      "https://*.atlassian.net/browse/*"
    ]
  },
  ["blocking"]
);