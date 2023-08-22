---
title: 'Blueprints'
order: 2
tags:
- standards
- cloud
- engineering
- cyber security
- data
- blueprints
- terraform
- cloud formation
---

# Blueprints

Blueprints are what we call architectural/code patterns that have general applicability but aren't encapsulated by a single cloud service. A good example of this is hosting a static website on AWS. Yes, you can just make your S3 bucket public and give it a website endpoint. However this actually isn't the best way to do this, as it makes things like controlling cache behaviour and authentication awkward. It is far better to keep the S3 bucket private and host it with cloud front. This is an example of a blueprint and is and ideal thing to host in our blueprint repository. 

For full instructions on how to use the blueprints repository see [the blueprints readme](https://github.com/hippo-digital/blueprints/blob/main/README.md)


## Where does this live? 

The answer as with most things engineering and data is on GitHub

[https://github.com/hippo-digital/blueprints](https://github.com/hippo-digital/blueprints)
