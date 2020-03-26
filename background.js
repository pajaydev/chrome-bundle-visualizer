
// set the scripts in localStorage.
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        localStorage.setItem("total_scripts", request.total_scripts);
    }
);

// remove the scripts when the domContent loaded.
chrome.webNavigation.onCompleted.addListener((event) => {
    if (!isEbaySite(event)) {
        localStorage.removeItem("total_scripts");
    }

});

// check valid ebay site.
const isEbaySite = (event) => {
    return event.url && ((event.url.indexOf("ebay") > -1) || (event.url.indexOf('stags.bluekai.com') > -1) || (event.url.indexOf('about:blank') > -1) || (event.url.indexOf('c.paypal.com') > -1));
}