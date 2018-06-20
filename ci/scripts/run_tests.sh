#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules cicd-test2
cd cicd-tests && npm test
