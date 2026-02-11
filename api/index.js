//////////////////////////////////////
/////////////// SERVER ///////////////
//////////////////////////////////////

// create express server
import express from "express";
const app = express();
const port = 3000;

// make all files inside /public available using static
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));

// allow access to all 
import cors from 'cors';
app.use(cors());

// add a separate file for routes
import router from './routes.js';
app.use('/', router);

// start server
app.listen(port, () => console.log(`Your app is listening at: http://localhost:${port}.`));

// export app for vercel
export default app;