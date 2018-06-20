#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules REvaluation-UI
cd REvaluation-UI && npm test
