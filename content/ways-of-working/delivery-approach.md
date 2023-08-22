---
title: 'Delivery approach'
order: 4
tags:
- engineering
- ways of working
- delivery approach
- agile
---

# Agile project delivery principles 
The document aims to define common principles for successful project delivery, including terminology, workflow, and role expectations. While agile emphasizes "individuals and interactions over processes and tools", any project delivery requires a shared understanding of its system. The document defines principles applicable to any methodology and is not advocating for any specific one. 

[You can find the original document here](https://docs.google.com/document/d/17pfNVxG8M6KyxIoem4uwpYSrJzdn4lHkc7fDTN09YC0/edit#heading=h.v26erbukvf3u)

## 1. Defining a common language
  **User needs** refer to the requirements that a user expects from a service, and they are crucial in the delivery cycle as they provide evidence that the development team is building what the users need. 
  
  **Acceptance Criteria** is used to define the circumstances in which an item can be deemed completed. 
  
  **Definition of done / Definition of ready** are a checklist that aims to provide some assurance that a story or feature is actually complete or to be passed to the implementation team.
    
  **User Story** is a description of a feature of the service that needs to be implemented. Stories are not a time tracking tool, but a communication tool to focus on a particular area of the service.
  
  **Task** is a small unit of work that is used to break stories into smaller chunks of work that need to be completed for the story to be completed. 
  
  **Bug** is raised in a project when a feature that has been released to a development, test, or production environment does not work.
  
  **Change Request** is a request that is raised directly by the business. It can be considered as equivalent to a new user need and as such go through the same analysis process as user needs do. 
  
  **Feature/Epic** These two terms are used interchangeably. Features are groups of user stories that share a context or are too large to complete in a single sprint.
  
  **Themes /Initiatives** are used to group Features/Epics at a higher level for tracking dependencies and making strategic decisions.
  
  **Backlog** contains all of the work that the project team will endeavour to complete. 
  
  **Backlog item** is an element that can be added to the backlog.
  
  **Backlog Refinement** Periodic backlog refinement meetings can ensure the strategic directions are aligned and the entire team is brought together.
  
  **Sprint / Iteration** is a fixed period of time in which a team has a finite capacity to complete tasks.
  
  **Sprint / Iteration Backlog** is a list of tasks that the project team has committed to completing within the current sprint, and is defined during the sprint planning session.
  
## 2. Considering delivery as a system
Any project delivery is a system, with semantics, constraints, recursion, and feedback loops, and that understanding this system is crucial to success.
Applying the concept of a system and its components ( such as state, capacity, dependencies, feedback, and rate of change)to delivery projects, it is important to understand the entire system, rather than just one or two facets, in order to effectively manage capacity and rate of change. It is suggested that methodologies like Scrum, Scrumban or XP are just tools and that understanding the system as a whole is more important than blindly following a particular methodology.

### 2.1 The non-linearity of delivery ###
It should be highlighted here that the delivery is non linear, as the magnitude of change for a constant input is different depending on the current state of the system. This can have implications on how changes or improvements in the process are perceived and implemented. For example, reducing the time it takes for one person to complete a task may not necessarily reduce the overall time it takes to complete a project if downstream consumers are already at their capacity. It is important to take into account the dependencies and constraints within the system when making changes to the delivery process.

### 2.2 Considering constraints
In a typical delivery project, common constraints are capacity, client strategy/policy, and people with missing skills. These constraints contribute to the non-linearity of a system and can be thought of as a source of friction whose magnitude changes over the course of delivery. Managing constraints involves introducing buffers, which are breakpoints that allow downstream processes to continue for a period of time while the broken process is fixed. It is important to note that buffers should operate in real-time, not on a planned basis, and that if a buffer is exhausted, the whole process may come to a stop.

### 2.3 The flow of delivery
How to manage the flow of delivery in agile projects by using buffers and visualizing constraints? Work contexts are defined as atomic units of work, not roles. Buffers should be kept at an appropriate level to avoid blocking upstream or downstream work. Introducing staggered sprints can improve throughput, but it can also create silos and delays. The solution is to promote collaborative working and grow T-shaped people through pairing on a project. Releasing features as a preview or MVP and revisiting them later can also be a solution. Effective communication and collaboration are key to the success of agile projects.

Time thieves are aspects of the delivery that can significantly reduce throughputs. Common time thieves are: too much work in progress, unplanned work, neglected work, mismanaged or unknown dependencies, and conflicting priorities. In to reduce these time thieves, strategies such as allocating capacity for investment protection work, mitigating dependencies, and applying a clear and well-defined prioritization methodology. 

Work estimations are often required by stakeholders or sales team for cost and value considerations. To make estimating less of a minefield, it's important to _estimate features instead of stories_ and to _define estimation units clearly_. It's also important to _consider how estimations can change throughout the project_, especially early on when there is less information to work with.

The software development process involves several environments, including development, test/QA, staging/pre-production, and production. The conventional wisdom is to minimise releases to production because it is the most sensitive environment. However, this can lead to a larger size of change and risk. _Continuous delivery and deployment_ can help mitigate the risks by exposing problems as soon as possible and implementing solutions. 

### 2.4 Structuring your backlog(s)
In order to improve communication and collaboration within a team, it is suggested to have a single backlog with multiple views, including a product backlog, prioritized backlog, and sprint backlog. The work becomes more refined as you move down the backlogs. Stories are not a time tracking tool, but a communication tool to focus on a particular area of the service. Features/Epics are used to communicate with the business, while stories are used to communicate within the team. Tasks are used only when work needs to be synchronized within a story or when work does not have tangible business value. 
Bugs and change requests are sources of work that need prioritizing. Change requests are prioritized as per backlog, while bugs require a triage process considering severity, priority, reproducibility, and timeframe. Urgent bugs need immediate attention, like production outages.

### 2.5 Dealing with new / legacy systems
The first release of a project changes it from a green-field to a brown-field project. As a result, any further research, analysis, and design should be based on the context of the existing system, and communicated as deltas on top of the current system. Documentation is also important to be kept up-to-date to reduce the communication demand and help disseminate knowledge. Consolidated documentation artifacts that should be kept up-to-date include product roadmap, architectural documentation, security, data models, physical/deployment, logical architecture, UR plans, and evidence from previous research, operational playbooks, delivery plan, risks, issues, and OKRs. Finally, when taking on an existing service, it is recommended to break it down into incremental releases instead of reinventing the whole service to avoid overlooking small but critical details and creating a large delta of change.

## 3.Understanding responsibilities and focus as a delivery matures
### ProductManager/Delivery Manager
The responsibilities of product and delivery managers remain constant throughout a project, but decision-making frameworks may change. In early stages, focus is on preventing scope creep and maximizing value. After release, additional considerations like impact on users, future work delivery, and timing of changes must be taken into account. These constraints should not reduce release frequency, but should be properly measured and managed.

### User Research
At the start of a green-field project, user research focuses on discovering the needs of the user through broad, high-level formative research. As the project progresses and releases are made, user research shifts towards a more focused, summative approach to validate the current release and discover pain points. When pain points are discovered, timed qualitative research should be carried out to fully understand the context and problem before any fix is applied.

### User Experience and Content Design
UX/CD begins with discovering what works and making wholesale changes. As the project progresses, it shifts to more refined and incremental changes. After a release, the role shifts to validation and verification of the design.

### Business Analyst
The role of a business analyst remains the same throughout the project, providing requirements and feedback on scope of change. However, as delivery matures, they may take up a verification and validation role to ensure business rules are valid and edge cases are properly captured.

### Architecture / Development / QA / Data and Performance
In the early stages of a delivery, the development team can use the time to create short proof-concepts that aid delivery direction decisions and highlight areas of design/research focus. Additionally, they can establish needed infrastructure and create CI/CD, monitoring, validation, logging, auditing, and testing strategies and frameworks."
