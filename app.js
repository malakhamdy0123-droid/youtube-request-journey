const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

function readFileAsync(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

emitter.on("mergeFiles", (content1, content2) => {
    const mergedContent = `${content1}\n${content2}`;

    fs.writeFile("merged.txt", mergedContent, "utf8", (err) => {
        if (err) {
            console.error("Error writing merged.txt:", err);
            return;
        }

        console.log("Both files were read successfully.");
        console.log("Merged content was written to merged.txt");
    });
});

async function main() {
    try {
        const [content1, content2] = await Promise.all([
            readFileAsync("file1.txt"),
            readFileAsync("file2.txt")
        ]);

        emitter.emit("mergeFiles", content1, content2);
    } catch (err) {
        console.error("Error reading files:", err);
    }
}

main();
