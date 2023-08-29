---
title: 'How to create a summary website'
order: 1
tags:
- contributing
- how to create a summary website
---
# Creating a new summary website

This page explains how you can create a new summary website from this template project.    

- You’ll need a **GitHub** account to create a new summary website.

[If you do not have one already, you can create a GitHub account for free](/contributing/setup-access-to-contribute.md)

- Also, You’ll need an **aws** account to host the summary website.

If you do not have one already, you can request hippo internal aws account access in the slack channel **support-tech**.

## Creating a new summary website using GitHub & AWS
1. Go to : https://github.com/hippo-digital/summary-website-template
2. Click on 'Use this template'. Select 'Create a new repository'
   ![GitHub Use This Template](/images/GitHub_Use_This_Template.png)
3. Select the owner 'hippo-digital'
   ![GitHub Select Owner](/images/GitHub_Select_Owner.png)
4. Enter a name & description. Click 'Create repository'
   ![GitHub Create Repository](/images/GitHub_Create_Repo.png)
5. Go to : https://hippodigital.awsapps.com/start
6. Select AWS Account. Select internal. Click on 'Management console'
   ![AWS Management Console](/images/AWS_Management_Console.png)
7. Select region Ireland (If not already)
   ![AWS Region Ireland](/images/AWS_Region.png)
8. Enter 'amplify' in the search. Click on the 'AWS Amplify' in the search result.
   ![AWS Amplify](/images/AWS_Amplify.png)
9. Click 'New app'. Select 'Host web app'
   ![AWS Region Ireland](/images/AWS_Amplify_New_App.png)
10. Select 'GitHub'. Click 'Continue'
   ![AWS GitHub](/images/AWS_GITHUB.png)
11. Select the newly created repository (from the step 4). Click 'Next'
    ![AWS Amplify Add Repo](/images/AWS_Amplify_Add_Repo.png)
12. Click 'Edit'
    ![AWS Amplify Build Edit](/images/AWS_Amplify_Build_Edit.png)
13. Paste the below lines as shown below.
```
    - env | grep -e NEXTAUTH_ >> .env.production
    - env | grep -e SECRET_ >> .env.production
```
Click 'Save'
    ![AWS Amplify Build Save](/images/AWS_Amplify_Build_Save.png)
14. Click 'Advanced Settings'
    ![AWS Amplify Advanced Settings](/images/AWS_Amplify_Advanced_Settings.png)
15. Add the below environment variables as shown below
```
    NEXTAUTH_SECRET hkrcD3VgsQFDSOnpLNzPzctAAJ4TjWPMgYU3AjqsQP4=
    SECRET_PASSWORD donotshare
```
Click 'Next'
    ![AWS Amplify Environment Variables](/images/AWS_Amplify_Env.png)
16. Click 'Save and deploy'
    ![AWS Amplify Save and Deploy](/images/AWS_Amplify_Save_Deploy.png)
17. Click on 'Domain management'
    ![AWS Amplify Domain Management](/images/AWS_Amplify_Domain_Management.png)
18. Click on 'Add domain'
    ![AWS Amplify Add Domain](/images/AWS_Amplify_Add_Domain.png)
19. Select internal domain. Click on 'Configure domain'
    ![AWS Amplify Configure Domain](/images/AWS_Amplify_Configure_Domain.png)
20. Click 'Exclude root'
    ![AWS Amplify Exclude root](/images/AWS_Amplify_Exclude_Root.png)
21. Enter the domain prefix of your choice. Here it is 'my-new-summary-website'. Click 'Save'
    ![AWS Amplify Domain Save](/images/AWS_Amplify_Domain_Save.png)
22. Wait for few minutes for the domain to be created.
    ![AWS Amplify Domain WIP](/images/AWS_Amplify_Domain_WIP.png)
23. Once done, it will look like this.
    ![AWS Amplify Domain Done](/images/AWS_Amplify_Domain_Done.png)
24. Click on the app 'my-new-summary-website'
    ![AWS Amplify App](/images/AWS_Amplify_App.png)
25. Click on the app main url to access the newly deployed application
    ![AWS Amplify App URL](/images/AWS_Amplify_App_URL.png)
