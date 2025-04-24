# voice_to_chat


This project demonstrates the integration of the **Google Speech-to-Text API** with **Deepchat**, allowing users to interact with the chat bot using voice input. When the user clicks the microphone button, their speech is converted to text using the Google Speech-to-Text API and displayed in the Deepchat interface.

## Features
- **Voice Input**: Users can click the "Start Recording" button, speak into their microphone, and have their speech transcribed in real time.
- **Deepchat Integration**: The transcribed text is automatically sent to the **Deepchat** interface, allowing for seamless voice-to-text interaction with the chat bot.
- **Responsive Design**: Works across most modern browsers with microphone access.

## Prerequisites
Before you begin, ensure you have the following:
- A **Google Cloud account** and access to the **Google Speech-to-Text API** (see [Step 1: Google Speech API Setup](#step-1-google-cloud-account-and-speech-api)).
- A **valid API key** from Google Cloud to use their Speech-to-Text service.

## Project Setup

### Step 1: Google Cloud Account and Speech-to-Text API

1. **Create a Google Cloud Project**:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project (e.g., "Deepchat Voice Integration").
   
2. **Enable the Speech-to-Text API**:
   - Navigate to the [API Library](https://console.cloud.google.com/apis/library).
   - Search for "Speech-to-Text API" and click **Enable**.

3. **Create an API Key**:
   - Go to the [Credentials page](https://console.cloud.google.com/apis/credentials).
   - Create a new API Key by selecting **Create Credentials** → **API Key**.
   - Copy the generated API Key.

### Step 2: Project Files

1. **Clone or Download the Project**:
   - Download or clone this repository to your local machine.

2. **Update API Key**:
   - Open the `main.js` file and replace `'YOUR_GOOGLE_API_KEY'` with the API key you generated in Step 1.

```javascript
const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API key
![image](https://github.com/user-attachments/assets/fe08eb24-3dca-44f6-ba95-113bc2a4d413)
![image](https://github.com/user-attachments/assets/aad864f5-f63d-427d-881a-101e1d32c89f)
![image](https://github.com/user-attachments/assets/5a2757d3-42b1-4c14-af38-18ae34c67fc2)



