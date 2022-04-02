---
sidebar_position: 1
---

# Self-host with the public Developer API

Before you self-host Moddie you need to decide whenever you will use the publicly available developer API, or if you're going to host one yourself. [Click here to see the difference](/docs/self-host/differences-api)

This tutorial will cover the way to self-host the bot with the public developer API.
If you are looking into self-hosting the API as well, [look here](https://aaa)

## Download the Moddie Source Code

First thing you'll want to do, is [downloading the source code from the official github repository](https://github.com/ModdieDiscord/Moddie/releases/latest).

::: tip Releases
It is possible that the releases will be outdated. In that case you can clone the source code.
**(Note: cloned source code may contain bugs and issues)**
:::

## Getting an API key from the dashboard

Next you will need to get an API key to connect to the Moddie developer API and websocket.

Follow these steps: (Not final)
 1. Go to the [developer api page](https://dash.moddie.xyz/developer/api)
 2. Click `New API key`
 3. Set the `Name` to the name of your Discord bot
 4. Put your bot's client id into the `Client ID` field.
 5. Select `Developer API` and `Developer websocket` in the `scope` section

::: danger API keys
Never share the API key with anyone, as it's used to control your instance in the dashboard and obtain your instance's data.
:::

After that copy the API key and paste it into the [configuration](/docs/self-host/files-modules/config). Your bot should be visible as `online` in the [developer page](https://dash.moddie.xyz/developer) once you turn on the bot for the first time.
