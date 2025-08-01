#!/usr/bin/env node

// Script pour supprimer les logs de debug une fois le problème résolu
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  'src/pages/FlashcardsPage.tsx',
  'src/hooks/useCardResults.ts'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Supprimer les lignes de debug
    content = content.replace(/.*console\.log\('🔍.*\n/g, '');
    content = content.replace(/.*console\.log\(`🔍.*\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Debug logs removed from ${file}`);
  }
});

console.log('🎉 All debug logs removed!');