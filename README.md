# 2026 World Cup Personality Test

Static interactive quiz for GitHub Pages.

## Local preview

```bash
cd /home/jwshan/hsieh_codes/workspace/worldcup_personality_test_2026
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`.

## GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, enable GitHub Pages.
3. Set the source to GitHub Actions.
4. Push to `main`; the workflow in `.github/workflows/pages.yml` will deploy automatically.
