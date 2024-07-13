# Creating SBOMs from Ruby Projects

## Introduction

This tutorial illustrates how to produce an SBOM from Ruby projects using the Cyclonedx-Ruby-Gem CLI.

## Requirements

* Ruby
* Gem Dependency Manager

## Installation

Install CycloneDX-Ruby with the command:

```bash
gem install cyclonedx-ruby
```

Verify installation with the command:

```bash
cyclonedx-ruby -h
```

You should see the resultant output:

```bash
Usage: cyclonedx-ruby [options]
    -v, --[no-]verbose               Run verbosely
    -p, --path path                  (Required) Path to Ruby project directory
    -o, --output bom_file_path       (Optional) Path to output the bom.xml file to
    -h, --help                       Show help message
```

## Usage

Navigate to a Ruby project.

Run the command:

```bash
cyclonedx-ruby -p .
```


A "bom.xml" file should appear in the same directory. 


Alternatively, the ```-p``` and ```-o``` flags can be used to select a project folder path, and output the SBOM to a custom file path, respectively.


## Notes

* Certain metadata components of the produced SBOM may be missing, such as SBOM type, Package type, Name and Version.

## References

* CycloneDX. (2023). CycloneDX-Ruby-Gem. [https://github.com/CycloneDX/cyclonedx-ruby-gem](https://github.com/CycloneDX/cyclonedx-ruby-gem)
