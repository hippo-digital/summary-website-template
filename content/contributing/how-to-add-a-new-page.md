---
title: 'How to add a new page'
order: 5
tags: 
    - contributing
    - add a new page
---
# How to add a new page

This page explains how you can add a new page in Hippo Way handbook.
Example: pages are pointed out here in the screen shot
![HandBook Pages](/images/Handbook_Pages.png)

Page's source code is a file in GitHub Repo (Repository).
![HandBook Section Pages GitHub](/images/Handbook_Section_Pages_GitHub.png)

You’ll need a **GitHub** account to add a new page.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)


## Adding a new page using GitHub
1. Pick a sibling page and scroll down to the bottom of the page and click 'Edit this page on GitHub'
   ![Edit this page on GitHub](/images/Edit_this_page_on_GitHub.png)
2. Click on the parent folder
   ![GitHub Parent Folder](/images/GitHub_Parent_Folder.png)
3. Click 'Add file'
   ![GitHub Add File](/images/GitHub_Add_File.png)
4. Click 'Create new file'
   ![GitHub Create New File](/images/GitHub_Create_New_File.png)
5. Enter a name for your new file
   ![GitHub My New File Name](/images/GitHub_MyNewFile_Name.png)
6. Copy & Paste the below lines into the new file body text area
```
---
title: 'MyNewPageTitle'
order: 3
tags:
    - MyNewPage
    - CreateNewPage
---
```
   ![GitHub My New File Meta Data](/images/GitHub_MyNewFile_MetaData.png)
> **Note:** The value of the 'title' is used to display in the left hand side navigation.

> **Note:** The value of the 'order' is used to position/sequence the page along with its siblings in the left hand navigation.

> **Note:** The values of the 'tags' are used to match against search (top right search) keyword 
7. Update the title, order & tags values to your needs.
8. The actual/visible content goes below. You can copy & paste similar content from other files. You can navigate to other files from right clicking a folder and selecting 'Open Link in New Tab'.  
   ![GitHub Folder Right Click](/images/GitHub_Folder_Right_Click.png)
9. In the other browser tab, navigate to any folder and select the file to copy sample content from
   ![GitHub  Files List](/images/GitHub_Files_List.png)
10. Click 'Raw' button on the file 
    ![GitHub  Files View Raw button](/images/GitHub_File_Raw.png)
11. Select the content you want and copy it.
    ![GitHub  Files View Raw Select](/images/GitHub_File_Raw_Select.png)
12. Come back to the original browser tab where you had created a file in edit. Paste this content. Update it to your needs.
    ![GitHub New File Content](/images/GitHub_New_File_Content.png)
> **Note:** The file content is  markdown for more information see here: [Markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
13. Once you are happy and done with your new file content, scroll down to 'Propose new file' section. Enter summary & detail descriptions. Click the button 'Propose new file'
    ![GitHub Propose New File](/images/GitHub_Propose_NewFile.png)
14. Click 'Create pull request'
    ![GitHub Create Pull Request](/images/GitHub_Create_PR.png)
15. Copy the url of the Pull Request from the browser address bar
    ![GitHub Pull Request URL](/images/GitHub_PR_URL.png)
16. Request for review, post the Pull Request url in the slack channel #relevant-slack-channel
17. Or, you can add the reviewer in the Pull Request itself. Click on the wheel icon in the Reviewers section.
    ![GitHub Pull Request Reviewers Section](/images/GitHub_PR_Reviewers_Section.png)
18. Add reviewer(s)
    ![GitHub Pull Request Reviewers Add](/images/GitHub_PR_Reviewer_Add.png)
19. The PR you have created automatically goes for unit test, spelling checks. 
    ![GitHub Pull Request Checks Pass](/images/GitHub_PR_Checks_Pass.png)
20. If the checks fail refer the [Issues Encountered / Troubleshooting](/contributing/Issues-Encountered-Trouble-Shooting.md)
