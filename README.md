# Fellowship Project

Fellowship was inspired by the concept of Gamification, Scrum and Team Management. The main goal of this webapp is to have a tool that promotes project management, team organization, and skills quantification. With these features, Fellowship is a tool that provides better methods for the project manager to assign the perfect member to a job, as well as encourage all the workers to improve themselves.

## Main branch

Search for project on master branch

# What we are trying to acomplish

This is the complete description of our project. Not all of this features were implemented during the Hackathon organized by [hack.summit()](https://www.koding.com/Hackathon).

## Basic features and main goals

Fellowship consists of two basic features:
Project Management: agile method based on Scrum mixed with gamification;
Team Management: quantified skills, providing a better team management
The Project Management feature allows the team leader to organize the creation process of a project. At this point, gamification is introduced as a way to separate the project in small parts (modules from the project). Each one of these modules can be fragmented again, resulting in the smallest part of this method, which contains a reward for those who solve it or develop it (we’ll explain it below).
This is how these smallest parts are structured:
* **Project:** major goal (the treasure)
* **Mission:** fragment of the project  
* **Quest:** fragment of the mission, the minimal piece of the project
* **Issue:** (S.O.S on the boat, there is something wrong within the quest)
Reward and experience points will be defined by:
* **Pre-requisite:** what do I need to know so I can join a specific project?  
* **Skill Point:** it measures a member’s ability level in a specific skill
* **Reward:** it indicates how many skill points you get once you finish a specific quest
Lastly, we have a defined group of members, based on a ship hierarchy:
* **Captain:** he or she sets a destination (goal)
* **Chief officer:** defines how to get there and who goes on the trip
* **Crew Members:** without them, our ship wouldn’t set sail
* **Development process:** even though it is not defined as a structure, it can be seen as our ship: if it sinks, everybody goes down with it.

##How are all this concepts and definitions put together?  

Since we are using gamification, we’ll set some rules:
* The person who creates a company account will be our Captain - you can have many captains within a company
* only a Captain can create a project
* a Captain can assign a Chief Officer to a project
* a Captain can also be a Chief Officer
* Both the Chief Officer and the Captain may add or select missions and quests
* a Captain or Chief Officer can define pre-requisites to join a project
* a Chief Officer is a crew member with additional privileges
* a Crew Member receives a different kind of skill points when assigned to a Chief Officer role: it increases a skill called “Leadership”
* a Crew Member with a high level in the Leadership skill can be promoted to Captain with the approval of another Captain (this rule is actually a suggestion)
* Captains and Chief Officers set values to each reward in a Quest
* a Crew Member can apply to a Project role. A Captain or a Chief Officer have the option to approve or deny the request
* a Crew Member can include Issues to a quest, which contains a name and description
* if there is a open role in a project, a Crew Member (that isn’t already part of the project team)  can view its name, description, crew members and request to be part of its crew
* a Crew Member can be assigned to more than one Quest
* a Crew Member can participate in more than one Project

###Regarding the project organization

* Missions are fragments of a project and define a specific goal (example: Back End, Front end, server configuration, network architecture)
* Quest are fragments of a Mission, the smallest unit from a Mission (example: login page, login confirmation module, etc.)
* Each Quest have one or more skill rewards based on what the crew member will need to complete
* Missions and Quests must be independent from others Missions or Quests  
* In case you need to integrate different modules, you can create an event called “Boss Fight”. It will create a Demo (a functional part of the project)
* an Issue must be analyzed by a Captain or a Chief Officer
* an Issue can become a Quest
* each Quest have one of the following colors: Green, Yellow or Red. If a Quest becomes Red, then it has an issue. If a Quest becomes Yellow, then someone is working on it. And if a Quest becomes Green, then it is complete.

### About rewards, skills and pre-requisites

* Pre-requisites are skill levels required to be part of a project (Suppose you want a project role of JavaScript level 7 pre-requisite: your skill level in JavaScript need to be at least 7)
* Each skill is a knowledge/ability set by a project’s Captain and required to develop it
* Skill points are acquired by completing quests. Therefore, the reward is received and its points added to the respective skill
* The leadership skill can only be increased when holding the position of Chief Officer

### Regarding failures in a Quest:

* 20 per cent of the promised points are deducted from your current skill points
* a Captain or Chief Officer can expel a member if he or she doesn’t complete a Quest

### On Settings, a Captain can:

* Set skills
* Set a maximum skill level
* Set a amount of points needed to level up on each level, and also set a specific function to do it

The reward system was created using Gamification concepts to quantify the abilities and skills of the members, as well as encourage their improvement and assist the assign process for each project role. Skill Levels were created to quantify a member abilities progress. This provides a tool to evaluate how good they are in a specific skill and how much they can improve. Based on this, it gets a lot easier to manage teams, since a Captain will be able to access a search bar and find members with abilities that directly match the project requirements. Therefore, it will  be faster and simple to define a balanced team for projects.
The Skill Level system encourages people to be more productive, because they will be motivated to improve their Skill Levels to be able to join projects that demand a higher level of skills.
As a suggestion, the Skill Level of a new crew member can be set based on the captain’s or chief officer’s previous experiences.


## About Project Team

We have a great team! See [COLAB.md](COLAB.md) to get a full information about our collaborators.
