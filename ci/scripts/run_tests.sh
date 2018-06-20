#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules cicd-tests
cd cicd-tests && npm test
