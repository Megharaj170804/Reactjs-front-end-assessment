# React Front-End Assessment

This repository contains three React projects built using TypeScript and Vite as part of a front-end assignment. Each project focuses on different React concepts like component design, state management, and user interaction through movie-related applications.

***

## Projects Overview

### 1. CineFeed

A classic feed-based social media app for movie enthusiasts to share and interact with posts about movies.

- **Purpose:** Provide a clean, simple platform for users to share what they’re watching and see friends' opinions without the clutter of large social networks.
- **Core Features:**
  - Home Feed displaying a list of posts
  - Reusable Post Card component showing user info, movie title, poster, post text, and interaction area
  - “Like” button functionality to increment a like counter using React `useState`
  - Displays mock data with user posts, likes, and comments

***

### 2. FlickList

A curated gallery for movie lists or collections, focused on component composition and design.

- **Purpose:** Help users discover themed movie collections to reduce overwhelm and provide curated movie choices.
- **Core Features:**
  - Collection Gallery showing multiple themed collections (e.g., Top Sci-Fi, 80s Classics)
  - Movie Card component displaying poster, title, and rating
  - Collection component acting as a container for Movie Cards
  - State management via `useState` to filter movies by selected collection

***

### 3. Movie Night Picker

An interactive tool to assist users in picking a movie by filtering based on mood or genre.

- **Purpose:** Simplify movie selection by letting users filter movies using genre, decade, or mood tags.
- **Core Features:**
  - Filter controls (buttons or dropdowns) for genre, decade, mood filtering
  - Dynamic movie list display that updates as filters change
  - Extensive use of `useState` for selected filters and rendered movie list

***

## Technologies Used

- React.js with TypeScript
- Vite build tool
- CSS for styling components
- React hooks (`useState`) for state management

***

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Megharaj170804/Reactjs-front-end-assessment.git
   ```

2. Navigate to the project directory:
   ```
   cd Reactjs-front-end-assessment
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Project

Start the development server:

```
npm run dev
```
or
```
yarn dev
```

Open the browser at `http://localhost:5173` (or the port Vite indicates) to view the application.

***

## Project Structure

- Each project is structured with modular React components demonstrating best practices for reusability and state management.
- Mock data is used to simulate real-world JSON data for posts, collections, and movies.

***

## Author

Megharaj Dandgavhal
