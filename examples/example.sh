#!/usr/bin/env bash
#../bin/fmtconv -h

# JSON
#../bin/fmtconv json-1.json -o json-1.fmtconv.json --debug -c
../bin/fmtconv json-1.json -o json-1.fmtconv.json --debug
#../bin/fmtconv json-1.json -o json-1.fmtconv.yaml --debug -c
../bin/fmtconv json-1.json -o json-1.fmtconv.yaml --debug

# YAML
#../bin/fmtconv yaml-1.yaml -o yaml-1.fmtconv.yaml --debug -c
../bin/fmtconv yaml-1.yaml -o yaml-1.fmtconv.yaml --debug
#../bin/fmtconv yaml-1.yaml -o yaml-1.fmtconv.json --debug -c
../bin/fmtconv yaml-1.yaml -o yaml-1.fmtconv.json --debug
