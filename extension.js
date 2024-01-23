document.addEventListener('DOMContentLoaded', function () {
    var clickCount = 0;
    document.getElementById("b1").onclick = function () {
        if (clickCount % 2 === 0) {
            document.getElementById("b_image").src = "button_on.svg";
            chrome.tabs.executeScript({
                file: 'highlighter.js'
            });
        } else {
            document.getElementById("b_image").src = "button_off.svg";
            chrome.tabs.reload();
        }
        clickCount++;
    }
    chrome.runtime.onMessage.addListener(function (message) {
        if (message.action === 'sendMatchCounter') {
            document.getElementById('count').textContent = message.matchCounter;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var darkModeButton = document.getElementById('dark-mode');
    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('light');
        var extensionName = document.getElementById('extension_name');
        extensionName.classList.toggle('light');
        document.getElementById("dark-mode").classList.toggle("light");
        var githubLink = document.querySelector('.github-link');
        githubLink.classList.toggle('light');
    });
});
function displayContactNumber() {
    var contactNumber = "9345596918";
    var contactNumberContainer = document.getElementById('contact-number-container');
    var contactNumberSpan = document.createElement('span');
    contactNumberSpan.textContent = contactNumber;
    contactNumberContainer.innerHTML = ''; 
    contactNumberContainer.appendChild(contactNumberSpan);
}


