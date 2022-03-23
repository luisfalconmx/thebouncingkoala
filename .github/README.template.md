# ${{ env.REPOSITORY_SLUG }}

#### ${{ env.REPOSITORY_DESCRIPTION }}

![${{env.REPOSITORY_NAME}} screenshot](https://raw.githubusercontent.com/${{env.REPOSITORY_FULL_NAME}}/${{env.REPOSITORY_DEFAULT_BRANCH}}/.github/screenshot.png)

## Getting Started

#### First clone the repository from github

```bash
# HTTPS
${{env.REPOSITORY_GITHUB_URL}}.git
```

```bash
# SSH
git@github.com:${{env.REPOSITORY_FULL_NAME}}.git
```

```bash
# GITHUB CLI
gh repo clone ${{env.REPOSITORY_FULL_NAME}}
```

#### Or fork this project clicking in the fork button set in head of this page.

![image](https://user-images.githubusercontent.com/57654255/156873180-7c057e80-bd11-46ba-a45b-d6901decf497.png)

If you need help for this step check the next guide:
[https://docs.github.com/en/get-started/quickstart/fork-a-repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

#### Set node version with [nvm](https://github.com/nvm-sh/nvm#node-version-manager---) and install dependencies

```
nvm use
yarn install
```

#### Finally you can start a local dev server with this command

```
yarn start
```

#### If you need to check the code to find some errors and warnings, use the next commands

```
yarn run lint
yarn run lint:styles
```

#### Also exists a command for apply code writing rules like indents, semicolons, etc. You can use the following command

```
yarn run pretty
```

## Contributing

#### To contribute to the project you need to create a new branch from the main branch

```git
git checkout -b my-new-branch
```

#### Once you complete your project changes can be committed following the standard established by [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Examples

#### Commit message with no body

```
docs: correct spelling of CHANGELOG
```

#### Commit message with scope

```
feat(lang): add Polish language
```

#### Commit message with description and breaking change footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

If the code passes the tests and the commit message follows the standards set by [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), you can commit your changes and upload them to the remote repository and you're ready to **create a Pull Request** to the **main branch**.

If you need help to make a pull request, you can consult the following link:

[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

### Linters, Code Formater and other tools

All changes to the project will be validated by creating a commit. These are the tools used to ensure that all code follows the quality standards defined for all contributions:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [Stylelint](https://github.com/stylelint/stylelint)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Lint Staged](https://github.com/okonet/lint-staged)

### Join us in discussions

We use GitHub Discussions to talk about all sorts of topics related to documentation and this site. For example: if you'd like to help troubleshooting a PR, have a great new idea, or want to share something amazing you've learned in our docs, join us in the [discussions](${{env.REPOSITORY_GITHUB_URL}}/discussions).

## Roadmap

Our project roadmap is where you can learn about what features we're working on, what stage they're in, and when we expect to bring them to you. Have any questions or comments about items on the roadmap? Share your feedback in [discussions](${{env.REPOSITORY_GITHUB_URL}}/discussions) section.

Review the project roadmap. Maybe there is something amazing that you can contribute 😉

[${{env.REPOSITORY_GITHUB_URL}}/projects?type=beta](${{env.REPOSITORY_GITHUB_URL}}/projects?type=beta)

## Releases

To create a release it is necessary to prepare the project following these steps

#### Create a new version with tag

```
yarn version --<version>
```

The above command receives as a parameter a specific version such as a version type defined by npm's [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) which will automatically increment the number.

These are the available types that can be used as a parameter:

- **--patch** releases: `1.0` or `1.0.x` or `~1.0.4`
- **--minor** releases: `1` or `1.x` or `^1.0.4`
- **--major** releases: `*` or `x`

### Examples

```bash
# v1.0.0 -> v1.1.0
yarn version --minor
```

```bash
# v1.0.0 -> v1.0.1
yarn version --patch
```

#### Upload the tag to the remote repository

```
git push origin <tag>
```

Check the complete list of all official releases published:
[${{env.REPOSITORY_GITHUB_URL}}/releases](${{env.REPOSITORY_GITHUB_URL}}/releases)

## Deployments

All deployments are automatic because this project has a integration with **Vercel**. Any contribution added in main branch will deploy this project in production.

You can check the status of deployments in the next link:
[${{env.REPOSITORY_GITHUB_URL}}/deployments](${{env.REPOSITORY_GITHUB_URL}}/deployments)

For better understand, it is advisable to follow the instructions detailed in [contributing](${{env.REPOSITORY_GITHUB_URL}}#contributing) section.

## License

This project is free and open-source software licensed under the [MIT Licence](${{env.REPOSITORY_LICENSE_URL}}).

Some contents like images, videos, documents and other multimedia files use your own licence and in case required atributtion this is mentioned in any part of this project like in the code or in the documentation.

## Thanks ❤️

Thank you very much for visiting this repository, contributing amazing code and being part of this great community on github.

If you want to support me you can visit my [Github Sponsors Profile](https://github.com/sponsors/${{env.REPOSITORY_OWNER}}). Any support, no matter how small, motivates me to continue creating open source projects and share them with everyone :)
