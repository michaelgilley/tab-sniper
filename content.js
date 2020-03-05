// Zoom site forwards the page to ?status=success after the meeting is launched.
if (window.location.host.includes('zoom')) {
  if (window.location.search.includes('status=success')) {
    chrome.runtime.sendMessage({ close: true })
  }
}

// Slack archive links
if (window.location.host.includes('slack')) {
  setTimeout(() => {
    chrome.runtime.sendMessage({ close: true })
  }, 3000)
}
