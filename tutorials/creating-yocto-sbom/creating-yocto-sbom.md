# Creating SBOMs From Yocto Projects

## Introduction

This tutorial illustrates how to generate an SBOM from a Yocto project using the Wind-River meta-wr-sbom tool.

## Requirements

*  Git

*  Bitbake CLI

* Access to the Wind-River meta-wr-sbom repository.

## Installation

Within your Yocto project ```build/``` directory run:

```bash
git clone https://github.com/Wind-River/meta-wr-sbom
```

If you are working with Yocto 4.2 or higher, run the following commands:

```bash
cd meta-wr-sbom
git checkout 4.2_or_higher
```

Open the file ```conf/bblayers.conf``` in your build directory, and append the following:

```bash
BBLAYERS += "/<path-to-directory>/meta-wr-sbom"
```

## Usage

Run:

```bash
bitbake <target-image-name>
```

An SPDX JSON SBOM should appear in the path ```tmp/deploy/images/<machine-name>/<target-image-name>.spdx.json``` in relation to your Yocto project directory upon build completion.

## Notes

* As of the writing of this document, building Yocto images is not fully supported or tested on Ubuntu 24.04. Should one be on Ubuntu 24.04 and building a Yocto image, the error message:

    
    "ERROR: User namespaces are not usable by BitBake, possibly due to AppArmor. See https://discourse.ubuntu.com/t/ubuntu-24-04-lts-noble-numbat-release-notes/39890#unprivileged-user-namespace-restrictions for more information."

    May be rectified via running the following:

    ```bash
    sudo apparmor_parser -R /etc/apparmor.d/unprivileged_userns
    ```

## Example SBOM

The following section illustrates an SPDX JSON SBOM of a core-image-minimal Yocto build, created via meta-wr-sbom.

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
        <a href="./yocto-image.spdx.json">core-image-minimal</a>
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
    display_json('./yocto-image.spdx.json', 'json-display');
    </script>
</body>
</html>


## References

* Wind-River. (n.d.). GitHub - Wind-River/meta-wr-sbom: A CLI tool for generating a Software Bill of Materials (SBOM) from Yocto Project. GitHub. [https://github.com/Wind-River/meta-wr-sbom](https://github.com/Wind-River/meta-wr-sbom)

* A practical guide to BitBake. (n.d.). [https://a4z.gitlab.io/docs/BitBake/guide.html](https://a4z.gitlab.io/docs/BitBake/guide.html)

* Bug #2056555 “Allow bitbake to create user namespace” : Bugs : apparmor package : Ubuntu. (2024, March 8). Launchpad. [https://bugs.launchpad.net/ubuntu/+source/apparmor/+bug/2056555](https://bugs.launchpad.net/ubuntu/+source/apparmor/+bug/2056555)

* Yocto Project Quick Build — The Yocto Project ® 5.1.999 documentation. (n.d.). [https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)