import * as vscode from 'vscode';
import * as fs from 'fs';
import * as https from "https";
import { URL } from "url";
import * as path from "path";
import * as xml2js from "xml2js";

const repoURLs = ["https://repo1.maven.org/maven2/org/junit/jupiter/junit-jupiter-api/", "https://repo1.maven.org/maven2/org/opentest4j/opentest4j/", "https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/"];

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('junit-jar-downloader.download', () => {
		const configParams = vscode.workspace.getConfiguration('junit-jar-downloader');

		let defaultDest = configParams.get('defaultDestDir');
		if(configParams.get('defaultDestDir') === undefined) {
			defaultDest = "lib";
		}
		vscode.window.showInputBox({ prompt: 'Enter destination directory for JUnit JAR files', value: defaultDest as string}).then((inputDest) => {
			if (!inputDest) {
				vscode.window.showErrorMessage("Please enter valid directory");
				return;
			}
			const dest = path.join(vscode.workspace.workspaceFolders![0].uri.fsPath, inputDest as string); 
			for(var repoURL of repoURLs) {
				getReleaseJAR(repoURL, dest);
			}
			vscode.window.showInformationMessage(`Successfully downloaded JUnit JAR files into "${inputDest}"`);
		});	
	});

	context.subscriptions.push(disposable);
}

async function getReleaseVersion(repoURL: string) {
	var parser = new xml2js.Parser();
	return new Promise((resolve, reject) => {
		https.get(path.join(repoURL, "maven-metadata.xml"), function(res) {
			var buffer = "";
			res.on("data", function(data) { buffer = buffer + data; });
			res.on("end", function (data: any) {
				parser.parseString(buffer, function(err: Error, result: any){
					const releaseVersion = result['metadata']['versioning'][0]['release'][0];
					console.log(`Release version = "${releaseVersion}" for repo "${repoURL}"`);
					resolve(releaseVersion as string);
				});
			});
			}).on('error', function(e) {
				console.log("Got error: " + e.message);
				reject(`Error downloading maven-metadata.xml in repo "${repoURL}"`);
		});
	});
}

async function getJARUrl(repoURL: string) {
	const releaseVer = await getReleaseVersion(repoURL) as string;
	const filename_base = repoURL.replace(/\/$/, "").split("/").pop() as string;
	const jarURL = path.join(repoURL, releaseVer, filename_base + "-" + releaseVer + ".jar")
	return jarURL as string;
}

async function getReleaseJAR(repoURL: string, dest: string) {
	const fileURL = await getJARUrl(repoURL);
	const timeout = 10000, urlParsed = new URL(fileURL);
	let uri = urlParsed.pathname.split('/')!;
	let req, filename = (uri[uri.length - 1].match(/(\w*\.?-?)+/))![0];

	let request = https.get(fileURL, function(response) {
	  
		// Make sure extension is present (mostly for images)
		if (filename.indexOf('.') < 0) {
			const contentType = response.headers['content-type'];
			filename += `.${contentType!.split('/')[1]}`;
		}
	
		const targetPath = `${dest}/${filename}`;
	
		if (response.statusCode === 200) {
			fs.mkdir(dest, err => { 
				var file = fs.createWriteStream(targetPath);
				response.pipe(file);
			});
		} else {
			vscode.window.showErrorMessage(`Downloading ${fileURL} failed.`);
		}
	
		response.on("end", function(){
			console.log(`File "${filename}" downloaded successfully.`);
		})
	
		request.setTimeout(timeout, function () {
			request.destroy();
		})
	});
}

export function deactivate() {}
