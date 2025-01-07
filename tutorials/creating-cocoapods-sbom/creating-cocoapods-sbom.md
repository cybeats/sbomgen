# Creating SBOMs from Cocoapods Projects

## Introduction

This tutorial illustrates how to produce an SBOM from Cocoapods based projects using the Cyclonedx-Cocoapods plugin.

## Requirements

* Ruby

* Gem package manager

* Cocoapods dependency manager

## Installation

Install cyclonedx-cocoapods via the command:

```bash
gem install cyclonedx-cocoapods
```

Verify installation with the command:

```bash
cyclonedx-cocoapods -h
```

You should get the output:

```bash
Generates a BOM with the given parameters. BOM component metadata is only generated if the component's name, version, and type are provided using the --name, --version, and --type parameters.
[version 1.1.2]

USAGE
  cyclonedx-cocoapods [options]

OPTIONS
        --[no-]verbose               Show verbose debugging output
    -h, --help                       Show help message

  BOM Generation
    -p, --path path                  Path to CocoaPods project directory (default: current directory)
    -o, --output bom_file_path       Path to output the bom.xml file to (default: "bom.xml")
    -b, --bom-version bom_version    Version of the generated BOM (default: "1")
    -x, --exclude-test-targets       Eliminate Podfile targets whose name contains the word "test"

  Component Metadata
    -n, --name name                  (If specified version and type are also required) Name of the component for which the BOM is generated
    -v, --version version            Version of the component for which the BOM is generated
    -t, --type type                  Type of the component for which the BOM is generated (one of application|framework|library|container|operating-system|device|firmware|file)
    -g, --group group                Group of the component for which the BOM is generated

```
## Usage

Navigate to the desired Cocoapods project, and run:


```bash
cyclonedx-cocoapods
```

A "bom.xml" file will appear in the local directory. Alternatively, the ```-o``` flag can be used to output to a custom file path.


Additionally, SBOM metadata can be input via flags:

* ```-n```. SBOM name

* ```-v```. SBOM version

* ```-t```. SBOM type

* ```-g```. SBOM group


Without these additions, the SBOM may be valid, but incomplete.

## Notes

* run commands in superuser/sudo (MacOS/Linux) or admin (Windows).

* In case of ActiveSupport Error:

```bash
  gem uninstall activesupport

  gem install activesupport -v 7.0.8
```

## Example SBOM

This section illustrates CycloneDX JSON and XML SBOMS of the Whisper codebase, produced by CycloneDX-Cocoapods.

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pretty JSON Display</title>
    <style>
        #json-container {
            height: 400px; /* Set a fixed height */
            overflow-y: auto; /* Enable vertical scrolling */
            border: 2px solid #ccc; /* Optional: add a border for visibility */
            padding: 10px;
        }
        #xml-container {
            height: 400px; /* Set a fixed height */
            overflow-y: auto; /* Enable vertical scrolling */
            border: 2px solid #ccc; /* Optional: add a border for visibility */
            padding: 10px;
        }
        pre {
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h3>
        <a href="./bom.json">cyclonedx-cocoapods (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <h3>
        <a href="./bom.xml">cyclonedx-cocoapods (xml)</a>
    </h3>
    <div id="xml-container">
        <pre id="xml-display"></pre>
    </div>
    <script>
        function display_json(url, elementid){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById(elementid).textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching JSON:', error));
        }
        function display_xml(url, elementid){
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementid).textContent = data;
            })
            .catch(error => console.error('Error fetching JSON:', error));
        }
    display_json('./bom.json', 'json-display');
    display_xml('./bom.xml', 'xml-display');
    </script>
</body>
</html>


## References

* CycloneDX. (2023). CycloneDX-Cocoapods. [https://github.com/CycloneDX/cyclonedx-cocoapods](https://github.com/CycloneDX/cyclonedx-cocoapods)

* After updating cocoapods to 1.13.0 it throws error. Stack Overflow. (1AD). [https://stackoverflow.com/questions/77236339/after-updating-cocoapods-to-1-13-0-it-throws-error](https://stackoverflow.com/questions/77236339/after-updating-cocoapods-to-1-13-0-it-throws-error)

* Hyperoslo. (n.d.). GitHub - hyperoslo/Whisper: :mega: Whisper is a component that will make the task of display messages and in-app notifications simple. It has three different views inside. GitHub. [https://github.com/hyperoslo/Whisper](https://github.com/hyperoslo/Whisper)


