# Validation of SBOMs


## Introduction

SBOM validation is used to ensure an SBOM file meets its format’s specifications. This tutorial concerns the validation of CycloneDX and SPDX SBOMs via the tools cyclonedx-cli and SPDX tools-java.


## System Prerequisite(s)

* Zip

* Java


## Note(s)

Testing done on Ubuntu 20.04 x86_64.


## Installation

### CycloneDX

Navigate to the cyclonedx-cli repository and click on the releases button.


On the releases page, navigate to the latest release and download the release compatible with your system. Make the program executable with command(s):


* Linux/Unix: ```chmod +x program```

* Windows: Program can be run as is



### SPDX

Navigate to the cyclonedx-cli repository and click on the releases button. On the releases page, navigate to the latest release and download the release compatible with your system. Unzip the .zip file by running the following:

```unzip tools-java<release-version>:.zip```



## Running

Navigate to the directory  you downloaded the programs to.


### CycloneDX


To ensure correct installation first run:


```./cyclonedx-your_os-your_architecture ```


(e.g. cyclonedx-linux-x64)


You should receive the output:
```  

   ______           __                 ____ _  __    ________    ____
  / ____/_  _______/ /___  ____  ___  / __ \ |/ /   / ____/ /   /  _/
 / /   / / / / ___/ / __ \/ __ \/ _ \/ / / /   /   / /   / /    / /  
/ /___/ /_/ / /__/ / /_/ / / / /  __/ /_/ /   |   / /___/ /____/ /   
\____/\__, /\___/_/\____/_/ /_/\___/_____/_/|_|   \____/_____/___/   
     /____/                                                          
        

        
Required command was not provided.

cyclonedx-linux-x64

Usage:
  cyclonedx-linux-x64 [options] [command]

Options:
  --version       Show version information
  -?, -h, --help  Show help and usage information

Commands:
  add                         Add information to a BOM (currently supports files)
  analyze                     Analyze a BOM file
  convert                     Convert between different BOM formats
  diff <from-file> <to-file>  Generate a BOM diff
  keygen                      Generates an RSA public/private key pair for BOM signing
  merge                       Merge two or more BOMs
  sign                        Sign a BOM or file
  validate                    Validate a BOM
  verify                      Verify signatures for BOMs and files

```

To use, run the command 


```./cyclonedx-your_os-your_architecture validate --input-file <sbom-file-name.json> --input-format json```


Successful validation will result in output:


```
BOM validated successfully. 
```


Failure will output the reason for the failure, and the output


```
BOM is not valid.
```



### SPDX


To ensure correct installation first run:


```java -jar tools-java-1.1.7-jar-with-dependencies.jar```

You should receive the output:
```
Usage: java -jar spdx-tools-jar-with-dependencies.jar <function> <parameters> 
function                 parameter                         example 
------------------------------------------------------------------------------------------------------------------- 
Convert         inputFile outputFile [fromType] [toType]   Examples/SPDXTagExample.tag TagToSpreadsheet.xls 
SPDXViewer      inputFile                                  TestFiles/SPDXRdfExample.rdf 
Verify          inputFile [type]                           TestFiles/SPDXRdfExample.rdf 
CompareDocs     output.xlsx doc1 doc2 ... docN 
GenerateVerificationCode sourceDirectory
Version
MatchingStandardLicenses licenseTextFile

```

To use, run the command:


```java -jar tools-java-1.1.7-jar-with-dependencies.jar Verify <sbom-file-name.spdx>```


Successful validation will result in output 


```
This SPDX Document is valid.
```



Failure will output the reason for the failure. 


## References


* CycloneDX. (2023). cyclonedx-cli. https://github.com/CycloneDX/cyclonedx-cli


* Spdx. (2023). tools-java. https://github.com/spdx/tools-java

