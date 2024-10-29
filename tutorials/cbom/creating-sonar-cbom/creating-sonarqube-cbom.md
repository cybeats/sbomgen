# Creating CBOMs Using the IBM Sonar Cryptography SonarQube Plugin

## Introduction

This tutorial illustrates how to create a CBOM from Java or Python projects using the SonarQube Sonar Cryptography Plugin.

## Requirements

* SonarQube

* SonarScanner CLI

* Sonar Cryptography .jar file.

## Installation

### SonarQube & SonarScanner

Ensure you have the SonarQube and SonarScanner installed, and ideally on your PATH, via downloading and unzipping the .zip files for SonarQube and SonarScanner.

### Sonar Cryptography Plugin

Download the Sonar Cryptography .jar file and place it into your SonarQube ```plugins/``` folder.


## Usage

* Activate SonarQube

* Create a blank Quality Profile for a specific language (Java or Python).

* In the Profile, activate More Rules. Find the IBM Cryptography rules for your language (likely under Repository) and activate them.

* Create a new project, whether it be local or from a repository.

* Generate a project token and copy and paste the generated SonarScanner CLI command.

* Run the SonarScanner CLI command in the folder containing your source code.

* You should see a ```cbom.json``` file in your folder upon the command completion*

## Notes

* This tool requires Java 17.

## SBOM

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pretty JSON Display</title>
    <style>
        #json-container {
            height: 400px; /* Set a fixed height */
            overflow-y: auto; /* Enable vertical scrolling */
            border: 2px solid #ccc; /* Optional: add a border for visibility */
            padding: 10px;
        }
        #xml-container {
            height: 400px; /* Set a fixed height */
            overflow-y: auto; /* Enable vertical scrolling */
            border: 2px solid #ccc; /* Optional: add a border for visibility */
            padding: 10px;
        }
        pre {
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h3>
        <a href="./cbom.sonar.json">sonarqube (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <script>
        function display_json(url, elementid){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById(elementid).textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching JSON:', error));
        }
        function display_xml(url, elementid){
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementid).textContent = data;
            })
            .catch(error => console.error('Error fetching XML:', error));
        }
    display_json('./cbom.sonar.json', 'json-display');
    </script>
</body>
</html>


## References

* Anchore. (n.d.). Anchore/syft: CLI Tool and library for generating a software bill of materials from container images and filesystems. GitHub. [https://github.com/anchore/syft](https://github.com/anchore/syft)

* Code quality tool & secure analysis with SonarQube. Clean Code: Writing Clear, Readable, Understandable & Reliable Quality Code. (n.d.). [https://www.sonarsource.com/products/sonarqube/](https://www.sonarsource.com/products/sonarqube/) 

* Sonarscanner CLI. SonarQube 10.4. (n.d.). [https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/](https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/)
