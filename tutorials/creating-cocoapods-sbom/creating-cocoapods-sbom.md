# Creating SBOMs from Cocoapods Projects

## Introduction

This tutorial illustrates how to produce an SBOM from Cocoapods based projects using the Cyclonedx-Cocoapods plugin.

## Requirements

* Ruby

* Gem package manager

* Cocoapods dependency manager

## Installation

Install cyclonedx-cocoapods via the command:

```bash
gem install cyclonedx-cocoapods
```

Verify installation with the command:

```bash
cyclonedx-cocoapods -h
```

You should get the output:

```bash
Generates a BOM with the given parameters. BOM component metadata is only generated if the component's name, version, and type are provided using the --name, --version, and --type parameters.
[version 1.1.2]

USAGE
  cyclonedx-cocoapods [options]

OPTIONS
        --[no-]verbose               Show verbose debugging output
    -h, --help                       Show help message

  BOM Generation
    -p, --path path                  Path to CocoaPods project directory (default: current directory)
    -o, --output bom_file_path       Path to output the bom.xml file to (default: "bom.xml")
    -b, --bom-version bom_version    Version of the generated BOM (default: "1")
    -x, --exclude-test-targets       Eliminate Podfile targets whose name contains the word "test"

  Component Metadata
    -n, --name name                  (If specified version and type are also required) Name of the component for which the BOM is generated
    -v, --version version            Version of the component for which the BOM is generated
    -t, --type type                  Type of the component for which the BOM is generated (one of application|framework|library|container|operating-system|device|firmware|file)
    -g, --group group                Group of the component for which the BOM is generated

```
## Usage

Navigate to the desired Cocoapods project, and run:


```bash
cyclonedx-cocoapods
```

A "bom.xml" file will appear in the local directory. Alternatively, the ```-o``` flag can be used to output to a custom file path.


Additionally, SBOM metadata can be input via flags:

* ```-n```. SBOM name

* ```-v```. SBOM version

* ```-t```. SBOM type

* ```-g```. SBOM group


Without these additions, the SBOM may be valid, but incomplete.

## Notes

* run commands in superuser/sudo (MacOS/Linux) or admin (Windows).

* In case of ActiveSupport Error:

```bash
  gem uninstall activesupport

  gem install activesupport -v 7.0.8
```

## References

* CycloneDX. (2023). CycloneDX-Cocoapods. [https://github.com/CycloneDX/cyclonedx-cocoapods](https://github.com/CycloneDX/cyclonedx-cocoapods)

* After updating cocoapods to 1.13.0 it throws error. Stack Overflow. (1AD). [https://stackoverflow.com/questions/77236339/after-updating-cocoapods-to-1-13-0-it-throws-error](https://stackoverflow.com/questions/77236339/after-updating-cocoapods-to-1-13-0-it-throws-error)


