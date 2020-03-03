console.log("injecteddddd");

var scriptArray = document.getElementsByTagName('script');
scriptedArray = Array.from(scriptArray);
var filteredArray = scriptedArray.filter((element) => element.src.indexOf('ebaystatic') > -1);
var newscripts = filteredArray.map((script) => script.src);
console.log("filtered Array");
console.log(newscripts);

chrome.runtime.sendMessage({
    total_scripts: newscripts,
    from: 'ajay' // or whatever you want to send
});