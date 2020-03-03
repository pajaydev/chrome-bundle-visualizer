console.log("background loadeddddddd");
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.total_scripts);
        localStorage["total_scripts"] = request.total_scripts;
    }
);