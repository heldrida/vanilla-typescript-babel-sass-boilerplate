#!/usr/bin/env bash

# capture name from package.json
PKG_NAME=$(node -p "require('./package.json').name")
PKG_VERSION=$(node -p "require('./package.json').version")
TARGET_DIR="./dist/${PKG_NAME}/${PKG_VERSION}/css"

mkdir -p "${TARGET_DIR}" &&
npx stylus ./src/styles/entry.styl -o ./static/css/main.css &&
npx csso ./static/css/main.css --output "${TARGET_DIR}"/main.min.css --source-map main.min.map