---
title: 'How to delete a section'
order: 12
tags:
- contributing
- how to delete a section
---
# Deleting a section

This page explains how you can delete a section in the left hand navigation of the Hippo Way handbook.   
Example, here in the screen shot, there are three sections: Public, Ways Of Working & Contributing.
![HandBook Sections](/images/Handbook_Sections.png)

Section is a collection of pages. Here in the screen shot, you can see many pages under a section.
![HandBook Section Pages](/images/Handbook_Section_Pages.png)

Section's source code is a folder in GitHub Repo (Repository). And the pages (in handbook) are the files (under the folder in GitHub Repo).
![HandBook Section Pages GitHub](/images/Handbook_Section_Pages_GitHub.png)

You’ll need a **GitHub** account to delete a section.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)


## Deleting a section using GitHub   

+ The sections in the left hand navigation are folders in GitHub - They are under the **content** folder. Go to : https://github.com/hippo-digital/hippo-way/tree/main/content
   ![GitHub Content](/images/GitHub_Content.png)
+ Click on the folder you want to delete.    
+ Click on the ellipses(...)
   ![GitHub Section More Options](/images/GitHub_Section_MoreOptions.png)   
+ Click 'Delete directory'
   ![GitHub Delete Directory](/images/GitHub_Delete_Directory.png)    
+ Scroll down. Enter summary and detail description about the change and click 'Propose changes'
   ![GitHub Delete Folder Propose changes](/images/GitHub_Delete_Folder_Propose.png)
+ Click 'Create pull request'
   ![GitHub Content Folder Propose changes](/images/GitHub_Folder_Create_PR.png)
+ Copy the url of the Pull Request from the browser address bar
   ![GitHub Pull Request URL](/images/GitHub_Folder_PR_URL.png)
+ Request for review, post the Pull Request url in the slack channel #relevant-slack-channel
+ Or, you can add the reviewer in the Pull Request itself. Click on the wheel icon in the Reviewers section.
    ![GitHub Pull Request Reviewers Section](/images/GitHub_Folder_PR_Reviewers_Section.png)
+ Add reviewer(s)
    ![GitHub Pull Request Reviewers Add](/images/GitHub_PR_Reviewer_Add.png)
+ The PR you have created automatically goes for unit test, spelling checks.
    ![GitHub Pull Request Checks Pass](/images/GitHub_PR_Checks_Pass.png)
+ If the checks fail refer the [Issues Encountered / Troubleshooting](/contributing/Issues-Encountered-Trouble-Shooting.md)
