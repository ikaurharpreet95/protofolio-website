import * as fs from 'fs';
import * as path from 'path';

const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');

const env = {};
envContent.split('\n').forEach(line => {
  if (line.trim() && !line.startsWith('#')) {
    const [key, value] = line.split('=');
    if (key && value) {
      env[key.trim()] = value.trim();
    }
  }
});

const API_KEY = env.VITE_AIRTABLE_API_KEY;
const BASE_ID = env.VITE_AIRTABLE_BASE_ID;
const TABLE_ID = env.VITE_AIRTABLE_TABLE_NAME;

console.log('\n📋 Checking Your Airtable Table Schema\n');

fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
  },
})
  .then(r => r.json())
  .then(data => {
    if (data.tables) {
      console.log('Tables in your base:');
      console.log('═══════════════════════════════════════════\n');
      
      data.tables.forEach(table => {
        console.log(`📌 Table: ${table.name} (ID: ${table.id})`);
        console.log(`   Fields:`);
        table.fields.forEach(field => {
          console.log(`     • ${field.name} (type: ${field.type})`);
        });
        console.log();
      });
    }
  })
  .catch(e => console.error('Error:', e.message));
