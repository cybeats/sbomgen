# Creation of SBOM in Maven Project Via The CycloneDX-Maven-Plugin

## Introduction

This document illustrates the generation of an SBOM from a maven project utilizing the cyclonedx-maven-plugin. The maven project used here is onedev.

## Contents
* [Install repo](#install-repo)
* [Alter pom.xml](#alter-pomxml)
* [Build](#build)
* [Conclusion](#conclusion)
* [Troubleshooting](#troubleshooting)
    * [Environment](#environment)
    * [Build Failure](#build-failure)
* [References](#references)

## Install repo

Clone the repository onedev using the command:

```git clone https://github.com/theonedev/onedev.git```

## Alter pom.xml

Open the pom.xml file of the project and add the following to the plugins section:

```java
<plugin>
    <groupId>org.cyclonedx</groupId>
    <artifactId>cyclonedx-maven-plugin</artifactId>
    <version>2.7.9</version>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>makeAggregateBom</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <projectType>application</projectType>
        <schemaVersion>1.4</schemaVersion>
        <includeBomSerialNumber>true</includeBomSerialNumber>
        <includeCompileScope>true</includeCompileScope>
        <includeProvidedScope>true</includeProvidedScope>
        <includeRuntimeScope>true</includeRuntimeScope>
        <includeSystemScope>true</includeSystemScope>
        <includeTestScope>false</includeTestScope>
        <includeLicenseText>false</includeLicenseText>
        <outputFormat>all</outputFormat>
        <outputName>onedev-cyclonedx</outputName>
    </configuration>
</plugin>
```

## Build

Build and create the SBOM with the command


```mvn clean install```

## Conclusion

The resultant SBOM in both JSON and XML format should be found in the onedev/target directory.


## Troubleshooting

### Environment:

SBOMs were generated on two computers, both running Java version 11.0.20.1, with Maven versions 3.9.3 and 3.6.3, on Ubuntu 20.04 and 22.04 respectively.

### Build Failure:

* Delete directory “.m2” found in home directory with command 
```rm -rf path/to/.m2```
  (Ubuntu).

* Ensure the correct parameters for the cyclonedx-maven-plugin are set, schema: 1.4, version: 2.7.9, name: onedev-cyclonedx. 

* Ensure that the maven version installed is the one found in your operating systems package manager, or is the most stable release for your system.

* Prior to running:

    ```mvn clean install```

    run


    ```mvn clean -Dmaven.clean.failOnError=false```



## References

* CycloneDX (2023). CycloneDX-maven-plugin (Version 2.7.9). [https://github.com/CycloneDX/cyclonedx-maven-plugin](https://github.com/CycloneDX/cyclonedx-maven-plugin)

* Theonedev (2023). Onedev (Version 9.1.5). https://github.com/theonedev/onedev/tree/main 

