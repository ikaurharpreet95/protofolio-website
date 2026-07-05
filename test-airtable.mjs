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

console.log('\n📋 Airtable Integration Test\n');
console.log('═══════════════════════════════════════════');

// Check if credentials are set
if (!API_KEY || !BASE_ID || !TABLE_NAME) {
  console.error('❌ FAILED: Missing Airtable configuration');
  console.log('   API_KEY:', API_KEY ? '✓ Set' : '❌ Missing');
  console.log('   BASE_ID:', BASE_ID ? '✓ Set' : '❌ Missing');
  console.log('   TABLE_NAME:', TABLE_NAME ? '✓ Set' : '❌ Missing');
  process.exit(1);
}

console.log('✓ Configuration loaded successfully');
console.log(`  Base ID: ${BASE_ID.substring(0, 10)}...`);
console.log(`  Table: ${TABLE_NAME}`);
console.log(`  API Key: ${API_KEY.substring(0, 10)}...`);

// Test Airtable API connection
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '+64 21 487 5932',
  eventType: 'Wedding',
  message: 'This is a test submission from the integration test.',
};

console.log('\n📤 Sending test form submission to Airtable...\n');

fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    records: [
      {
        fields: {
          name: testData.name,
          email: testData.email,
          'phone number': testData.phone,
          'event type': testData.eventType,
          message: testData.message,
        },
      },
    ],
  }),
})
  .then(response => {
    if (!response.ok) {
      return response.json().then(error => {
        throw error;
      });
    }
    return response.json();
  })
  .then(result => {
    console.log('✅ SUCCESS: Form submitted to Airtable!\n');
    console.log('Test Record Created:');
    console.log('═══════════════════════════════════════════');
    console.log(`  Name: ${testData.name}`);
    console.log(`  Email: ${testData.email}`);
    console.log(`  Phone: ${testData.phone}`);
    console.log(`  Event Type: ${testData.eventType}`);
    console.log(`  Message: ${testData.message}`);
    console.log(`  Record ID: ${result.records[0].id}`);
    console.log('═══════════════════════════════════════════\n');
    console.log('🎉 Airtable integration is WORKING!\n');
    console.log('✓ API Key is valid');
    console.log('✓ Base ID is correct');
    console.log('✓ Table name is correct');
    console.log('✓ Table has all required fields');
    console.log('\n📌 Next steps:');
    console.log('  1. Check your Airtable base to see the test record');
    console.log('  2. Delete the test record if needed');
    console.log('  3. Visit http://localhost:3000 to test the form');
    console.log('  4. Form submissions will now be saved to Airtable\n');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ FAILED: Could not submit to Airtable\n');
    console.log('Error Details:');
    console.log('═══════════════════════════════════════════');
    if (error.error) {
      console.error('Error Type:', error.error.type);
      console.error('Message:', error.error.message);
    } else {
      console.error(JSON.stringify(error, null, 2));
    }
    console.log('═══════════════════════════════════════════\n');
    console.log('Troubleshooting tips:');
    console.log('  • Verify API Key is correct');
    console.log('  • Verify Base ID is correct');
    console.log('  • Verify table name is "website"');
    console.log('  • Check that table has all required fields');
    console.log('  • Make sure API Key has data.records:write permission\n');
    process.exit(1);
  });
