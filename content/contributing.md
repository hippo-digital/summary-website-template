---
title: 'Contributing'
order: 3
tags: 
    - contributing
    - introduction
---

# Contributing

## Adding new pages in GitHub

### Creating the page

1. [Go to the handbook.](https://github.com/hippo-digital/engineering-data-handbook)
2. Find the folder you wish to add content to. 
3. Click `Create new file`
4. Add you information to the file using "Edit new file"
> **Note:** The pages are edited using markdown for more information see here: [Markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
5. Preview your changes at any time by clicking "Preview".
6. When you're happy with your page, write a short description under "Commit new file". For example, "Added more information about terraform".
7. Select "Create a new branch for this commit" and give it a name relevant to your change. For example, "extra-terraform-info".
8. Submit the change by clicking "Propose new file".
9. You will be then be able to create a Pull Request to get review of your new page. Click "Create pull request". if you could add a description in the pull request about this change, that helps the reviewers of the content. 

If you are using images in your document then the images must be copied into the `public/images` folder. You can then reference the images in markdown by using the following:

```markdown
    ![Image title](/images/{your-image-file-name})
```

## Getting a review

To get a review of the PR carried out; put a shout out in the `#engineering-and-data-community`  channel, or add a reviewer to the PR in GitHub. 
