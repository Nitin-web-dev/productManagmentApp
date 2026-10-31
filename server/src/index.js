import { createApp } from "./app.js";

const PORT = 4000;

createApp().listen(PORT, () => {
    console.log(`Api running on http://localhost:${PORT}`);
})