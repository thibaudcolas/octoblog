# [blog.thib.me](http://blog.thib.me) [![Build Status](https://travis-ci.org/thibaudcolas/octoblog.svg?branch=master)](https://travis-ci.org/thibaudcolas/octoblog)

> My personal blog. Notes, thoughts and open-source software.

## Installation

> Requires `rbenv`.

```sh
# Install the right Ruby version, and Bundler.
rbenv install 2.4.2
rbenv local 2.4.2
gem install bundler

# Install the blog's dependency.
pip install pygments
bundle install
```

## Usage

```sh
bundle exec jekyll serve
bundle exec jekyll build
```

## Deployment

[Travis](https://travis-ci.org/thibaudcolas/octoblog) is configured to deploy changes to `master` automatically. For manual deployments:

## Credits

Content available under [CC0](https://creativecommons.org/publicdomain/zero/1.0/), powered by [Octopress](http://octopress.org), hosted on [GitHub Pages](http://pages.github.com/).
