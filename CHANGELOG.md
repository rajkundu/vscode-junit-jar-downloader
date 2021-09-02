# Change Log

All notable changes to the "junit-jar-downloader" extension will be documented in this file.

## [Unreleased]

## [1.3.0] - 2021-09-02
### Removed
- Upon second thought, emptying the destination directory could be a terrible idea. Reverted v1.2.0 changes & made minor improvements.

## [1.2.0] - 2021-09-02
### Added
- Now empties destination directory before downloading JAR files to prevent potential version conflicts

## [1.1.1] - 2021-09-02
### Changed
- Fixed markdown syntax error in `README.md`

## [1.1.0] - 2021-09-02
### Added
- Added keybindings for initiating download: `Ctrl`+`Alt`+`J` (Windows) or `Cmd`+`Option`+`J` (Mac)

## [1.0.3] - 2021-09-02
### Changed
- Fixed ability to configure default destination directory in prompt (starts as `lib`)

## [1.0.2] - 2021-09-02
### Added
- Added attribution to Dario Fuzinato

## [1.0.1] - 2021-09-02
### Changed
- Fixed dependency: [Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test) rather than [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)

## [1.0.0] - 2021-09-02
- Initial release
