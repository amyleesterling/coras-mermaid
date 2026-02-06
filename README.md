```markdown
# Cora's Mermaid

A small, playful site with a light pink background, banner image, background music, and "chips" linking to Spotify tracks.

Features:
- Light pink background
- Inline SVG banner (editable)
- Background music with play/pause toggle (autoplay attempted)
- Styled chip links to Spotify tracks you provided

How to use
1. Replace the Spotify links in `index.html` if you want different tracks.
2. Add your background audio to `assets/background-music.mp3` or update the `<audio>` source in `index.html`.
3. Customize the banner SVG or replace it with an image of your choosing.

Quick local preview:
- In the project folder open `index.html` in your browser.

Create the GitHub repo and push (using the gh CLI)
1. I recommend a repo name without spaces/apostrophes. Suggested repo name: `coras-mermaid`
2. From the project folder run:
   - git init
   - git add .
   - git commit -m "Initial site for Cora's Mermaid"
   - gh repo create amyleesterling/coras-mermaid --public --source=. --remote=origin --push

If you want the repo private, replace `--public` with `--private`.

Notes about autoplay:
- Modern browsers often block autoplay of unmuted audio until the user interacts with the page.
- The page attempts to autoplay and will show a play button if the browser blocks autoplay.
```