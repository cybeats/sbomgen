# List of SBOM Generation Tools
Tutorials of these tools are featured in the ```tutorials/``` folder.


## Table of Contents
<details>
<summary>Contents</summary>

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
</details>

## Java
### Maven
* To generate SBOM for Java Maven projects, use [Cyclonedx Maven Plugin](https://github.com/CycloneDX/cyclonedx-maven-plugin).

### Gradle
* To generate SBOM for Java Gradle projects, use [Cyclonedx Gradle Plugin](https://github.com/CycloneDX/cyclonedx-gradle-plugin ). 

## Node.js
### NPM
* To generate SBOM for Node.js NPM projects, use [Cyclonedx Node Module](https://github.com/CycloneDX/cyclonedx-node-module).
### Yarn
*  To generate SBOM for Node.js Yarn projects, use [Cyclonedx Node Yarn Module](https://github.com/CycloneDX/cyclonedx-node-yarn). 


## Objective-C/Swift
### Cocoapod
* To generate SBOM for cocoapod projects, use [Cyclonedx Cocoapod Plugin](https://github.com/CycloneDX/cyclonedx-cocoapods). 
  

## .NET
### NuGet
* To generate SBOM for .NET NuGet projects, use the [Cyclonedx module for .NET](https://github.com/CycloneDX/cyclonedx-dotnet). 

## Python
To generate SBOM for Python projects, use:
* CycloneDX [Python SBOM Generation Tool](https://github.com/CycloneDX/cyclonedx-python).
* [Jake](https://github.com/sonatype-nexus-community/jake). 

 
## PHP
### Composer
* To generate SBOM for PHP Composer projects, use CycloneDX [PHP Composer Plugin](https://github.com/CycloneDX/cyclonedx-php-composer).
  

## Go
### Gomod
* To generate SBOM for Golang projects with gomod, use [CycloneDX-Gomod tool](https://github.com/CycloneDX/cyclonedx-gomod).
  

## Rust
To generate SBOMs for Rust projects, you can use:

* [Cyclonedx-Rust-Cargo](https://github.com/CycloneDX/cyclonedx-rust-cargo).
* [Cargo-Sbom](https://github.com/psastras/sbom-rs).
  
## Erlang
### Rebar3
* To generate SBOM for Erlang Rebar3 projects, use the [Rebar3_SBOM](https://github.com/voltone/rebar3_sbom) tool.
  

## Package or System
### distro2sbom
* To generate SBOM for package or system, use the [Distro2SBOM](https://github.com/anthonyharrison/distro2sbom) tool.
  
  
## Multi-Language
* [Cdxgen](https://github.com/CycloneDX/cdxgen) is a tool used to create SBOMs from a variety of languages and frameworks including Python, Java, Node.js/Javascript, Rust, Elixir, etc.

* Microsoft [Sbom-Tool](https://github.com/microsoft/sbom-tool) is capable of auto-detecting NPM, NuGet, PyPI, CocoaPods, Maven, Golang, Rust Crates, RubyGems, Linux packages within containers, Gradle, Ivy, GitHub public repositories, and more through Component Detection and generates SBOMs for the project.

* The GitHub [gh CLI SBOM Extension](https://github.com/advanced-security/gh-sbom) is capable of creating SBOMs from a variety of languages, once the project is in a GitHub repository.


## Cryptographic Bill of Materials
* A Cryptographic Bill of Materials (CBOM) can be created using the [cryptobom-forge](https://github.com/santandersecurityresearch/cryptobom-forge) CLI.

* A CBOM can be created using the SonarQube [Sonar Cryptography Plugin](https://github.com/IBM/sonar-cryptography).

## SBOM Validation
Validation of SBOMs can be performed with:
* The [CycloneDX](https://github.com/CycloneDX/cyclonedx-cli) CLI
* The [SPDX Tools](https://github.com/spdx/tools-java) CLI

## Containers
SBOMs can be created from containers using the following tools:
* [Tern](https://github.com/tern-tools/tern)
* [Syft](https://github.com/anchore/syft)
* [Bom](https://github.com/kubernetes-sigs/bom) (Kubernates)
* [Docker Scout SBOM](https://docs.docker.com/reference/cli/docker/scout/sbom/)

## Binary Files
SBOMs can be created from binary files using the following tools:
* [Blint](https://github.com/owasp-dep-scan/blint)
* [Surfactant](https://github.com/LLNL/Surfactant)

## Use Microsoft Sbom Tool to generate SPDX SBOM from Linux kernel source code
* Download the tool to your local environment from the tool's GitHub release page https://github.com/microsoft/sbom-tool and give execute permission to the downloaded executable file.

  ```chmod +x ./sbom-tool```
  
* Download and extract Linux kernel source code from The Linux Kernel Archives. In this document we were using long term version 5.15.88. 

  ```tar xvfJ linux-5.15.88.tar.xz```
  
* Run the SBOM generation tool. We still need to be more accurate with the parameters passed to the tool. However, the following parameters were suffice for the SBOM generation.

  ```./sbom-tool generate -b ./linux-5.15.88 -bc ./linux-5.15.88 -pn kernel -pv 5.15.88 -ps linux.org -nsb https://kernel.org```

* Find the output SPDX file inside ./linux-5.15.88/_manifest/spdx_2.2/ folder, manifest.spdx.json will be the SPDX file in JSON format.
  
* Optionally you can convert the manifest.spdx.json file into other SPDX format with SPDX Java tool https://github.com/spdx/tools-java.

  ```java -jar tools-java-1.1.3-jar-with-dependencies.jar Convert manifest.spdx.json manifest.spdx JSON TAG```
  

## Additional Tools
* [IBM SBOM Utility](https://github.com/CycloneDX/sbom-utility)
* [IBM License Scanner](https://github.com/CycloneDX/license-scanner)
* [GitHub link to an SBOM tool repository](https://github.com/sbomtools)
* [CERTCC SwiftBOM generator and demo tool](https://github.com/CERTCC/SBOM)
* [UI tool to generate SBOM](https://democert.org/sbom/)
