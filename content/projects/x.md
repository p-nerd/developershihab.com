---
title: "X"
description: "This is a command line to automate my software development workflow"
tags:
    - "Go"
imageUrl: "/projects/x.jpg"
links:
    - label: "Source Code"
      link: "https://github.com/p-nerd/x"
---

**Title:** Streamlining Software Development Workflow with X

**Overview:**
X is a command-line tool designed to automate software development workflows. This case study explores the development journey of X, highlighting its features, commands, and impact on the development process.

**Project Details:**

-   **Objective:**
    The primary objective of X was to simplify and automate various tasks involved in the software development process. By providing a command-line interface, X aimed to streamline common tasks and enhance developer productivity.

-   **Technologies Used:**

    -   Go: Programming language used to develop the command-line tool.

-   **Features:**
    -   **Default Script Execution:** Users can run the default script by simply entering the command without any arguments. The default script is x.sh at any directory on the path.
    -   **Custom Script Execution:** Users can run a specific script by providing its name as an argument.
    -   **Default Script Modification:** Users can change the default script using the 'set' command, allowing for flexibility in workflow customization.
    -   **Docker Compose:** The 'up' command executes the 'docker compose up' command in the current working path, simplifying Docker container management.
    -   **Git Commands:** X provides shortcuts for common Git commands, such as adding, committing, and pushing changes.
    -   **Tree Command:** The 'tree' command runs the 'tree --gitignore' command, generating a directory tree while excluding files specified in the .gitignore file.
    -   **Help Information:** Users can access detailed help information using the 'help' command, providing guidance on command usage and options.
    -   **Version Display:** The 'version' command displays the current version number of the tool, aiding in version tracking and compatibility checks.

**Usage:**

-   Run the default script: `x <...args>`
-   Run a specified script: `x -s <script name> <...args>`
-   Change the default script: `x set <script name>`
-   Execute 'docker compose up': `x up`
-   Execute Git commands: `x commit`, `x push`, or `x git-all`
-   Generate directory tree: `x tree`
-   Display help information: `x help`, `x --help`, or `x -h`
-   Show version number: `x version`

**Conclusion:**
X has significantly improved the software development workflow by automating common tasks and simplifying complex commands into intuitive shortcuts. With its user-friendly interface and versatile functionality, X has become an indispensable tool for developers, enhancing productivity and efficiency in the development process.
