# PM Index card

[![release][release-badge]][release-url]
![downloads][downloads-badge]
![build][build-badge]
[![PayPal.Me][paypal-me-badge]][paypal-me-url]
[![BuyMeCoffee][buy-me-a-coffee-shield]][buy-me-a-coffee-url]

## Introduction

A custom Lovelace card that displays the PM (2.5 or 10) index and risk level in [Home Assistant](https://home-assistant.io/).

The card was copied from the [uv-index-card](https://github.com/t1gr0u/uv-index-card). Big thank you @t1gr0u
for allowing me to copy and adapt the card.



## Installation

### [HACS](https://hacs.xyz/) (Home Assistant Community Store)

1. Go to HACS page on your Home Assistant instance
1. Select `Frontend`
1. Press add icon and search for `pm-index`
1. Select PM Index Card repo and install
1. Force refresh the Home Assistant page (<kbd>Ctrl</kbd> + <kbd>F5</kbd>)
1. Add pm-index-card to your page

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=MelleD&repository=pm-index-card&category=plugin)

### Manual

1. Download the 'pm-index-card.js' from the latest [release](https://github.com/MelleD/pm-index-card/releases) (with right click, save link as)
1. Place the downloaded file on your Home Assistant machine in the `config/www` folder (when there is no `www` folder in the folder where your `configuration.yaml` file is, create it and place the file there)
1. In Home Assistant go to `Configuration->Lovelace Dashboards->Resources` (When there is no `resources` tag on the `Lovelace Dashboard` page, enable advanced mode in your account settings, and retry this step)
1. Add a new resource
   1. Url = `/local/pm-index-card.js`
   1. Resource type = `module`
1. Force refresh the Home Assistant page (<kbd>Ctrl</kbd> + <kbd>F5</kbd>)
1. Add pm-index-card to your page

## Using the card

- Add the card with the visual editor
- Or add the card manually with the following (minimal) configuration:

```yaml
type: custom:pm-index-card
entity: sensor.pm_2_5
```

## Lovelace Examples

### Default

```yaml
type: custom:pm-index-card
entity: sensor.pm_2_5
```

![Card1](https://github.com/MelleD/pm-index-card/blob/main/docs/images/index-card.png)

![Card2](https://github.com/MelleD/pm-index-card/blob/main/docs/images/index-card1.png)

## Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:pm-index-card`                      |                     |
| name              | string  | **Optional** | Card name                                   | `PM Index`          |
| show_error        | boolean | **Optional** | Show what an error looks like for the card  | `false`             |
| show_warning      | boolean | **Optional** | Show what a warning looks like for the card | `false`             |
| pm_10             | boolean | **Optional** | Use pm 10 (true) or 2.5 (false) index scala | `false`             |
| show_recommendation  | boolean | **Optional** | Show health description                     | `true`              |
| entity            | string  | **Required** | Home Assistant entity ID.                   | `none`              |
| language          | string  | **Optional** | The 2 character that determines the language| `en`                |
| tap_action        | object  | **Optional** | Action to take on tap                       | `action: more-info` |
| hold_action       | object  | **Optional** | Action to take on hold                      | `none`              |
| double_tap_action | object  | **Optional** | Action to take on double tap                | `none`              |

## Action Options

| Name            | Type   | Requirement  | Description                                                                                                                            | Default     |
| --------------- | ------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| action          | string | **Required** | Action to perform (more-info, toggle, call-service, navigate url, none)                                                                | `more-info` |
| navigation_path | string | **Optional** | Path to navigate to (e.g. /lovelace/0/) when action defined as navigate                                                                | `none`      |
| url             | string | **Optional** | URL to open on click when action is url. The URL will open in a new tab                                                                | `none`      |
| service         | string | **Optional** | Service to call (e.g. media_player.media_play_pause) when action defined as call-service                                               | `none`      |
| service_data    | object | **Optional** | Service data to include (e.g. entity_id: media_player.bedroom) when action defined as call-service                                     | `none`      |
| haptic          | string | **Optional** | Haptic feedback _success, warning, failure, light, medium, heavy, selection_                                                           | `none`      |
| repeat          | number | **Optional** | How often to repeat the `hold_action` in milliseconds.                                                                                 | `none`      |


### Language

The following languages are supported:

| Language  | Yaml value | Supported | Translated by                                                                       |
| --------- | ---------- | --------- | ----------------------------------------------------------------------------------- |
| English   | `en`       | v1.0.0    | [@MelleD](https://github.com/MelleD)                                                |
| German    | `de`       | v1.0.0    | [@MelleD](https://github.com/MelleD)                                                |

#### How to add a language

If you wish to add a language please follow these steps:

* Go into the `src/localize/languages/` folder
* Duplicate the `en.json` and name it as the language that you would like to add by following the [2 characters ISO language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
* Then modify the `localize.ts` file, located in `src/localize/` to include your language file.
* Update the `Readme.md`, found in `src/` to include your language and your Github username in the language table.

## Thanks to

- [@t1gr0u](https://www.github.com/t1gr0u) for the [uv-index-card](https://github.com/t1gr0u/uv-index-card), which I copied and adapted. I really like the card and use it for my UV Index.


## Support

Clone and create a PR to help make the card even better.

Please ⭐️ or sponsor this repo when you like it.

## Sponsor ❤️

<a href="" target="_blank"><img src="https://img.shields.io/static/v1.svg?label=%20&message=PayPal.Me&logo=paypal" alt="PayPal.Me MelleDennis" style="height: 50px !important;width: 50px !important;" ></a>

<a href="https://www.buymeacoffee.com/melled" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

<!-- Badges -->

[release-badge]: https://img.shields.io/github/v/release/MelleD/pm-index-card?style=flat-square
[downloads-badge]: https://img.shields.io/github/downloads/MelleD/pm-index-card/total?style=flat-square
[build-badge]: https://img.shields.io/github/actions/workflow/status/MelleD/pm-index-card/build.yml?branch=main&style=flat-square
[paypal-me-badge]: https://img.shields.io/static/v1.svg?label=%20&message=PayPal.Me&logo=paypal
[buy-me-a-coffee-shield]: https://img.shields.io/static/v1.svg?label=%20&message=Buy%20me%20a%20coffee&color=6f4e37&logo=buy%20me%20a%20coffee&logoColor=white
<!-- References -->

[home-assistant]: https://www.home-assistant.io/
[hacs]: https://hacs.xyz
[release-url]: https://github.com/MelleD/pm-index-card/releases
[paypal-me-url]: https://www.paypal.me/MelleDennis
[buy-me-a-coffee-url]: https://www.buymeacoffee.com/melled
