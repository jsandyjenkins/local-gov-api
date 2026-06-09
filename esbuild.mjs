import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const execAsync = promisify(exec);

await esbuild.build({
  entryPoints: {
    endpoints: 'src/endpoints/index.mts',
  },
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node22',
  packages: 'bundle',
  outfile: 'dist/index.js',
  minify: true,
  external: ['pg-native'],
});

try {
  fs.copyFileSync(
    path.join(__dirname, 'dist-package.json'),
    path.join(__dirname, 'dist', 'package.json'),
  );
  // Copy RDS SSL certificate
  // fs.copyFileSync(
  //   path.join(__dirname, 'global-bundle.pem'),
  //   path.join(__dirname, 'dist', 'global-bundle.pem'),
  // );

  // Dependencies are bundled by esbuild, no npm install needed

  // Zip the dist folder ourselves to avoid the Terraform module's Python
  // packager (package.py), which triggers Windows Defender file locks.
  const distPath = path.join(__dirname, 'dist');
  const zipPath = path.join(distPath, 'lambda.zip');

  // Remove stale zip so it isn't included inside the new one
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  if (process.platform === 'win32') {
    await execAsync(
      `powershell -Command "Compress-Archive -Path '.\\*' -DestinationPath '.\\lambda.zip'"`,
      { cwd: distPath, maxBuffer: 100 * 1024 * 1024 },
    );
  } else {
    await execAsync(`zip -rqj lambda.zip .`, {
      cwd: distPath,
      maxBuffer: 100 * 1024 * 1024,
    });
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}
