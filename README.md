# JUnit JAR Downloader
This extension simply downloads the JUnit JAR files necessary for simple unit testing.<br/>
The release versions of the following repositories are downloaded:
- [JUnit 5]("https://repo1.maven.org/maven2/org/junit/jupiter/junit-jupiter-api/")
- [OpenTest4J]("https://repo1.maven.org/maven2/org/opentest4j/opentest4j/")
- [JUnit Platform Console Standalone]("https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/")

## Features
- Users can choose the destination directory for the JAR files (default = `workspace/lib`)

## Requirements
- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) extension for VS Code by Microsoft

## Extension Settings

This extension contributes the following settings:
- `junit-jar-downloader.defaultDestDir`: sets default destination directory for JUnit JAR Folders (otherwise defaults to `workspace/lib`)

## Known Issues
- None yet...

## Release Notes

### 1.0.0

Initial release
