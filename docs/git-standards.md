# Git standards

How a change gets into this project. If you're contributing, this is how
we work; if you think a rule is wrong, open an issue and say why.

## Branch names
Name a branch type/short-description, using a type such as feat, fix, or docs. For example: docs/link-design-doc.

Why: The branch name tells a reviewer what kind of change it is and what it's about before they open it, and it makes a list of branches readable.

## Commit messages
Follow the seven rules from How to Write a Git Commit Message:

Separate the subject from the body with a blank line.
Keep the subject to about 50 characters.
Capitalize the subject.
Don't end the subject with a period.
Use the imperative mood ("Add", not "Added"). The subject should complete "If applied, this commit will ___."
Wrap the body at about 72 characters.
Use the body to explain what changed and why, not how.

Why: This is a standard set by many github repositories to help reviewers understand what change is being made. By following this convention reviewers can understand the why behind changes instead of just seeing the change itself.

## Pull requests
- Make pull requests one logical change, small enough to be reviewed in a single sitting. If the request starts getting larger than that split it into multiple.
- The description should be split into three parts: problem, solution, and reasoning.
- Link the issue number it's closing with closes #n.

Why: To be able to legitmately review a pull request instead of skimming it's important that the request is small enough to be looked at reasonably. By linking the issue number we can connect them and automatically close the issue when it's accepted.
## Review
- Every PR requires a review before the merge by a maintainer.
- Comments written are about the code, and the author can answer the comments by providing a solution, explaining their alternative, or opening another issue about it for someone to address.

Why: It's important that every change is reviewed before being pushed onto the main branch, and every potential problem is addressed respectfully. 

## Merging
- Merge when the PR is approved.
- Edit the Merge message before cofirming. The PR title as the subject and a short body explaining what changed and why.
- Delete the branch after merging.

Why: One commit per change, keeping the work simple and readable, while being able to turn to the PR to review the merge history easily through good titles.
## Definition of done
A change is done when:

 [ ] The PR is approved and merged to main.
 [ ] The linked issue is closed.
 [ ] The app still runs on main.
 [ ] Docs affected by the change are updated.
 [ ] Any new work it uncovered is filed as an issue.

Why: By being able to run through this checklist you can know when you're done rather than it just being a feeling.
