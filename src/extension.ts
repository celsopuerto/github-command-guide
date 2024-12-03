import * as vscode from 'vscode';
import { SidebarProvider } from './sidebarView';  // Assuming SidebarProvider is imported from sidebarView.ts

const commands = [
  { command: "git status", description: "Show the status of changes in the repository" },
  { command: "git add .", description: "Stage all changes for commit" },
  { command: "git commit -m '<message>'", description: "Commit changes with a message" },
  { command: "git push origin <branch_name>", description: "Push changes to the remote repository" },
  { command: "git pull origin <branch_name>", description: "Pull the latest changes from the remote repository" },
  { command: "git fetch", description: "Fetch updates from the remote repository" },
  { command: "git clone <repo_url>", description: "Clone a repository" },
  { command: "git branch -M main", description: "Rename branch to main" },
  { command: "git checkout <branch_name>", description: "Switch to a specific branch" },
  { command: "git log", description: "Show the commit history" },
  { command: "git merge <branch_name>", description: "Merge a branch into the current branch" },
  { command: "git reset --hard", description: "Reset the working directory to the latest commit" },
  { command: "git tag <tag_name>", description: "Create a new Git tag" },
  { command: "git remote -v", description: "Show the remote repositories" },
  { command: "git diff", description: "Show the differences between the working directory and the index" },
  { command: "git rebase <branch_name>", description: "Rebase the current branch onto another" },
  { command: "git stash", description: "Stash changes that are not yet ready to commit" },
  { command: "git stash pop", description: "Apply stashed changes" },
  { command: "git rm <file_name>", description: "Remove a file from the repository" },
  { command: "git revert <commit_id>", description: "Revert a commit by creating a new commit" },
  { command: "git cherry-pick <commit_id>", description: "Apply a commit from another branch" },
  { command: "git clean -fd", description: "Remove untracked files and directories" },
  { command: "git show <commit_id>", description: "Show information about a specific commit" },
  { command: "gh pr create", description: "Create a pull request" },
  { command: "gh pr merge <pr_number>", description: "Merge a pull request" },
  { command: "gh issue create", description: "Create a new GitHub issue" },
  { command: "gh issue close <issue_number>", description: "Close a GitHub issue" },
  { command: "gh repo create <repo_name>", description: "Create a new GitHub repository" },
  { command: "gh gist create", description: "Create a new GitHub gist" },
  { command: "gh gist delete <gist_id>", description: "Delete a GitHub gist" }
];

export function activate(context: vscode.ExtensionContext) {
  // Create SidebarProvider with commands
  const sidebarProvider = new SidebarProvider(context, commands);

  // Register Webview View provider for the sidebar
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("githubCommands.sidebar", sidebarProvider)
  );

  // Register helloWorld command
  const disposable = vscode.commands.registerCommand(
    'github-command-guide.celsodev',
    async () => {
      const commandList = commands.map((cmd) => `${cmd.command}: ${cmd.description}`);
      const selection = await vscode.window.showQuickPick(commandList, {
        placeHolder: 'Select a GitHub command',
      });

      if (selection) {
        const [command] = selection.split(': ');
        vscode.env.clipboard.writeText(command);
        vscode.window.showInformationMessage(`Command copied: ${command}`);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
