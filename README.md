# Quiz_game
# Interactive Quiz Application

## Overview

This project is an engaging, web-based quiz application built with Next.js, React, and Tailwind CSS. It offers an interactive and gamified quiz experience, fetching questions from an API and presenting them through an intuitive user interface.

## Features

- **Dynamic Quiz Data**: Fetches quiz questions from an external API.
- **Fallback Mechanism**: Includes preset questions to ensure functionality even if API fetch fails.
- **Interactive UI**: Engaging user interface with animations and transitions.
- **Progress Tracking**: Shows current question number and total questions.
- **Score Calculation**: Tracks and displays the user's score.
- **Responsive Design**: Adapts to various screen sizes for a consistent experience across devices.
- **Error Handling**: Gracefully handles API fetch errors with informative user feedback.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for production-grade applications.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript for improved developer experience.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/interactive-quiz-app.git
   cd interactive-quiz-app
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- \`app/page.tsx\`: Main component managing quiz state and flow.
- \`app/components/Start.tsx\`: Start screen component.
- \`app/components/Question.tsx\`: Question display component.
- \`app/components/Result.tsx\`: Results summary component.
- \`app/layout.tsx\`: Root layout component.
- \`app/globals.css\`: Global styles and Tailwind CSS imports.

## API Integration

The app fetches quiz data from \`https://api.jsonserve.com/Uw5CrX\`. If the API is unavailable, the app uses a fallback set of questions to ensure functionality.

## Error Handling

The application includes robust error handling:
- Gracefully manages API fetch failures.
- Provides user feedback for any errors.
- Implements a fallback mechanism to ensure the quiz remains functional.

## Future Enhancements

- Implement user authentication and score tracking.
- Add difficulty levels and category selection.
- Introduce timed questions for increased challenge.
- Develop a leaderboard system.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [JSONServe](https://jsonserve.com/) for providing the API service.
- Inspired by modern quiz applications and gamification principles.

## Screenshots

[Include screenshots of your application here]

## Demo

[If you have a live demo, include the link here]

---

Created with ❤️ by shivansh arya
