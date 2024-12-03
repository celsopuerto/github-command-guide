import * as vscode from 'vscode';

export class SidebarProvider implements vscode.WebviewViewProvider {
  private _view?: vscode.WebviewView;

  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly commands: Array<{ command: string, description: string }>
  ) {}

  public resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, token: vscode.CancellationToken): void {
    console.log("WebviewView resolved");  // Log to verify if the method is called

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

  private getHtmlContent(): string {
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
