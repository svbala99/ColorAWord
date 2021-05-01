# Color Word

### A react native android / ios application, which when given a word as input gives out a list of colors related to that word.

### Download the APK from:  [Google Drive Link](https://drive.google.com/file/d/1_qWXO7XvTERv_Kmpv-Wy7D1XY-5wvDjX/view?usp=sharing)

## Screenshots

| Splash |Search 1| Search 2| Colorlist Loading | Colorlist |
| -------| ------- | -------| ------- | --------|
|<img src="https://user-images.githubusercontent.com/49264038/116771525-d6628180-aa69-11eb-8c43-a189dc4333bd.jpg" width="200" height="300"/> | <img src="https://user-images.githubusercontent.com/49264038/116771524-d498be00-aa69-11eb-9c5b-7881e4e8bc06.jpg" width="200" height="300"/> | <img src="https://user-images.githubusercontent.com/49264038/116771528-d82c4500-aa69-11eb-9da8-675369db5746.jpg" width="200" height="300"/> |  <img src="https://user-images.githubusercontent.com/49264038/116771527-d793ae80-aa69-11eb-983f-1b63c026d332.jpg" width="200" height="300"/> |  <img src="https://user-images.githubusercontent.com/49264038/116771526-d6628180-aa69-11eb-968c-7f453af1d272.jpg" width="200" height="300"/>

## Features

- Search for a word and get its related colors according to Google Images Search API

## Technology

- React Native : For Cross platform mobile app development
- Node JS: For runtime environment
- Javascript : For application development
- VS code : Code editor IDE
- Linting: eslint
- Test: Jest compatible

## Installation

ColorAWord requires [Node.js](https://nodejs.org/) v10+ to run.

##### Download the repo and install dependencies

```sh
git clone git@github.com:svbala99/ColorAWord.git
cd ColorAWord
npm i
```

##### Start the development server

```sh
npm start
```

##### Install the app first time in Android (in Dev mode)

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Android Studio IDE by clicking "Run" button after opening "Android" project in it
- Supported Machines: Windows / Linux / Mac

```sh
npm run android
```

##### Install the app first time in iPhones (iOS) - Dev mode

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Xcode IDE by clicking "Build" & "Run" button after opening "iOS" folder in it
- Supported Machines: Mac only

```sh
cd ios && pod install && cd ..
npm run ios
```

## To generate Android APK

```bash
gradlew assembleRelease (APK file)
gradlew bundleRelease (AAB file)
```
- For more details: https://reactnative.dev/docs/signed-apk-android
Note: If you run in Linux, issue ./gradlew instead of gradlew

## Output file location

You will find the APK file in:

```bash
~PROJECT_LOCATION\android\app\build\outputs\apk\release
```

## Install the released APK

```bash
adb install app-release.apk
```

## Packages used

| Package                   | Version |
| ------------------------- | ------- |
| React                     | 17      |
| React Native              | 0.64    |
| rn-dominant-color         | 1.7.2   |
| React Navigation          | 5       |
| react-native-vector-icons | 8       |
| prop-types                | 15      |

## License

GNU GPL

[![React Native](https://reactnative.dev/img/oss_logo.png)](https://reactnative.dev/)

[![GithubFollow @svbala99](https://img.shields.io/github/last-commit/svbala99/ColorAWord?)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/license/svbala99/ColorAWord?color=blue)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/languages/count/svbala99/ColorAWord?color=orange)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/languages/top/svbala99/ColorAWord?color=blueviolet)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/search/svbala99/ColorAWord/master?color=lightgrey)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/languages/code-size/svbala99/ColorAWord?color=pink)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/repo-size/svbala99/ColorAWord)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/issues/svbala99/ColorAWordo?color=%2362DBAE%20)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/followers/svbala99?style=social)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/commit-activity/m/svbala99/ColorAWord?color=%23DB62B2%20)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/github/contributors/svbala99/ColorAWord)](https://github.com/svbala99/)

[![GithubFollow @svbala99](https://img.shields.io/date/1619222400)](https://github.com/svbala99/)
