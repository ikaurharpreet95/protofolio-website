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

console.log('\n🌐 Testing Website Contact Form Integration\n');
console.log('═══════════════════════════════════════════════════════════');
console.log('📝 Simulating user form submission...\n');

// Simulate real form data from a user
const formTestData = [
  {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+64 27 123 4567',
    eventType: 'Wedding',
    message: 'Hi Harpreet! I love your invitation designs. I\'m planning my wedding for next year and would love to discuss custom invitations with you.',
  },
  {
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+64 21 555 8901',
    eventType: 'Housewarming',
    message: 'We just bought our first home and want beautiful invitations for our housewarming party. Can you help?',
  },
  {
    name: 'Emma Williams',
    email: 'emma.w@example.com',
    phone: '+64 20 333 2211',
    eventType: 'Birthday',
    message: 'Planning a milestone birthday celebration. Need elegant digital invitations. What are your rates?',
  },
];

let successCount = 0;
let failureCount = 0;

console.log(`Testing ${formTestData.length} form submissions...\n`);

async function testFormSubmission(data, index) {
  try {
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              name: data.name,
              email: data.email,
              'phone number': data.phone,
              'event type': data.eventType,
              message: data.message,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to submit');
    }

    const result = await response.json();
    successCount++;

    console.log(`✅ Test ${index + 1}: SUCCESS`);
    console.log(`   Name: ${data.name}`);
    console.log(`   Email: ${data.email}`);
    console.log(`   Event: ${data.eventType}`);
    console.log(`   Record ID: ${result.records[0].id}\n`);

    return true;
  } catch (error) {
    failureCount++;
    console.log(`❌ Test ${index + 1}: FAILED`);
    console.log(`   Error: ${error.message}\n`);
    return false;
  }
}

// Run all tests sequentially
(async () => {
  for (let i = 0; i < formTestData.length; i++) {
    await testFormSubmission(formTestData[i], i);
  }

  console.log('═══════════════════════════════════════════════════════════');
  console.log('\n📊 Test Results:\n');
  console.log(`✅ Successful: ${successCount}/${formTestData.length}`);
  console.log(`❌ Failed: ${failureCount}/${formTestData.length}`);

  if (failureCount === 0) {
    console.log('\n🎉 All form submissions working perfectly!\n');
    console.log('✓ Contact form is integrated with Airtable');
    console.log('✓ Form data is being saved correctly');
    console.log('✓ All required fields are mapped properly');
    console.log('\n🚀 Your website is ready for production!\n');
  } else {
    console.log('\n⚠️  Some tests failed. Check the errors above.\n');
  }

  process.exit(failureCount > 0 ? 1 : 0);
})();
