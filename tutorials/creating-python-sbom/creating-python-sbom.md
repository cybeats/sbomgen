# Creating SBOMs from Python Projects

## Introduction

This tutorial illustrates how to create an SBOM for Python projects using the CycloneDX-Python CLI and the Jake CLI

## Requirements

* Python 3

* Pip

* Poetry (optional)

* Pipenv (optional)


## Installation

### CycloneDX-Python

To install run:

```bash
pip install cyclonedx-bom
```

or

```bash
pipx install cyclonedx-bom
```
or 

```bash
poetry add cyclonedx-bom
```

verify installation by running in the terminal:

```bash
cyclonedx-py --help
```

The resultant output should be:

```bash
usage: cyclonedx-py [-h] [--version] <command> ...

Creates CycloneDX Software Bill of Materials (SBOM) from Python projects and environments.

positional arguments:
  <command>
    environment
                Build an SBOM from Python (virtual) environment
    requirements
                Build an SBOM from Pip requirements
    pipenv      Build an SBOM from Pipenv manifest
    poetry      Build an SBOM from Poetry project

options:
  -h, --help    show this help message and exit
  --version     show program's version number and exit  
```

verifying correct installation.

### Jake

To install run:

```bash
pip install jake
```

or

```bash
poetry add jake
```

or

```bash
pipx install jake
```

verify installation by running in the terminal:

```bash
jake --help
```

The resultant output should be:

```bash
usage: jake [-h] [-v] [-w] [-X]  ...

Put your Python dependencies in a chokehold

optional arguments:
  -h, --help       show this help message and exit
  -v, --version    show which version of jake you are running
  -w, --warn-only  prevents exit with non-zero code when issues have been detected
  -X               enable debug output

Jake sub-commands:
  
    iq             perform a scan backed by Sonatype Nexus Lifecycle
    ddt            perform a scan backed by OSS Index
    sbom           generate a CycloneDX software-bill-of-materials (no vulnerabilities)
```

verifying correct installation


## Usage

Navigate to the Python project in question:

### CycloneDX-Python

To create an SBOM, run one of the following commands:

#### Environment (recommended)
Creates SBOMs from Python (virtual) environments

```bash
cyclonedx-py environment --of <sbom-output-format (json or xml)> -o <sbom-output-name>.<sbom-output-format>
```
or in case on having a virtual environment folder

```bash
cyclonedx-py environment --of <sbom-output-format (json or xml)> -o <sbom-output-name>.<sbom-output-format> 'path/to/venv'
```

#### Requirements.txt
Creates SBOMs from Python requirements.txt files

```bash
cyclonedx-py requirements --of <sbom-output-format (json or xml)> -o <sbom-output-name>.<sbom-output-format> <requirements.txt-file-name>
```

#### Poetry
Creates SBOMs from Poetry projects

```bash
cyclonedx-py poetry --of <sbom-output-format (json or xml)> -o <sbom-output-name>.<sbom-output-format>
```

#### Pipenv

```bash
cyclonedx-py pipenv --of <sbom-output-format (json or xml)> -o <sbom-output-name>.<sbom-output-format>
```

### Jake

To create an SBOM, run the following command:

```bash
jake sbom --output-format <sbom-output-format (json or xml)> -o <sbom-output-name>.<sbom-output-format>
```


## Notes

* Tests run on Ubuntu 20.04 and Ubuntu 24.04.

* SBOMs validated using [CycloneDX-CLI](https://github.com/CycloneDX/cyclonedx-cli). Both returned successful.

### CycloneDX-Python

* Some information such as the project name, version, and type appears to be absent in the CycloneDX-Python generated SBOM.

### Jake

* Some information such as the project name, version, and type appears to be absent in the Jake generated SBOM.

## Example SBOM

This section illustrates CycloneDX JSON SBOMs of the PlatformIO Core codebase, created from CycloneDX-Python and Jake.

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
        <a href="./pio-core.cdx.json">PlatformIO-Core (CycloneDX-Python)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./pio-core.jake.cdx.json">PlatformIO-Core (Jake)</a>
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
    display_json('./pio-core.cdx.json', 'json-display1');
    display_json('./pio-core.jake.cdx.json', 'json-display2');
    </script>
</body>
</html>



## References

* Sonatype-Nexus-Community. (2023). Jake. [https://github.com/sonatype-nexus-community/jake](https://github.com/sonatype-nexus-community/jake)

* CycloneDX. (2023). CycloneDX-Python. [https://github.com/CycloneDX/cyclonedx-python](https://github.com/CycloneDX/cyclonedx-python)

* CycloneDX. (2023). cyclonedx-cli. [https://github.com/CycloneDX/cyclonedx-cli](https://github.com/CycloneDX/cyclonedx-cli)

* Platformio. (n.d.). GitHub - platformio/platformio-core: Your Gateway to Embedded Software Development Excellence :alien: GitHub. [https://github.com/platformio/platformio-core](https://github.com/platformio/platformio-core)

