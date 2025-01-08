# Creating SBOMs from npm Projects

## Introduction

SBOMs can be created from npm based projects. This tutorial illustrates how to create a CycloneDX  SBOM from an npm project using the CycloneDX-Node-NPM cli.

## Note(s)

Testing done on Ubuntu 20.04 x86_64.

## Prerequisites

node >= 14

npm 6 - 10

## Installation


Install the cli by the command


```bash
npm install --global @cyclonedx/cyclonedx-npm
```

Alternatively, npx can be used via:

```bash
npx --package @cyclonedx/cyclonedx-npm --call exit
```

## Running

Navigate to the npm project folder. 


Create the SBOM  by running the following within the npm project:

```bash
cyclonedx-npm –output-file <set-sbom-name.set-output-format> –output-format <set-output-format>
```

e.g.

```bash
cyclonedx-npm  –output-file project-sbom.json –output-format json
```

The sbom file will be located in the folder. However, it is possible to specify another directory by specifying a full path in the –output-file flag.

e.g.

```bash
cyclonedx-npm –output-file /home/directory-for-sboms/project-sbom.json –output-format json
```

Note that Cyclonedx-Node-NPM requires a manifest file, i.e. a package.json file.

## Example SBOM

The following section illustrates a CycloneDX JSON SBOM of the project CycloneDX-Node-NPM codebase, created by Cyclonedx-Node-NPM.

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
        pre {
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h3>
        <a href="./cyclonedx-node-npm-sbom.json">cyclonedx-npm</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <script>
        fetch('./cyclonedx-node-npm-sbom.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('json-display').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    </script>
</body>
</html>


## References

* CycloneDX. (2023). cyclonedx-node-npm. [https://github.com/CycloneDX/cyclonedx-node-npm](https://github.com/CycloneDX/cyclonedx-node-npm)