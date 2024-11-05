# Creating SBOMs from Distros

## Introduction

This tutorial illustrates how to create an SBOM for a distribution, using distro2sbom.

## Requirements

* Bash

* Python

## Installation

Install distro2sbom through the command:

```bash
pip install distro2sbom
```

Verify installation by running the command:

```bash
distro2sbom -h
```

You should get the output:

```bash
usage: distro2sbom [-h] [--distro {rpm,deb,windows,auto}] [-i INPUT_FILE] [-n NAME] [-r RELEASE] [-p PACKAGE] [-s] [-d] [--sbom {spdx,cyclonedx}] [--format {tag,json,yaml}] [-o OUTPUT_FILE] [-V]

Distro2Sbom generates a Software Bill of Materials for the specified package or distribution.

optional arguments:
  -h, --help            show this help message and exit
  -V, --version         show program's version number and exit

Input:
  --distro {rpm,deb,windows,auto}
                        type of distribution
  -i INPUT_FILE, --input-file INPUT_FILE
                        name of distribution file
  -n NAME, --name NAME  name of distribution
  -r RELEASE, --release RELEASE
                        release identity of distribution
  -p PACKAGE, --package PACKAGE
                        identity of package within distribution
  -s, --system          generate SBOM for installed system

Output:
  -d, --debug           add debug information
  --sbom {spdx,cyclonedx}
                        specify type of sbom to generate (default: spdx)
  --format {tag,json,yaml}
                        specify format of software bill of materials (sbom) (default: tag)
  -o OUTPUT_FILE, --output-file OUTPUT_FILE
                        output filename (default: output to stdout)
```

## Usage

To create an SBOM from your os distribution, run the command:

```bash
distro2sbom --distro auto --system --format json --output-file <output-file-name> --sbom <sbom-type>
```

With ```<sbom-type>``` being CycloneDX or SPDX.

An SBOM file with your given name should appear in your working directory.


## Notes

* Certain metadata information may be missing from the sbom.

* This tool also works for docker images (tested on image Ubuntu 22.04).

* This tool's performance on the Raspberry Pi, appears to be buggy.

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
        <a href="./sbom_distro.json">distro Ubuntu</a>
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
            .catch(error => console.error('Error fetching JSON:', error));
        }
    display_json('./sbom_distro.json', 'json-display');
    </script>
</body>
</html>


## References

Anthony Harrison. (2023). Distro2sbom. [https://github.com/anthonyharrison/distro2SBOM/tree/main](https://github.com/anthonyharrison/distro2SBOM/tree/main)




