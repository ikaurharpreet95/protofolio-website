import * as fs from 'fs';
import * as path from 'path';

// Read .env.local file
const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');

// Parse environment variables
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
const TABLE_NAME = env.VITE_AIRTABLE_TABLE_NAME;

console.log('\n🔍 Airtable Diagnostic Test\n');
console.log('═══════════════════════════════════════════');
console.log('1️⃣  Checking Configuration\n');

console.log(`API Key Length: ${API_KEY?.length || 0} characters`);
console.log(`  Expected: 80+ characters (starts with 'pat')`);
console.log(`  Status: ${API_KEY?.startsWith('pat') ? '✓ Correct format' : '❌ Wrong format'}`);

console.log(`\nBase ID: ${BASE_ID}`);
console.log(`Base ID Length: ${BASE_ID?.length || 0} characters`);
console.log(`  Expected: 15-20+ characters (starts with 'app')`);
console.log(`  Status: ${BASE_ID?.startsWith('app') ? '✓ Correct format' : '❌ Wrong format'}`);

console.log(`\nTable Name: ${TABLE_NAME}`);
console.log(`  Expected: 'website'`);
console.log(`  Status: ${TABLE_NAME === 'website' ? '✓ Correct' : '❌ Wrong'}`);

console.log('\n═══════════════════════════════════════════');
console.log('2️⃣  Testing API Token Validity\n');

// Test if token is valid by checking token info
fetch(`https://api.airtable.com/v0/meta/whoami`, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
  },
})
  .then(response => response.json())
  .then(data => {
    if (data.id) {
      console.log('✅ API Token is VALID\n');
      console.log(`User ID: ${data.id}`);
      if (data.email) console.log(`Email: ${data.email}`);
    } else if (data.error) {
      console.error('❌ API Token is INVALID\n');
      console.error(`Error: ${data.error.type}`);
      console.error(`Message: ${data.error.message}`);
    }

    console.log('\n═══════════════════════════════════════════');
    console.log('3️⃣  Testing Base and Table Access\n');

    // Test if base is accessible
    return fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?maxRecords=1`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
  })
  .then(response => response.json())
  .then(data => {
    if (data.records !== undefined) {
      console.log('✅ Base and Table are ACCESSIBLE\n');
      console.log(`Table "${TABLE_NAME}" found!`);
      console.log(`Existing records: ${data.records.length}`);

      if (data.records.length > 0) {
        console.log(`\nSample fields from existing record:`);
        Object.keys(data.records[0].fields).forEach(field => {
          console.log(`  • ${field}`);
        });
      }
    } else if (data.error) {
      console.error('❌ Base/Table Access FAILED\n');
      console.error(`Error Type: ${data.error.type}`);
      console.error(`Message: ${data.error.message}`);
      console.log('\n💡 Possible Solutions:');
      if (data.error.type === 'INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND') {
        console.log('  1. Double-check your Base ID is complete (copy from URL again)');
        console.log('  2. Verify table name is exactly "website" (case-sensitive)');
        console.log('  3. Ensure API token has "data.records:write" permission');
        console.log('  4. Check that you can see the base in Airtable');
      }
    }
  })
  .catch(error => {
    console.error('❌ Network Error:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('  • Check your internet connection');
    console.log('  • Verify Airtable API is accessible');
  });
