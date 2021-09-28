(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{333:function(e,t,a){e.exports=a.p+"assets/img/pipelines.0565036c.svg"},338:function(e,t,a){e.exports=a.p+"assets/img/boards.b6a24985.svg"},339:function(e,t,a){e.exports=a.p+"assets/img/repos.2f179321.svg"},629:function(e,t,a){e.exports=a.p+"assets/img/goal-azure-boards.07c48969.png"},870:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"day-4-azure-devops"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#day-4-azure-devops"}},[e._v("#")]),e._v(" Day 4 Azure DevOps")]),e._v(" "),o("h2",{attrs:{id:"welcome"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#welcome"}},[e._v("#")]),e._v(" Welcome")]),e._v(" "),o("p",[e._v("Today we are going to focus on the topic of "),o("em",[e._v("DevOps")]),e._v(". Therefore we wil take a closer look at "),o("a",{attrs:{href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps"),o("OutboundLink")],1),e._v(" and its components:")]),e._v(" "),o("ul",[o("li",[e._v("Azure Boards")]),e._v(" "),o("li",[e._v("Azure Pipelines")]),e._v(" "),o("li",[e._v("Azure Repos")])]),e._v(" "),o("h2",{attrs:{id:"challenges"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-0.html"}},[e._v("Challenge 0: Create an Azure DevOps Organisation")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-1.html"}},[e._v("Challenge 1: Plan your first Project Iteration")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-2.html"}},[e._v("Challenge 2: Working with Azure Repo")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-3.html"}},[e._v("Challenge 3: Working with Azure Pipelines")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-4.html"}},[e._v("Challenge 4: Build and deploy the SCM Contacts API")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-5.html"}},[e._v("Challenge 5: Build and deploy the SCM Frontend")])],1),e._v(" "),o("li",[e._v("💎 "),o("em",[o("RouterLink",{attrs:{to:"/day4-azdevops/challenges/challenge-bo-1.html"}},[e._v("Breakout: Create CI/CD Pipelines to deploy the Azure Dev College Sample Application to Azure")])],1),e._v(" 💎")])]),e._v(" "),o("h2",{attrs:{id:"day4-goal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#day4-goal"}},[e._v("#")]),e._v(" Day4 - Goal")]),e._v(" "),o("p",[e._v("You already have deployed the sample application to Azure manually. Today we want to dive into Azure DevOps to show you how you can "),o("em",[e._v("automate")]),e._v(" your "),o("em",[e._v("build and deployment process")]),e._v(".\nIn addition we want to show you how you can plan and manage your work with "),o("em",[e._v("Azure Boards")]),e._v(" and how you collaborate on code development using Azure Repo.")]),e._v(" "),o("h3",{attrs:{id:"azure-boards"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#azure-boards"}},[e._v("#")]),e._v(" Azure Boards")]),e._v(" "),o("p",[o("img",{attrs:{src:a(338),alt:"Azure Boards"}})]),e._v(" "),o("p",[e._v("We use "),o("em",[e._v("Azure Boards")]),e._v(" to plan your work for Day 4. During the day you will use Azure Boards to define "),o("em",[e._v("Features")]),e._v(", "),o("em",[e._v("UserStories")]),e._v(" and "),o("em",[e._v("Tasks")]),e._v(" to reflect the progress of Day 4.\nAt the end of the day you will know how to plan and track your work with Azure Boards and how you can plan your agile iterations.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(629),alt:"Goal Azure Boards"}})]),e._v(" "),o("h3",{attrs:{id:"azure-repos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#azure-repos"}},[e._v("#")]),e._v(" Azure Repos")]),e._v(" "),o("p",[o("img",{attrs:{src:a(339),alt:"Azure Repo"}})]),e._v(" "),o("p",[e._v("We use "),o("em",[e._v("Azure Repos")]),e._v(" to work with a Git repository. During the day you will work with Git branches, commits and pull requests.")]),e._v(" "),o("h3",{attrs:{id:"azure-pipelines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#azure-pipelines"}},[e._v("#")]),e._v(" Azure Pipelines")]),e._v(" "),o("p",[o("img",{attrs:{src:a(333),alt:"Azure Pipelines"}})]),e._v(" "),o("p",[e._v("We use "),o("em",[e._v("Azure Pipelines")]),e._v(" to build and deploy the sample application to a Development and Testing stage on your Azure subscription.\nAt the end of the day you will know how to create a CI/CD Pipeline for all Microservices of the sample application and how you continuously and consistently deploy services to Azure during your application lifecycle process.")]),e._v(" "),o("p",[e._v("To give you a short overview of all Microservices that are part of the sample application the following table shows you all services and the runtime that is used to implement them.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Service")]),e._v(" "),o("th",[e._v("Tech")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("SCM Contacts API")]),e._v(" "),o("td",[e._v("ASP.NET Core")])]),e._v(" "),o("tr",[o("td",[e._v("SCM Resource API")]),e._v(" "),o("td",[e._v("ASP.NET Core")])]),e._v(" "),o("tr",[o("td",[e._v("SCM Search")]),e._v(" "),o("td",[e._v("ASP.NET Core")])]),e._v(" "),o("tr",[o("td",[e._v("SCM Visitreports API")]),e._v(" "),o("td",[e._v("NodeJs")])]),e._v(" "),o("tr",[o("td",[e._v("SCm Textanalytics")]),e._v(" "),o("td",[e._v("NodeJs")])]),e._v(" "),o("tr",[o("td",[e._v("SCM Frontend")]),e._v(" "),o("td",[e._v("NodeJs")])])])]),e._v(" "),o("h2",{attrs:{id:"remarks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),o("p",[e._v('The challenges marked with the "💎" are the ones that focus on the sample application and represent the adoption of what you have learned in the challenges before. They results of the "💎" challenges will be reused in the upcoming days.')]),e._v(" "),o("p",[e._v("But do not panic in case you cannot finish them in time today: we got you covered tomorrow by a baseline deployment.")]),e._v(" "),o("p",[e._v("😎 Enjoy your day! 😎")])])}),[],!1,null,null,null);t.default=r.exports}}]);