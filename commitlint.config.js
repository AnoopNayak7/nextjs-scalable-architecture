// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// chore: used for miscellaneous changes that don't affect the main codebase but are necessary for the project setup, tooling configuration, or general housekeeping. It includes tasks like configuring development tools, setting up project-specific settings
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// translation: Changes related to translations or language localization. This includes adding or updating translations in the codebase.
// security: Changes that address security vulnerabilities, implement security measures, or enhance the overall security of the codebase.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'body-leading-blank': [1, 'always'],
      'body-max-line-length': [2, 'always', 100],
      'footer-leading-blank': [1, 'always'],
      'footer-max-line-length': [2, 'always', 100],
      'header-max-length': [2, 'always', 100],
      'scope-case': [2, 'always', 'lower-case'],
      'subject-case': [
        2,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
      ],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'build',
          'chore',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
          'translation',
          'security',
          'changeset',
        ],
      ],
    },
  };