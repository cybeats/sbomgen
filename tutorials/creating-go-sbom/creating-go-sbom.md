# Creation of SBOMs from Go Projects

## Introduction

This tutorial illustrates how to produce an SBOM using Go projects using the CycloneDX-Gomod CLI.

## Requirements

* [Go Language](https://go.dev/dl/)

## Installation

Navigate to the [releases](https://github.com/CycloneDX/cyclonedx-gomod/releases) page of the CycloneDX-Gomod CLI and download the tar.gz file specified to your system. 

Unzip the file

Inside the unzipped folder there should be three files:

* A README.

* A LICENSE file.

* The CycloneDX-Gomod binary.

ensure the binary is executable, and optionally, place it in your computers PATH.

verify the binary's functionality by running:

```bash
cyclonedx-gomod --help
```

the output should resemble

```bash
USAGE
  cyclonedx-gomod <SUBCOMMAND> [FLAGS...] [<ARG>...]

cyclonedx-gomod creates CycloneDX Software Bill of Materials (SBOM) from Go modules.

Multiple subcommands are offered, each targeting different use cases:

- SBOMs generated with "app" include only those modules that the target application
  actually depends on. Modules required by tests or packages that are not imported
  by the application are not included. Build constraints are evaluated, which enables
  a very detailed view of what's really compiled into an application's binary.
  
- SBOMs generated with "mod" include the aggregate of modules required by all 
  packages in the target module. This optionally includes modules required by
  tests and test packages. Build constraints are NOT evaluated, allowing for 
  a "whole picture" view on the target module's dependencies.

- "bin" offers support for generating rudimentary SBOMs from binaries built with Go modules.

Distributors of applications will typically use "app" and provide the resulting SBOMs
alongside their application's binaries. This enables users to only consume SBOMs for
artifacts that they actually use. For example, a Go module may include "server" and
"client" applications, of which only the "client" is distributed to users. 
Additionally, modules included in "client" may differ, depending on which platform 
it was compiled for.

Vendors or maintainers may choose to use "mod" for internal use, where it's too
cumbersome to deal with many SBOMs for the same product. Possible use cases are: 
- Tracking of component inventory
- Tracking of third party component licenses
- Continuous monitoring for vulnerabilities
"mod" may also be used to generate SBOMs for libraries.

SUBCOMMANDS
  app      Generate SBOMs for applications
  bin      Generate SBOMs for binaries
  mod      Generate SBOMs for modules
  version  Show version information
```

## Usage

Navigate to the Go project in question. 

There are three pathways to generating an SBOM using CycloneDX-Gomod; through an application (app), through a binary (bin) and through a go module (mod). 

### Application

To generate a json sbom run:

```bash
cyclonedx-gomod app -json=true -output <sbom-name>.json <path-to-application (defaults to current directory)>
```

### Binary

This is use for binaries created from go projects.

To generate a json sbom run:

```bash
cyclonedx-gomod bin -json=true -output <sbom-name>.json <path-to-binary-file>
```

### Module

This is for projects that are go modules, i.e. contain a go.mod file.

To generate a json sbom run:

```bash
cyclonedx-gomod mod -json=true -output <sbom-name>.json <path-to-module (defaults to current directory)>
``` 


## Notes

* Testing done on Ubuntu 20.04

* For applications, cyclonedx-gomod appears to want a "main" folder, and will throw errors otherwise. Usually, there is a go.mod file present so defaulting to using the mod pathway appears prudent.


## References

* CycloneDX. (2023). cyclonedx-gomod. [https://github.com/CycloneDX/cyclonedx-gomod](https://github.com/CycloneDX/cyclonedx-gomod)

