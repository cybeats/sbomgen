# Creating SBOMs from Distros

## Introduction

This tutorial illustrates how to create an SBOM for a distribution, using the distro2SBOM CLI.

## Requirements

* Bash

* Python

* dpkg (optional)

* rpm (optional)

## Installation

Install distro2sbom through the command:

```bash
pip install distro2sbom
```

or 

```bash
pipx install distro2sbom
```

Verify installation by running the command:

```bash
distro2sbom -h
```

You should get the output:

```bash
usage: distro2sbom [-h] [--distro {rpm,deb,windows,auto}] [-i INPUT_FILE] [-n NAME] [-r RELEASE] [-p PACKAGE] [-s]
                   [--root ROOT] [--distro-namespace DISTRO_NAMESPACE]
                   [--product-type {application,framework,library,container,operating-system,device,firmware,file}]
                   [--product-name PRODUCT_NAME] [--product-version PRODUCT_VERSION] [--product-author PRODUCT_AUTHOR] [-d]
                   [--sbom {spdx,cyclonedx}] [--format {tag,json,yaml}] [-o OUTPUT_FILE] [-V]

Distro2Sbom generates a Software Bill of Materials for the specified package or distribution.

options:
  -h, --help            show this help message and exit
  -V, --version         show program's version number and exit

Input:
  --distro {rpm,deb,windows,auto}
                        type of distribution (default: auto)
  -i INPUT_FILE, --input-file INPUT_FILE
                        name of distribution file
  -n NAME, --name NAME  name of distribution
  -r RELEASE, --release RELEASE
                        release identity of distribution
  -p PACKAGE, --package PACKAGE
                        identity of package within distribution
  -s, --system          generate SBOM for installed system
  --root ROOT           location of distribution packages
  --distro-namespace DISTRO_NAMESPACE
                        namespace for distribution

Product:
  --product-type {application,framework,library,container,operating-system,device,firmware,file}
                        type of product
  --product-name PRODUCT_NAME
                        name of product
  --product-version PRODUCT_VERSION
                        version of product
  --product-author PRODUCT_AUTHOR
                        author of product

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

### From System

To create an SBOM from your OS distribution, run the command:

```bash
distro2sbom --distro <distro-type> --system --output-file <output-file-name> --sbom <sbom-type>
```

An SBOM file with your given name should appear in your working directory.

### From Distribution File

To create an SBOM from an OS distribution file, do the following:

Create a distribution file through the following means:

#### Debian Based Distros
```bash
dpkg -l > <output-filename>
```
#### RPM Based Distros
```bash
rpm -qa | sort > <output-filename>
```
#### Windows
```bash
get-wmiobject -class win32_product | Out-file -filePath <output-filename>
```
Then, build an SBOM by running the following command:

```bash
distro2sbom --distro <distro-type> --name <distro name> --release <distro release> --input-file <distribution-file> --sbom <sbom-type> --output-file <output-file-name>
```

### From Individual Installed Package

```bash
distro2sbom --distro <distro-type> --name <distro name> --release <distro release> --package <installed-package> --sbom <sbom-type> --output-file <output-file-name>
```

With:

* ```<sbom-type>``` being CycloneDX or SPDX.
* ```<distro-type>``` being rpm,deb,windows or auto (autodetect).
* ```<distro name>``` being the distribution name, e.g. Ubuntu.
* ```<distro release>``` being the distribution release, e.g. 24.04.
* The additional ```<--format>``` flag can be used to specify output format as json, tag or yaml for SPDX SBOMs.

After running one of the previous commands, an SBOM file with your given name should appear in your working directory.

## Notes

* Certain metadata information may be missing from the sbom.

* This tool also works for Docker images (tested on image Ubuntu 22.04).

* This tool's performance on the Raspberry Pi, appears to be buggy.

* CPE's of top level components may not adhere to the standard CPE specification.

## Example SBOM

This section illustrates CycloneDX JSONs of the Ubuntu distribution, and the Zip DEB package created via distro2SBOM. 

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
        <a href="./ubuntu_24.04.cdx.json">Distro Ubuntu</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./zip.cdx.json">Package Zip</a>
    </h3>
    <div id="json-container">
        <pre id="json-display2"></pre>
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
    display_json('./ubuntu_24.04.cdx.json', 'json-display1');
    display_json('./zip.cdx.json', 'json-display2');
    </script>
</body>
</html>


## References

Anthony Harrison. (2023). Distro2sbom. [https://github.com/anthonyharrison/distro2SBOM/tree/main](https://github.com/anthonyharrison/distro2SBOM/tree/main)




