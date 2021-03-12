"use strict";
onmessage = e => {
    console.log(e.data);
    postMessage(`Act: "${e.data}"`);
};
onmessage = e => {
    processCommandFromMainThread(e.data);
};
function processCommandFromMainThread(command) {
    switch (command.type) {
        case 'sendMessageToThread':
            let [threadID, message] = command.data;
            console.log(message);
    }
}
//# sourceMappingURL=WorkerScript.js.map