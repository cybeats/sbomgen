# Creating SBOM Using Cdxgen

## Introduction

This tutorial illustrates how to create an SBOM from software projects using the cdxgen CLI.

## Requirements

* Node.js

* npm

* Docker (optional)

* Homebrew (optional)

* Java 21 (conditional)

## Installation
Run the command most pertinent to your system and configuration.

### Npm

```bash
npm install -g @cyclonedx/cdxgen
```

### Homebrew

```bash
brew install cdxgen
```
### Windows / Winget

```bash
$ winget install cdxgen
```

### Deno (limited support)

```bash
deno install --allow-read --allow-env --allow-run --allow-sys=uid,systemMemoryInfo,gid,homedir --allow-write --allow-net -n cdxgen "npm:@cyclonedx/cdxgen/cdxgen"
```

### Docker

#### Node
```bash
docker run --rm -e CDXGEN_DEBUG_MODE=debug -v /tmp:/tmp -v $(pwd):/app:rw -t ghcr.io/cyclonedx/cdxgen:master -r /app -o /app/bom.json
```

#### Deno
```bash
docker run --rm -e CDXGEN_DEBUG_MODE=debug -v /tmp:/tmp -v $(pwd):/app:rw -t ghcr.io/cyclonedx/cdxgen-deno:master -r /app -o /app/bom.json
```

#### Bun
```bash
docker run --rm -e CDXGEN_DEBUG_MODE=debug -v /tmp:/tmp -v $(pwd):/app:rw -t ghcr.io/cyclonedx/cdxgen-bun:master -r /app -o /app/bom.json
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
                               guages/platforms.                         [array]
      --exclude-type           Project types to exclude. Please refer to https:/
                               /cyclonedx.github.io/cdxgen/#/PROJECT_TYPES for s
                               upported languages/platforms.
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
      --skip-dt-tls-check      Skip TLS certificate check when calling Dependen
                               cy-Track.              [boolean] [default: false]
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
                               to 1.6                    [number] [default: 1.6]
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
  pliance", "generic", "machine-learning", "ml", "deep-learning", "ml-deep", "ml
                                                    -tiny"] [default: "generic"]
      --exclude                Additional glob pattern(s) to ignore      [array]
      --include-formulation    Generate formulation section with git metadata an
                               d build tools. Defaults to false.
                                                      [boolean] [default: false]
      --include-crypto         Include crypto libraries as components.
                                                      [boolean] [default: false]
      --standard               The list of standards which may consist of regula
                               tions, industry or organizational-specific standa
                               rds, maturity models, best practices, or any othe
                               r requirements which can be evaluated against or
                               attested to.
  [array] [choices: "asvs-5.0", "asvs-4.0.3", "bsimm-v13", "masvs-2.0.0", "nist_
         ssdf-1.1", "pcissc-secure-slc-1.1", "scvs-1.0.0", "ssaf-DRAFT-2023-11"]
      --min-confidence         Minimum confidence needed for the identity of a c
                               omponent from 0 - 1, where 1 is 100% confidence.
                                                           [number] [default: 0]
      --technique              Analysis technique to use
  [array] [choices: "auto", "source-code-analysis", "binary-analysis", "manifest
                   -analysis", "hash-comparison", "instrumentation", "filename"]
      --auto-compositions      Automatically set compositions when the BOM was f
                               iltered. Defaults to true
                                                       [boolean] [default: true]
  -h, --help                   Show help                               [boolean]
  -v, --version                Show version number                     [boolean]

Examples:
  cdxgen -t java .                       Generate a Java SBOM for the current di
                                         rectory
  cdxgen -t java -t js .                 Generate a SBOM for Java and JavaScript
                                          in the current directory
  cdxgen -t java --profile ml .          Generate a Java SBOM for machine learni
                                         ng purposes.
  cdxgen -t python --profile research .  Generate a Python SBOM for appsec resea
                                         rch.
  cdxgen --server                        Run cdxgen as a server

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

Multiple languages can be specified by invoking the ```-t``` flag for each language.

Where ```type``` is one of the potential programming languages/frameworks (python, java, rust, npm, go, etc)

To specify the CycloneDX specification version, use the ```--spec-version``` flag with the desired version, e.g. 1.6. 1.5 etc.

## Notes

* Without specifying the type, cdxgen may sometimes create inaccurate outputs.

* C SBOMs require Java 21 to be installed.

## Example SBOM

The following section illustrates a CycloneDX JSON SBOM of the following codebases, created via cdxgen:

* Asciinema (Rust)
* Htop (C)
* Pip (Python)
* Springwolf (Java)


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
        <a href="./asciinema.cdxgen.json">asciinema</a>
    </h3>
    <div id="json-container">
        <pre id="json-display1"></pre>
    </div>
    <h3>
        <a href="./pip.cdxgen.json">pip</a>
    </h3>
    <div id="json-container">
        <pre id="json-display2"></pre>
    </div>
    <h3>
        <a href="./htop.cdxgen.json">htop</a>
    </h3>
    <div id="json-container">
        <pre id="json-display3"></pre>
    </div>
    <h3>
        <a href="./springwolf.cdxgen.json">springwolf</a>
    </h3>
    <div id="json-container">
        <pre id="json-display4"></pre>
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
    display_json('./asciinema.cdxgen.json', 'json-display1');
    display_json('./pip.cdxgen.json', 'json-display2');
    display_json('./htop.cdxgen.json', 'json-display3');
    display_json('./springwolf.cdxgen.json', 'json-display4');
    </script>
</body>
</html>


## References

* CycloneDX. (n.d.). CycloneDX/cdxgen: Creates CycloneDX Bill of materials (BOM) for your projects from source and container images. supports many languages and package managers. integrate in your CI/CD pipeline with automatic submission to dependency track server. slack: Https://cyclonedx.slack.com/archives/c04nffe1962. GitHub. [https://github.com/CycloneDX/cdxgen](https://github.com/CycloneDX/cdxgen)

* cdxgen documentation. (n.d.). https://cyclonedx.github.io/cdxgen/#/

* Asciinema. (n.d.). GitHub - asciinema/asciinema: Terminal session recorder 📹. GitHub. https://github.com/asciinema/asciinema

* Pypa. (n.d.). GitHub - pypa/pip: The Python package installer. GitHub. https://github.com/pypa/pip

* Htop-Dev. (n.d.). GitHub - htop-dev/htop: htop - an interactive process viewer. GitHub. https://github.com/htop-dev/htop

* Springwolf. (n.d.). GitHub - springwolf/springwolf-core: Automated documentation for event-driven applications built with Spring Boot. GitHub. https://github.com/springwolf/springwolf-core