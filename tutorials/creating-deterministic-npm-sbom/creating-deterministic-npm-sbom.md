# Creating deterministic SBOMs from npm projects with SnapSBOM

## Introduction

SBOMs can be created from npm based projects. This tutorial illustrates how to create SPDX 2.3 and CycloneDX 1.6 SBOMs from an npm project using [SnapSBOM](https://github.com/kawacukennedy/snapsbom).

SnapSBOM reads `package-lock.json` directly — no source scan, no container, no build, and no network access. Its distinguishing property is that the output is **byte-for-byte reproducible**: the same lockfile always produces exactly the same document, on any machine, on any day. That is what makes an SBOM something you can commit, diff, sign and verify, rather than a file that changes on every run.

## Note(s)

Testing done on macOS (arm64), Ubuntu (x86_64) and Windows (x64).

SnapSBOM currently supports npm lockfiles only:

| Lockfile | `lockfileVersion` | Status |
|---|---|---|
| `package-lock.json` | `1` (npm 5 / 6) | Supported |
| `package-lock.json` | `2` (npm 7 / 8) | Supported |
| `package-lock.json` | `3` (npm 9+) | Supported |

Yarn, pnpm, Python and other ecosystems are on the project's roadmap.

## Prerequisites

* Node.js 16 or later (only if you run SnapSBOM through `npx` / `npm`)
* A project containing a `package-lock.json`

No other dependencies are required — SnapSBOM does not read `node_modules` and never touches the network.

## Installation

No install is required; `npx` fetches and runs it directly:

```bash
npx --yes snapsbom .
```

Alternatively, install it globally:

```bash
npm install --global snapsbom
```

Static prebuilt binaries for Linux (x64/arm64), macOS (x64/arm64) and Windows (x64) are available from [GitHub Releases](https://github.com/kawacukennedy/snapsbom/releases), and the source can be built with `cargo install --path .`.

## Running

Navigate to the npm project folder, then generate an SBOM.

Generate the default SPDX 2.3 document and print it to stdout:

```bash
snapsbom .
```

Generate a CycloneDX 1.6 document:

```bash
snapsbom . --format cyclonedx
```

Write to a file instead of stdout:

```bash
snapsbom . --format cyclonedx --output sbom.cdx.json
snapsbom . --format spdx --output sbom.spdx.json
```

Point at an explicit lockfile rather than a directory:

```bash
snapsbom ./my-app/package-lock.json
```

You can also pass a path directly to `npx`:

```bash
npx --yes snapsbom . --output sbom.spdx.json
```

```text
Usage: snapsbom [OPTIONS] <PATH>

Arguments:
  <PATH>  Path to lockfile (e.g. package-lock.json) or directory

Options:
      --format <FORMAT>  [default: spdx] [possible values: spdx, cyclonedx]
      --output <OUTPUT>  Output file (stdout if not specified)
  -h, --help             Print help
  -V, --version          Print version
```

If the path contains no lockfile, or the JSON is not a lockfile, SnapSBOM exits non-zero with a message naming the file — it never emits an empty SBOM silently.

## Verifying reproducibility

The repository ships a small fixture, so you can reproduce this exactly. Clone the project and run the generator twice:

```console
$ git clone https://github.com/kawacukennedy/snapsbom && cd snapsbom
$ snapsbom examples/demo --format cyclonedx | shasum -a 256
e8c6ab160b0a3fde859a6281da90b89673b1d9b796675dbbb1a17aa253996a95  -
$ snapsbom examples/demo --format cyclonedx | shasum -a 256
e8c6ab160b0a3fde859a6281da90b89673b1d9b796675dbbb1a17aa253996a95  -
```

(`shasum -a 256` is macOS; on Linux use `sha256sum`. The SPDX digest for the same fixture is `ff8584cdc321a348c94c9d8e139149556ab8b895d8b83da68e41013fe38c7689`.)

Run it against your own project and the digest will be different — but running it *twice* on your own project will always give you the same value, on any machine, on any day.

The two outputs are identical because SnapSBOM pins the document creation timestamp to a fixed value (`2026-01-01T00:00:00Z`), sorts every collection, assigns canonical package identifiers, and writes a stable document namespace. Re-running from a fresh checkout on a different machine gives the same bytes.

The practical consequence: you can commit the SBOM next to `package-lock.json` and review it with a plain `git diff`. Any difference in the diff is a real dependency change, not generator noise.

## Example SBOM

A trimmed CycloneDX 1.6 document produced by the command above (two of the seven components removed for brevity). Keys are written in canonical sorted order:

```json
{
  "bomFormat": "CycloneDX",
  "components": [
    {
      "licenses": [],
      "name": "chalk",
      "purl": "pkg:npm/chalk@5.4.1",
      "supplier": {
        "name": "NOASSERTION"
      },
      "type": "library",
      "version": "5.4.1"
    },
    {
      "licenses": [],
      "name": "debug",
      "purl": "pkg:npm/debug@4.4.0",
      "supplier": {
        "name": "NOASSERTION"
      },
      "type": "library",
      "version": "4.4.0"
    }
  ],
  "metadata": {
    "component": {
      "name": "snapSBOM",
      "type": "application",
      "version": "0.2.1"
    },
    "timestamp": "2026-01-01T00:00:00Z",
    "tools": [
      {
        "name": "SnapSBOM",
        "version": "0.2.1"
      }
    ]
  },
  "specVersion": "1.6",
  "version": 1
}
```

Every component carries a [package URL (purl)](https://github.com/package-url/purl-spec), so the document can be diffed, merged, or consumed by any CycloneDX or SPDX aware tool.

## References

* SnapSBOM. (2026). SnapSBOM — deterministic SBOM generator. [https://github.com/kawacukennedy/snapsbom](https://github.com/kawacukennedy/snapsbom)
* CycloneDX. (2024). CycloneDX Specification 1.6. [https://cyclonedx.org/specification/overview/](https://cyclonedx.org/specification/overview/)
* SPDX. (2024). Software Product Data Specifications — SPDX 2.3. [https://spdx.github.io/spdx-spec/v2.3/](https://spdx.github.io/spdx-spec/v2.3/)
