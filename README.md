# List of SBOM Generation Tools

## Java
### Maven
* Cybeats CLI Plugin & Jenkins Plugin
* To generate SBOM for Java Maven projects, use Cyclonedx Maven Plugin. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-maven-plugin
### Gradle
* To generate SBOM for Java Gradle projects, use Cyclonedx Gradle Plugin. Please find instructions at the following link. 
  https://github.com/CycloneDX/cyclonedx-gradle-plugin 
* Also there is another tool called CDXGEN. Please find instructions at the following link.
  https://github.com/AppThreat/cdxgen

## Node.js
### NPM
* Cybeats CLI Plugin & Jenkins Plugin
* To generate SBOM for Node.js NPM projects, use Cyclonedx Node Module. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-node-module
* Yarn
  To generate SBOM for Node.js Yarn projects, use Cyclonedx Node Module. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-node-module


## Objective-C/Swift
### Cocoapod
* To generate SBOM for cocoapod projects, use Cyclonedx Cocoapod Plugin. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-cocoapods

## .NET
### NuGet
* To generate SBOM for .NET NuGet projects, use the Cyclonedx module for .NET. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-dotnet

## Python
### Pip
* To generate SBOM for Python Pip projects, use CycloneDX Python SBOM Generation Tool. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-python
* Poetry
  To generate SBOM for Python Poetry projects, use CycloneDX Python SBOM Generation Tool. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-python
  
## PHP
### Composer
* To generate SBOM for PHP Composer projects, use CycloneDX PHP Composer Plugin. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-php-composer

## Go
### Gomod
* To generate SBOM for Golang projects with gomod, use cyclonedx-gomod tool. Please find instructions at the following link.
  https://github.com/CycloneDX/cyclonedx-gomod
  
## Elixir
### Mix
* To generate SBOM for Elixir Mix projects, use the Mix sbom tool. Please find it's home page here. 
  https://hex.pm/packages/sbom
* To install the Mix task globally on your system, run `mix archive.install hex sbom`.
* To see the commands help message, run `mix help sbom.cyclonedx`
* To generate SBOM for your Elixir Mix projects, run `mix sbom.cyclonedx`
* Please note that the tool may currently have limitations and the generated SBOM maybe not valid sometimes.

## Erlang
### Rebar3
* To generate SBOM for Erlang Rebar3 projects, use the following tool and find the instructions on its GitHub page.
  https://github.com/voltone/rebar3_sbom
  
## Multi-Language
* Microsoft (Microsoft.Sbom.Tool) According to the blog of the following SBOM generation tool, the tool is capable to auto-detect NPM, NuGet, PyPI, CocoaPods, Maven, Golang, Rust Crates, RubyGems, Linux packages within containers, Gradle, Ivy, GitHub public repositories, and more through Component Detection and generate SBOM for the project. Please refer to the following link for more information.
  https://github.com/microsoft/sbom-tool
  
* Syft (by Anchore) 
  https://github.com/anchore/syft

## Additional Tools
* GitHub link to an SBOM tool repository 
  https://github.com/sbomtools

* CERTCC SwiftBOM generator and demo tool
  https://github.com/CERTCC/SBOM

* UI tool to generate SBOM
  https://democert.org/sbom/
  
* Snyk (via snyk2spdx optional tool) Convert the Snyk CLI output to SPDX format. Note according to the GitHub repository page: This repository is not in active developemnt and critical bug fixes only will be considered.
  https://github.com/snyk-tech-services/snyk2spdx
  
* Fossa 
  https://fossa.com/pricing

## Use Microsoft.Sbom.Tool to generate SPDX SBOM from Linux kernel source code.

* Download the tool to your local environment from the tool's GitHub release page https://github.com/microsoft/sbom-tool and give execute permission to the downloaded executable file.

  ```chmod +x ./sbom-tool```
  
* Download and extract Linux kernel source code from The Linux Kernel Archives. In this document we were using long term version 5.15.88. 

  ```tar xvfJ linux-5.15.88.tar.xz```
  
* Run the SBOM generation tool. We still need to be more accurate with the parameters passed to the tool. However, the following parameters were suffice for the SBOM generation.

  ```./sbom-tool generate -b ./linux-5.15.88 -bc ./linux-5.15.88 -pn kernel -pv 5.15.88 -ps linux.org -nsb https://kernel.org```

* Find the output SPDX file inside ./linux-5.15.88/_manifest/spdx_2.2/ folder, manifest.spdx.json will be the SPDX file in JSON format.
  
* Optionally you can convert the manifest.spdx.json file into other SPDX format with SPDX Java tool https://github.com/spdx/tools-java.

  ```java -jar tools-java-1.1.3-jar-with-dependencies.jar Convert manifest.spdx.json manifest.spdx JSON TAG```
