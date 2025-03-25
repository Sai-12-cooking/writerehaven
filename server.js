import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint example
app.get('/api/books', (req, res) => {
  res.json([
    { id: 1, title: 'The Midnight Library', author: 'Sarah Johnson' },
    { id: 2, title: 'Echoes of Dawn', author: 'Michael Chen' },
    { id: 3, title: 'The Last Horizon', author: 'Emily Roberts' },
  ]);
});

// Catch-all handler for React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});