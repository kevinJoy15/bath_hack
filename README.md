# Dreamify - Every Dream Deserves a Story...🌙

## 💡 Inspiration  
We all have dreams that are absolutely *unhinged*, oddly profound, or just laugh-out-loud funny—but they slip away from memory the moment we open our eyes. What if we could capture that fleeting chaos and turn it into something worth sharing?

**Dreamify** was born from the idea that dreams are mini-stories worth telling. They're bizarre, hilarious, sometimes emotional—and uniquely *you*. Sharing them with friends lets others in on your subconscious adventures, sparking conversations, laughter, and connection, no matter the distance or time. It’s like building a diary, but one that your friends can read, enjoy, and react to.

We wanted to create a space where people can stay connected through the weirdest and most personal parts of life in the most fun way possible.

---

## 🚀 What It Does  
Dreamify is your personal dream-to-story machine with a social twist:

- Users start by jotting a **quick dream recap** when they wake up.
- We feed it through a **custom AI pipeline** using OpenAI's LLM, engineered with carefully crafted prompts to produce **short, funny, and engaging summaries**.
- Then, based on the story, we generate **dream-inspired images** using a **Stable Diffusion model**.
- These dream stories and visuals are then posted to a user’s page.
- Friends can **like, comment**, and **view each other’s dreams**, building a social platform driven by the subconscious mind.

It’s your dream journal, but funnier—and social.

---

## 🛠 How We Built It  
This was truly a 24-hour full-stack learning journey:

- **Frontend**: Built in **React Native** with **Expo**—none of us had used React Native before this hackathon!
- **AI**: 
  - We used **OpenAI’s GPT models** for text generation via **prompt engineering**.
  - Story titles and image prompts are automatically created.
  - **Stable Diffusion (local model)** was used to generate relevant, creative, and sometimes hilarious images based on the dream stories.
- **Backend**:
  - Developed in **Python** using **FastAPI**
  - **SQLite** database and REST APIs
  - Tools: **Postman**, **Uvicorn** for local dev server

We engineered a full content pipeline from dream to story to shareable post.

---

## 🧩 Challenges We Ran Into  
- Getting all the **AI dependencies** (especially for Stable Diffusion) installed correctly - we needed to use GPUs!
- **FastAPI endpoints** took trial and error to get running smoothly.
- Typescript issues popped up constantly… and yes, **centering** that one tiny navigation highlight might’ve been our longest task 🫠.
- React Native was a whole new world and getting comfortable with layouts, styling, and state management took time.

---

## 🏆 Accomplishments We’re Proud Of  
- A functional **full-stack mobile app** built in 24 hours!
- Clean, aesthetic **UI with page navigation** and functional social features.
- **Seamless AI integration** for text and image generation.
- Most importantly: turning our wild concept into something real, creative, and shareable.

---

## 📚 What We Learned  
- Everything. No really—**everything.**
- None of us had built a mobile app before.
- Learned how to:
  - Use React Native and Expo from scratch
  - Write, connect, and test APIs
  - Handle backend and frontend integration
  - Work with and optimize AI models for creative use

---

## 🔮 What's Next for Dreamify  
- Streamlining the **story/image generation pipeline** to reduce lag
- Adding **user auth** and multi-user testing
- More **social features** like replies, following, and tagging
- Speech-to-text generation to enter dream recaps.
- Possibly: dream streaks, personality-based dream analysis, or dream maps over time!

Dreamify has the potential to become a meaningful and delightful daily ritual for users—and we’re excited to keep dreaming it into reality 🌙
