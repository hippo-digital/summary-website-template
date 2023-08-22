---
title: 'How to review/manage/approve/merge Pull Requests'
order: 7
tags: 
    - contributing
    - review Pull Requests
    - manage Pull Requests
    - approve Pull Requests
    - merge Pull Requests
---
# How to review/manage/approve/merge Pull Requests

This page explains about working with Pull Requests (PRs) of the Hippo Way handbook. A PR (Pull Request) is a proposed source code change to fix a bug/defect or to add new feature. The change would be in a forked branch. PR will be reviewed, approved and merged into the main branch. 

You’ll need a **GitHub** account to review/manage/approve/merge Pull Requests.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)


## How to review/manage/approve/merge Pull Requests in GitHub
1. Go to GitHub to see the Pull Requests open https://github.com/hippo-digital/hippo-way/pulls
   ![GitHub Pull Requests Open](/images/GitHub_PRs_Open.png)
2. Click on the PR you want to review
3. Click on 'Files changed'
   ![GitHub PR Files Changed](/images/GitHub_PR_Files_Changed.png)
4. You can view the changes here. Click on 'Review changes'
   ![GitHub PR Review Changes](/images/GitHub_Review_Changes.png)
5. Click on 'Submit Review' with your option
   ![GitHub PR Submit Review](/images/GitHub_Submit_Review.png)
> **Note:** *Comment* option: Change author will receive general feedback email. PR is not yet approved. PR can not be merged. PR is still under review/open. You can submit many times/comments. Use this option when you propose further changes and you need author's response.

> **Note:** *Approve* option: Change author will receive approval notification email. PR is ready for merging into main branch. Reviewer/Author/anyone can merge the PR. Use this option when you are happy fully or happy in principal but has more nice-to-have change proposals leave it with author to take it forward.

> **Note:** *Request changes* option: Change author will receive request to change email. PR is still under review/open. Use this option when your proposed changes must be addressed.
6. Alternatively, you can add comment against individual line of change.  Click '+' icon 
   ![GitHub PR InLine Comment](/images/GitHub_InLine_Comment.png)
> **Note:** *Add single comment* button: Use this if you want to notify the author for individual comment separately.

> **Note:** *Start a review* button: Use this if you want to notify the author all your comments at once at the end of the review.
7. Reviewer's submits/comments are available under the 'Conversation' tab
   ![GitHub PR Conversation](/images/GitHub_Conversation.png)
8. Author and Reviewer discussions are there. Once happy can click 'Resolve Conversation'
   ![GitHub PR Resolve Conversation](/images/GitHub_Resolve_Conversation.png)
9. When all the conversations are resolved. It is ready for approve. 
   ![GitHub PR Approve](/images/GitHub_Approve.png)
10. Once the PR is approved, it is ready for merge into the main branch. Click on 'Merge pull request'
   ![GitHub PR Merge](/images/GitHub_Merge_PR.png)
11. Once the PR is merged, the forked branch can be deleted. Click on 'Delete branch'
   ![GitHub Delete Branch](/images/GitHub_Delete_Branch.png)
12. Once the PR is merged into the main branch it will be automatically deployed. You can check whether that went success under the Actions tab. Observe the green tick for the merge workflow run.
   ![GitHub Merge Deployed](/images/GitHub_Actions_Deployed.png)
13. Once deployed it is ready for testing. 
14. Closed Pull Requests are still available here to refer.
   ![GitHub Closed PRs](/images/GitHub_Closed_PRs.png)
15. While creating a Pull Request it is possible to create a draft one. It is useful when it is not ready for merge.
   ![GitHub Draft PR](/images/GitHub_Draft_PR.png)
16. Draft PR can be made ready for review/merge under the 'Conversation' tab.
   ![GitHub Draft PR](/images/GitHub_Ready_Review.png)

