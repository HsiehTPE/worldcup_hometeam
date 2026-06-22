# 2026 World Cup Personality Test

Static interactive quiz for GitHub Pages.

## Local preview

```bash
cd /home/jwshan/hsieh_codes/workspace/worldcup_hometeam
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`.

Direct result page examples:

- Local home: `http://127.0.0.1:8000/`
- Local result: `http://127.0.0.1:8000/?result=ARG`
- GitHub Pages home: `https://hsiehtpe.github.io/worldcup_hometeam/`
- GitHub Pages result: `https://hsiehtpe.github.io/worldcup_hometeam/?result=ARG`

Quick question preview examples:

- Open the quiz and start from the first question: `http://127.0.0.1:8000/`
- Jump directly to question 1: `http://127.0.0.1:8000/?question=1`
- Jump directly to question 1 with hash fallback: `http://127.0.0.1:8000/#question=1`
- Jump directly to question 8: `http://127.0.0.1:8000/?question=8`
- Jump to a specific result for visual check: `http://127.0.0.1:8000/?result=MEX`
- If you want to inspect a specific question, start the quiz and use the previous/next buttons to reach it
- If a change does not show up, hard refresh the browser or reopen the page once to bypass stale `app.js`

GitHub Pages question preview examples:

- Home: `https://hsiehtpe.github.io/worldcup_hometeam/`
- Question 1: `https://hsiehtpe.github.io/worldcup_hometeam/?question=1`
- Question 1 with hash fallback: `https://hsiehtpe.github.io/worldcup_hometeam/#question=1`
- Question 8: `https://hsiehtpe.github.io/worldcup_hometeam/?question=8`
- Result check: `https://hsiehtpe.github.io/worldcup_hometeam/?result=MEX`

Supported result codes: `ARG`, `BRA`, `FRA`, `ENG`, `ESP`, `GER`, `POR`, `NED`, `KOR`, `MEX`, `USA`, `CPV`, `MAR`, `CRO`, `URU`, `NOR`.

## GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, enable GitHub Pages.
3. Set the source to GitHub Actions.
4. Push to `main`; the workflow in `.github/workflows/pages.yml` will deploy automatically.
