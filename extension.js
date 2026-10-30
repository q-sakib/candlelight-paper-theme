const { commands, workspace } = require('vscode');

function activate(context) {
  const switchToLight = commands.registerCommand('theme.switchToCandlelightLight', () => {
    workspace.getConfiguration().update('workbench.colorTheme', 'Candlelight Paper Light', true);
  });

  const switchToDark = commands.registerCommand('theme.switchToCandlelightDark', () => {
    workspace.getConfiguration().update('workbench.colorTheme', 'Candlelight Paper Dark', true);
  });

  context.subscriptions.push(switchToLight, switchToDark);
}

function deactivate() {}

module.exports = { activate, deactivate };
