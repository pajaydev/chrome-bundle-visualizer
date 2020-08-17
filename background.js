let ebayScripts = [];

function updateLocalStorage(scripts){
    localStorage.setItem("total_scripts", scripts);
}
// set the scripts in localStorage.
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.total_scripts){
            ebayScripts = request.total_scripts;
            updateLocalStorage(ebayScripts);
        }
        if (request.method == "updateLocalVariables") {
            updateLocalStorage(ebayScripts);
        }
    }
);


// check valid ebay site.
const isEbaySite = (event) => {
    return event.url && ((event.url.indexOf("ebay") > -1) || (event.url.indexOf('stags.bluekai.com') > -1) || (event.url.indexOf('about:blank') > -1) || (event.url.indexOf('c.paypal.com') > -1));
}