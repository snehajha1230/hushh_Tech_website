---
name: github-ops-report
description: Use when generating Hushh Labs GitHub operations reports, contributor activity PDFs, missed-weekday red-alert sheets, or fair contribution/impact comparisons for named GitHub users across Hushh org repositories.
---

# Hushh GitHub Operations Report Skill

## Purpose

Generate a simple operations-ready GitHub contribution report for named Hushh contributors. Use this for executive or operations-team requests that ask who is contributing, who is inactive, what changed, which repos were impacted, and which workdays are missing.

The default report is intentionally plain: white background, black text, minimal metrics, and red alert text only for inactivity or low implementation signal.

## Source Of Truth

Use GitHub data, not local git logs alone.

Required signals:

1. GitHub organization contribution calendar for activity days, issues, PRs, commits, and reviews.
2. GitHub commit search and commit detail APIs for authored commits, merge-vs-non-merge classification, additions, deletions, and changed files.
3. GitHub PR search and pull detail APIs for authored PR counts, merged/open state, additions, deletions, and high-signal PR links.
4. GitHub issue search for planning/spec activity.

Call out that GitHub-only inactivity is not proof that no non-GitHub work happened.

## Default Hushh Report

Run the bundled generator from the repository root:

```bash
python3 .codex/skills/github-ops-report/scripts/github_ops_report.py \
  --org hushh-labs \
  --users "Kushal Trivedi:kushaltrivedi5" \
          "Ankit Kumar Singh:ankitkumarsingh1702" \
          "Akshat Kumar:RGlodAkshat" \
  --out-dir ops_reports
```

If the default `python3` environment does not include `reportlab`, load the Codex workspace dependencies and rerun the command with the bundled Python runtime. For PDF output, do not fall back to hand-written text summaries.

For a stable completed-day report when running after midnight, pass the last fully completed workday:

```bash
python3 .codex/skills/github-ops-report/scripts/github_ops_report.py \
  --report-end YYYY-MM-DD \
  --out-dir ops_reports
```

The script writes:

1. `hushh_labs_github_ops_report_<date>_data.json`
2. `hushh_labs_github_operations_report_<date>.pdf`

## Windows

Every report must include these segments:

1. Last 10 days
2. Last 20 days
3. Last one month, implemented as the last 30 calendar days inclusive
4. Complete daily activity sheet for the full one-month window

Use Monday-Friday as expected workdays. Mark Saturday and Sunday as neutral off-calendar days, even when someone voluntarily contributes.

## Red Alerts

Use red alerts when a person is missing weekday GitHub activity or when implementation signal is materially low.

Minimum red-alert conditions:

1. No GitHub contribution recorded on an expected Monday-Friday workday.
2. Zero authored commits and zero PRs in a 10-day window.
3. Zero non-merge authored commit lines plus heavy weekday absence in a 20-day or one-month window.
4. Zero PR reviews when the role is expected to include review or maintainer activity.

Be pointed but fair. Separate planning/spec signal from implementation signal.

## Fair Evaluation Rules

Do not rank people by line count alone. Report line churn, but interpret it with PRs, reviews, issues, active weekdays, merged work, and repo impact.

Use these distinctions:

1. `GitHub contributions`: official org-scoped contribution calendar count.
2. `Authored commits`: commits where GitHub search attributes author to the user.
3. `Non-merge churn`: additions plus deletions from authored non-merge commits.
4. `PR diff churn`: additions plus deletions on authored PRs created or merged in the window.
5. `Issues`: planning/spec signal.
6. `Reviews`: maintainer or review signal.

Explain discrepancies when relevant: PR diff churn can differ from authored commit churn because of coauthors, squash merges, generated changes, or PRs merged by another account.

## Validation

Before sharing the PDF:

1. Confirm `gh auth status` is authenticated with org/repo access.
2. Run the generator and check it exits successfully.
3. Confirm the PDF exists and has pages.
4. Extract PDF text or preview pages to verify the four segments, red alerts, and methodology are present.
5. Keep raw JSON evidence with the PDF unless the user asks for PDF only.

Useful checks:

```bash
python3 -m py_compile .codex/skills/github-ops-report/scripts/github_ops_report.py
python3 .codex/skills/github-ops-report/scripts/github_ops_report.py --help
```
