# Lingo Bingo: A Vocabulary Learning Application

Lingo Bingo is a fun and interactive single-page language learning application designed to help users expand their vocabulary and improve their communication skills in a chosen language. With features like structured lessons, a responsive interface, and a seamless learning experience, Lingo Bingo aims to make vocabulary retention enjoyable and effective.

---

## 🚀 Live Demo

[Live Application](https://cosmic-meerkat-d91c61.netlify.app/)  
---

## 🌟 Key Features

- **Language-Specific Learning**: Focus on learning a specific language (e.g., Spanish, Japanese, German) through vocabulary cards and examples.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices.
- **Interactive Lessons**: 
  - Structured into 10 lessons.
  - Vocabulary cards with examples and a "When to Use" modal.
  - Difficulty-based card coloring for better learning prioritization.
- **Dynamic Components**:
  - Animated success counters (React Count-Up).
  - Embedded tutorial videos.
  - Voice pronunciation for vocabularies.
- **Authentication**: 
  - Login/Register with email and password.
  - Google-based Social Login.
  - Forgot Password functionality with reset email support.
- **Profile Management**: Update profile information (name, photo URL).
- **Routing and Error Handling**: Private routes for authenticated users and a custom 404 page.
- **Hosting**: Hosted on platforms like Firebase or Netlify with Firebase authentication.

---

## 🖼️ Application Pages Overview

### 1. **Home Page**
- Banner/Slider with language learning images.
- About Section explaining the mission.
- Success Counters for users, lessons, vocabularies, and tutorials.
- Two custom sections with unique content.

### 2. **Let’s Learn Page**
- Static lesson cards leading to individual lessons.
- Tutorial section with embedded videos.
- “View More” button redirecting logged-in users to the tutorial page.

### 3. **Lesson Page** (Private)
- Displays vocabulary cards matching the lesson number.
- Cards include word, meaning, pronunciation, part of speech, and examples.
- Modal pop-ups for “When to Say” details.

### 4. **Authentication Pages**
- Login and Register with password validation:
  - Uppercase and lowercase letters.
  - Minimum length of 6 characters.
- Google social login.

### 5. **My Profile** (Private)
- Displays user details (name, email, photo).
- Update profile option with Firebase integration.

### 6. **Tutorials Page** (Private)
- Embedded YouTube videos related to the selected language.
- “Learn Vocabularies” button navigating to lessons.

### 7. **About Us Page**
- Information about the application, developer(s), and skills.

### 8. **404 Page**
- Custom error page with navigation to the home page.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, React Router, CSS Framework.
- **Backend**: Firebase Authentication.
- **Data Management**: JSON for vocabulary storage.
- **Animation**: AOS or Animate.css for smooth effects.
- **Other Packages**:
  - [React Count-Up](https://www.npmjs.com/package/react-countup)
---

## 📊 JSON Data Structure Example

```json
{
  "id": "word001",
  "word": "ありがとう",
  "pronunciation": "arigatou",
  "meaning": "thank you",
  "part_of_speech": "expression",
  "difficulty": "easy",
  "lesson_no": 1,
  "when_to_say": "Used to express gratitude in informal settings.",
  "example": "ありがとう、手伝ってくれて！ (arigatou, tetsudatte kurete!) - Thank you for helping me!"
}
```

---

## ✨ Future Enhancements

- Email verification post-registration.
- Support for additional languages and their voice packs.
- Advanced gamification features for user engagement.
