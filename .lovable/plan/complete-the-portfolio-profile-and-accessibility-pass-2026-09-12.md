# Complete the portfolio profile and accessibility pass

## What will change
- Add a compact background strip to the opening area with Surrey, BC, MBA, and BNS details.
- Add a plain-language certifications section near the closing area, covering PMP, CSPO, PMI-ACP, SAFe 6 Agilist, AWS Cloud Practitioner, Lean Six Sigma Black Belt, and Jira certification.
- Add accessible email, phone, LinkedIn, and GitHub contact links in the closing area without crowding the navigation.
- Update the opening title and positioning to reflect Senior / Principal Product Manager, technical product leadership, 16+ years, and the requested cross-industry scope.
- Keep existing portfolio and resume actions consistent and readable across screen sizes.

## Accessibility and layout
- Audit the rewritten sections for labels, landmarks, headings, focus visibility, keyboard access, tap-target size, contrast, live updates, and reduced-motion behavior.
- Improve the project search/filter controls and announce changing result counts to assistive technology.
- Refine Selected work cards and project-detail dialogs for narrow screens, including spacing, close-button clearance, readable line lengths, and stable alignment.
- Replace unsafe or misleading interaction behavior found during the pass, including inaccurate contact-form success feedback if submission fails.

## Verification
- Capture and review desktop and mobile screenshots of Selected work and an open project detail.
- Exercise keyboard navigation and dialog close behavior.
- Run targeted tests and an automated accessibility scan when available.

## Technical details
- Reuse the existing semantic color tokens and accessible dialog/button primitives.
- Keep all work client-side except existing contact submission behavior; no new data services are required.
- Respect reduced-motion preferences for animated sections.
