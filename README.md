# Md Mahnur Alam

Personal portfolio and beginner programming projects.

## Live portfolio

The portfolio is a static site in [`portfolio/`](portfolio/). It uses HTML, CSS, and JavaScript and can be published directly with GitHub Pages.

## Repository structure

- [`portfolio/`](portfolio/) - personal portfolio website
- [`myfirstproject/`](myfirstproject/) - small Java and Python practice programs

## Run locally

Open [`portfolio/index.html`](portfolio/index.html) in a browser, or serve the repository with any static file server:

```text
python -m http.server 8000
```

Then visit `http://localhost:8000/portfolio/`.

## Deployment

This repository includes a GitHub Actions workflow that deploys `portfolio/` to GitHub Pages whenever changes are pushed to `main`. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.
