"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarProvider = void 0;
class SidebarProvider {
    context;
    commands;
    _view;
    constructor(context, commands) {
        this.context = context;
        this.commands = commands;
    }
    resolveWebviewView(webviewView, context, token) {
        console.log("WebviewView resolved"); // Log to verify if the method is called
        this._view = webviewView;
        // Set up the webview's content
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.context.extensionUri],
        };
        // Set the HTML content of the webview
        webviewView.webview.html = this.getHtmlContent();
        // Optionally handle messages from the webview
        webviewView.webview.onDidReceiveMessage((message) => {
            console.log(message);
        });
    }
    getHtmlContent() {
        // Log the commands to verify the data
        console.log("Commands to display:", this.commands);
        // Generate HTML content to display commands in the sidebar
        const commandList = this.commands.map(cmd => `<li><strong>${cmd.command}</strong>: ${cmd.description}</li>`).join('');
        return `
      <html>
        <body>
          <h1>GitHub Command Guide</h1>
          <ul>${commandList}</ul>
        </body>
      </html>
    `;
    }
}
exports.SidebarProvider = SidebarProvider;
//# sourceMappingURL=sidebarView.js.map