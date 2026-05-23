import * as vscode from 'vscode';

/**
 * Standalone command registration for the surgical patch execution.
 * Decouples the command trigger from the extension entry point.
 */
export function registerExecutePatchCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'akkhar-sr.executePatch',
    () => {
      vscode.window.showInformationMessage(
        'Akkhar-SR: Ready to process patches.',
      );
      // In a full implementation, this could trigger global orchestration logic
    },
  );

  context.subscriptions.push(disposable);
}
