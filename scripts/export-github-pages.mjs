import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve, sep } from 'node:path';

const project = resolve(process.cwd());
const docs = resolve(project, 'docs');
const expected = `${project}${sep}docs`;

if (docs !== expected) {
  throw new Error('Refusing to export outside the project docs directory.');
}

const response = await fetch('http://127.0.0.1:8787/931-the-lake-website-concept/');
if (!response.ok) {
  throw new Error(`Production render failed with HTTP ${response.status}.`);
}

const html = await response.text();

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(resolve(project, 'dist/client/931-the-lake-website-concept/_next'), resolve(docs, '_next'), { recursive: true });
await cp(resolve(project, 'dist/client/images'), resolve(docs, 'images'), { recursive: true });
await cp(resolve(project, 'dist/client/favicon.svg'), resolve(docs, 'favicon.svg'));
await cp(resolve(project, 'dist/client/og.png'), resolve(docs, 'og.png'));
await cp(resolve(project, 'app/icon.png'), resolve(docs, 'icon.png'));
await writeFile(resolve(docs, 'index.html'), html);
await writeFile(resolve(docs, '404.html'), html);
await writeFile(resolve(docs, '.nojekyll'), '');

console.log('GitHub Pages snapshot created in docs/.');
