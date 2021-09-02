# JUnit JAR Downloader
This extension simply downloads the JUnit JAR files necessary for simple unit testing.<br/>
The release versions of the following repositories are downloaded:
- [JUnit 5]("https://search.maven.org/artifact/org.junit.jupiter/junit-jupiter-api")
- [OpenTest4J]("https://search.maven.org/artifact/org.opentest4j/opentest4j")
- [JUnit Platform Console Standalone]("https://search.maven.org/artifact/org.junit.platform/junit-platform-console-standalone")

This project employs code from the [File Download](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vscode-download-file) extension for VS Code by Dario Fuzinato. Much thanks to him for his magnificent file-downloading code.

## Features
- Users can choose the destination directory for the JAR files (default = `workspace/lib`)

## Requirements
- [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) extension for VS Code by Microsoft

## Extension Settings

This extension contributes the following settings:
- `junit-jar-downloader.defaultDestDir`: sets default destination directory for JUnit JAR Folders (otherwise defaults to `workspace/lib`)

## Known Issues
- None yet...

## Release Notes

### 1.1.0
- Added keybindings for initiating download: `Ctrl`+`Alt`+`J` (Windows) or `Cmd`+`Option`+`J` (Mac)
### 1.0.3
- Fixed ability to configure default destination directory in prompt (starts as `lib`)
### 1.0.2
- Added attribution to Dario Fuzinato
### 1.0.1
- Fixed dependency: [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) rather than [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
### 1.0.0
- Initial release
