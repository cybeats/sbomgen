# Creation of SBOM in Maven Project Via The CycloneDX-Maven-Plugin

## Introduction

This document illustrates the generation of an SBOM from a maven project utilizing the cyclonedx-maven-plugin. 

## Requirements

* Maven

* Maven compatible project

## Installation

Open the pom.xml file of your maven project and add the following to the plugins section:

```xml
<plugin>
    <groupId>org.cyclonedx</groupId>
    <artifactId>cyclonedx-maven-plugin</artifactId>
    <version>2.9.1</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>makeAggregateBom</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <projectType>application</projectType>
        <schemaVersion>1.6</schemaVersion>
        <includeBomSerialNumber>true</includeBomSerialNumber>
        <includeCompileScope>true</includeCompileScope>
        <includeProvidedScope>true</includeProvidedScope>
        <includeRuntimeScope>true</includeRuntimeScope>
        <includeSystemScope>true</includeSystemScope>
        <includeTestScope>false</includeTestScope>
        <includeLicenseText>false</includeLicenseText>
        <outputFormat>all</outputFormat>
        <outputName>(output-sbom-name-here)</outputName>
    </configuration>
</plugin>
```

## Usage

Build and create the SBOM with the command:

```bash
mvn clean install
```

The resultant SBOM in both JSON and XML format should be found in the ```target/``` directory.

## Notes 

### Troubleshooting

#### Environment:

* SBOMs were generated on three computers, running Java versions 11.0.20.1 and 11.0.25,  with Maven versions 3.9.3, 3.6.3 and 3.9.9 on Ubuntu 20.04, 22.04 and 24.04 respectively.

#### Build Failure:

* Delete directory “.m2” found in home directory with command:

```bash
rm -rf path/to/.m2
```
(Ubuntu).

* Ensure the correct parameters for the cyclonedx-maven-plugin are set, schema: 1.6, version: 2.9.1. 

* Ensure that the maven version installed is the one found in your operating systems package manager, or is the most stable release for your system.

* Prior to running:

    ```bash
    mvn clean install
    ```

    run

    ```bash
    mvn clean -Dmaven.clean.failOnError=false
    ```

## Example SBOM

The following section illustrates a CycloneDX JSON and XML SBOMs of the project OneDev codebase, created by the CycloneDX Maven Plugin.

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
        <a href="./onedev-cyclonedx.json">onedev (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <h3>
        <a href="./onedev-cyclonedx.xml">onedev (xml)</a>
    </h3>
    <div id="xml-container">
        <pre id="xml-display"></pre>
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
            .catch(error => console.error('Error fetching JSON:', error));
        }
    display_json('./onedev-cyclonedx.json', 'json-display');
    display_xml('./onedev-cyclonedx.xml', 'xml-display');
    </script>
</body>
</html>

## References

* CycloneDX. (n.d.-a). GitHub - CycloneDX/cyclonedx-maven-plugin: Creates CycloneDX Software Bill of Materials (SBOM) from Maven projects. GitHub. [https://github.com/CycloneDX/cyclonedx-maven-plugin](https://github.com/CycloneDX/cyclonedx-maven-plugin)

* Theonedev. (n.d.). GitHub - theonedev/onedev: Git Server with CI/CD, Kanban, and Packages. Seamless integration. Unparalleled experience. GitHub. [https://github.com/theonedev/onedev](https://github.com/theonedev/onedev)

