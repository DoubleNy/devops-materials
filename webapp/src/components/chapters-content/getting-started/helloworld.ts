export const helloworld = `
## Introduction

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code.

## Creating a repository

A repository is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. Often, repositories include a _README_ file, a file with information about your project. GitHub makes it easy to add one at the same time you create your new repository. It also offers other common options such as a license file.

Your _hello-world_ repository can be a place where you store ideas, resources, or even share and discuss things with others.

In the upper-right corner of any page, use the  drop-down menu, and select New repository.
Drop-down with option to create a new repository

1. In the Repository name box, enter hello-world.

2. In the Description box, write a short description.

3. Select Add a README file.

4. Click Create repository.

5. Create a hello world repository

## Creating a branch

Branching lets you have different versions of a repository at one time.

By default, your repository has one branch named main that is considered to be the definitive branch. You can use branches to experiment and make edits before committing them to main.

When you create a branch off the main branch, you're making a copy, or snapshot, of main as it was at that point in time. If someone else made changes to the main branch while you were working on your branch, you could pull in those updates.

This diagram shows:

* The main branch
* A new branch called feature
* The journey that feature takes before it's merged into main

Have you ever saved different versions of a file? Something like:

* story.txt
* story-joe-edit.txt
* story-joe-edit-reviewed.txt

Branches accomplish similar goals in GitHub repositories.

Globally, in tech industry, developers, writers, and designers use branches for keeping bug fixes and feature work separate from our main (production) branch. When a change is ready, they merge their branch into main/master.

## Create a branch

1. Click the Code tab of your hello-world repository.
2. Click the drop down at the top of the file list that says main.
3. Type a branch name, _readme-edits_, into the text box.
4. Click Create branch: _readme-edits_ from main.

Now you have two branches, _main_ and _readme-edits_. Right now, they look exactly the same. Next you'll add changes to the new branch.

## Opening a pull request 

Now that you have changes in a branch off of main, you can open a pull request.

Pull requests are the heart of collaboration on GitHub. When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in different colors.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished.

By using GitHub's @mention feature in your pull request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

You can even open pull requests in your own repository and merge them yourself. It's a great way to learn the GitHub flow before working on larger projects.

1. Click the Pull requests tab of your hello-world repository.

2. Click New pull request

3. In the Example Comparisons box, select the branch you made, readme-edits, to compare with main (the original).

4. Look over your changes in the diffs on the Compare page, make sure they're what you want to submit.

5. Click Create pull request.

6. Give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs.

7. Click Create pull request.

Your collaborators can now review your edits and make suggestions.
`;
