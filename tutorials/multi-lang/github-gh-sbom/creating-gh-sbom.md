# Creating SBOMs Using The GitHub GH SBOM Utility

## Introduction

This tutorial illustrates how to create SBOMs using the GitHub gh CLI sbom extension.

## Requirements

GitHub gh CLI.

gh sbom plugin.

jq. (optional)

## Installation

### Installing GitHub gh CLI

#### Linux

**Debian and Debian Based Distros e.g. Ubuntu**

Run:

```bash
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

then run:

```bash
sudo apt update
sudo apt install gh
```

**Fedora and Fedora based Distros, e.g. Red Hat**


Run:

```bash
sudo dnf install 'dnf-command(config-manager)'
sudo dnf config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo
sudo dnf install gh
```

#### Windows

Run:

```bash
winget install --id GitHub.cli
```

or

```bash
choco install gh
```

or

```bash
scoop install gh
```


#### OSX

Run:

```bash
brew install gh
```

or

```bash
sudo port install gh
```

or 

```bash
conda install gh --channel conda-forge
```

or


```bash
spack install gh
```


### Installing gh sbom plugin

Run the command:

```bash
gh ext install advanced-security/gh-sbom
```

Verify install by running:

```bash
gh sbom -h
```

You should see the result:

```
Usage of <location-of-gh-sbom>:
  -c, --cyclonedx           Use CycloneDX SBOM format. Default is to use SPDX.
  -l, --license             Include license information from clearlydefined.io for CycloneDX format (SPDX always includes license information).
  -r, --repository string   Repository to query. Current directory used by default.
pflag: help requested
```

## Usage

Navigate to a GitHub repository in question.

Run the command:

```bash
gh sbom
```

Default output is SPDX.

To create a more human readable output, run:

```bash
gh sbom | jq
```

For CycloneDX formatted outputs, run:

```bash
gh sbom -c | jq
```

These will generate JSON formatted and indented SBOMs printed to your terminal.

To save these outputs to a file, run:

```bash
gh sbom | jq > <sbom-file-name>
```

## Notes

* When creating SBOMs in SPDX format, gh sbom may produce purls with the less common packages ```github``` and/or ```githubactions```.

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
        <a href="./gh_sbom.cdx.json">gh-sbom (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
    <h3>
        <a href="./gh_sbom.spdx.json">gh-sbom (json)</a>
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
    display_json('./gh_sbom.cdx.json', 'json-display');
    display_json('./gh_sbom.spdx.json', 'xml-display');
    </script>
</body>
</html>


## References

* Cli. (n.d.). CLI/CLI: GitHub’s Official Command Line Tool. GitHub. [https://github.com/cli/cli](https://github.com/cli/cli)
* Gh-SBOM. (n.d.). Advanced-security/GH-sbom: Generate sboms with GH CLI. GitHub. [https://github.com/advanced-security/gh-sbom](https://github.com/advanced-security/gh-sbom)