# Creating VEX from CSVs

## Introduction

This tutorial illustrates how to create a CycloneDX formatted Vulnerability Exploitability Exchange (VEX) documents from CSV/Excel files using the CSV2VEX CLI.

## Requirements

* Python3
* Pip/Pipx
* Git

## Installation

### Via Pip/Pipx

Run the following command:

```bash
pip install git+https://github.com/cybeats/csv2vex.git@main
```

### Via Git Clone + Pip/Pipx

Run the following command:

```bash
git clone https://github.com/cybeats/csv2vex.git
cd csv2vex
pip install -e .
```

## Usage

CSV2VEX operates on building VEXs from CSV/Excel files through the use of a configuration JSON file.

### Configuration File Creation

To create a template file, run the command:

```bash
csv2vex template -name <optional>
```
Where ```-name``` is an optional flag to designate the configuration file name. Without the flag, the configuration file defaults to ```vex_config_template.json```. You should see a JSON file with the selected name in your current directory.

Opening the configuration file, you should see the following:

```json
{
    "bom_ref": null,
    "id": null,
    "source": {
                "url": null,
                "name": null
            },
    "references": [
        {
            "id": null,
            "source": {
                "url": null,
                "name": null
            }
        }
    ],
    "ratings": [
        {
            "source": {
                "url": null,
                "name": null
            },
            "score": null,
            "severity": null,
            "method": null,
            "vector": null,
            "justification": null
        }
    ],
    "cwes": null,
    "description": null,
    "detail": null,
    "recommendation": null,
    "workaround": null,
    "advisories": [
        {
            "title": null,
            "url": null
        }
    ],
    "created": null,
    "published": null,
    "updated": null,
    "rejected": null,
    "credits": {
        "organizations": [
            {
                "bom-ref": null,
                "name": null,
                "urls": null,
                "contact": [
                    {
                        "bom-ref": null,
                        "name": null,
                        "email": null,
                        "phone": null
                    }
                ]
            }
        ],
        "individuals": [
            {
                "bom-ref": null,
                "name": null,
                "email": null,
                "phone": null
            }
        ]
    },
    "tools": [
        {
            "name": null,
            "version": null
        }
    ],
    "analysis": {
        "state": null,
        "justification": null,
        "detail": null,
        "response":[]
    },
    "affects": [
        {
            "ref": null,
            "versions": []
        }
    ],
    "properties": []
}
```

### Configuration File Population

Populating the configuration file can be done by adding the name of the CSV/Excel column to the corresponding parameter e.g:

```json
"description": "VEX Description",
"detail": "VEX Detail",
"recommendation": "VEX Recommendation",
```
To populate array fields such as tools, affects or advisories, the requisite json object can be duplicated for every occurence e.g:

```json
"tools": [
            {
                "name": "name1",
                "version": "version1"
            },

            {
                "name": "name2",
                "version": "version2"
            },

            {
                "name": "name3",
                "version": "version3"
            }
        ]
```

### Building

With the populated configuration and CSV/Excel files, run the following:

```bash
csv2vex build -f <csv/xslx-file-path> -c <config-json-file> -o <optional-output-filename>
```
Where:

* -f: "file". CSV/XLSX file path e.g. data.csv.
* -c: "config". JSON config file e.g. vex_config_template.json.
* -o: "output file". Optional output file e.g. vex_result.json. Defaults to vex.json.

A JSON file with the name given should appear in your working directory.

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

* CWEs must be in the format "[CWE-```integer```]" or "[```integer```]".

* Dates corresponding to "created", "published", "updated", "rejected" must be in <dd/mm/yyyy> formatted strings.

## Example VEX

These example files illustrate a csv file, configuration file and VEX created by CSV2VEX. False data was generated by Faker.

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
        <a href="./vex_config_template.json">vex_config_template.json</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./vex.json">csv2vex VEX</a>
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
    display_json('./vex_config_template.json', 'json-display1');
    display_json('./vex.json', 'json-display2');
    </script>
</body>
</html>

## References

* Cybeats. (n.d.). Cybeats/csv2vex: CLI to convert csv to cyclonedx VEX documents. GitHub. [https://github.com/cybeats/csv2vex](https://github.com/cybeats/csv2vex)

* Install and run python applications in isolated environments. pipx. (n.d.). [https://pipx.pypa.io/stable/](https://pipx.pypa.io/stable/)

* Welcome to Faker’s documentation!¶. Welcome to Faker’s documentation! - Faker 33.0.0 documentation. (n.d.). [https://faker.readthedocs.io/en/master/index.html](https://faker.readthedocs.io/en/master/index.html)



