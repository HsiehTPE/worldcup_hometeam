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

Supported result codes: `ARG`, `BRA`, `FRA`, `ENG`, `ESP`, `GER`, `POR`, `NED`, `KOR`, `MEX`, `USA`, `CAN`, `MAR`, `CRO`, `URU`, `NOR`.

## GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, enable GitHub Pages.
3. Set the source to GitHub Actions.
4. Push to `main`; the workflow in `.github/workflows/pages.yml` will deploy automatically.
