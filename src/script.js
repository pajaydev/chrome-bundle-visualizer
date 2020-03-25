const scriptArray = document.getElementsByTagName('script');
scriptedArray = Array.from(scriptArray);
const filteredArray = scriptedArray.filter((element) => (element.src.indexOf('ebaystatic') > -1) || (element.src.indexOf('securers.stratus.qa.ebay.com') > -1));
const newscripts = filteredArray.map((script) => script.src);
//localStorage.setItem("total_scripts", newscripts);
chrome.runtime.sendMessage({
    total_scripts: newscripts
});
