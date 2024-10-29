# Creating SBOM Using Cdxgen

## Introduction

This tutorial illustrates how to create an SBOM from software projects using the cdxgen CLI.

## Requirements

* Node.js

* npm

or

* Homebrew

## Installation

### Npm

Run the command:

```bash
npm install -g @cyclonedx/cdxgen
```

### Homebrew

Run the command:

```bash
brew install cdxgen
```

Verify installation by running:

```bash
cdxgen -h
```

You should see the resultant output:

```bash
cdxgen [command]

Commands:
  cdxgen completion  Generate bash/zsh completion

Options:
  -o, --output                 Output file. Default bom.json
                                                           [default: "bom.json"]
  -t, --type                   Project type. Please refer to https://cyclonedx.g
                               ithub.io/cdxgen/#/PROJECT_TYPES for supported lan
                               guages/platforms.
  -r, --recurse                Recurse mode suitable for mono-repos. Defaults to
                                true. Pass --no-recurse to disable.
                                                       [boolean] [default: true]
  -p, --print                  Print the SBOM as a table with tree.    [boolean]
  -c, --resolve-class          Resolve class names for packages. jars only for n
                               ow.                                     [boolean]
      --deep                   Perform deep searches for components. Useful whil
                               e scanning C/C++ apps, live OS and oci images.
                                                                       [boolean]
      --server-url             Dependency track url. Eg: https://deptrack.cyclon
                               edx.io
      --api-key                Dependency track api key
      --project-group          Dependency track project group
      --project-name           Dependency track project name. Default use the di
                               rectory name
      --project-version        Dependency track project version
                                                          [string] [default: ""]
      --project-id             Dependency track project id. Either provide the i
                               d or the project name and version together
                                                                        [string]
      --parent-project-id      Dependency track parent project id       [string]
      --required-only          Include only the packages with required scope on
                               the SBOM. Would set compositions.aggregate to inc
                               omplete unless --no-auto-compositions is passed.
                                                                       [boolean]
      --fail-on-error          Fail if any dependency extractor fails. [boolean]
      --no-babel               Do not use babel to perform usage analysis for Ja
                               vaScript/TypeScript projects.           [boolean]
      --generate-key-and-sign  Generate an RSA public/private key pair and then
                               sign the generated SBOM using JSON Web Signatures
                               .                                       [boolean]
      --server                 Run cdxgen as a server                  [boolean]
      --server-host            Listen address             [default: "127.0.0.1"]
      --server-port            Listen port                     [default: "9090"]
      --install-deps           Install dependencies automatically for some proje
                               cts. Defaults to true but disabled for containers
                                and oci scans. Use --no-install-deps to disable
                               this feature.                           [boolean]
      --validate               Validate the generated SBOM using json schema. De
                               faults to true. Pass --no-validate to disable.
                                                       [boolean] [default: true]
      --evidence               Generate SBOM with evidence for supported languag
                               es.                    [boolean] [default: false]
      --spec-version           CycloneDX Specification version to use. Defaults
                               to 1.5                    [number] [default: 1.5]
      --filter                 Filter components containing this word in purl or
                                component.properties.value. Multiple values allo
                               wed.                                      [array]
      --only                   Include components only containing this word in p
                               url. Useful to generate BOM with first party comp
                               onents alone. Multiple values allowed.    [array]
      --author                 The person(s) who created the BOM. Set this value
                                if you're intending the modify the BOM and claim
                                authorship.[array] [default: "OWASP Foundation"]
      --profile                BOM profile to use for generation. Default generi
                               c.
  [choices: "appsec", "research", "operational", "threat-modeling", "license-com
                                       pliance", "generic"] [default: "generic"]
      --exclude                Additional glob pattern(s) to ignore      [array]
      --include-formulation    Generate formulation section using git metadata.
                                                      [boolean] [default: false]
      --include-crypto         Include crypto libraries found under formulation.
                                                      [boolean] [default: false]
      --standard               The list of standards which may consist of regula
                               tions, industry or organizational-specific standa
                               rds, maturity models, best practices, or any othe
                               r requirements which can be evaluated against or
                               attested to.
  [array] [choices: "asvs-4.0.3", "bsimm-v13", "masvs-2.0.0", "nist_ssdf-1.1", "
                     pcissc-secure-slc-1.1", "scvs-1.0.0", "ssaf-DRAFT-2023-11"]
      --no-banner              Do not show the donation banner. Set this attribu
                               te if you are an active sponsor for OWASP Cyclone
                               DX.                    [boolean] [default: false]
      --auto-compositions      Automatically set compositions when the BOM was f
                               iltered. Defaults to true
                                                       [boolean] [default: true]
  -h, --help                   Show help                               [boolean]
  -v, --version                Show version number                     [boolean]

Examples:
  cdxgen -t java .  Generate a Java SBOM for the current directory
  cdxgen --server   Run cdxgen as a server

for documentation, visit https://cyclonedx.github.io/cdxgen
```

## Usage

To generate an SBOM run:

```bash
cdxgen -o <filename>
```

Where ```filename``` is the name of the output json file.

Additionally, the language of the project can be defined explicitly via the ```-t``` flag:

```bash
cdxgen -t <type> -o <filename>
```

Where ```type``` is one of the potential programming languages/frameworks (python, java, rust, npm, go, etc)

## Notes

* Without specifying the type, cdxgen may sometimes create inaccurate outputs.

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
        <a href="./bom.json">cdxgen (json)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
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
    </script>
</body>
</html>


## References

* CycloneDX. (n.d.). CycloneDX/cdxgen: Creates CycloneDX Bill of materials (BOM) for your projects from source and container images. supports many languages and package managers. integrate in your CI/CD pipeline with automatic submission to dependency track server. slack: Https://cyclonedx.slack.com/archives/c04nffe1962. GitHub. [https://github.com/CycloneDX/cdxgen](https://github.com/CycloneDX/cdxgen)