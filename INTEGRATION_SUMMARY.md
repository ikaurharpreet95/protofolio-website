# Airtable Integration - Setup Summary

## ✅ What Has Been Created

Your portfolio website is now set up to save contact form submissions directly to Airtable!

### Files Created:

1. **`.env.local`** - Environment configuration file
   - Location: Project root
   - Contains: API key, Base ID, and Table name
   - 🔒 Automatically excluded from git (won't be committed)

2. **`.env.example`** - Template documentation
   - Shows what environment variables are needed
   - Safe to commit to git
   - Helps other developers understand the setup

3. **`src/services/airtable.ts`** - Airtable API service
   - Handles all communication with Airtable
   - Type-safe data submission
   - Proper error handling

4. **`AIRTABLE_SETUP.md`** - Complete setup guide
   - Step-by-step instructions
   - Troubleshooting tips
   - Security best practices

### Files Modified:

1. **`src/components/site/Contact.tsx`**
   - Updated to import Airtable service
   - Modified form submission to send data to Airtable
   - Better error handling with user feedback

2. **`gitignore`**
   - Added `.env.local` to prevent accidental commits
   - Added `.env` for production safety

---

## 🚀 Next Steps to Get It Working

### Step 1: Set Up Your Airtable Table

Create a table named **"website"** in your Airtable base with these fields:
- **Name** (Single line text)
- **Email** (Email)
- **Phone** (Phone number)
- **Event Type** (Single select or Text)
- **Message** (Long text)
- **Submission Date** (Date/time)

### Step 2: Get Your API Key

1. Go to https://airtable.com/create/tokens
2. Create a new token with `data.records:write` permission
3. Copy the token

### Step 3: Get Your Base ID

1. Open your Airtable base
2. Check the URL: `https://airtable.com/app/[BASE_ID]/...`
3. Copy the BASE_ID

### Step 4: Update `.env.local`

Edit `.env.local` in your project root:

```
VITE_AIRTABLE_API_KEY=your_token_here
VITE_AIRTABLE_BASE_ID=your_base_id_here
VITE_AIRTABLE_TABLE_NAME=website
```

### Step 5: Test It!

1. Dev server is already running at http://localhost:3000
2. Scroll to the contact form
3. Fill it out and submit
4. Check your Airtable table - the record should appear!

---

## 📋 Form Data Being Captured

When someone submits the contact form, these fields are saved to Airtable:

| Field | Type | Example |
|-------|------|---------|
| Name | Text | John Doe |
| Email | Email | john@example.com |
| Phone | Text | +64 21 487 5932 |
| Event Type | Text | Wedding |
| Message | Long Text | I would like to discuss... |
| Submission Date | DateTime | 2024-07-02T10:30:00Z |

---

## 🔒 Security Features

✅ **Environment variables** - API keys stored in `.env.local`, not in code
✅ **Git ignored** - `.env.local` won't be committed to version control
✅ **Error handling** - User-friendly error messages if something goes wrong
✅ **Type-safe** - TypeScript ensures correct data format
✅ **Secure API** - Uses Airtable's official API with Bearer token auth

---

## 🧪 Testing Checklist

- [ ] `.env.local` file created with your credentials
- [ ] Airtable table "website" created with all fields
- [ ] Dev server running at http://localhost:3000
- [ ] Contact form is visible and functional
- [ ] Form submission succeeds without errors
- [ ] New record appears in Airtable table
- [ ] All fields are populated correctly

---

## 💡 How It Works (Technical Details)

### Data Flow:

```
User fills form → Form validation → Airtable API call → Record saved
                                         ↓
                                   Error? → Show toast message
```

### The Airtable Service (`src/services/airtable.ts`):

```typescript
submitFormToAirtable(data) {
  1. Check if API key, Base ID, and Table name are set
  2. Send POST request to Airtable API
  3. Format data with correct field names
  4. Handle success or error
  5. Return result
}
```

### Form Submission (`src/components/site/Contact.tsx`):

```typescript
onSubmit(data) {
  1. Call Airtable service with form data
  2. If successful → Show success message & reset form
  3. If error → Show error message to user
}
```

---

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_AIRTABLE_API_KEY` | Your personal access token | `pat_1abc2def...` |
| `VITE_AIRTABLE_BASE_ID` | Your Airtable base ID | `appXXXXXXXXXXXXXX` |
| `VITE_AIRTABLE_TABLE_NAME` | Your table name | `website` |

**Note**: All variables start with `VITE_` because this is a Vite app and only variables with this prefix are exposed to the browser.

---

## 🆘 Troubleshooting

### "Missing Airtable configuration" Error
- Make sure `.env.local` exists
- Restart the dev server after updating `.env.local`
- Check spelling of variable names (case-sensitive)

### "Failed to submit" Error
- Verify your API token is valid
- Check that Base ID is correct
- Confirm table name matches exactly
- Check that token has `data.records:write` permission

### Records not appearing in Airtable
- Check browser console for error messages (F12)
- Verify field names in Airtable are exactly as expected
- Make sure API token hasn't expired

### CORS or Network Errors
- This shouldn't happen with Airtable's official API
- Check your internet connection
- Try submitting again

---

## 📚 Additional Resources

- [Airtable API Docs](https://airtable.com/api)
- [Airtable Tokens Setup](https://airtable.com/create/tokens)
- [Project Setup Guide](./AIRTABLE_SETUP.md)

---

## ✨ What's Next?

Once Airtable is connected and working:

1. **Customize fields** - Add more fields to capture additional info
2. **Automate responses** - Set up Airtable automations to send confirmation emails
3. **Track analytics** - Use Airtable views to analyze form submissions
4. **Deploy** - Push to production (Vercel, Netlify, etc.) with environment variables
5. **Enhance** - Add file uploads, conditional fields, etc.

---

**Your website is now fully configured for Airtable integration!** 🎉
