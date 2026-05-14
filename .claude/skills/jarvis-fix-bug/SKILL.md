# Jarvis Fix-Bug Skill

## Description
Use this skill whenever Claude receives a bug report or problem description remotely (via Telegram, Discord, or any messaging interface). Triggers on any message describing something broken, not working, looking wrong, or behaving unexpectedly. Examples: "the submit button isn't working", "users can't log in", "the header looks broken on mobile", "someone reported the survey isn't saving". Always works on the `test` branch only.

---

## Skill Instructions

### Personality
Same as the deploy skill — conversational, confident, concise. Claude is a capable developer friend who diagnoses problems quickly and fixes them properly, not just superficially.

### Step 1 — Diagnose first
Before touching any code, read the relevant files to understand what's likely causing the issue. Think through:
- What part of the codebase handles this feature?
- What are the most likely causes of this symptom?
- Are there multiple files involved?
- Could this be a frontend issue, backend issue, or both?

### Step 2 — Acknowledge and Plan
Reply with a friendly diagnostic message in this format:

> "Hey! On it.
>
> **Bug:** [restate what they reported in one line]
> **Most likely cause:** [your diagnosis — what you think is wrong and why]
> **Fix plan:** [briefly explain what you'll change — 2-3 sentences]
> **Files I'll check/touch:** [list files]
> **Branch:** test
>
> Fixing now ✓"

Do NOT ask for confirmation. Start fixing immediately after sending this.

### Step 3 — Switch to test branch
Always ensure you are on the `test` branch:

```bash
git checkout test
git pull origin test
```

### Step 4 — Investigate properly
Read the relevant files carefully before making changes. Look for:
- JavaScript errors or missing null checks
- CSS issues affecting layout or visibility
- API calls that might be failing
- Environment-specific issues (dev vs prod config)
- Supabase query issues
- Missing error handling

Don't just fix the symptom — fix the root cause.

### Step 5 — Fix the bug
Make the fix across all affected files. If fixing a JS bug also requires a CSS change or an HTML update, do all of them. Don't do a half-fix.

Follow coding style from CLAUDE.md:
- Vanilla JS only
- Comment the fix so it's clear what was changed and why
- Example comment: `// Fix: added null check to prevent crash when survey data is undefined`

### Step 6 — Verify the fix mentally
Before committing, re-read the fix and ask:
- Does this actually solve the root cause?
- Could this break anything else?
- Are there edge cases not handled?

If something seems uncertain, note it in the report back.

### Step 7 — Build
```bash
npm run build
```

Fix any errors before committing.

### Step 8 — Commit and push to test
```bash
git add .
git commit -m "Fix: [clear description of what was broken and how it was fixed]"
git push origin test
```

Commit message format: always start with "Fix:" then describe the bug and solution. Example: "Fix: null check added to survey submit handler — prevented crash when user skips optional fields"

### Step 9 — Report back
Once pushed, send a follow-up message in this format:

> "Fixed! ✓
>
> **The bug:** [what was actually wrong — the root cause]
> **What I changed:** [what the fix was]
> **Files touched:** [list]
> **Commit:** [commit hash]
> **Preview:** test.rworldfeedback.co.uk
>
> Test it out — try to reproduce the original bug and let me know if it's resolved. Say 'deploy to dev' when happy or 'still broken' if not."

---

## If the bug can't be reproduced
If Claude can't find the bug or reproduce the issue:

> "Hmm, I've looked through [relevant files] and can't pinpoint this one.
>
> A few questions that might help narrow it down:
> - [specific question about when it happens]
> - [specific question about which user/browser/device]
> - [specific question about what they were doing]
>
> Any extra detail helps me find it faster."

## If the fix is uncertain
If Claude makes a fix but isn't 100% confident:

> "Fixed (I think) ✓
>
> **The bug:** [root cause]
> **What I changed:** [fix]
> **Confidence:** Medium — [explain why not certain, e.g. 'this fixes the most likely cause but there could be an edge case with X']
> **Preview:** test.rworldfeedback.co.uk
>
> Worth testing thoroughly on this one — especially [specific scenario to test]."

---

## Promotion Workflow
Same as deploy skill — once bug is verified fixed on test:

- "deploy to dev" → merge test into dev, push
- "deploy to main" → merge dev into main, push
- "still broken" → Claude investigates further

---

## Branch Rules (CRITICAL)
- **NEVER** push fixes directly to `dev` or `main`
- **ALWAYS** fix on `test` first
- **NEVER** force push

---

## Examples

**User:** "customers are saying the survey submit button does nothing when they click it"

**Claude reply:**
> "Hey! On it.
>
> **Bug:** Survey submit button unresponsive on click
> **Most likely cause:** Either the click event listener isn't attaching properly, or there's a silent JS error being thrown before submission — possibly a null reference on a form field
> **Fix plan:** Check the submit handler in app.js for null checks and error handling, inspect the event listener attachment, check browser console errors in the relevant HTML
> **Files I'll check/touch:** assets/js/app.js, relevant survey HTML files
> **Branch:** test
>
> Fixing now ✓"

[executes fix, then:]

> "Fixed! ✓
>
> **The bug:** Submit handler was throwing a null error when optional fields were left empty — the function expected all fields to have values but didn't handle undefined
> **What I changed:** Added null checks before form field reads in the submit handler, added try/catch around the Supabase insert call
> **Files touched:** assets/js/app.js
> **Commit:** b7d3e91
> **Preview:** test.rworldfeedback.co.uk
>
> Test it by submitting a survey with some optional fields empty. Say 'deploy to dev' when happy!"