---
title: 'How to add a section'
order: 10
tags:
- contributing
- how to add a section
---
# Adding a new section

This page explains how you can add a section in the left hand navigation of the Hippo Way handbook.   
Example, here in the screen shot, there are three sections: Public, Ways Of Working & Contributing.
![HandBook Sections](/images/Handbook_Sections.png)

Section is a collection of pages. Here in the screen shot, you can see many pages under a section.
![HandBook Section Pages](/images/Handbook_Section_Pages.png)

Section's source code is a folder in GitHub Repo (Repository). And the pages (in handbook) are the files (under the folder in GitHub Repo).
![HandBook Section Pages GitHub](/images/Handbook_Section_Pages_GitHub.png)

You’ll need a **GitHub** account to add a new section.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)


## Adding a new section using GitHub
1. The sections in the left hand navigation are folders in GitHub - They are under the **content** folder. Go to : https://github.com/hippo-digital/hippo-way/tree/main/content
   ![GitHub Content](/images/GitHub_Content.png)
2. Click 'Add file'
   ![GitHub Add File](/images/GitHub_Add_File.png)
3. Click 'Upload files'
   ![GitHub Content Upload Files](/images/GitHub_Content_UploadFiles.png)
4. Drag and drop your folder. (Empty folder can not be uploaded)
   ![GitHub Content Choose Files](/images/GitHub_Content_ChooseFiles.png)
> Note: Your folder name will be the section name in the left hand navigation in the handbook.
5. Your folder (and files) are uploaded
   ![GitHub Content Folder Uploaded](/images/GitHub_Content_Folder_Uploaded.png)
6. Enter summary and detail description about the change and click 'Propose changes'
   ![GitHub Content Folder Propose changes](/images/GitHub_Folder_Propose.png)
7. Click 'Create pull request'
   ![GitHub Content Folder Propose changes](/images/GitHub_Folder_Create_PR.png)
8. Copy the url of the Pull Request from the browser address bar
   ![GitHub Pull Request URL](/images/GitHub_Folder_PR_URL.png)
9. Request for review, post the Pull Request url in the slack channel #relevant-slack-channel
10. Or, you can add the reviewer in the Pull Request itself. Click on the wheel icon in the Reviewers section.
   ![GitHub Pull Request Reviewers Section](/images/GitHub_Folder_PR_Reviewers_Section.png)
11. Add reviewer(s)
   ![GitHub Pull Request Reviewers Add](/images/GitHub_PR_Reviewer_Add.png)
12. The PR you have created automatically goes for unit test, spelling checks.
    ![GitHub Pull Request Checks Pass](/images/GitHub_PR_Checks_Pass.png)
13. If the checks fail refer the [Issues Encountered / Troubleshooting](/contributing/Issues-Encountered-Trouble-Shooting.md)

 