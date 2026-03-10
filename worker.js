self.onmessage = function (message) {
    if (message.data === "start") {
        self.postMessage("done")
    }
}