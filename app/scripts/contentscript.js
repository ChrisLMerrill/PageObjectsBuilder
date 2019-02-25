console.log("POB2 is running in the page");

document.addEventListener('click', function (event)
    {
    var message = 'clicked: ' + event.target.nodeName;
    console.log(message);
    browser.runtime.sendMessage({"event":"click", "message":message});
    });