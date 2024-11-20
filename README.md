<!-- <html>
<img src="images/cybeats.logo.svg" id="object1" alt="cybeats_logo" height="100" width="900">
</html> -->

<br>

# List of SBOM Generation Tools

Tutorials of these tools are featured in the ``tutorials/`` folder.

## Table of Contents

* [Java](#java)
* [Node.js](#nodejs)
* [Objective-C/Swift](#objective-cswift)
* [.NET](#net)
* [Python](#python)
* [PHP](#php)
* [Go](#go)
* [Rust](#rust)
* [Erlang](#erlang)
* [Package or System](#package-or-system)
* [Multi-Language](#multi-language)
* [Cryptographic Bill of Materials](#cryptographic-bill-of-materials)
* [SBOM Conversion](#sbom-conversion)
* [SBOM Validation](#sbom-validation)
* [Containers](#containers)
* [Binary Files](#binary-files)
* [Microsoft Sbom Tool](#use-microsoft-sbom-tool-to-generate-spdx-sbom-from-linux-kernel-source-code)
* [Additional Tools](#additional-tools)
* [CSV Conversion](#csv-conversion)

## Java

### Maven

* To generate SBOM for Java Maven projects, use [Cyclonedx Maven Plugin](tutorials/creating-maven-sbom/creating-maven-sbom.md).

### Gradle

* To generate SBOM for Java Gradle projects, use [Cyclonedx Gradle Plugin](tutorials/creating-gradle-sbom/creating-gradle-sbom.md).

## Node.js

### NPM

* To generate SBOM for Node.js NPM projects, use [Cyclonedx Node Module](tutorials/creating-npm-sbom/creating-npm-sbom.md).

### Yarn
 
* To generate SBOM for Node.js Yarn projects, use [Cyclonedx Yarn Module](tutorials/creating-yarn-sbom/creating-yarn-sbom.md).

## Objective-C/Swift

### Cocoapod

* To generate SBOM for cocoapod projects, use [Cyclonedx Cocoapod Plugin](tutorials/creating-cocoapods-sbom/creating-cocoapods-sbom.md).

## .NET

### NuGet

* To generate SBOM for .NET NuGet projects, use the [Cyclonedx module for .NET](tutorials/creating-csharp-sbom/creating-csharp-sbom.md).

## Python

To generate SBOM for Python projects, use:

* CycloneDX [Python SBOM Generation Tool](tutorials/creating-python-sbom/creating-python-sbom.md).
* [Jake](tutorials/creating-python-sbom/creating-python-sbom.md).

## PHP

### Composer

* To generate SBOM for PHP Composer projects, use CycloneDX [PHP Composer Plugin](tutorials/creating-php-sbom/creating-php-sbom.md).

## Go

### Gomod

* To generate SBOM for Golang projects with gomod, use [CycloneDX-Gomod tool](tutorials/creating-go-sbom/creating-go-sbom.md).

## Rust

To generate SBOMs for Rust projects, you can use:

* [Cyclonedx-Rust-Cargo](tutorials/creating-rust-sbom/creating-rust-sbom.md).
* [Cargo-Sbom](tutorials/creating-rust-sbom/creating-rust-sbom.md).

## Erlang

### Rebar3

* To generate SBOM for Erlang Rebar3 projects, use the [Rebar3_SBOM](tutorials/creating-erlang-sbom/creating-erlang-sbom.md) tool.

## Package or System

### distro2sbom

* To generate SBOM for package or system, use the [Distro2SBOM](tutorials/creating-distro-sbom/creating-distro-sbom.md) tool.

## Multi-Language

* [Cdxgen](tutorials/multi-lang/cdxgen-tool/creating-cdxgen-sbom.md) is a tool used to create SBOMs from a variety of languages and frameworks including Python, Java, Node.js/Javascript, Rust, Elixir, etc.
* Microsoft [Sbom-Tool](tutorials/multi-lang/microsoft-sbom-tool/creating-microsoft-sbom.md) is capable of auto-detecting NPM, NuGet, PyPI, CocoaPods, Maven, Golang, Rust Crates, RubyGems, Linux packages within containers, Gradle, Ivy, GitHub public repositories, and more through Component Detection and generates SBOMs for the project.
* The GitHub [gh CLI SBOM Extension](tutorials/multi-lang/github-gh-sbom/creating-gh-sbom.md) is capable of creating SBOMs from a variety of languages, once the project is in a GitHub repository.

## Cryptographic Bill of Materials

* A Cryptographic Bill of Materials (CBOM) can be created using the [cryptobom-forge](tutorials/cbom/creating-cbom/creating-cryptographic-bill-of-materials.md) CLI.
* A CBOM can be created using the SonarQube [Sonar Cryptography Plugin](tutorials/cbom/creating-sonar-cbom/creating-sonarqube-cbom.md).

## SBOM Validation

Validation of SBOMs can be performed with:

* The [CycloneDX](tutorials/validation-of-sboms/validation-of-sboms.md) CLI
* The [SPDX Tools](tutorials/validation-of-sboms/validation-of-sboms.md) CLI

## Containers

SBOMs can be created from containers using the following tools:

* [Tern](tutorials/containers/creating-tern-sbom/creating-tern-sbom.md)
* [Syft](tutorials/containers/creating-syft-sbom/creating-syft-sbom.md)
* [Bom](tutorials/containers/creating-kubernetes-sbom/creating-kubernetes-sbom.md) (Kubernetes)
* [Docker Scout SBOM](tutorials/containers/creating-docker-sbom/creating-docker-sboms.md)

## Binary Files

SBOMs can be created from binary files using the following tools:

* [Blint](tutorials/binary-sbom/creating-binary-sbom-blint/creating-binary-sbom-blint.md)
* [Surfactant](tutorials/binary-sbom/creating-binary-sbom-surfactant/creating-binary-file-sbom.md)


## CSV Conversion

* SBOMs can be created from CSV/Excel documents using the [CSV2CDX](tutorials/creating-sbom-from-csv/creating-csv2cdx-sbom/creating-csv2cdx-sbom.md) tool.

* VEXs can be created from CSV/Excel documents using the [CSV2VEX](tutorials/creating-sbom-from-csv/creating-csv2vex-vex/creating-csv2vex-vex.md) tool.