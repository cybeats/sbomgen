# Creating SBOMS For Rust Projects

## Introduction

This tutorial illustrates how to produce an SBOM using Rust projects using the Cargo-Sbom and Cyclonedx-Rust-Cargo CLIs.

## Requirements

* [Rust language](https://www.rust-lang.org/tools/install)

* Cargo

## Installation

### Cargo SBOM

Run:

```cargo install cargo-sbom```

To verify installation, run:

```cargo sbom --help```

You should see the resultant output:

```
Create software bill of materials (SBOM) for Rust

Usage: cargo sbom [OPTIONS]

Options:
      --cargo-package <CARGO_PACKAGE>
          The specific package (in a Cargo workspace) to generate an SBOM for. If not specified this is all packages in the workspace.
      --output-format <OUTPUT_FORMAT>
          The SBOM output format. [default: spdx_json_2_3] [possible values: spdx_json_2_3, cyclone_dx_json_1_4]
      --project-directory <PROJECT_DIRECTORY>
          The directory to the Cargo project. [default: .]
  -h, --help
          Print help
  -V, --version
          Print version

```

### Cyclonedx-Rust-Cargo

Run:

```cargo install cargo-cyclonedx```

To verify installation, run:

```cargo cyclonedx --help```

You should see the resultant output:

```
Creates a CycloneDX Software Bill-of-Materials (SBOM) for Rust project

Usage: cargo cyclonedx [OPTIONS]

Options:
      --manifest-path <PATH>             Path to Cargo.toml
  -f, --format <FORMAT>                  Output BOM format: json, xml
  -v, --verbose...                       Use verbose output (-vv very verbose/build.rs output)
  -q, --quiet                            No output printed to stdout
  -a, --all                              List all dependencies instead of only top-level ones
      --top-level                        List only top-level dependencies (default)
      --output-cdx                       Prepend file extension with .cdx
      --output-pattern <PATTERN>         Prefix patterns to use for the filename: bom, package
      --output-prefix <FILENAME_PREFIX>  Custom prefix string to use for the filename
  -h, --help                             Print help

```
## Usage

### Cargo SBOM

Navigate to the Rust project that you wish to create the SBOM for.

Run:

```cargo sbom --output-format cyclone_dx_json_1_4 > sbom.json```

### Cyclonedx-rust-cargo

Navigate to the Rust project that you wish to create the SBOM for.

Run:

```cargo cyclonedx -f json -a```

You should see an output "bom.json" in any folder containing rust source files.

#### Notes

* In multi folder/multi module projects, a separate SBOM file is created in the root of each module. If this is not desirable, the cargo-sbom CLI may be more applicable.

* Error messages may be seen, however an sbom is still built. This appears to be a [known issue](https://github.com/CycloneDX/cyclonedx-rust-cargo/compare/main...ctron:cyclonedx-rust-cargo:feature/improve_logs_1).

## References

* CycloneDX. (2023). cyclonedx-rust-cargo. https://github.com/CycloneDX/cyclonedx-rust-cargo

* Psastras. (2023). cargo-sbom. https://github.com/psastras/sbom-rs