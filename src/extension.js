"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
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
function activate(context) {
    // Register the 'celsodev' command
    const disposable = vscode.commands.registerCommand('github-command-guide.celsodev', () => {
        const terminal = vscode.window.createTerminal({ name: "GitHub Command Guide" });
        terminal.show();
        // Display the list of commands in the terminal
        terminal.sendText('GitHub Command Guide:');
        commands.forEach(cmd => {
            terminal.sendText(`${cmd.command}: ${cmd.description}`);
        });
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map