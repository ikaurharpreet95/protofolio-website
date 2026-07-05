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

console.log('\n🔍 Debugging Failed Form Submission\n');
console.log('═══════════════════════════════════════════════════════════');

// This is the exact data from the screenshot
const submittedData = {
  name: 'harpreet',
  email: 'lkaurharpreet95@gmail.com',
  phone: '212862454',
  eventType: 'Engagement',
  message: 'hey, please show some designs',
};

console.log('\n📝 Form Data Submitted:');
console.log(`  Name: ${submittedData.name}`);
console.log(`  Email: ${submittedData.email}`);
console.log(`  Phone: ${submittedData.phone}`);
console.log(`  Event Type: ${submittedData.eventType}`);
console.log(`  Message: ${submittedData.message}`);

console.log('\n📤 Attempting to submit to Airtable...\n');

fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    records: [
      {
        fields: {
          name: submittedData.name,
          email: submittedData.email,
          'phone number': submittedData.phone,
          'event type': submittedData.eventType,
          message: submittedData.message,
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
    console.log('✅ SUCCESS!\n');
    console.log('Record Created:');
    console.log(`  Record ID: ${result.records[0].id}`);
    console.log('\n✓ The form submission works perfectly!');
  })
  .catch(error => {
    console.log('❌ SUBMISSION FAILED\n');
    console.log('Error Details:');
    console.log('═══════════════════════════════════════════════════════════');

    if (error.error) {
      console.log(`Error Type: ${error.error.type}`);
      console.log(`Message: ${error.error.message}`);

      if (error.error.type === 'INVALID_VALUE_FOR_COLUMN') {
        console.log('\n💡 ISSUE FOUND: Invalid value for a field');
        console.log('\nPossible causes:');
        console.log('  1. "Engagement" is not a valid value in the "event type" field');
        console.log('  2. Phone number format is invalid');
        console.log('  3. A field value is too long or wrong type\n');
      } else if (error.error.type === 'UNKNOWN_FIELD_NAME') {
        console.log('\n💡 ISSUE FOUND: Unknown field name');
        console.log('  A field name in the submission doesn\'t match Airtable\n');
      }
    } else {
      console.log(JSON.stringify(error, null, 2));
    }

    console.log('\n🔧 DEBUGGING SUGGESTIONS:');
    console.log('  1. Check Airtable table for valid "event type" values');
    console.log('  2. Verify phone number field accepts numbers without "+"');
    console.log('  3. Check field types match the data being sent');
    console.log('  4. Ensure all fields have correct names (case-sensitive)');
  });
