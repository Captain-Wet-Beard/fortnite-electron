# About

**This is a fork of the** [**geforcenow-electron app**](https://github.com/hmlendea/geforcenow-electron) written in Electron, that wraps around the Xbox Cloud Gaming web browser implementation.

## Why use this over just using the web browser?

-   **Better performance** - This forces the browser to use the GPU for hardware acceleration, which results in better performance. It also uses a Windows user agent by default, which apparently results in better performance as well. You can achieve the same results by using the web browser and enabling hardware acceleration and spoofing the user agent with extensions, but this is a lot easier.
-   **Better desktop integration** - This app integrates with the desktop environment, allowing you to use the window manager to move and resize the window and launch it from the application launcher (which is crucial for the Steam Deck, as you can then add it as a non-Steam game).
-   **Better parity with the native Windows app** - This app replicates some of the features of the native Windows app, such as hiding the mouse pointer when the controlled is being used.
-   **Discord Rich Presence** - This app integrates with Discord, allowing you to show what you're playing on your Discord profile.

## Installation

[![Get it from the AUR](https://raw.githubusercontent.com/hmlendea/readme-assets/master/badges/stores/aur.png)](https://aur.archlinux.org/packages/xbox-cloud-gaming/)

Currently the project is available on these repositories: **AUR**

## Manual Installation

-   Go to the [latest release](https://github.com/marzeq/xbox-cloud-gaming-electron/releases/latest).
-   Download the specific file that best fits your disto.
-   Install it

# Usage

If you've installed it through your package manager, then it should already contain a launcher for it. Otherwise, run the `xbox-cloud-gaming-electron` binary.

To toggle full-screen mode, use the `F11` keyboard shortcut.

## FAQ

### Why do I keep getting logged out?

This is an issue on Microsoft's side. If you click on the "Sign in" button, it will log you in again without a need to enter your credentials.

### How do I get controller vibration to work?

Currently, controller vibration is a preview feature. You can turn it on by clicking on your profile picture in the top right corner and enabling "Preview features" in the settings menu. You will need to restart the app for the changes to take effect. After that, enable "Controller vibration" in the "Audio & input" section.

### Will you have a Flatpak version?

A Flatpak version is planned, but it's not a priority at the moment. If you want to help with this, please open an issue. In the meantime, you can use the AppImage version (for example if you're on a Steam Deck).

### What are the flags that I can use?

These are the currently available flags:

|         Name          |                            Description                           |
| --------------------- | ---------------------------------------------------------------- |
|       `--no-rpc`      |                  Disables Discord Rich Presence                  |
| `--dont-hide-pointer` | Disables hiding the mouse pointer when you're using a controller |

# Building from source

## Requirements

You will need to install [npm](https://www.npmjs.com/), the Node.js package manager. On most distributions, the package is simply called `npm`.

## Cloning the source code

Once you have npm, clone the wrapper to a convenient location:

```
git clone https://github.com/marzeq/xbox-cloud-gaming-electron.git
```

## Building

```
cd xbox-cloud-gaming-electron
npm i
npx tsc && npx electron .
```

