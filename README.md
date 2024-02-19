# NASA Media Library Explorer

Explore the vast universe of NASA's media library with our React single-page application. Dive into a world of astronomical images, capturing moments of discovery and beauty. This application provides an easy and mobile-friendly way to search through NASA's image collection, offering detailed views of each piece of media.

## Features

- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.
- **Search Functionality**: Utilize the `/search` endpoint to explore NASA's Media Library with options to filter by year.
- **Detailed View**: Access a more detailed page for each search result, showcasing the collection's title, location, photographer's name, description, keywords, date, and images.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A modern web browser.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/nasa-media-library-explorer.git
    ```
2. Navigate to the project directory:
    ```bash
    cd nasa-media-library-explorer
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```
    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Search Page

- **Searching**: Enter your query in the search input, and optionally, specify the `year start` and `year end` for your search.
- **Results**: Browse through the results displayed below the search inputs. Each item includes a thumbnail, title, location, and photographer's name, and links to a detailed view.

### Show Page

- Detailed information about the collection is displayed here, including title, location, photographer's name, description, keywords, date, and images.
- Use the back button to return to your search results.

## Testing

Run basic tests to ensure the application's reliability:
```bash
npm test
