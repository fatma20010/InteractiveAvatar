# Customization Guide

This guide will help you customize this HeyGen Interactive Avatar demo with your own avatars and configurations.

## Prerequisites

1. **HeyGen Account**: You need a HeyGen account with API access
2. **API Key**: Get your API key from [HeyGen Settings](https://app.heygen.com/settings?from=&nav=Subscriptions%20%26%20API)
3. **Custom Avatars**: Create your own interactive avatars at [HeyGen Labs](https://labs.heygen.com/interactive-avatar)

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# HeyGen API Configuration
HEYGEN_API_KEY=your_heygen_api_key_here

# HeyGen API Base URL (usually https://api.heygen.com)
NEXT_PUBLIC_BASE_API_URL=https://api.heygen.com

# Optional: OpenAI API Key (if you want to use OpenAI features)
# OPENAI_API_KEY=your_openai_api_key_here
```

## Adding Your Own Avatars

### Method 1: Add to Avatar List (Recommended)

1. Open `app/lib/constants.ts`
2. Find the `AVATARS` array
3. Add your avatar configuration:

```typescript
{
  avatar_id: "your_avatar_id_here",
  name: "Your Avatar Display Name",
}
```

4. To get your avatar ID:
   - Go to [HeyGen Labs Interactive Avatar](https://labs.heygen.com/interactive-avatar)
   - Click "Select Avatar" 
   - Copy the avatar ID from the list
   - Or create a new interactive avatar and use its ID

### Method 2: Use Custom Avatar ID (Quick Test)

1. Start the application
2. In the avatar configuration, select "Custom Avatar ID"
3. Enter your avatar ID directly
4. Start the session

This method is useful for testing without modifying code.

## Changing Default Avatar

To change the default avatar that loads when the app starts:

1. Open `components/InteractiveAvatar.tsx`
2. Find the `DEFAULT_CONFIG` object (around line 25)
3. Change the `avatarName` property:

```typescript
const DEFAULT_CONFIG: StartAvatarRequest = {
  quality: AvatarQuality.Low,
  avatarName: "your_avatar_id_here", // Change this
  // ... rest of config
};
```

Or set it to the first avatar in your custom list:

```typescript
avatarName: AVATARS[0].avatar_id, // Uses first avatar from your list
```

## Customizing Avatar Settings

You can customize default settings in `components/InteractiveAvatar.tsx`:

### Quality Settings
- `AvatarQuality.Low` - Lower quality, faster performance
- `AvatarQuality.Medium` - Balanced quality and performance
- `AvatarQuality.High` - Higher quality, may be slower

### Voice Settings
- `voiceId`: Custom voice ID from HeyGen
- `emotion`: Voice emotion (EXCITED, CALM, etc.)
- `model`: ElevenLabs model (eleven_flash_v2_5, etc.)
- `rate`: Speech rate (1.0 = normal, higher = faster)

### Language Settings
Add or modify languages in `app/lib/constants.ts` in the `STT_LANGUAGE_LIST` array.

## Using Knowledge Bases

To use a custom knowledge base with your avatar:

1. Create a knowledge base in HeyGen
2. Get the knowledge base ID
3. Enter it in the "Custom Knowledge Base ID" field in the UI
4. Or set it as default in `DEFAULT_CONFIG.knowledgeId`

## Removing Default Avatars

If you only want to use your own avatars:

1. Open `app/lib/constants.ts`
2. Remove or comment out the default HeyGen public avatars
3. Keep only your custom avatars in the array

## Testing Your Custom Avatars

1. Make sure your `.env` file is configured correctly
2. Run `npm install` (if you haven't already)
3. Run `npm run dev`
4. Open the app in your browser
5. Select your custom avatar from the dropdown
6. Click "Start Voice Chat" or "Start Text Chat"

## Troubleshooting

### Avatar not showing
- Verify your avatar ID is correct
- Check that your API key is valid
- Ensure the avatar is set up as an Interactive Avatar in HeyGen Labs
- Check the browser console for errors

### API errors
- Verify `HEYGEN_API_KEY` is set correctly in `.env`
- Check that `NEXT_PUBLIC_BASE_API_URL` is correct
- Restart the dev server after changing `.env` files

### Avatar not responding
- Check your microphone permissions (for voice chat)
- Verify your network connection
- Check the browser console for WebSocket errors

## Additional Resources

- [HeyGen Interactive Avatar 101](https://help.heygen.com/en/articles/9182113-interactive-avatar-101-your-ultimate-guide)
- [HeyGen Labs](https://labs.heygen.com/interactive-avatar)
- [HeyGen API Documentation](https://docs.heygen.com/)

## Support

For issues with the HeyGen SDK, visit the [StreamingAvatarSDK GitHub Discussions](https://github.com/HeyGen-Official/StreamingAvatarSDK/discussions).

