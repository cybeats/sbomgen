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

```curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin```

### MacOS

```brew install syft```

### Windows

```choco install syft -y```

or

```scoop install syft```


## Usage

To generate an SBOM, run the command:

```syft <image>```

Where image is:

* A remote image from a repository.

* A local image dictionary.

* A local compressed image dictionary.

An SBOM will be printed to your terminal.

To create an SBOM in a standardized SBOM format, use the ```-o``` flag:

```syft <image> -o <format>```

Where format is one of:

* cyclonedx-json 
* cyclonedx-xml 
* spdx-json
* spdx-tag-value
* syft-json
* syft-table
* syft-text
* github-json

To output the SBOM to a file, run the above command but add ```=<output_file>``` to the ```-o``` format:

```syft <image> -o <format>=<output_file_name>```

An SBOM file of your specified name and format will be created.

## Notes

In Linux, sudo may be required.

## References

https://github.com/anchore/syft 