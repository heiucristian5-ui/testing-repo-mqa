# Course Setup — Lesson 1: Run Your First Playwright Test

Welcome! This is the very first step of the course. By the end of this guide, you will have:

1. Forked this repository to your own GitHub account
2. Cloned your fork to your computer
3. Installed all dependencies (Node packages and Playwright browsers)
4. Started the Angular practice application
5. Successfully executed `firstTest.spec.ts` and viewed the HTML report

If everything below works for you, you are ready for Lesson 2.

> **Read this whole document before typing any commands.** Each step builds on the previous one. If you skip ahead, the later steps will fail in confusing ways.

---

## Table of Contents

1. [What you are building](#what-you-are-building)
2. [Prerequisites — install these once](#prerequisites--install-these-once)
3. [Step 1 — Fork the repository](#step-1--fork-the-repository)
4. [Step 2 — Clone your fork](#step-2--clone-your-fork)
5. [Step 3 — Connect to the upstream repo](#step-3--connect-to-the-upstream-repo-optional-but-recommended)
6. [Step 4 — Install Node dependencies](#step-4--install-node-dependencies)
7. [Step 5 — Install Playwright browsers](#step-5--install-playwright-browsers)
8. [Step 6 — Start the Angular application](#step-6--start-the-angular-application)
9. [Step 7 — Run `firstTest.spec.ts`](#step-7--run-firsttestspects)
10. [Step 8 — Open the HTML test report](#step-8--open-the-html-test-report)
11. [Troubleshooting](#troubleshooting)
12. [Recommended editor extensions (Cursor / VS Code)](#recommended-editor-extensions-cursor--vs-code)
13. [What to submit / how to confirm you finished Lesson 1](#what-to-submit--how-to-confirm-you-finished-lesson-1)

---

## What you are building

This repository contains:

- **An Angular 14 web application** (`Ngx-Admin`) that runs locally at `http://localhost:4200`. It is the **app under test** — the page Playwright will open and interact with.
- **Playwright tests** in the `tests/` folder. Lesson 1 uses one file: `tests/firstTest.spec.ts`. It contains two tests inside one `describe` block: `input fields` and `radio buttons`. Both run against three browsers (Chromium, Firefox, WebKit), so the first run executes **6 test cases total**.

Two things must be running side-by-side:

```
┌─────────────────────────┐         ┌─────────────────────────┐
│  Terminal #1            │         │  Terminal #2            │
│  npm start              │  HTTP   │  npx playwright test    │
│  Angular app on :4200   │ ◄─────► │  drives browsers        │
└─────────────────────────┘         └─────────────────────────┘
```

If terminal #1 is not running, the tests cannot reach the app and will fail with a "connection refused" error.

---

## Prerequisites — install these once

You only need to do this section the first time you set up your machine. If you have already installed these tools for another course, skip ahead to [Step 1](#step-1--fork-the-repository).

### 1. Node.js (LTS)

This project uses **Angular 14**, which works reliably on **Node.js 18.x or 20.x LTS**. Newer versions (Node 21+) may fail during `npm install` with `node-gyp` or OpenSSL errors.

**Check what you have:**
```bash
node -v
```

You should see something like `v18.20.0` or `v20.18.0`. If you see `v16` or older, or `v22`+, install a supported version:

- **macOS / Linux:** install [nvm](https://github.com/nvm-sh/nvm), then:
  ```bash
  nvm install 20
  nvm use 20
  ```
- **Windows:** install [nvm-windows](https://github.com/coreybutler/nvm-windows), then:
  ```cmd
  nvm install 20.18.0
  nvm use 20.18.0
  ```
- Or simply download the LTS installer from https://nodejs.org/.

### 2. npm

Comes bundled with Node. Verify:
```bash
npm -v
```
Any version 9.x or higher is fine.

### 3. Git

**Check:**
```bash
git --version
```
If missing, install from https://git-scm.com/downloads (Windows/Linux) or via Xcode Command Line Tools on macOS:
```bash
xcode-select --install
```

### 4. A GitHub account

If you do not have one, create it at https://github.com/signup. Use an email you check — GitHub will email a verification link.

### 5. A code editor

**VS Code** is recommended: https://code.visualstudio.com/. It has the best Playwright tooling.

### 6. Authenticate Git with GitHub (only needed when you push)

For the first lesson you only **read** from GitHub (forking and cloning over HTTPS works without authentication). You only need to authenticate when you start pushing your own commits in later lessons. The two easiest options:

- Install the GitHub CLI (`gh`) from https://cli.github.com/ and run `gh auth login`.
- Or generate a [Personal Access Token](https://github.com/settings/tokens) and use it as your password the first time Git prompts on a `git push`.

---

## Step 1 — Fork the repository

A **fork** is your own copy of the repository under your GitHub account. You can commit and push to your fork freely without affecting the original.

1. While signed into GitHub, open **https://github.com/valaheugen/testing-repo-mqa**.
2. Click the **Fork** button at the top-right of the page.
3. On the "Create a new fork" screen:
   - **Owner:** select your own GitHub account.
   - **Repository name:** leave the default (`testing-repo-mqa`) unless you have a reason to rename it.
   - **Description:** optional.
   - Make sure **"Copy the `main` branch only"** is checked — that is the branch we use.
4. Click **Create fork**.

After a few seconds GitHub redirects you to your new fork at `https://github.com/<your-username>/testing-repo-mqa`. Confirm you see the file `tests/firstTest.spec.ts` in the file list — that proves the fork worked.

> **Why fork instead of just cloning the original?** Throughout the course you will commit your own solutions, push branches, and open pull requests. Those actions need a repo you own — that is your fork.

---

## Step 2 — Clone your fork

"Cloning" downloads your fork to your computer so you can work on it locally.

1. On your fork's page (`https://github.com/<your-username>/testing-repo-mqa`), click the green **Code** button.
2. In the dropdown, make sure the **HTTPS** tab is selected, and click the copy icon next to the URL. It will look like:
   ```
   https://github.com/<your-username>/testing-repo-mqa.git
   ```
3. Open a terminal and `cd` to wherever you keep your projects. For example:
   ```bash
   cd ~/Desktop
   ```
4. Run:
   ```bash
   git clone https://github.com/<your-username>/testing-repo-mqa.git
   cd testing-repo-mqa
   ```

You are now inside the project folder. Run `ls` (macOS/Linux) or `dir` (Windows) to confirm you see files like `package.json`, `playwright.config.ts`, and the `tests/` folder.

---

## Step 3 — Connect to the upstream repo (optional but recommended)

When the instructor adds new tests or fixes, you will want to pull those changes into your fork. This is done via an `upstream` remote.

```bash
git remote add upstream https://github.com/valaheugen/testing-repo-mqa.git
git remote -v
```

The output should show **two** remotes:

```
origin    https://github.com/<your-username>/testing-repo-mqa.git (fetch)
origin    https://github.com/<your-username>/testing-repo-mqa.git (push)
upstream  https://github.com/valaheugen/testing-repo-mqa.git (fetch)
upstream  https://github.com/valaheugen/testing-repo-mqa.git (push)
```

You will use `git pull upstream main` later in the course to fetch instructor updates. You do not need this for Lesson 1.

---

## Step 4 — Install Node dependencies

This step installs Angular, Playwright, and every other library listed in `package.json`.

From inside the project folder:
```bash
npm install
```

**What to expect:**

- This takes **2–5 minutes** depending on your network.
- You will see a long stream of download messages.
- **Warnings are fine.** Lines starting with `npm warn deprecated` or about peer dependencies are expected for an Angular 14 project.
- The final line should look like:
  ```
  added 1247 packages, and audited 1248 packages in 3m
  ```

> **Why no `--legacy-peer-deps` flag?** The repository ships with a `.npmrc` file containing `legacy-peer-deps=true`, so npm uses that mode automatically. If for any reason you ignore that file (e.g., running npm from a different folder), you would need to pass the flag manually: `npm install --legacy-peer-deps`.

When `npm install` finishes you will have a new `node_modules/` folder (~700 MB). It is git-ignored — never commit it.

---

## Step 5 — Install Playwright browsers

Playwright needs its own copies of Chromium, Firefox, and WebKit. They are not part of `npm install`.

```bash
npx playwright install
```

**What to expect:**

- This downloads roughly **500–700 MB** of browser binaries.
- Takes 1–3 minutes.
- The browsers are stored in your user cache (e.g., `~/Library/Caches/ms-playwright` on macOS), not inside the project. You only do this **once per machine**, not once per project.

**On Linux** you may also need system libraries the browsers depend on. If a later test run fails with a missing-library error, run:
```bash
npx playwright install --with-deps
```
(That flag requires `sudo` access.)

---

## Step 6 — Start the Angular application

The test calls `page.goto('http://localhost:4200/')`. That URL must answer, otherwise the test errors immediately.

Open a terminal in the project folder — call this **terminal #1** — and run:

```bash
npm start
```

This is a shortcut for `ng serve`, defined in `package.json`.

**What to expect:**

- The first compile takes **30 seconds to 2 minutes**.
- You will see a build log ending with something like:
  ```
  ✔ Compiled successfully.

  ** Angular Live Development Server is listening on localhost:4200,
     open your browser on http://localhost:4200/ **
  ```
- Open **http://localhost:4200** in your browser. You should see the **Ngx-Admin dashboard** with a sidebar containing menu items like `Dashboard`, `Forms`, `Tables`, etc.

> **Leave terminal #1 running.** If you close it or press `Ctrl+C`, the app stops and the tests will fail. You will run the tests in a **second** terminal.

---

## Step 7 — Run `firstTest.spec.ts`

Open a **second** terminal — call this **terminal #2** — and `cd` into the same project folder.

Run only the first test file:

```bash
npx playwright test tests/firstTest.spec.ts
```

**What to expect:**

- Playwright launches Chromium, Firefox, and WebKit (in headless mode — no visible windows by default).
- Each browser runs both tests in the file.
- After ~10–30 seconds you should see:
  ```
  Running 6 tests using N workers

      6 passed (12.5s)

  To open last HTML report run:

      npx playwright show-report
  ```

If you see `6 passed`, **Lesson 1 is complete.** Continue to Step 8 to view the report.

### Variations you can try

| Goal | Command |
|---|---|
| Run only Chromium (faster) | `npx playwright test tests/firstTest.spec.ts --project=chromium` |
| Watch the browser as the test runs | `npx playwright test tests/firstTest.spec.ts --headed` |
| Run a single test by name | `npx playwright test tests/firstTest.spec.ts -g "radio buttons"` |
| Open Playwright's interactive UI mode | `npx playwright test --ui` |
| Run the entire test suite (every file in `tests/`) | `npx playwright test` |

---

## Step 8 — Open the HTML test report

After any test run, generate and open the report:

```bash
npx playwright show-report
```

This opens **http://localhost:9323** in your browser, showing each test, how long it took, screenshots if it failed, and a clickable trace timeline. Press `Ctrl+C` in the terminal to close the report server when finished.

---

## Troubleshooting

These are the issues students hit most often. Find your symptom in the **Symptom** column.

### Installation issues

| Symptom | Cause | Fix |
|---|---|---|
| `npm install` fails with `ERESOLVE` peer-dependency conflicts | `.npmrc` not being read (you ran npm from a different folder, or your global config overrides it) | Re-run from the project root: `cd testing-repo-mqa && npm install --legacy-peer-deps` |
| `npm install` fails on `node-gyp` / Python / `gyp ERR!` | Node.js version too new (21+) or missing build tools | Install Node 20 LTS via [nvm](https://github.com/nvm-sh/nvm). On Windows, also install the "Desktop development with C++" workload from Visual Studio Build Tools. |
| `npm install` runs forever or stalls at "idealTree" | Stale npm cache or corrupted lockfile | `rm -rf node_modules package-lock.json && npm cache clean --force && npm install` |
| `npm error: Unsupported engine` | Wrong Node version | Switch Node versions (see Prerequisites). |

### Browser / Playwright issues

| Symptom | Cause | Fix |
|---|---|---|
| `browserType.launch: Executable doesn't exist at ...` | Forgot Step 5 | `npx playwright install` |
| Test fails on Linux only with library load errors | Missing system deps | `npx playwright install --with-deps` (needs sudo) |
| `npx: command not found` | npm/Node not on PATH | Reinstall Node, or restart the terminal so PATH refreshes |

### App-not-running issues

| Symptom | Cause | Fix |
|---|---|---|
| `page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/` | The Angular app isn't running | Start it in a separate terminal: `npm start`. Wait for "Compiled successfully" before launching tests. |
| `npm start` fails with `Error: Port 4200 is already in use` | Something else (or a previous Angular run) is on port 4200 | Find and stop it: macOS/Linux `lsof -ti :4200 \| xargs kill -9`; Windows `netstat -ano \| findstr :4200` then `taskkill /PID <pid> /F`. Or run on a different port: `npx ng serve --port 4300` (but then the test URL no longer matches; for Lesson 1 just free 4200). |
| Browser opens but page is blank / spinning | Angular still compiling | Wait for "Compiled successfully" in terminal #1 before running the test |

### Test-run issues

| Symptom | Cause | Fix |
|---|---|---|
| Test times out after 10 seconds | App is slow on first load and Playwright timeout is short | First, open `http://localhost:4200` in a normal browser to "warm up" Angular. Then re-run the test. |
| `expect(...).toEqual('test2@test.com')` fails by one character | The `pressSequentially` typing was interrupted | Re-run the test. If it keeps failing, your machine may be slow — increase the timeout in `playwright.config.ts` from `10000` to `30000`. |
| Tests pass on Chromium but fail on WebKit | WebKit deps (Linux) or genuine browser-specific bug | Try `--with-deps` install. If on macOS/Windows, report the failure. |
| Random "Target page, context or browser has been closed" | A previous Playwright process did not exit cleanly | Close all terminals, re-open, retry. |

### Git / GitHub issues

| Symptom | Cause | Fix |
|---|---|---|
| `git clone` fails: `Repository not found` | Typo in URL, or the repo is private | Re-copy the URL from your fork's **Code** button on GitHub. |
| `git push` fails: `Permission denied` | Authenticated as a different GitHub user | Run `gh auth login` (or update your stored credentials) so Git is acting as the account that owns your fork. |

If your symptom is not listed, post the **last 20 lines** of terminal output to the course chat — never just "it doesn't work."

---

## Recommended editor extensions (Cursor / VS Code)

Cursor uses the same VS Code marketplace, so the extension IDs below work in both editors. Open the Extensions panel (`Cmd+Shift+X` on macOS, `Ctrl+Shift+X` on Windows / Linux) and search by name or paste the ID.

### Required — Playwright Test extension

**ID:** `ms-playwright.playwright`
**Marketplace name:** "Playwright Test for VSCode" (works the same in Cursor)

This is the single most important extension for the course. With it you can:

- Run or debug a single test directly from the editor — click the green ▶ next to any `test(...)` line.
- See pass/fail status inline, plus a "Test Results" sidebar.
- Record selectors with the **Pick Locator** button (very useful in later lessons).
- Replay Playwright traces inside the editor.

**Install in Cursor:**
1. Open Cursor.
2. Press `Cmd+Shift+X` (macOS) or `Ctrl+Shift+X` (Windows / Linux) to open the Extensions panel.
3. Search for `Playwright` or paste the ID `ms-playwright.playwright`.
4. Click **Install**.
5. Reload the window if Cursor prompts you.

**Install in VS Code:** identical steps — same panel, same extension ID.

**Verify it works:** open `tests/firstTest.spec.ts`. You should see green ▶ icons next to each `test(...)` block. Click one — the test runs without you touching the terminal.

### Recommended — also worth installing

- **ESLint** — surfaces code issues as you type.
- **Prettier - Code formatter** (`esbenp.prettier-vscode`) — matches the project's formatting (already configured via `.prettierrc`).
- **Angular Language Service** (`angular.ng-template`) — useful when you start poking at the application under test.

---

## What to submit / how to confirm you finished Lesson 1

You finished Lesson 1 when **all** of the following are true:

- [ ] You see your fork at `https://github.com/<your-username>/testing-repo-mqa`.
- [ ] `git remote -v` from the project folder shows your fork as `origin`.
- [ ] `npm install` finished without errors.
- [ ] `npx playwright install` finished without errors.
- [ ] `npm start` (in terminal #1) shows **"Compiled successfully"** and `http://localhost:4200` loads the Ngx-Admin dashboard.
- [ ] `npx playwright test tests/firstTest.spec.ts` (in terminal #2) prints **"6 passed"**.
- [ ] `npx playwright show-report` opens an HTML report listing those 6 passes.

To submit, take a screenshot of the **"6 passed"** line in your terminal and post it in the course chat with your GitHub username and the URL of your fork. You are now ready for Lesson 2.

---

Happy testing!
