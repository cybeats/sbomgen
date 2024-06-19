## Introduction

This tutorial illustrates how to create a Cryptographic Bill Of Materials (CBOM) from software projects using the Cryptobom Forge tool. 

## Requirements

* CodeQL CLI
* Cryptobom Forge Tool
* Python 3.10
* Git

## Installation

### CodeQL CLI

Create a CodeQL folder to hold the CLI and tools.

Download and extract to the CodeQL folder, the CodeQL CLI release for your system, found [here](https://github.com/github/codeql-action/releases).

Git clone the CodeQL repo to the same CodeQL folder with:

```git clone --recursive https://github.com/github/codeql.git <CodeQL-folder-name>```

Add the CodeQL folder to your $PATH.

### Cryptobom Forge Tool

Download the release wheel for the Cryptobom Forge Tool found [here](https://github.com/Santandersecurityresearch/cryptobom-forge/releases).

install the CLI by running the command:

```pip install cryptobom_forge-{VERSION}-py3-none-any.whl```

Alternatively, the CLI can be installed by cloning the repository, and running:

```pip install -r requirements.txt```

NOTE: You must have ssh enabled in git.

## Usage

### CodeQL CLI

Check configuration by running:

```codeql resolve languages```

```codeql resolve qlpacks```

Navigate to the directory of the project you wish to create a CBOM for.

```codeql database create codeqldb --language=project-language```

NOTE: Project language must be of the following:

|Language|	Identifier|	Optional alternative identifiers (if any)|
|--------|------------|------------------------------------------|
|C/C++|	```c-cpp```|```c or cpp```|
|C#	|```csharp```|        
|Go|```go```|          
|Java/Kotlin|```java-kotlin	java or kotlin```|
|JavaScript/TypeScript|```javascript-typescript```|```javascript or typescript```|           
|Python|```python```|          	
|Ruby|```ruby```|	
|Swift|```swift```|

In this tutorial, we will use Python and the ```python``` identifier. One can substitute it with the appropriate identifier for your use case.

To create a database for analysis within your project, run:

```codeql database create codeqldb --language=python```

To analyze the database we can create a ```codeql-results``` directory for the analysis output, then run:

```
export CODEQL_SUITES_PATH=$HOME/<path-to-codeql-repo>/codeql-repo/python/ql/src/codeql-suites
export RESULTS_FOLDER=codeql-results

codeql database analyze codeqldb $CODEQL_SUITES_PATH python-code-scanning.qls  --format=sarifv2.1.0  --output=$RESULTS_FOLDER python-code-scanning.sarif

```

### Cryptobom Forge Tool

Once the above commands have been executed, run:


```generate-cbom codeql-results/python-code-scanning.sarif```


A "cbom.json" file will be created inside your project directory.


## References
* Santander Security. (2023). Cryptobom Forge Tool. https://github.com/santandersecurityresearch/cryptobom-forge

* GitHub. (2023). Releases. https://github.com/github/codeql-action/releases
