# Medi-Map Training

Developed using Gatsby which is a static site generator built off of React and
Webpack.

Updating dependencies: package.json - under dependencies change version to
"latest" (test changes) or update through a package manager like NPM.

For an overview of the project structure please refer to the
[Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

## Using

To run in development mode, in CLI:

```
gatsby develop
```

To deploy local production build, in CLI

```
gatsby build
gatsby serve
```

## Deploy

https://app.netlify.com/start/deploy?repository=https://github.com/ (your repo directory here)

Just add on the git directory to the end of that link and it will immediately generate the site on the server.
All you need to do from there is:
Go into Site settings:

* Build and Deploy - Post Processing then enable "Asset optimization" to reduce payload size and increase load speed
* Domain management - add your domain (click on "Change your domain's nameservers and add them), once added enable HTTPS below
  and get the certificate. Then under that "Force HTTPS"
* Identity - enable "Identity service" and set to Invite only, then at the bottom enable git gateway which allows for the NetlifyCMS.

Netlify is designed specifically for these static site generators. It's
extremely fast, free (premium plans moslty add support and more users), includes
HTTPS2 and allows for automatic deployment on changes made in the Git repo. This
pairs well with the NetlifyCMS that is in the site, which updates the Git repo
on changes. This CMS is very lightweight - it only allows for
adding/editing/deleting pages + resources and very little else.

When adding to Rackspace, it would go under something along the lines of static site or cloud deployment. For automatic updates to the site after changes are made (CMS used or code changed), you might need to use Webhooks or Git integration if Rackspace has it. Other manually redeploy new builds when you edit the code.
