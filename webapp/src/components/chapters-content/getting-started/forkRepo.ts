export const forkRepo = {
  title: "Fork a repo",
  caption:
    "A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.",
  content: `## About forks

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea. You can fork a repository to create a copy of the repository and make changes without affecting the upstream repository. For more information, see ["Working with forks."](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks)

For example, you can use forks to propose changes related to fixing a bug. Rather than logging an issue for a bug you've found, you can:

### Propose changes to someone else's project

* Fork the repository.
* Make the fix.
* Submit a pull request to the project owner.

### Use someone else's project as a starting point for your own idea.

Open source software is based on the idea that by sharing code, we can make better, more reliable software. For more information, see the ["About the Open Source Initiative"](http://opensource.org/about) on the Open Source Initiative.

For more information about applying open source principles to your organization's development work on GitHub.com, see GitHub's white paper ["An introduction to innersource."](https://resources.github.com/whitepapers/introduction-to-innersource/)

When creating your public repository from a fork of someone's project, make sure to include a license file that determines how you want your project to be shared with others. For more information, see ["Choose an open source license" at choosealicense.com.](https://choosealicense.com/)

For more information on open source, specifically how to create and grow an open source project, we've created [Open Source Guides](https://opensource.guide/) that will help you foster a healthy open source community by recommending best practices for creating and maintaining repositories for your open source project. You can also take a free [GitHub Learning Lab](https://lab.github.com/) course on maintaining open source communities.

## Forking a repository

You might fork a project to propose changes to the upstream, or original, repository. In this case, it's good practice to regularly sync your fork with the upstream repository. To do this, you'll need to use Git on the command line. You can practice setting the upstream repository using the same [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository you just forked.

1. On GitHub.com, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.

2. In the top-right corner of the page, click Fork.

## Cloning your forked repository

Right now, you have a fork of the Spoon-Knife repository, but you don't have the files in that repository locally on your computer.


1. On GitHub.com, navigate to your fork of the Spoon-Knife repository.

2. Above the list of files, click  Code.

3. To clone the repository using HTTPS, under "Clone with HTTPS", click clone icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click clone icon. To clone a repository using GitHub CLI, click Use GitHub CLI, then click clone icon.

4. Open Terminal.

5. Change the current working directory to the location where you want the cloned directory.

6. Type git clone, and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of YOUR-USERNAME: \`$ git clone https://github.com/YOUR-USERNAME/Spoon-Knife\` 

7. Press Enter. Your local clone will be created.

* \` Cloning into Spoon-Knife...\`
* \` remote: Counting objects: 10, done.\`
* \` remote: Compressing objects: 100% (8/8), done.\`
* \` remove: Total 10 (delta 1), reused 10 (delta 1)\`
* \` Unpacking objects: 100% (10/10), done.\`


`,
};
