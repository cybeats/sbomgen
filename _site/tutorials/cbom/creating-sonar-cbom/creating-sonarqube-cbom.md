# Creating CBOMs Using the IBM Sonar Cryptography SonarQube Plugin

## Introduction

This tutorial illustrates how to create a CBOM from Java or Python projects using the SonarQube Sonar Cryptography Plugin.

## Requirements

* SonarQube

* SonarScanner CLI

* Sonar Cryptography .jar file.

## Installation

### SonarQube & SonarScanner

Ensure you have the SonarQube and SonarScanner installed, and ideally on your PATH, via downloading and unzipping the .zip files for SonarQube and SonarScanner.

### Sonar Cryptography Plugin

Download the Sonar Cryptography .jar file and place it into your SonarQube ```plugins/``` folder.


## Usage

* Activate SonarQube

* Create a blank Quality Profile for a specific language (Java or Python).

* In the Profile, activate More Rules. Find the IBM Cryptography rules for your language (likely under Repository) and activate them.

* Create a new project, whether it be local or from a repository.

* Generate a project token and copy and paste the generated SonarScanner CLI command.

* Run the SonarScanner CLI command in the folder containing your source code.

* You should see a ```cbom.json``` file in your folder upon the command completion*

## Notes

* This tool requires Java 17.

## References

* https://github.com/IBM/sonar-cryptography

* https://www.sonarsource.com/products/sonarqube/

* https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/

* Anchore. (n.d.). Anchore/syft: CLI Tool and library for generating a software bill of materials from container images and filesystems. GitHub. [https://github.com/anchore/syft](https://github.com/anchore/syft)

* 

