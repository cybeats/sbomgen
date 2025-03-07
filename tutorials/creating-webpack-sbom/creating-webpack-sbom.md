# Title

## Introduction

This tutorial illustrates how to produce an SBOM from Webpack projects using the CycloneDX-Webpack plugin.

## Requirements

* Node.js >= 14
* Npm or Yarn
* Webpack ^5
* Webpack project

## Installation

Run the relevant command within your project:

### Npm 

```bash
npm i -D @cyclonedx/webpack-plugin
```

### Yarn

```bash
yarn add -D @cyclonedx/webpack-plugin
```

## Usage

In your ```webpack.config.json``` file, add the following code blocks:

```js
const { CycloneDxWebpackPlugin } = require('@cyclonedx/webpack-plugin');

/** @type {import('@cyclonedx/webpack-plugin').CycloneDxWebpackPluginOptions} */
const cycloneDxWebpackPluginOptions = {
  specVersion: '1.6', 
  reproducibleResults: false,
  outputLocation: './bom', //can be customized
  includeWellknown: true,
  wellknownLocation: './.well-known', //generate SBOM to a well known location 
  rootComponentAutodetect: true, //set to false if you wish to set rootComponent manually.
  rootComponentType: 'application', 
  rootComponentName: undefined, //define if you wish to set rootComponent manually.
  rootComponentVersion: undefined, //define if you wish to set rootComponent manually.
  rootComponentBuildSystem: undefined, //define if you wish to set rootComponent manually.
  rootComponentVCS: undefined, //define if you wish to set rootComponent manually.
  collectEvidence: true
}
```

within the ```module.exports``` section, add the following ```plugins:``` section:

```js
module.exports = {
  // other code goes here
  plugins: [
    new CycloneDxWebpackPlugin(cycloneDxWebpackPluginOptions)
  ]
}
```
Build the project, and a directory of the ```outputLocation:``` value (in this case, ```bom/```) directory should appear in your build ```dist/``` directory, containing SBOMs ```bom.json``` and ```bom.xml```. 

Further features to the SBOM root component, e.g. name, version, build system, version control can be implemented by customizing the ```rootComponent*``` variables, after setting ```rootComponentAutodetect:``` to false.

## Notes

* Installing the plugin with the format ```@cyclonedx/webpack-plugin``` may throw errors, which can be rectified by installing the plugin with the format ```@cyclonedx/webpack-plugin@latest``` or ```@cyclonedx/webpack-plugin@4.0.1``` (with 4.0.1 being the latest version as of writing this tutorial).

## Example SBOM

This section illustrates CycloneDX JSON and XML SBOMs of the CycloneDX-Webpack plugin simple example code, created via CycloneDX-Webpack plugin.

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
        <a href="./bom.json">Simple Example (JSON)</a>
    </h3>
    <div id="json-container">
        <pre id="json-display"></pre>
    </div>
        <h3>
        <a href="./bom.xml">Simple Example (XML)</a>
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
            .catch(error => console.error('Error fetching XML:', error));
        }
    display_json("./bom.json", "json-display");
    display_xml("./bom.xml", "xml-display");
    </script>
</body>
</html>


## References

* CycloneDX. (n.d.). GitHub - CycloneDX/cyclonedx-webpack-plugin: Generate CycloneDX Software Bill of Materials (SBOM) from webpack bundles at compile time. GitHub. [https://github.com/CycloneDX/cyclonedx-webpack-plugin](https://github.com/CycloneDX/cyclonedx-webpack-plugin)