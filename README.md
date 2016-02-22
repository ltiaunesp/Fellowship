# Fellowship Project

Fellowship was inspired by the concept of Gamification, Scrum and Team Management. The main goal of this webapp is to have a tool that promotes project management, team organization, and skills quantification. With these features, Fellowship is a tool that provides better methods for the project manager to assign the perfect member to a job, as well as encourage all the workers to improve themselves.

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


## About Project Team

We have a great team! See [COLAB.md](COLAB.md) to get a full information about our collaborators.
