# Music Player

A modern, responsive web-based music player built with HTML, CSS, and JavaScript. This application provides a clean and intuitive interface for playing music with essential playback controls and features.

## Features

- **Play/Pause Control** - Toggle music playback with visual feedback
- **Track Navigation** - Skip to previous or next song
- **Progress Tracking** - Visual progress bar with seek functionality
- **Volume Control** - Adjustable volume slider with visual indicators
- **Album Art Display** - Shows cover images for each track
- **Song Information** - Displays current song title and artist
- **Playlist Counter** - Shows current track position in playlist
- **Time Display** - Current time and total duration for each track
- **Responsive Design** - Works across different screen sizes

## Project Structure

```
Music player/
├── Music player/          # Main application folder
│   ├── index.html        # Main HTML structure
│   ├── index.js          # JavaScript functionality
│   ├── styles.css        # CSS styling
│   ├── Images/           # Album cover artwork
│   │   ├── fight_back.jpg
│   │   ├── grateful.jpg
│   │   ├── hey.jpg
│   │   ├── summer.jpg
│   │   └── ukulele.jpg
│   └── Music/            # Audio files
│       ├── fight_back.mp3
│       └── Grateful.mp3
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Playlist

The player includes the following tracks:

1. **Grateful** - Neffex
2. **Fight-Back** - Neffex
3. **Give-Smile** - Give-Smile-Author
4. **Power-Trap** - Power-Trap-Author
5. **Sweet-Dreams** - Sweet-Dreams-Author

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ashutosh6123/Music-Player.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd "Music player"
   ```

3. **Open the application:**
   - Navigate to the "Music player" folder
   - Open `index.html` in your web browser

### Using a Local Server (Recommended)

For optimal performance and to avoid CORS issues, serve the files using a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser and navigate to the "Music player" folder.

## Usage

1. **Play Music**: Click the play button (▶️) to start playback
2. **Pause Music**: Click the pause button (⏸️) to pause playback
3. **Skip Tracks**: Use the previous (⏮️) and next (⏭️) buttons to navigate
4. **Seek**: Click anywhere on the progress bar to jump to that position
5. **Volume Control**: Adjust the volume using the volume slider
6. **Track Info**: View current song information and album art in the display area

## Controls

- **Previous Button**: Skip to the previous track
- **Play/Pause Button**: Toggle playback state
- **Next Button**: Skip to the next track
- **Progress Bar**: Shows playback progress and allows seeking
- **Volume Slider**: Control audio volume level
- **Time Display**: Shows current time and total duration

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **HTML5 Audio API** - Audio playback and controls
- **SVG Icons** - Scalable vector graphics for control buttons (Lucide Icons)

## Technical Features

- Object-oriented JavaScript structure with music array
- Event-driven programming for user interactions
- Real-time audio progress tracking
- Dynamic DOM manipulation for UI updates
- Responsive CSS layout with modern styling

## Browser Compatibility

This music player is compatible with all modern browsers that support:
- HTML5 Audio API
- ES6 JavaScript features
- CSS Flexbox/Grid layout
- SVG rendering

## File Format Support

Currently supports:
- **Audio**: MP3 format
- **Images**: JPEG format for album artwork

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Future Enhancements

- Support for additional audio formats (WAV, OGG, FLAC)
- Playlist management (add/remove songs)
- Shuffle and repeat modes
- Equalizer functionality
- Local file upload support
- Dark/light theme toggle

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Author**: Ashutosh Shukla
- **GitHub**: [@Ashutosh6123](https://github.com/Ashutosh6123)
- **Repository**: [Music-Player](https://github.com/Ashutosh6123/Music-Player)

## Acknowledgments

- Music tracks used for demonstration purposes
- SVG icons from [Lucide Icons](https://lucide.dev/)
- Inspiration from modern music streaming applications
