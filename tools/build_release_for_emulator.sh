#!/bin/bash

cd /home/vp/pro/few-hundred/android

# assemble release
./gradlew buildRelease

# extract apks from aab
java -jar ~/bin/bundletool.jar build-apks \
  --bundle=./app/build/outputs/bundle/release/app-release.aab \
  --output=./app/build/outputs/bundle/release/app-release.apks \
  --mode=universal \
  --ks=./app/few_hundred.keystore \
  --ks-pass=pass:p0h0dnayaduda \
  --ks-key-alias=few_hundred_alias \
  --key-pass=pass:p0h0dnayaduda

# extract apk from apks
unzip ./app/build/outputs/bundle/release/app-release.apks -d ./app/build/outputs/bundle/release/app-release

# install apk to emulator
adb install -r ./app/build/outputs/bundle/release/app-release/universal.apk
