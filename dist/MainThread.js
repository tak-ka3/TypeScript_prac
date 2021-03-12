"use strict";
let worker = new Worker('WorkerScript.js');
worker.onmessage = e => {
    console.log(e.data);
};
worker.postMessage('some data');
//# sourceMappingURL=MainThread.js.map