# Creating SBOMs From Binary Files Using Sufactant

## Introduction

This tutorial illustrates how to create an SBOM from binary files (PE, ELF, MSI) using the Surfactant CLI.

## Requirements

* Python3

* Pip

## Installation

Install Surfactant by running:

```bash
pip install surfactant
```


## Usage

### Configuration File

Surfactant requires a configuration file to generate an SBOM. A basic configuration file can be created via the command:

```bash
surfactant create-config input-folder-path -o output-configuration-file-name.json
```

This results in a basic configuration file akin to that shown below:

```json
[
    {
        "extractPaths": ["input-folder-path"],
        "installPrefix": "/"
    }
]
```

This file should be modified to point to the location of selected binaries within that you wish to include in your SBOM, for example:

```json
[
    {
        "extractPaths": ["input-folder-path/subpath-to-binary-folder-1", "input-folder-path/subpath-to-binary-folder-2"],
        "installPrefix": "/"
    }
]
```



### Generating an SBOM

With a configuration file created, an SBOM can be created via the command:

```bash
surfactant generate <configuration-file-pathname> <output-file-pathname> --output_format <output-format>
```

Where ```output-format``` can be one of:

* cytrics
* csv
* cyclonedx
* spdx

An SBOM of your designated format will be created.

## Notes

* This SBOM generator, in addition to having the capacity to output SBOMs in CycloneDX and SPDX, generates SBOMs in CyTRICS, a BOM format created by the Office of Cybersecurity, Energy Security, and Emergency Response of the US Department of Energy.

* The SPDX generation functionality of this tool may not be reliable.

## Example SBOM

This section illustrates CycloneDX and Cytrics JSON SBOMs, one regular, one extensive, created from the Systemd binary, created via Surfactant.

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
        <a href="./Helics-3.5.2-linux_x86.cdx.json">Helics (cyclonedx-json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./Helics-3.5.2-linux_x86.cytrics.json">Helics (cytrics-json)</a>
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
            .catch(error => console.error('Error fetching XML:', error));
        }
    display_json('Helics-3.5.2-linux_x86.cdx.json', 'json-display1');
    display_json('Helics-3.5.2-linux_x86.cytrics.json', 'json-display2');
    </script>
</body>
</html>

## References

* Llnl. (n.d.). GitHub - LLNL/Surfactant: Modular framework for file information extraction and dependency analysis to generate accurate SBOMs. GitHub. [https://github.com/LLNL/Surfactant](https://github.com/LLNL/Surfactant)

* Cybersecurity testing for resilient industrial control systems. (n.d.). Energy.gov. [https://www.energy.gov/ceser/cybersecurity-testing-resilient-industrial-control-systems](https://www.energy.gov/ceser/cybersecurity-testing-resilient-industrial-control-systems)
