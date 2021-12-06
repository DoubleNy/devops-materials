export const deployingWithGit = {
  title: "Deploying with Git",
  caption:
    "You definitely don’t need to be a Git expert to deploy code to Heroku, but it’s helpful to learn the basics.",
  content: `---
  
## Prerequisites: Install Git and the Heroku CLI

* [Git installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

* [Heroku CLI installation instructions](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

## Tracking your app in Git

Before you can deploy your app to Heroku, you need to initialize a local Git repository and commit your application code to it.

The following example demonstrates initializing a Git repository for an app that lives in the myapp directory:

\`cd myapp\`

\`git init\`

\`Initialized empty Git repository in .git/\`

\`git add .\`

\`git commit -m "My first commit"\`

\`Created initial commit 5df2d09: My first commit\`

\` 44 files changed, 8393 insertions(+), 0 deletions(-)\`

\` create mode 100644 README\`

\` create mode 100644 Procfile\`

\` create mode 100644 app/controllers/source_file\`

\`...\`

Your app’s code is now tracked in a local Git repository. It has not yet been pushed to any remote servers.

## Creating a Heroku remote

Git [remotes](http://git-scm.com/book/en/Git-Basics-Working-with-Remotes) are versions of your repository that live on other servers. You deploy your app by pushing its code to a special Heroku-hosted remote that’s associated with your app.


### For a new Heroku app

The heroku create CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app’s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.

\`heroku create\`

\`Creating app... done, ⬢ thawing-inlet-61413\`

\`https://thawing-inlet-61413.herokuapp.com/ | https://git.heroku.com/thawing-inlet-61413.git\`

You can use the git remote command to confirm that a remote named heroku has been set for your app:

\`git remote -v\`

\`heroku  https://git.heroku.com/thawing-inlet-61413.git (fetch)\`

\`heroku  https://git.heroku.com/thawing-inlet-61413.git (push)\`

### For an existing Heroku app

If you have already created your Heroku app, you can easily add a remote to your local repository with the heroku git:remote command. All you need is your Heroku app’s name:

\`heroku git:remote -a thawing-inlet-61413\`

\`set git remote heroku to https://git.heroku.com/thawing-inlet-61413.git\`

## Deploying code

To deploy your app to Heroku, you typically use the git push command to push the code from your local repository’s master or main branch to your heroku remote, like so:

\`git push heroku main\`

\`Initializing repository, done.\`

\`updating 'refs/heads/main'\`

\`...\`

Use this same command whenever you want to deploy the latest committed version of your code to Heroku.

Note that Heroku only deploys code that you push to master or main. Pushing code to another branch of the heroku remote has no effect.

## Repository size

Although there is not a hard limit on your repository size, very large repositories (over 600 MB) are not recommended; they may cause timeouts and slow pushes overall. Running heroku apps:info will show you your repository size.

Common causes of large repositories are binary files checked into the repository (Git is notoriously bad at handling binaries) or constantly-changing development logs. Removing files committed by accident can be done with [git filter-branch](http://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery#_removing_objects), though after running it you will have to push with the --force option, which is something that requires coordination among your team.

After reducing the size of your repository locally, you will need to reset the app’s Git repository before pushing it to Heroku again

## Additional resources

* [Git on Rails](http://railscasts.com/episodes/96) shows common conventions for using Git to track Rails apps.
* [Git cheat sheet](http://res.cloudinary.com/hy4kyit2a/image/upload/SF_git_cheatsheet.pdf)
* [Git - SVN Crash Course](http://git.or.cz/course/svn.html)
* The [Pro Git book](https://git-scm.com/book) is a great resource that covers all of Git.`,
};
