# Creating SBOMs from Python Projects

## Introduction

This tutorial illustrates how to create an SBOM for Python projects using the CycloneDX-Python CLI and the Jake CLI

## Requirements

* Python 3

* Pip

* Poetry (optional)


## Installation

### CycloneDX-Python

To install run:

```bash
pip install cyclonedx-bom
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
usage: cyclonedx-py [-h] (-c | -cj | -e | -p | -pip | -r) [-i FILE_PATH] [--format {xml,json}]
                    [--schema-version {1.4,1.3,1.2,1.1,1.0}] [-o FILE_PATH] [-F] [-pb] [-X]

CycloneDX SBOM Generator

optional arguments:
  -h, --help            show this help message and exit
  -c, --conda           Build a SBOM based on the output from `conda list --explicit` or `conda list --explicit
                        --md5`
  -cj, --conda-json     Build a SBOM based on the output from `conda list --json`
  -e, --e, --environment
                        Build a SBOM based on the packages installed in your current Python environment (default)
  -p, --p, --poetry     Build a SBOM based on a Poetry poetry.lock's contents. Use with -i to specify absolute path
                        to a `poetry.lock` you wish to use, else we'll look for one in the current working directory.
  -pip, --pip           Build a SBOM based on a PipEnv Pipfile.lock's contents. Use with -i to specify absolute path
                        to a `Pipfile.lock` you wish to use, else we'll look for one in the current working
                        directory.
  -r, --r, --requirements
                        Build a SBOM based on a requirements.txt's contents. Use with -i to specify absolute path to
                        a `requirements.txt` you wish to use, else we'll look for one in the current working
                        directory.
  -X                    Enable debug output

Input Method:
  Flags to determine how this tool obtains its input

  -i FILE_PATH, --in-file FILE_PATH
                        File to read input from. Use "-" to read from STDIN.

SBOM Output Configuration:
  Choose the output format and schema version

  --format {xml,json}   The output format for your SBOM (default: xml)
  --schema-version {1.4,1.3,1.2,1.1,1.0}
                        The CycloneDX schema version for your SBOM (default: 1.4)
  -o FILE_PATH, --o FILE_PATH, --output FILE_PATH
                        Output file path for your SBOM (set to '-' to output to STDOUT)
  -F, --force           If outputting to a file and the stated file already exists, it will be overwritten.
  -pb, --purl-bom-ref   Use a component's PURL for the bom-ref value, instead of a random UUID

```

verifying correct installation

### Jake

To install run:

```bash
pip install jake
```

or

```bash
poetry add jake
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

To create an SBOM, run the following command:

```bash
cyclonedx-py -e --format <sbom-output-format (json or xml) -o <sbom-output-name>.<sbom-output-format>
```

Additionally, the CycloneDX-Python tool allows the user to specify the manifest input used to build the SBOM e.g.

#### Requirements.txt

```bash
cyclonedx-py -r --format <sbom-output-format (json or xml) -o <sbom-output-name>.<sbom-output-format>
```

#### Poetry

```bash
cyclonedx-py -p --format <sbom-output-format (json or xml) -o <sbom-output-name>.<sbom-output-format>
```

#### Pip

```bash
cyclonedx-py -pip --format <sbom-output-format (json or xml) -o <sbom-output-name>.<sbom-output-format>
```

#### Conda

```bash
cyclonedx-py -c --format <sbom-output-format (json or xml) -o <sbom-output-name>.<sbom-output-format>
```

### Jake

To create an SBOM, run the following command:

```bash
jake sbom --output-format <sbom-output-format (json or xml) -o <sbom-output-name>.<sbom-output-format>
```


## Notes

* Tests run on Ubuntu 20.04.

* SBOMs validated using [CycloneDX-CLI](https://github.com/CycloneDX/cyclonedx-cli). Both returned successful.

* SBOMs tested in Cybeats Sbom Studio. Both returned identical vulnerability counts.

### CycloneDX-Python

* Some information such as the project name, version, and type appears to be absent in the CycloneDX-Python generated SBOM.

### Jake

* Some information such as the project name, version, and type appears to be absent in the Jake generated SBOM.

## Example SBOM

This section illustrates a CycloneDX JSON SBOM of the PlatformIO codebase, created from CycloneDX-Python.

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
        <a href="./sbom-pio.json">platformio</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <script>
        fetch('./sbom-pio.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('json-display').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    </script>
</body>
</html>



## References

* Sonatype-Nexus-Community. (2023). Jake. [https://github.com/sonatype-nexus-community/jake](https://github.com/sonatype-nexus-community/jake)

* CycloneDX. (2023). CycloneDX-Python. [https://github.com/CycloneDX/cyclonedx-python](https://github.com/CycloneDX/cyclonedx-python)

* CycloneDX. (2023). cyclonedx-cli. [https://github.com/CycloneDX/cyclonedx-cli](https://github.com/CycloneDX/cyclonedx-cli)

* Platformio. (n.d.). GitHub - platformio/platformio-core: Your Gateway to Embedded Software Development Excellence :alien: GitHub. [https://github.com/platformio/platformio-core](https://github.com/platformio/platformio-core)

