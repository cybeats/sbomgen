# Creating SBOMs from Conan Projects

## Introduction

This tutorial illustrates how to produce an SBOM from a Conan C project using the Conan CycloneDX plugin.

## Requirements

* Conan

* Pip

## Installation

Install the cyclonedx-python-lib dependency, needed for proper functionality of the plugin. Run the command:

```bash
pip install 'cyclonedx-python-lib>=5.0.0,<6'
```

Install the Conan plugins repo via the command:

```bash
conan config install https://github.com/conan-io/conan-extensions.git
```

Verify installation by running the command:

```bash
conan sbom:cyclonedx -h
```

You should get the resultant output:

```bash
usage: conan cyclonedx [-h] [-v [V]] [-cc CORE_CONF] [-f FORMAT] [--name NAME]
                       [--version VERSION] [--user USER] [--channel CHANNEL]
                       [--requires REQUIRES] [--tool-requires TOOL_REQUIRES]
                       [-b BUILD] [-r REMOTE | -nr] [-u [UPDATE]]
                       [-pr PROFILE] [-pr:b PROFILE_BUILD]
                       [-pr:h PROFILE_HOST] [-pr:a PROFILE_ALL] [-o OPTIONS]
                       [-o:b OPTIONS_BUILD] [-o:h OPTIONS_HOST]
                       [-o:a OPTIONS_ALL] [-s SETTINGS] [-s:b SETTINGS_BUILD]
                       [-s:h SETTINGS_HOST] [-s:a SETTINGS_ALL] [-c CONF]
                       [-c:b CONF_BUILD] [-c:h CONF_HOST] [-c:a CONF_ALL]
                       [-l LOCKFILE] [--lockfile-partial]
                       [--lockfile-out LOCKFILE_OUT] [--lockfile-clean]
                       [--lockfile-overrides LOCKFILE_OVERRIDES]
                       [--build-require] [--no-build-requires]
                       [path]

Create a CycloneDX Software Bill of Materials (SBOM)

positional arguments:
  path                  Path to a folder containing a recipe (conanfile.py or
                        conanfile.txt) or to a recipe file. e.g.,
                        ./my_project/conanfile.txt.

options:
  -h, --help            show this help message and exit
  -v [V]                Level of detail of the output. Valid options from less
                        verbose to more verbose: -vquiet, -verror, -vwarning,
                        -vnotice, -vstatus, -v or -vverbose, -vv or -vdebug,
                        -vvv or -vtrace
  -cc CORE_CONF, --core-conf CORE_CONF
                        Define core configuration, overwriting global.conf
                        values. E.g.: -cc core:non_interactive=True
  -f FORMAT, --format FORMAT
                        Select the output format: 1.4_json, 1.3_json,
                        1.2_json, 1.4_xml, 1.3_xml, 1.2_xml, 1.1_xml, 1.0_xml
  --name NAME           Provide a package name if not specified in conanfile
  --version VERSION     Provide a package version if not specified in
                        conanfile
  --user USER           Provide a user if not specified in conanfile
  --channel CHANNEL     Provide a channel if not specified in conanfile
  --requires REQUIRES   Directly provide requires instead of a conanfile
  --tool-requires TOOL_REQUIRES
                        Directly provide tool-requires instead of a conanfile
  -b BUILD, --build BUILD
                        Optional, specify which packages to build from source.
                        Combining multiple '--build' options on one command
                        line is allowed. Possible values: --build="*" Force
                        build from source for all packages. --build=never
                        Disallow build for all packages, use binary packages
                        or fail if a binary package is not found, it cannot be
                        combined with other '--build' options. --build=missing
                        Build packages from source whose binary package is not
                        found. --build=cascade Build packages from source that
                        have at least one dependency being built from source.
                        --build=[pattern] Build packages from source whose
                        package reference matches the pattern. The pattern
                        uses 'fnmatch' style wildcards. --build=~[pattern]
                        Excluded packages, which will not be built from the
                        source, whose package reference matches the pattern.
                        The pattern uses 'fnmatch' style wildcards.
                        --build=missing:[pattern] Build from source if a
                        compatible binary does not exist, only for packages
                        matching pattern.
  -r REMOTE, --remote REMOTE
                        Look in the specified remote or remotes server
  -nr, --no-remote      Do not use remote, resolve exclusively in the cache
  -u [UPDATE], --update [UPDATE]
                        Will install newer versions and/or revisions in the
                        local cache for the given reference name, or all
                        references in the graph if no argument is supplied.
                        When using version ranges, it will install the latest
                        version that satisfies the range. It will update to
                        the latest revision for the resolved version range.
  -pr PROFILE, --profile PROFILE
                        Apply the specified profile. By default, or if
                        specifying -pr:h (--profile:host), it applies to the
                        host context. Use -pr:b (--profile:build) to specify
                        the build context, or -pr:a (--profile:all) to specify
                        both contexts at once
  -pr:b PROFILE_BUILD, --profile:build PROFILE_BUILD
  -pr:h PROFILE_HOST, --profile:host PROFILE_HOST
  -pr:a PROFILE_ALL, --profile:all PROFILE_ALL
  -o OPTIONS, --options OPTIONS
                        Apply the specified options. By default, or if
                        specifying -o:h (--options:host), it applies to the
                        host context. Use -o:b (--options:build) to specify
                        the build context, or -o:a (--options:all) to specify
                        both contexts at once. Example:
                        -o="pkg/*:with_qt=True"
  -o:b OPTIONS_BUILD, --options:build OPTIONS_BUILD
  -o:h OPTIONS_HOST, --options:host OPTIONS_HOST
  -o:a OPTIONS_ALL, --options:all OPTIONS_ALL
  -s SETTINGS, --settings SETTINGS
                        Apply the specified settings. By default, or if
                        specifying -s:h (--settings:host), it applies to the
                        host context. Use -s:b (--settings:build) to specify
                        the build context, or -s:a (--settings:all) to specify
                        both contexts at once. Example: -s="compiler=gcc"
  -s:b SETTINGS_BUILD, --settings:build SETTINGS_BUILD
  -s:h SETTINGS_HOST, --settings:host SETTINGS_HOST
  -s:a SETTINGS_ALL, --settings:all SETTINGS_ALL
  -c CONF, --conf CONF  Apply the specified conf. By default, or if specifying
                        -c:h (--conf:host), it applies to the host context.
                        Use -c:b (--conf:build) to specify the build context,
                        or -c:a (--conf:all) to specify both contexts at once.
                        Example:
                        -c="tools.cmake.cmaketoolchain:generator=Xcode"
  -c:b CONF_BUILD, --conf:build CONF_BUILD
  -c:h CONF_HOST, --conf:host CONF_HOST
  -c:a CONF_ALL, --conf:all CONF_ALL
  -l LOCKFILE, --lockfile LOCKFILE
                        Path to a lockfile. Use --lockfile="" to avoid
                        automatic use of existing 'conan.lock' file
  --lockfile-partial    Do not raise an error if some dependency is not found
                        in lockfile
  --lockfile-out LOCKFILE_OUT
                        Filename of the updated lockfile
  --lockfile-clean      Remove unused entries from the lockfile
  --lockfile-overrides LOCKFILE_OVERRIDES
                        Overwrite lockfile overrides
  --build-require       Whether the provided path is a build-require
  --no-build-requires   Omit the build requirements from the SBOM
```

## Usage

To create an SBOM, enter a Conan project, and run:

```bash
conan sbom:cyclonedx --format <cyclonedx-format> <conanfile> <OPTIONAL-FLAGS>
```
Where:

* ```<cyclonedx-format>``` can be one of ```1.4_json```,  ```1.3_json```, ```1.2_json```,  ```1.4_xml```,  ```1.3_xml```, ```1.2_xml```,  ```1.1_xml```,  ```1.0_xml```

* ```<conanfile>``` can be ```conanfile.txt``` or ```conanfile.py```

Additional metadata and component data can be input via the commands:

*  ```--name``` metadata component name           
*  ```--version``` metadata component version
* ```--tool-requires``` add component to SBOM not found in conanfile, with format ```name/version```

## Notes

* SBOM type appears to default to library
* SBOMs appear to not adequately add metadata components, e.g. name, by default.

## Example SBOM

The following section illustrates a CycloneDX JSON SBOM of a Conan example codebase using zlib, generated via Conan CycloneDX.

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
        <a href="./conan.bom.json">Conan example SBOM</a>
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
            .catch(error => console.error('Error fetching XML:', error));
        }
    display_json("./conan.bom.json", "json-display");
    </script>
</body>
</html>


## References

* Conan-Io. (n.d.). conan-extensions/extensions/commands/sbom at main · conan-io/conan-extensions. GitHub. https://github.com/conan-io/conan-extensions/tree/main/extensions/commands/sbom