# Feedreader

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Testing suites](#testing)
* [Contributing](#contributing)
* [Known issues](#known)
* [License](#known)

## Description

Testing suites for a web-based application that reads RSS feeds. Jasmine is used to complete the project.

## Installation

```
git clone https://github.com/ZwiFTi/project-3---matching-game.git
cd Project\ 3\ -\ Memory\ game/
open index.html
scroll to the bottom of the page
```

## Testing suites

1. RSS Feeds
  1. Tests to make sure that the allFeeds variable has been defined and that it is not empty.
  2. Tests that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
  3. Tests that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

2. The menu
  1. Test that ensures the menu element is hidden by default.
  2. Test that ensures the menu changes visibility when the menu icon is clicked.

3. Initial Entries
  1. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

4. New Feed Selection
  1. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Contributing

This project is a practice project, and is therefor not open for contribution.


## Known issues

There is no known issues to date.


## License

The contents of this repository are covered under the [MIT License](LICENSE).
