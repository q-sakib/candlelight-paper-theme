import { commands, workspace } from 'vscode';

function activate(context) {
  let switchToLight = commands.registerCommand('theme.switchToCandlelightLight', () => {
    workspace.getConfiguration().update('workbench.colorTheme', 'Candlelight Paper Light', true);
  });

  let switchToDark = commands.registerCommand('theme.switchToCandlelightDark', () => {
    workspace.getConfiguration().update('workbench.colorTheme', 'Candlelight Paper Dark', true);
  });

  context.subscriptions.push(switchToLight, switchToDark);
}

function deactivate() {}

export default {
  activate,
  deactivate
};
