# Creating SBOMs from Erlang Projects

## Introduction

This tutorial illustrates how to produce an SBOM from Erlang projects using the Rebar3_Sbom plugin.

## Requirements

* Erlang 25

* Rebar3

## Installation and Usage

Navigate to your Erlang project.

Copy and paste:

```
{plugins, [rebar3_sbom]}.
```
into your rebar.config file.

Then run:

```rebar3 sbom```

A bom.xml should appear in your directory.

## Notes

* Ensure that you have at least Erlang version 25, lower versions do not work, and result in crashes.

* The only output format available appears to be xml.

## References

* Voltone. (2022). Rebar3_sbom. https://github.com/voltone/rebar3_sbom

* Erlang. (2023). Rebar3. https://github.com/erlang/rebar3 

* Erlang and elixir packages download. Erlang Solutions. (2023, September 13). https://www.erlang-solutions.com/downloads/ 

* Voltone, Afa, &amp; Maxlapshin. (2022, July 18). Rebar3_sbom: Rebar3 plugin to generate CycloneDX sbom. Erlang Forums. https://erlangforums.com/t/rebar3-sbom-rebar3-plugin-to-generate-cyclonedx-sbom/1655  
