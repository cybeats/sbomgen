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

## References 

* Anchore. (n.d.). Anchore/syft: CLI Tool and library for generating a software bill of materials from container images and filesystems. GitHub. [https://github.com/anchore/syft](https://github.com/anchore/syft) 