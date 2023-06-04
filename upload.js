function switchPage() {
    var page = document.getElementById("switchPage");
    if (document.getElementById("contentdiv").style.display !== "none") {
        document.getElementById("settings-div").style.display = "block";
        document.getElementById("contentdiv").style.display = "none";
    } else {
        document.getElementById("settings-div").style.display = "none";
        document.getElementById("contentdiv").style.display = "block";
    }
}

function setProxy(proxyInput) {
    const proxyDetails = parseProxyInput(proxyInput);

    if (proxyDetails) {
        const { host, port, username, password } = proxyDetails;

        const config = {
            mode: 'fixed_servers',
            rules: {
                singleProxy: {
                    scheme: 'http',
                    host: host,
                    port: port
                },
                bypassList: ['localhost']
            }
        };

        chrome.proxy.settings.set({
            value: config,
            scope: 'regular'
        }, function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            } else {
                console.log('Proxy settings updated.');
            }
        });

        if (username && password) {
            chrome.webRequest.onAuthRequired.addListener(
                callbackFn,
                { urls: ["<all_urls>"] },
                ['blocking']
            );
        }
    }
}

function removeProxy() {
    const config = {
        mode: 'direct'
    };

    chrome.proxy.settings.set({
        value: config,
        scope: 'regular'
    }, function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log('Proxy settings removed.');
        }
    });

    chrome.webRequest.onAuthRequired.removeListener(callbackFn);
}

function parseProxyInput(proxyInput) {
    const parts = proxyInput.split(':');
    if (parts.length === 4) {
        const host = parts[0];
        const port = parseInt(parts[1]);
        const username = parts[2];
        const password = parts[3];

        return {
            host,
            port,
            username,
            password
        };
    } else {
        console.error('Invalid proxy input format.');
        return null;
    }
}

function callbackFn(details) {
    return {
        authCredentials: {
            username: proxyUsername,
            password: proxyPassword
        }
    };
}
