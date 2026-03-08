self.onmessage = function (message) {
    if (message.data === "sum") {
        let sum = 0;
        for (let i = 0; i < 10000000000; i++) {
            sum = sum + i;
        }
        self.postMessage(sum)
    }
}