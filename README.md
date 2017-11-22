# [blog.thib.me](http://blog.thib.me) [![Build Status](https://travis-ci.org/thibaudcolas/octoblog.svg?branch=master)](https://travis-ci.org/thibaudcolas/octoblog)

> My personal blog. Notes, thoughts and open-source software.

## Installation

> Requires `rbenv`.

```sh
# Install the right Ruby version, and Bundler.
rbenv install 2.2.3
rbenv local 2.2.3
gem install bundler

# Install the blog's dependency.
bundle install
```

## Usage

```sh
bundle exec rake preview
bundle exec rake generate
rake new_post\["Post title"\]
```

## Deployment

```sh
mkdir _deploy
rake deploy
```

## Credits

Content available under [CC0](https://creativecommons.org/publicdomain/zero/1.0/), powered by [Octopress](http://octopress.org), hosted on [GitHub Pages](http://pages.github.com/).
