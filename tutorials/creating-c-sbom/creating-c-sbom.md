# Note: CycloneDX-Conan is now archived as of 02/10/2023


# Creation of SBOMs From C/C++, Using Conan and CycloneDX-Conan


## Introduction

This tutorial illustrates how to create an SBOM from a conan based c/c++ project, using cyclonedx-conan. 

## Requirements


* A C/C++ compiler e.g. gcc, clang.

* A C/C++ build tool e.g. Make, Cmake.

* Python3.

## Installation


Install Conan with the following command


```pip install conan```


Install CycloneDX-Conan with the following command


```pip install cyclonedx-conan```


## Usage


Navigate to the C/C++ Conan project in question and run the command


```cyclonedx-conan --output s<sbom-name.json> <directory-(if current directory, use “.”)>```


## Notes

The directory of the C/C++ Conan project must contain a Conanfile (conanfile.txt or conanfile.py)

An ad-hoc creation of an SBOM may be implemented on C/C++ projects my creating a conanfile.txt and entering the required dependencies and generator as long as they are recognized by Conan, without needing a Conan project. However, this methods efficacy and efficiency must be further investigated.

e.g.

```
[requires]
gsl/2.7
openssl/3.0.2
poco/1.10.1
zlib/1.2.12


[generators]
make
```




## Limitations


Cyclonedx-conan does not appear to factor in c standard libraries e.g. glibc, bionic, etc. These libraries have their own set of vulnerabilities (glibc for example, has 99 according to nist, as of 25 September 2023). This creates the potential for a piece of software to appear to have less vulnerabilities than it actually has.


## References


* CycloneDX. (2023). cyclonedx-conan. https://github.com/CycloneDX/cyclonedx-conan

* Keyword (text search): cpe:2.3:**a**:gnu:glibc:-:*:*:*:*:*:*:*. NVD. (n.d.). https://shorturl.at/qCDI1