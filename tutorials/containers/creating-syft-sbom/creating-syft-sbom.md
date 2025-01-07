# Creating SBOMs From Images Using Syft

## Introduction

This tutorial illustrates how to create an sbom from a container image using the Syft CLI.

## Requirements

### All

A container software e.g.:

* Docker

* Podman

### Linux

* Curl

### Windows

* Chocolatey

* Scoop

### MacOS

* Homebrew

## Installation

Run the following command:

### Linux

```bash
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
```

### MacOS

```bash
brew install syft
```

### Windows

```bash
choco install syft -y
```

or

```bash
scoop install syft
```


## Usage

To generate an SBOM, run the command:

```bash
syft <image>
```

Where image is:

* A remote image from a repository.

* A local image dictionary.

* A local compressed image dictionary.

An SBOM will be printed to your terminal.

To create an SBOM in a standardized SBOM format, use the ```-o``` flag:

```bash
syft <image> -o <format>
```

Where ```<format>``` is one of:

* ```cyclonedx-json``` 
* ```cyclonedx-xml``` 
* ```spdx-json```
* ```spdx-tag-value```
* ```syft-json```
* ```syft-table```
* ```syft-text```
* ```github-json```

To output the SBOM to a file, run the above command but add ```=<output_file>``` to the ```-o``` format:

```bash
syft <image> -o <format>=<output_file_name>
```

An SBOM file of your specified name and format will be created.

## Notes

In Linux, sudo may be required.

## Example SBOM

This section illustrates CycloneDX and SPDX JSON SBOMs of an Nginx image, produced via Syft.

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
        <a href="./nginx_image_sbom.cdx.json">nginx image cdx (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./nginx_image_sbom.spdx.json">nginx image spdx (json)</a>
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
    display_json('./nginx_image_sbom.cdx.json', 'json-display1');
    display_json('./nginx_image_sbom.spdx.json', 'json-display2');
    </script>
</body>
</html>


## References 

* Anchore. (n.d.). Anchore/syft: CLI Tool and library for generating a software bill of materials from container images and filesystems. GitHub. [https://github.com/anchore/syft](https://github.com/anchore/syft) 