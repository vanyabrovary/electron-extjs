const fs = require('fs');
const path = require('path');

exports.default = async function(context) {
  if (context.electronPlatformName !== 'linux') return;

  const appOutDir = context.appOutDir;
  const executableName = context.packager.executableName;
  const originalBinary = path.join(appOutDir, executableName);
  const renamedBinary = path.join(appOutDir, executableName + '.bin');

  // Переименовываем оригинальный бинарник
  fs.renameSync(originalBinary, renamedBinary);

  // Создаём wrapper-скрипт
  const wrapperScript = `#!/bin/bash
exec "\${0%/*}/${executableName}.bin" --no-sandbox "$@"
`;

  fs.writeFileSync(originalBinary, wrapperScript);
  fs.chmodSync(originalBinary, 0o755);
};
