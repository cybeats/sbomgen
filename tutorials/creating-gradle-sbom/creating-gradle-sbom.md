# Creation of SBOM in Gradle Project Via The CycloneDX-Gradle-Plugin


## Introduction

This document illustrates how to produce an SBOM from Gradle projects using the CycloneDX-gradle-plugin.

## Requirements

* Gradle

## Installation

Navigate to the build.gradle file, and add the following:

```kotlin
plugins {
    id ('org.cyclonedx.bom') version '1.8.2'
}
```

Note: if plugin section already exists, add the content of the above plugin section to the pre-existing plugin section.

## Usage

Run:

```bash
gradle cyclonedxBom
```

Customizing metadata can be added via adding a section to the build.gradle e.g.:

Groovy (build.gradle)

```groovy
cyclonedxBom {
    // includeConfigs is the list of configuration names to include when generating the BOM (leave empty to include every configuration), regex is supported
    includeConfigs = ["runtimeClasspath"]
    // skipConfigs is a list of configuration names to exclude when generating the BOM, regex is supported
    skipConfigs = ["compileClasspath", "testCompileClasspath"]
    // skipProjects is a list of project names to exclude when generating the BOM
    skipProjects = [rootProject.name, "yourTestSubProject"]
    // Specified the type of project being built. Defaults to 'library'
    projectType = "application"
    // Specified the version of the CycloneDX specification to use. Defaults to '1.5'
    schemaVersion = "1.5"
    // Boms destination directory. Defaults to 'build/reports'
    destination = file("build/reports")
    // The file name for the generated BOMs (before the file format suffix). Defaults to 'bom'
    outputName = "bom"
    // The file format generated, can be xml, json or all for generating both. Defaults to 'all'
    outputFormat = "json"
    // Exclude BOM Serial Number. Defaults to 'true'
    includeBomSerialNumber = false
    // Exclude License Text. Defaults to 'true'
    includeLicenseText = false
    // Override component version. Defaults to the project version
    componentVersion = "2.0.0"
}
```
Kotlin (build.gradle.kts)

```kotlin
tasks.cyclonedxBom {
    setIncludeConfigs(listOf("runtimeClasspath"))
    setSkipConfigs(listOf("compileClasspath", "testCompileClasspath"))
    setSkipProjects(listOf(rootProject.name, "yourTestSubProject"))
    setProjectType("application")
    setSchemaVersion("1.5")
    setDestination(project.file("build/reports"))
    setOutputName("bom")
    setOutputFormat("json")
    setIncludeBomSerialNumber(false)
    setIncludeLicenseText(true)
    setComponentVersion("2.0.0")
}
```

## Notes

* Some licenses of the SBOMs generated may be out of specification.

## References

* https://github.com/CycloneDX/cyclonedx-gradle-plugin
