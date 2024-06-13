# Converting SBOMs with Sbom-Convert

## Introduction

This tutorial illustrates how to convert an SBOM from CycloneDX format to SPDX format using the ```sbom-convert``` cli tool.

## Requirements

One of:

* Zip
* Tar
* Apt
* Rpm

## Installation

### With Package

#### Deb

* Download the appropriate ```.deb``` file for your architecture from the repository [releases](https://github.com/protobom/sbom-convert/releases).
* Install the package by running:
    ```bash
    sudo apt install ./sbom-convert_<version>_<architecture>.deb
    ```

#### Rpm

* Download the appropriate ```.rpm``` file for your architecture from the repository [releases](https://github.com/protobom/sbom-convert/releases).
* Install the package by running:
    ```bash
    sudo rpm -i ./sbom-convert_<version>_<architecture>.rpm
    ```

### With Zip/Tar

* Download the appropriate zip/tar file for your operating system, and architecture.
* Unzip the compressed file and enter the resulting folder. 
* Copy the ```sbom-convert``` executable to a folder on your $PATH.



Verify  installation byh running:

```bash
sbom-convert -h
```

You should see the resultant output:

```bash
Convert between CycloneDX and SPDX, or vice versa, including different specification versions.

Usage:
  sbom-convert convert [flags]

Aliases:
  convert, cv

Examples:

sbom-convert convert sbom.cdx.json         			output to stdout in inverse format
sbom-convert convert sbom.spdx.json -o sbom.cdx.json            output to a file
sbom-convert convert sbom.cdx.json -f spdx-2.3         		select to a specific format
sbom-convert convert sbom.cdx.json -f spdx -e text   	        select specific encoding
	 				

Flags:
  -e, --encoding string   the output encoding [spdx: [text, json] cyclonedx: [json] (default "json")
  -f, --format string     the output format [spdx, spdx-2.3, cyclonedx, cyclonedx-1.0, cyclonedx-1.1, cyclonedx-1.2, cyclonedx-1.3, cyclonedx-1.4, cyclonedx-1.5]
  -h, --help              help for convert
  -o, --output string     path to write the converted SBOM

Global Flags:
  -c, --config string   path to config file
  -v, --verbose count   log verbosity level (-v=info, -vv=debug, -vvv=trace)

```
## Usage

Run the command:

```bash
sbom-convert convert <file> -f <format> -e <encoding> -o <output>
```

Where:

* ```file``` is the SBOM input file.
* ```format``` is the SBOM output format e.g. spdx, spdx-2.3, cyclonedx, cyclonedx-1.4.
* ```encoding``` is the SBOM encoding format e.g. json, text.
* ```output``` is the output file name.

## Notes

This application appears to be primarily Linux oriented, and built to run on that operating system.

## References

* https://github.com/protobom/sbom-convert 