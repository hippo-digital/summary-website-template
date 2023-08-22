---
title: 'Issues Encountered / Troubleshooting'
order: 14
tags:
- contributing
- Issues Encountered
- Troubleshooting
---
# Issues Encountered / Troubleshooting

This page explains the issues encountered to facilitate the trouble shooting and fixing issues. 
   

You’ll need a **GitHub** account to trouble shoot and fix issues.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)


## Issues Encountered

### 1. PR Test/Build Failed

When PR is created, test/build failed as shown below
![GitHub PR Test Build failed](/images/GitHub_PR_Test_Build_Failure.png)

* Click on the 'Details'
  ![GitHub PR Test Build failed Detail](/images/GitHub_PR_Test_Build_Failed_Detail.png)
* As the log shows below, it was expecting a left hand navigation link 'Introduction'. It shows the file snippet & line number.
  ![GitHub PR Test Build failed Detail Log](/images/GitHub_PR_Test_Build_Failed_Detail_Log.png)
* So the fix is to change the test expectation.
  ![GitHub PR Test Build failed Detail Fix](/images/GitHub_PR_Test_Build_Failed_Detail_Fix.png)   

### 2. PR SpellCheck Failed

When PR is created, SpellCheck is failed as shown below
![GitHub PR SpellCheck failed](/images/GitHub_PR_SpellCheck_Failure.png)

* Click on the 'Details'
  ![GitHub PR SpellCheck failed Detail](/images/GitHub_PR_SpellCheck_Failure_Detail.png)
* As the log shows below, from index.md, 'bamboohr' is the word failed in the spell check.
  ![GitHub PR SpellCheck Failure Log](/images/GitHub_PR_SpellCheck_Failure_Log.png)
* So, the fix here is to add this new word to the dictionary by following these steps. 
* Click on 'Back to pull request'
  ![GitHub Back to PR](/images/GitHub_Back_to_PR.png)
* Click on the forked branch
  ![GitHub PR forked branch](/images/GitHub_PR_forked_branch.png)
* Click on the '.github'
  ![GitHub .github](/images/GitHub_Dot_GitHub.png)
* Click on the 'workflows'
  ![GitHub WorkFlows](/images/GitHub_WorkFlows.png)
* Click on the 'en-ignore_spelling.txt'
  ![GitHub Ignore Spelling](/images/GitHub_Ignore_Spelling.png)
* Click on the Edit pencil icon
  ![GitHub Ignore Spelling Edit](/images/GitHub_Ignore_Spelling_Edit.png)
* Insert the new word into the list. Click on 'Commit changes'.
  ![GitHub Ignore Spelling Edit Commit](/images/GitHub_Spelling_Commit_Changes.png)
* Popup appears. Enter the commit message and click 'Commit changes'
  ![GitHub Ignore Spelling Edit Commit Popup](/images/GitHub_Spelling_Commit_Changes_Popup.png)
* Go to the PR and see the Spell Check Action is queued, InProgress & Completed. (It might fail on next spelling error and follow the same steps) 
