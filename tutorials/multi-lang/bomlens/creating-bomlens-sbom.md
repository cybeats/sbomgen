# Creating SBOM Using BomLens

## Introduction

This tutorial illustrates how to create an SBOM from a software project using [BomLens](https://github.com/sktelecom/bomlens), a local-first SBOM generator and open source risk assessor. One scan produces a CycloneDX SBOM plus an open source NOTICE file and a security report. It supports Java, Python, Node.js, Go, Ruby, PHP, Rust, .NET, Swift, and C/C++, as well as container images, binaries, firmware, and HuggingFace AI models (ML-BOM).

## Requirements

* Docker

## Installation

Download the launcher script (the scanner itself runs in a pinned Docker image):

```bash
curl -O https://raw.githubusercontent.com/sktelecom/bomlens/main/scripts/scan-sbom.sh
chmod +x scan-sbom.sh
```

## Usage

Scan a project directory:

```bash
./scan-sbom.sh --project MyApp --version 1.0 /path/to/project
```

The output folder `MyApp_1.0/` contains:

* `MyApp_1.0_bom.json` — CycloneDX SBOM
* `MyApp_1.0_NOTICE.txt` / `.html` — open source notice
* `MyApp_1.0_security.json` / `.md` / `.html` — vulnerability report
* `MyApp_1.0_risk-report.md` / `.html` — license/security risk summary

Other inputs work the same way: a Git URL, a Docker image (`--image`), a firmware file (`--firmware`), or a HuggingFace model id (`--model org/name`, CycloneDX 1.7 ML-BOM with a G7 minimum-elements conformance report).

Prefer a UI? `./scan-sbom.sh --ui` opens a local web UI, and a desktop app is available from the [releases page](https://github.com/sktelecom/bomlens/releases/latest). Documentation: <https://sktelecom.github.io/bomlens/>
