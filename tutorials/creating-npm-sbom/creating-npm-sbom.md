# Creating SBOMs from npm Projects

## Introduction

SBOMs can be created from npm based projects. This tutorial illustrates how to create a CycloneDX  SBOM from an npm project using the cyclonedx- node-npm cli.

## Note(s)

Testing done on Ubuntu 20.04 x86_64.

## Prerequisites

node >= 14

npm 6 - 10

## Installation


Install the cli by the command


```bash
npm install --global @cyclonedx/cyclonedx-npm
```

Alternatively, npx can be used via:

```bash
npx --package @cyclonedx/cyclonedx-npm --call exit
```

## Running

Navigate to the npm project folder. 


Create the SBOM  by running the following within the npm project:

```bash
cyclonedx-npm –output-file <set-sbom-name.set-output-format> –output-format <set-output-format>
```

e.g.

```bash
cyclonedx-npm  –output-file project-sbom.json –output-format json
```

The sbom file will be located in the folder. However, it is possible to specify another directory by specifying a full path in the –output-file flag.

e.g.

```bash
cyclonedx-npm –output-file /home/directory-for-sboms/project-sbom.json –output-format json
```

Note that cyclonedx-node-npm requires a manifest file, i.e. a package.json file.

## References

* CycloneDX. (2023). cyclonedx-node-npm. [https://github.com/CycloneDX/cyclonedx-node-npm](https://github.com/CycloneDX/cyclonedx-node-npm)