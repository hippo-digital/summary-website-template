---
title: 'How to add an image'
order: 6
tags: 
    - contributing
    - add an image
---
# How to add an image

This page explains how you can add an image into the Hippo Way handbook page. 

You’ll need a **GitHub** account to add a new page.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)


## How to add an image using GitHub
#### Summary
The images must be copied into the `public/images` folder. You can then link the images into the pages by using the following:

```markdown
    ![Image title](/images/your-image-file-name)
```
#### Detail
Steps below
1. Go to the GitHub public/images folder https://github.com/hippo-digital/hippo-way/tree/main/public/images
2. Click on 'Add file'
   ![GitHub Public Images Add File](/images/GitHub_Images_Add_File.png)
3. Click 'Upload files'
   ![GitHub Public Images Upload Files](/images/GitHub_Images_Upload_Files.png)
4. Drag & drop your image file or Choose from system window.
   ![GitHub Public Images Upload Files Drag & Drop or Choose](/images/GitHub_Images_Upload_Drag.png)
5. Enter summary and detail description about the change. Make note of the branch name it is going to create. Here in this screen shot it is 'Your-username-patch-1'. Click 'Propose changes'
   ![GitHub Public Images Propose changes](/images/GitHub_Images_Propose.png)
6. The above step created the branch 'Your-username-patch-1'. The image is uploaded in the branch. But you have not yet linked the image into any page. To do so, Lets follow the below steps. 
7. Click on '<> Code'
   ![GitHub Code](/images/GitHub_Image_Propose_Change.png)
8. Click on 'branches'
   ![GitHub Branches](/images/GitHub_Branches.png)
9. Click on the newly created branch
   ![GitHub My Branch](/images/GitHub_My_Branch.png)
10. Click on the 'content' folder
   ![GitHub Content Folder](/images/GitHub_Content_Folder.png)
11. Navigate to the file you want to link/show the uploaded image. 
12. Click 'Edit this file' on the file
   ![GitHub Edit This File](/images/GitHub_Edit_This_File.png)
13. Add the image reference into the page as shown below. Within the [] brackets you can add any description. 
   ![GitHub Image Link](/images/GitHub_Image_Link.png)
14. Scroll down to the 'Commit changes' section. Enter the summary & detail description about this change. Click 'Commit changes'
   ![GitHub Commit Changes](/images/GitHub_Commit_Changes.png)
15. Now the branch contains both the image and a page referencing it. It is ready to be sent for review via a pull request. Click on 'Pull Requests'
   ![GitHub Pull Requests](/images/GitHub_PullRequests.png)
16. Click on 'Compare & pull request'
   ![GitHub Compare and Pull Request](/images/GitHub_Compare_PullRequest.png)
17. Enter the change summary & detail description. Click on 'Create pull request'
   ![GitHub Create Pull Request](/images/GitHub_Create_PullRequest.png)
18. Copy the url of the Pull Request from the browser address bar
   ![GitHub Pull Request URL](/images/GitHub_PR_URL.png)
19. Request for review, post the Pull Request url in the slack channel #relevant-slack-channel
20. Or, you can add the reviewer in the Pull Request itself. Click on the wheel icon in the Reviewers section.
   ![GitHub Pull Request Reviewers Section](/images/GitHub_PR_Reviewers_Section.png)
21. Add reviewer(s)
   ![GitHub Pull Request Reviewers Add](/images/GitHub_PR_Reviewer_Add.png)
22. The PR you have created automatically goes for unit test, spelling checks.
    ![GitHub Pull Request Checks Pass](/images/GitHub_PR_Checks_Pass.png)
23. If the checks fail refer the [Issues Encountered / Troubleshooting](/contributing/Issues-Encountered-Trouble-Shooting.md)

