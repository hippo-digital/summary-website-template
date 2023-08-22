---
title: 'Architecture'
order: 2
tags:
  - engineering 
  - ways of working
  - architecture
  - data capture
  - documentation
---

# Architecture

As a consultancy we will rarely own the architectures that we work within. That doesn't mean we should ignore architecture thou. Our clients will often have their own architectural teams and depending on their maturity various processes for architectural governance. When first engaging with a client we should: 

* Identify their architectural community
* Learn about their documentation/governance and sign-off process
  * Technical Review/Design Authority - who, what and when do they meet?
  * Security sign-off and Penetration Testing strategy
* Identify architectural principles
* Identify any service/departmental wide non-functional requirements.  
* Identify constraints such as Technical Stacks, Deployment Process and internal knowledge/skillsets
* Identify services we can potentially re-use in our problem space
* Identify any operational readiness process/team

It is the architect/tech lead responsibility to discover the above information, maintain it and ensure that the Product Owner/Delivery Manager are informed of the process and the potential time each step will take, so that they can plan time into the delivery roadmap appropriately.

## Documentation {#documentation}

While most mature architecture functions will have their own documentation structure. They massively vary in demands of content and detail. Broadly most architectural functions will have at least the following documents,

* Introduction / Business Context
* Logical design pack
* Physical design pack
* Security pack (often referred to as DSAM in GOV)
* Operational readiness check list

However there are cases where this is simply not the case. Either there is no architecture function, or it is not mature. In which case the documentation templates linked below are enough to go through even the most rigorous architectural teams, assuming that the detail you fill them in with is well reasoned and makes sense.

[Architecture document templates](https://github.com/hippo-digital/documentation-templates/tree/main/architecture)

Instructions to use the documentation templates are included in the [README](https://github.com/hippo-digital/documentation-templates/blob/main/README.md) of the repository. Each template page is structured with example diagrams and a set of ``//TODO:`` comments with hints with what to include in that section. 

Each page represents a particular architectural aspect; it may not be feasible/possible to deliver all of the architectural aspects for all services. In this case best judgement on what to include is left to the reader. However as a rule of thumb it is generally a good idea to include as much as possible. 

### Business Architecture and Strategy

Some projects we are involved in aren't just about building a service from a technical point of view. We are also involved in strategy consultancy. This often involves capturing large scale information about the architecture of a organisation. Architectural modelling consists of 

* **Capabilities** - Capabilities provide a static view of the business, they define the what not the how; of a business. There should only be one capability map for the entire organisation. 
* **Business Functions** - Business functions support capabilities. This is what a part of the business does, a capability may be supported by many functions.
* **Business Services** - Business services are services/processes that business functions function utilise to provide the capabilities the business requires.
* **Technology Services** - Technology services are service that business services / business functions utilise to provide capabilities. Technology services can be wide reaching from Bespoke systems, Cloud services or printing services. 

For a more detailed description see the [Information and Data Capture presentation](https://docs.google.com/presentation/d/1B6j7E7d-U4WNXmL5FHRlfDgr3HsJE71s_Pcz8hP_DiY/edit#slide=id.g122dd4a193b_0_13)

The actual google sheet we use to capture this information can be found 

[Information and Data Capture sheet](https://docs.google.com/spreadsheets/d/1QxyhGnpBCKALxokYNZKVLPMtmsRlT0CsKJvg4ljDPd4/edit#gid=948742311). 

Instructions to use this sheet are captured on the first sheet.

 
### Decision process {#decision-process}

Supporting the documentation, we have an architectural decision process that provides a simple way of making and recording technical decisions. The process to make a decisions is as below. 

![Decision Process](/images/decision-process.jpg)

to support this process there is a [decision option template](https://github.com/hippo-digital/documentation-templates/blob/main/architecture/decisions/16_decision-option-template.md).

Any questions reach out in the [#engineering-and-data-community slack channel](https://hippo-digital.slack.com/archives/C01JZP5M0DD)

## Operational Readiness {#operational-readiness}

Operational readiness is the process of ensuring a service and all associated parties (finance, commercial, business service, 1st line support) are ready for go live. To support this we have a checklist that helps Product Owners, Architects and Delivery Managers to ensure the proper tasks are in place for go-live. 

[Operational readiness checklist](https://docs.google.com/spreadsheets/d/1fOkoPENjqZeNEWeGZkC_ZBtKoiLPBPqUpZDQHsrAsW0/edit#gid=916507092)