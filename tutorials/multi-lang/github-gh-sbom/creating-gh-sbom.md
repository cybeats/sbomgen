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

```
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

then run:

```
sudo apt update
sudo apt install gh
```

**Fedora and Fedora based Distros, e.g. Red Hat**


Run:

```
sudo dnf install 'dnf-command(config-manager)'
sudo dnf config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo
sudo dnf install gh
```

#### Windows

Run:

```winget install --id GitHub.cli```

or

```choco install gh```

or

```scoop install gh```


#### OSX

Run:

```brew install gh```

or

```sudo port install gh```

or 

```conda install gh --channel conda-forge```

or


```spack install gh```


### Installing gh sbom plugin

Run the command:

```gh ext install advanced-security/gh-sbom```

Verify install by running:

```gh sbom -h```

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
```gh sbom```

Default output is SPDX.

To create a more human readable output, run:

```gh sbom | jq```

For CycloneDX formatted outputs, run:

```gh sbom -c | jq```

These will generate JSON formatted and indented SBOMs printed to your terminal.

To save these outputs to a file, run:

```gh sbom | jq > <sbom-file-name>```

## References

* https://github.com/cli/cli

* https://github.com/advanced-security/gh-sbom