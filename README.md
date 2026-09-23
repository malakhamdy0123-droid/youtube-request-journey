# youtube-request-journey

A simple Node.js project that demonstrates:

- Non-blocking asynchronous file reading with `fs.readFile`
- Reading two files at the same time with `Promise.all`
- Using Node.js built-in `EventEmitter`
- Merging the two file contents after both reads finish
- Writing the merged content to `merged.txt` with `fs.writeFile`

## Requirements

- Node.js installed on Windows
- VS Code

## Project files

```text
youtube-request-journey/
├── app.js
├── file1.txt
├── file2.txt
├── package.json
└── README.md
```

`merged.txt` is created automatically when the program runs successfully.

## How to run on Windows with VS Code

1. Open VS Code.
2. Select **File > Open Folder...**
3. Choose the `youtube-request-journey` folder.
4. Open the VS Code terminal using **Terminal > New Terminal**.
5. Check that Node.js is installed:

```bash
node --version
```

6. Run the project:

```bash
npm start
```

You can also run:

```bash
node app.js
```

## Expected result

The terminal should show:

```text
Both files were read successfully.
Merged content was written to merged.txt
```

A new file named `merged.txt` will appear in the project folder. It contains the contents of `file1.txt` followed by the contents of `file2.txt`.

## Important

The program uses `fs.readFile` with a callback wrapped in a Promise, so the file reads are asynchronous and non-blocking. `Promise.all` waits until both reads have completed before emitting the `mergeFiles` event. The event listener then merges the contents and uses `fs.writeFile` asynchronously to create `merged.txt`.
