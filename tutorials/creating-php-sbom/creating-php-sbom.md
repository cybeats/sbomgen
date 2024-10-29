# Creating SBOMs from PHP projects

## Introduction

This tutorial illustrates how to produce an SBOM from PHP Composer projects using the Cyclonedx-Php-Composer CLI.


## Requirements

* PHP above version 8.1
* Composer above version 2.3


## Installation

Run the command:

```bash
composer global require cyclonedx/cyclonedx-php-composer
```

Verify installation with the command:

```bash
composer CycloneDX:make-sbom --help
```

You should get the resultant output:

```bash
Description:
  Generate a CycloneDX Bill of Materials from a PHP Composer project.

Usage:
  CycloneDX:make-sbom [options] [--] [<composer-file>]

Arguments:
  composer-file                                       Path to Composer config file.
                                                      [default: "composer.json" file in current working directory]

Options:
      --output-format=OUTPUT-FORMAT                   Which output format to use.
                                                      {choices: "JSON", "XML"} [default: "XML"]
      --output-file=OUTPUT-FILE                       Path to the output file.
                                                      Set to "-" to write to STDOUT [default: "-"]
      --omit=OMIT                                     Omit dependency types.
                                                      {choices: "dev", "plugin"} (multiple values allowed)
      --spec-version=SPEC-VERSION                     Which version of CycloneDX spec to use.
                                                      {choices: "1.1", "1.2", "1.3", "1.4", "1.5"} [default: "1.4"]
      --output-reproducible|--no-output-reproducible  Whether to go the extra mile and make the output reproducible.
                                                      This might result in loss of time- and random-based-values.
      --validate|--no-validate                        Formal validate the resulting BOM.
      --mc-version=MC-VERSION                         Version of the main component.
                                                      This will override auto-detection.
  -h, --help                                          Display help for the given command. When no command is given display help for the list command
  -q, --quiet                                         Do not output any message
  -V, --version                                       Display this application version
      --ansi|--no-ansi                                Force (or disable --no-ansi) ANSI output
  -n, --no-interaction                                Do not ask any interactive question
      --profile                                       Display timing and memory usage information
      --no-plugins                                    Whether to disable plugins.
      --no-scripts                                    Skips the execution of all scripts defined in composer.json file.
  -d, --working-dir=WORKING-DIR                       If specified, use the given directory as working directory.
      --no-cache                                      Prevent use of the cache
  -v|vv|vvv, --verbose                                Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug 

```

## Usage

Run the command:

```bash
composer CycloneDX:make-sbom <composer.json-file> --output-format=<output-format> --output-file=<filepath-to-sbom-name>.<output-format> --spec-version=<cyclonedx-specversion>
```

The resulting SBOM of your set filename, format and cyclonedx specversion will appear in the path designated.

## Notes

* Tests done on Ubuntu 20.04.

* Requirements

  * PHP above version 8.1 and Composer above version 2.3 **must** be installed, or CycloneDX-PHP-Composer CLI **will not work**. 

* Troubleshooting:

  * In case of installation error, try installing php8.2-xml

## SBOM

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
        pre {
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>
<body>
    <h3>
        <a href="./freshrss-sbom.json">freshrss</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <script>
        fetch('./freshrss-sbom.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('json-display').textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    </script>
</body>
</html>


## References

* CycloneDX. (2023). CycloneDX-Php-Composer. [https://github.com/CycloneDX/cyclonedx-php-composer](https://github.com/CycloneDX/cyclonedx-php-composer)

