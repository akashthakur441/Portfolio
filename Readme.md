# Akash Thakur — Portfolio Website

A single-page portfolio built with plain HTML, CSS, and JavaScript (no frameworks, no build step).

## 📁 Structure

portfolio/
├── index.html → all page content (sections, text)
├── css/
│ └── style.css → design system (colors, type, layout)
├── js/
│ ├── script.js → typing animation + renders project cards
│ └── projects.js → EDIT THIS to add/remove your projects
├── images/ → put your photo(s) here
└── resume/ → put your resume PDF here

## ✏️ What to edit

| Want to change...        | Edit this file        |
|---------------------------|------------------------|
| Your name, about text, experience, contact info | `index.html` (look for `<!-- TODO -->` comments) |
| Your project list         | `js/projects.js`      |
| Colors, fonts, spacing    | `css/style.css`        |
| Your photo                | drop it in `images/`, then reference it in `index.html` |
| Your resume PDF           | drop it in `resume/`, match the filename in the nav bar's download link |

## ▶️ How to run it locally

This is a static site — no installation, no npm, no build step required.

**Option A — just open the file (fastest):**
1. Go into the `portfolio` folder.
2. Double-click `index.html`.
3. It opens directly in your default browser and works fully.

**Option B — use VS Code's Live Server (recommended while editing):**
1. In VS Code, install the extension called **"Live Server"** (by Ritwick Dey) from the Extensions panel (`Ctrl+Shift+X`, search "Live Server").
2. Right-click `index.html` in the file explorer → **"Open with Live Server"**.
3. It opens in your browser at something like `http://127.0.0.1:5500/index.html` and **auto-refreshes** every time you save a file — so you see your edits instantly.

**Option C — Python's built-in server (no extension needed):**
```bash
cd portfolio
python -m http.server 5500
```
Then open `http://localhost:5500` in your browser.

## 🚀 How to publish it live (GitHub Pages)

1. Push this folder's contents to your `Portfolio` GitHub repo (`git add .` → `git commit -m "..."` → `git push`).
2. On GitHub: repo → **Settings** → **Pages** → under "Source" choose **Deploy from a branch** → Branch: `main`, folder: `/root` → **Save**.
3. After 1–2 minutes your site is live at:
   `https://YOUR-USERNAME.github.io/Portfolio/`