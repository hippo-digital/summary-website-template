---
title: 'Approach to Devops'
order: 3
tags:
  - engineering 
  - ways of working
  - devops
---

# Approach to Devops

## What is DevOps

DevOps isn't a thing you do, it is a culture/philosophy a way of thinking and organising teams to increase the ability to rapidly deliver working products that are robust, secure, scale and all of the other good attributes that we associate with a successful product. 

### Where have we come from?

In a traditional model of software development there was typically a Product Team, Release Team and an Operations Team, broadly their responsibilities were as follows

![A traditional product, release, operations team model. Where code and release packages are thrown over the wall to teams.](/images/traditional-ops.jpg)

* **Product Team** - Responsible for defining and implementing the features that should be included in the product, typically guided by feedback from the sales team. The Product team consisted of Software/Data engineers, Product Owners, Delivery Managers and QA. Typically team would make the changes to the source code, fill in a release request form naming the branch the release team need to take a cut of the code from 

* **Release Team** - Responds to requests from the product team to create a release. Validates that the appropriate gates have been passed for the release type (Dev, Test or Live) and then prepares the release from the branch named in the release documents then passes the release on to the operations team

* **Operations Team** - Responsible for the overall running of the service, if it breaks they have to fix it, or raise a 2nd or 3rd line ticket to get it fixed. A normal mitigation in an issue for an operations team is to roll back to a previous version of the release. However this can cause all sorts of data integrity and dependency issues. In fact often made matters worse. I have been involved in one such issue where the Ops team rolled back and took the entire trading system off-line for a week as it corrupted some cache files on the server, due to different encodings. This was not a good week.

> Note: There is much hype around the word "DevOps", to the point where you see it used incorrectly more times than correctly. For example "DevOps Engineer" should never be a role neither should a "DevOps Team", this is creating the silo's DevOps tries to avoid. 

While the above teams structures have worked for many years there are inherent problems. These problems are due to the fact that information and responsibilities are siloed. A side effect of these silos can be seen when a critical issue arises in the production system. Under this typically the Operations team will have all the runtime/error information, the product team will have to request this, but they will not be typically on call, so this will happen then they are next in the office. The product team analyses the data taken (once they receive it) and make a guess at the fix, pass it to the release team to release into the test environment and try and replicate the issue. If no replication it is deemed fixed and will be released. 

The above is of course a high-level view, but the problems it creates should be obvious: 

* Only access to the logs that the operation teams choose to give you
* Different teams can end up managing different environments (Product == Dev, Release == Test, Operations == Production)
* No guarantee of consistency of environments
* No guarantee of consistency of release process
* Large communication latency between teams

The list goes on.... This is one of the reasons why DevOps was born. 

When first implementing DevOps teams often create teams that look as follows

![A first step in implementing DevOps, with the release team removed, but the product and operational teams still separate](/images/immature-devops.jpg)

While this removes the release team and places the release responsibilities in the one of the two above teams there is still a wall between these teams. This creates the equivalent communication latency and disconnects above; while not as bad as the previous world there is still pain here. Often in this implementation the Ops team in the above diagram are renamed to the "DevOps Team", while they might have adopted DevOps practices, CI/CD, Observability, Automating testing etc.., the product team still are not close enough to the deployed product. While this structure can work, it is not ideal and for this reason it is classed as "Immature DevOps". Most companies have used this method as a stepping stone to more mature DevOps.

## Actual DevOps

In a mature DevOps team, there is only one team the product team. This team encapsulates all of the capabilities required to build, release, support and improve the product. 

![A mature devops implementation, where the product, release and operational teams are all one and the single team is responsible for building, monitoring and iterating the product](/images/devops.jpg)

In the DevOps model, the team that builds the product runs the product. Why is this important? The throw it over the wall mentality that the other operations models bring reduces quality, as developers don't have to deal with the dreaded 3am call out because the production environment has crashed. In the DevOps model, the developers would receive that call. This tends to drive and improve quality as developers avoid the 3am call out by improving the quality of the delivery, there are several ways this happens, all based around a core set of principals: 

![Devops principals which are Security, Testing, Operations and Development. These are underpinned by Cloud knowledge, Culture, Automation Techniques and User Needs](/images/devops-principals.jpg)

By following these principals we can realise the following practices

* **Version Control:** Use a version control system to manage code changes and documentation. Ensure that this is linked to the backlog (through Stories and Epics), so that work is visible and tracked.
* **Continuous Integration and Continuous Delivery (CI/CD):** Automate the build, test, and deployment process to ensure faster and more reliable software releases.
* **Infrastructure as Code (IaC):** Define and manage infrastructure using code, with tools such as Terraform, Cloudformation and ARM, allowing for more efficient and consistent deployments and management.
* **Automated Testing:** Use automated testing tools to ensure code quality and prevent regressions. This should include, end-to-end, security (dynamic and static), accessibility and performance, see [Testing](/ways-of-working/testing.md) for more testing details. 
* **Monitoring and Logging:** Monitor application performance and log data to identify issues and provide insights into system behavior. We should also include business, technical and deployment events. This allows us to reason about the service in new ways, understanding the service based on it's outputs and events (Observability).  
* **Collaboration and Communication:** Foster collaboration and communication between development and operations teams, as well as with other stakeholders. This communication should be treated as a project asset and as such the majority of communication and outcomes should take place in the backlog. 
* **Security and Compliance:** Incorporate security and compliance into every aspect of the software development process. Utilising frameworks such as STRIDE and MITRE ATT&CK. 
* **Agile and Lean Practices:** Adopt agile and lean practices to improve efficiency and reduce waste and incrementally step towards the desired outcome/goal.
* **Continuous Learning:** Encourage a culture of continuous learning and improvement to stay up-to-date with new technologies and best practices.

In practice this means automating and making robust as many processes as possible. Within [Measuring project quality](/ways-of-working/measuring-project-quality) there is a set of checks and measures you can use in your project to see how mature your engineering practices are. From a high level you should be able to recognise the following software development process in your project.

![A devops software development lifecycle, with 3 Amigos, A red, green refactor build stage followed by the integration steps of Code Merge, Build and Deploy.](/images/devops-sdlc.jpg)

If you don't recognise this process (or aren't sure how to achieve this, ask your [line manager](guides/line-management) or reach out in the [#engineering-and-data-community slack channel](https://hippo-digital.slack.com/archives/C01JZP5M0DD))