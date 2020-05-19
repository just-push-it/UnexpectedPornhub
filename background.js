let alarmName = "random-ph"

function getInterval() {
    let rando = Math.floor(Math.random() * 120) + 10;
    console.log("Only", rando, "minutes until your next surprise! UwU");
    return rando;
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create(alarmName, {delayInMinutes:getInterval()});
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if(alarm.name === alarmName) {
        chrome.windows.create({url:"https://pornhub.com/video/random", incognito:true})
        chrome.alarms.create(alarmName, {delayInMinutes:getInterval()});
    }
});