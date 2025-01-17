# Creating SBOMs from Ruby Projects

## Introduction

This tutorial illustrates how to produce an SBOM from Ruby projects using the Cyclonedx-Ruby-Gem CLI.

## Requirements

* Ruby
* Gem Dependency Manager

## Installation

### Through Gem

Install CycloneDX-Ruby with the command:

```bash
gem install cyclonedx-ruby
```

### Through Source

Clone, build and install the CycloneDX-Ruby repository through the following commands:

```bash
git clone https://github.com/CycloneDX/cyclonedx-ruby-gem.git
gem build cyclonedx-ruby.gemspec
gem install cyclonedx-ruby-<version-number>.gem 
```

Verify installation with the command:

```bash
cyclonedx-ruby -h
```

You should see the resultant output:

```bash
Usage: cyclonedx-ruby [options]
    -v, --[no-]verbose               Run verbosely
    -p, --path path                  (Required) Path to Ruby project directory
    -o, --output bom_file_path       (Optional) Path to output the bom.xml file to
    -f, --format bom_output_format   (Optional) Output format for bom. Currently support xml (default) and json.
    -h, --help                       Show help message
```

## Usage

Navigate to a Ruby project.

Run the command:

```bash
cyclonedx-ruby -p .
```


A "bom.xml" file should appear in the same directory. 


Alternatively, the ```-p``` and ```-o``` flags can be used to select a project folder path, and output the SBOM to a custom file path, respectively.


## Notes

* Certain metadata components of the produced SBOM may be missing, such as SBOM type, Package type, Name and Version.

* The version built from source (1.2.0) appears to be more up to date than the version available on RubyGem (1.1.0), with features like ```bom_output_format``` missing from the latter.

## Example SBOM

This section illustrates CycloneDX JSON and XML SBOMs of the Cocoapods codebase, created by CycloneDX-Ruby-Gem.

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
        <a href="./cocoapods-ruby.cdx.json">Cocoapods (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <h3>
        <a href="cocoapods-ruby.cdx.xml">Cocoapods (xml)</a>
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
    display_json('./cocoapods-ruby.cdx.json', 'json-display');
    display_xml('./cocoapods-ruby.cdx.xml', 'xml-display');
    </script>
</body>
</html>


## References

* CycloneDX. (2023). CycloneDX-Ruby-Gem. [https://github.com/CycloneDX/cyclonedx-ruby-gem](https://github.com/CycloneDX/cyclonedx-ruby-gem)

* CocoaPods. (n.d.). GitHub - CocoaPods/CocoaPods: The Cocoa Dependency Manager. GitHub. [https://github.com/CocoaPods/CocoaPods](https://github.com/CocoaPods/CocoaPods)
