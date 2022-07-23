# [Stylelint](https://github.com/stylelint/stylelint)

Our style linting is run both by a VSCode plugin, and also in our [Husky
pre-commit hook](../.husky/pre-commit) with our [`lint-staged`](../.lintstagedrc.json) configuraton.

> This config (and all related plugins) could/should likely become a separate
> shared config that we can maintain in one location to keep all of our monorepo
> projects up to date from one place.
