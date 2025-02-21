# Creating SBOMS from CSVs

## Introduction

This tutorial illustrates how to create SBOMs from CSV/Excel files using the CSV2CDX CLI application.

## Requirements & Prerequisites

* Python 3
* Pip/Pipx
* Git

## Installation

### Via Pip/Pipx

Run the following command:

```bash
pip install git+https://github.com/cybeats/csv2cdx.git@main
```

### Via Git Clone + Pip/Pipx

Run the following command:

```bash
git clone https://github.com/cybeats/csv2cdx.git
cd csv2cdx
pip install -e .
```

Verify installation by running:

```bash
csv2cdx -h
```

You should see the resultant output

```bash
usage: csv2cdx [-h] {template,build} ...

csv2cdx v2.0.3

positional arguments:
  {template,build}
    template        Generates json configuration template file. Run csv2cdx
                    template -h for more details
    build           Build sbom given args. Run csv2cdx build -h for more
                    details

options:
  -h, --help        show this help message and exit
```

## Usage

CSV2CDX operates on building SBOMs from CSV/Excel files through the use of a configuration JSON file.

### Configuration File Creation

To create a template file, run the command:

```bash
csv2cdx template -name <optional>
```
Where ```-name``` is an optional flag to designate the configuration file name. Without the flag, the configuration file defaults to ```config_template.json```. You should see a JSON file with the selected name in your current directory.

Opening the configuration file, you should see the following:

```json
{
    "bom-ref": null,
    "name": null,
    "version": null,
    "group": null,
    "publisher": null,
    "purl": null,
    "mime type": null,
    "description": null,
    "author": null,
    "cpe": null,
    "swid": null,
    "pedigree": null,
    "components": null,
    "evidence": null,
    "releaseNotes": null,
    "copyright": null,
    "supplier": null,
    "licenses": [
        {
            "license_name": null,
            "license_url": null,
            "license_id": null
        }
    ],
    "hashes": [
        {
            "hash_alg": null,
            "hash_content": null
        }
    ],
    "externalReferences": [
        {
            "er_type": null,
            "er_url": null
        }
    ]
}
``` 
### Configuration File Population

Populating the configuration file can be done by adding the name of the CSV/Excel column to the corresponding parameter e.g:

```json
"name": "Component_Name",
"version": "component_version",
"type": "comp_type",
```
(Note: "type" object MUST be one of the types inherent to the CycloneDX json format)

To populate array fields such as licenses, hashes and external references, the requisite json object can be duplicated for every occurence e.g:

```json
"licenses": [
      {
        "license_name": "license_1",
        "license_url": "license_url_1",
        "license_id": "license_id_1"
      },    {
        "license_name": "license_2",
        "license_url": "license_url_2",
        "license_id": "license_id_2"
      },    {
        "license_name": "license_3",
        "license_url": "license_url_3",
        "license_id": "license_id_3"
      }
    ]
```

### Building

#### Basic

With the populated configuration and CSV/Excel files, run the following:

```bash
csv2cdx build -f (csv file path) -c (configuration json file path) -pn (name of sbom)  -pv (sbom version) -t (sbom type) -pt (sbom package type)
```

Where:

* -f : "file". The .csv data file path e.g. example_data.csv
* -c : "config". The .json configuration file path e.g. example_config.csv
* -pn : "sbom name". The sbom's name e.g. example_sbom
* -pv : "sbom version". The sbom's version e.g. 1.0.0
* -t : "type". The sbom's type (application, framework, library, container, operating-system, device, firmware, file) as shown by the CycloneDX json format
* -pt :"package type". The sbom's package type (e.g. pypi, maven, cargo, etc). Default/no package should be given the field "generic"

This will create a file of the style ```csv-file-name```_sbom.json.

#### Extended

Additional flags can be set for the SBOM root component:

* -mn : "manufacturer name". Adds the manufacturer name for the root component the sbom describes.
* -sn : "supplier name". Adds the name of the supplier for the root component the sbom describes.
* -ns : "namespace". Adds the namespace of the root component the sbom descibes.

Further functionality for the SBOM output can be implemented through the following flags:

* -cw : "cpe wildcard". Making this flag "true" wildcards any cpe in the sbom components e.g. cpe:2.3:a:microsoft:internet_explorer:8.0 to cpe:2.3:a:microsoft:internet_explorer:*. (wildcarded version)
* -ap : "add purl". Making this flag "true" adds PURLs to the components of the sboms. This is to be used if they do not already exist in the .csv file.
* -cnt : "csv no title". Making this flag "true" indexes the .csv file by column number instead of name. As such, the configuration json format should look like:
    ```json
    "name": 0,
    "version": 1,
    "type": 2,
    ```
* -api: "utilize Cybeats api". Making this flag "true" allows enrichment of data tnrough the cybeats api.
* -url: "Cybeats api url". Adds the Cybeats api url.
* -ak: "Cybeats access key". Adds your Cybeats api access key.
* -sk: "Cybeats secret key". Adds your Cybeats api secret key.
* -pvc: "parse compound version". Treats a compounded "name version" name column as a compound column. Splits name and version and applies them to the SBOM.
* -format: "format". defines SBOM output format (json or xml). Default is json.


## Notes

* In newer Python installations, especially with Linux, running ```pip install``` may result in this message:

    ```bash
    error: externally-managed-environment

    × This environment is externally managed
    ╰─> To install Python packages system-wide, try apt install
        python3-xyz, where xyz is the package you are trying to
        install.
        
        If you wish to install a non-Debian-packaged Python package,
        create a virtual environment using python3 -m venv path/to/venv.
        Then use path/to/venv/bin/python and path/to/venv/bin/pip. Make
        sure you have python3-full installed.
        
        If you wish to install a non-Debian packaged Python application,
        it may be easiest to use pipx install xyz, which will manage a
        virtual environment for you. Make sure you have pipx installed.
        
        See /usr/share/doc/python3.12/README.venv for more information.

    note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
    hint: See PEP 668 for the detailed specification.
    ```

    In this scenario, Pipx is the more prudent option, which is more amenable to the seamless installation and use of Python CLI programs.

## Example SBOM

These example files illustrate a csv file, configuration file and SBOM created by CSV2CDX. False data was generated by Faker.

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
        <a href="./example.csv">example.csv</a>
    </h3>
    <div id="json-container">
        <pre id="csv-display"></pre>
    </div>
     <h3>
        <a href="./config.json">config.json</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./example_sbom.json">csv2cdx SBOM</a>
    </h3>
    <div id="json-container">
        <pre id="json-display2"></pre>
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
            .catch(error => console.error('Error fetching XML:', error));
        }
        function display_text(url, elementid){
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementid).textContent = data;
            })
            .catch(error => console.error('Error fetching text:', error));
        }
    display_text('./example.csv', 'csv-display');
    display_json('./config.json', 'json-display1');
    display_json('./example_sbom.json', 'json-display2');
    </script>
</body>
</html>

## References

* Cybeats. (n.d.). Cybeats/csv2cdx: Script to transfrom CSV SBOM documents to CycloneDX SBOM documents. GitHub. [https://github.com/cybeats/csv2cdx](https://github.com/cybeats/csv2cdx)

* Install and run python applications in isolated environments. pipx. (n.d.). [https://pipx.pypa.io/stable/](https://pipx.pypa.io/stable/)

* Welcome to Faker’s documentation!. Welcome to Faker’s documentation! - Faker 33.0.0 documentation. (n.d.). [https://faker.readthedocs.io/en/master/index.html](https://faker.readthedocs.io/en/master/index.html)

