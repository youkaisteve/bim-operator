"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function remoteLoad(url, hasCallback) {
    return createScript(url);
    function createScript(url) {
        var scriptElement = document.createElement('script');
        document.body.appendChild(scriptElement);
        var promise = new Promise(function (resolve, reject) {
            scriptElement.addEventListener('load', function (e) {
                removeScript(scriptElement);
                if (!hasCallback) {
                    resolve(e);
                }
            }, false);
            scriptElement.addEventListener('error', function (e) {
                removeScript(scriptElement);
                reject(e);
            }, false);
            if (hasCallback) {
                window.____callback____ = function () {
                    resolve();
                    window.____callback____ = null;
                };
            }
        });
        if (hasCallback) {
            url += '&callback=____callback____';
        }
        scriptElement.src = url;
        return promise;
    }
    function removeScript(scriptElement) {
        document.body.removeChild(scriptElement);
    }
}
exports.default = remoteLoad;
