# FrameSense  
## Farcaster Ad Platform SDK

This SDK allows seamless integration of ads into Farcaster miniapps and frames. It leverages on-chain user activity and profile data to deliver relevant ads, while ensuring a respectful, user-first experience with smart ad frequency limits.

You also get an **advertising account dashboard**, where you can set up and manage your ad campaigns, define targeting based on user profiles, and monitor performance in real-time.

---

## 🧩 How It Works

1. **SDK Integration**  
   Miniapps and frames integrate our SDK to display ads to users.

2. **Advertising Account Setup**  
   Advertisers create an account via the ad platform dashboard:
   - Launch and manage campaigns  
   - Define targeting settings using on-chain and Farcaster activity data  
   - Monitor spend and performance metrics

3. **User Insights**  
   We gather user data from:
   - Farcaster profiles  
   - On-chain activity (e.g. token holdings, interactions, etc.)

4. **Ad Targeting**  
   Ad providers create interest-based user profiles using:
   - Public on-chain data  
   - Farcaster activity

5. **Ad Delivery**  
   The SDK determines which ad to show based on user interests and activity.  
   ✅ Only a limited number of ads per user per hour — thanks to consistent on-chain identity.

6. **Revenue Sharing**  
   - When a user views an ad, the miniapp/frame developer gets paid.  
   - Payment comes directly from the ad provider's spend.

---

## 📦 Features

- 📡 On-chain + Farcaster-native targeting  
- 🔒 Respectful ad frequency control  
- 💰 Monetization for miniapp & frame developers  
- ⚙️ Lightweight SDK with plug-and-play integration  
- 📊 Ad dashboard for campaign management & analytics  

---

## 🛠️ Integration

Install the SDK:

```bash
npm install farcaster-ad-sdk
```

### Use in your app

```js
export const frames = createFrames({
  basePath: "/frames",
  middleware: [
    adMiddleware({
      adId: "1234567890", // get ad ID from ad platform
    }),
  ]
});
```
