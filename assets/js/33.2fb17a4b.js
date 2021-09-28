(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{730:function(e,t,a){e.exports=a.p+"assets/img/gh-board-overview-07.f28bee47.png"},731:function(e,t,a){e.exports=a.p+"assets/img/az-frontend-tag-filter.1ce6f61a.png"},732:function(e,t,a){e.exports=a.p+"assets/img/appinsights-perf-filter.9f076bbf.png"},733:function(e,t,a){e.exports=a.p+"assets/img/appinsights-op-samples.13730ba7.png"},734:function(e,t,a){e.exports=a.p+"assets/img/appinsights-op-dependency.467cd50b.png"},735:function(e,t,a){e.exports=a.p+"assets/img/appinsights-applicationmap.75264c56.png"},889:function(e,t,a){"use strict";a.r(t);var s=a(28),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"💎-breakout-1-deploy-the-sample-application-with-github-workflows-💎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-1-deploy-the-sample-application-with-github-workflows-💎"}},[e._v("#")]),e._v(" 💎 Breakout 1:  Deploy the sample application with GitHub workflows 💎")]),e._v(" "),s("p",[e._v("⏲️ "),s("em",[e._v("Est. time to complete: 60 min.")]),e._v(" ⏲️")]),e._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),s("p",[e._v("We have already seen how to create a professional CI/CD workflow with GitHub Actions workflows. Although we have only deployed the shared Azure resources of the sample application so far, we have learned all necessary things to deploy the other bounded contexts to a development and testing environment.")]),e._v(" "),s("p",[e._v("In this challenge you will learn how to:")]),e._v(" "),s("ul",[s("li",[e._v("deploy all bounded contexts of the sample application")]),e._v(" "),s("li",[e._v("see Azure resource tags in action")]),e._v(" "),s("li",[e._v("add data to the sample application")])]),e._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table of contents")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#plan-your-work"}},[e._v("Plan your work")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#prepare-the-workflows"}},[e._v("Prepare the workflows")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#create-and-merge-the-pull-request"}},[e._v("Create and merge the Pull Request")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#add-data-to-the-sample-application-and-inspect-applicationinsights"}},[e._v("Add data to the sample application and inspect ApplicationInsights")])])]),e._v(" "),s("h2",{attrs:{id:"plan-your-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan-your-work"}},[e._v("#")]),e._v(" Plan your work")]),e._v(" "),s("p",[e._v("As in the previous challenges we want to reflect our work for the breakout session on the project board.\nWe have already created a "),s("em",[e._v("note")]),e._v(" on our project board, which says:\n"),s("em",[e._v("Deploy the sample application")])]),e._v(" "),s("p",[e._v("To describe the outstanding work for this breakout session, we create the following issue in the imported trainingdays repository, assign the label "),s("code",[e._v("azdc-breakout")]),e._v(" and link it to the "),s("em",[e._v("note")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Deploy all SCM bounded contexts\n\nPrepare GitHub Actions workflows to deploy all SCM bounded contexts.\nDeploy all bounded contexts to a development and testing environment.\n")])])]),s("p",[e._v("After this is done, the project board should look like this:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(730),alt:"GitHub board overview 07"}})]),e._v(" "),s("h2",{attrs:{id:"prepare-the-workflows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-workflows"}},[e._v("#")]),e._v(" Prepare the workflows")]),e._v(" "),s("p",[e._v("Now we have to prepare all extsing workflows. As we pushed changes to the master branch in the previous challenge, we need to pull these changes first:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),s("p",[e._v("Then we create a new feature branch for the outstanding work:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch cicd/all\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout cicd/all\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b cicd/all\n")])])]),s("p",[e._v("Now we need to replace the organisation name in each job condition of the following workflows:")]),e._v(" "),s("ul",[s("li",[e._v("day4-scm-contactsapi.yml")]),e._v(" "),s("li",[e._v("day4-scm-frontend.yml")]),e._v(" "),s("li",[e._v("day4-scm-resourcesapi.yml")]),e._v(" "),s("li",[e._v("day4-scm-searchapi.yml")]),e._v(" "),s("li",[e._v("day4-scm-visitreports.yml")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("📝 In total, five files must be changed. You can check this with the "),s("code",[e._v("git status")]),e._v("command:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" status\nOn branch cicd/all\nChanges not staged "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" commit:\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("use "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"git add <file>..."')]),e._v(" to update what will be committed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("use "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"git restore <file>..."')]),e._v(" to discard changes "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" working directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\tmodified:   .github/workflows/day4-scm-contactsapi.yml\n\tmodified:   .github/workflows/day4-scm-frontend.yml\n\tmodified:   .github/workflows/day4-scm-resourcesapi.yml\n\tmodified:   .github/workflows/day4-scm-searchapi.yml\n\tmodified:   .github/workflows/day4-scm-visitreports.yml\n\nno changes added to commit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("use "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"git add"')]),e._v(" and/or "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"git commit -a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),s("p",[e._v("After this is done, commit and push the changes:")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"activate day4 workflows"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin cicd/all\n")])])]),s("h2",{attrs:{id:"create-and-merge-the-pull-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-and-merge-the-pull-request"}},[e._v("#")]),e._v(" Create and merge the Pull Request")]),e._v(" "),s("p",[e._v("Create a pull request to push the changes to the master branch. Close the issue "),s("em",[e._v("Deploy all SCM bounded contexts")]),e._v(" with the pull request.\nAfter the pull request is created, wait for all status checks and merge the pull request.")]),e._v(" "),s("p",[e._v("After the pull request is merged, navigate to the "),s("code",[e._v("Àctions")]),e._v(" page and observe the workflows.")]),e._v(" "),s("h2",{attrs:{id:"add-data-to-the-sample-application-and-inspect-applicationinsights"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-data-to-the-sample-application-and-inspect-applicationinsights"}},[e._v("#")]),e._v(" Add data to the sample application and inspect ApplicationInsights")]),e._v(" "),s("p",[e._v("After everything is deployed, we want to add some data to the application in the development environment. Navigate to the Azure portal and go to the resource group for the development environment. The name of the resource group starts with "),s("code",[e._v("rg-scm-devday4-")]),e._v(" and end with your GitHub organization name "),s("code",[e._v("rg-scm-devday4-<your organization name>")]),e._v(". We need to find the storage account where the frontend is hosted in a static website. The deployment created some Azure "),s("code",[e._v("Tags")]),e._v(" to group the used Azure resources regarding their bounded context. Within the resource group you can set filters in the "),s("code",[e._v("Resources")]),e._v(" details view.")]),e._v(" "),s("p",[e._v("Apply the following filter:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(731),alt:"Azure resource group filter"}})]),e._v(" "),s("p",[e._v("As a result we see one storage account. Open the storage account and go to the section "),s("code",[e._v("Static website")]),e._v(". Here you can find the primary endpoint of the frontend in the development environment. Copy the URL and open the frontend in your browser.")]),e._v(" "),s("p",[e._v("Now add some test data:")]),e._v(" "),s("ul",[s("li",[e._v("add some contacts with images")]),e._v(" "),s("li",[e._v("add VisitReports")]),e._v(" "),s("li",[e._v("add VisitResults")])]),e._v(" "),s("p",[e._v("After adding the data, let's have a look at ApplicationInsights. Back in the Azure portal, open the ApplicationInsights instance of your development environment "),s("code",[e._v("rg-scm-devday4-<your organization name>")]),e._v(". In the "),s("code",[e._v("overview")]),e._v(" page we can already see some useful information about our application in the following diagrams:")]),e._v(" "),s("ul",[s("li",[e._v("Failed requests")]),e._v(" "),s("li",[e._v("Server response time")]),e._v(" "),s("li",[e._v("Server requests")]),e._v(" "),s("li",[e._v("Availability (if we had added Availability test)")])]),e._v(" "),s("p",[e._v("We can click on a diagram to drill down and get more detailed information. Let's see what details we get, when we cklick on the "),s("code",[e._v("Server response time")]),e._v(" diagram.\nTake some time and investigate which metrics are provided in the Performance View of ApplicationInsights.")]),e._v(" "),s("p",[e._v("Check the metrics for:")]),e._v(" "),s("ul",[s("li",[e._v("Operations")]),e._v(" "),s("li",[e._v("Dependencies")]),e._v(" "),s("li",[e._v("Roles")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(732),alt:"ApplicationInsights Performance Filter"}})]),e._v(" "),s("p",[e._v("Now, let's check the samples for the server operation "),s("code",[e._v("GET/contacts")]),e._v(". Select the "),s("code",[e._v("Operations")]),e._v(" metrics and the "),s("code",[e._v("GET/contacts")]),e._v(" opreation in the list.\nDrill into the provided samples:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(733),alt:"ApplicationInsight operation samples"}})]),e._v(" "),s("p",[e._v("Select a sample and look at the dependency calls:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(734),alt:"ApplicationInsights operation dependencies"}})]),e._v(" "),s("p",[e._v("Here you can see all calls to external services, such as SQL Database.\nIf you want to learn more about cross-component transaction, have a look at the documentation "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/transaction-diagnostics",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Now, navigate to the "),s("code",[e._v("Application Map")]),e._v(" of your ApplicationInsights instance. Here you can see the full application topology across multiple levels of related application components.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(735),alt:"ApplicationInsights application map"}})]),e._v(" "),s("p",[e._v("If you want to learn more about the "),s("code",[e._v("Application Map")]),e._v(" have a look at the documentation "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/app-map?tabs=net",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"congratulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#congratulation"}},[e._v("#")]),e._v(" Congratulation")]),e._v(" "),s("p",[e._v("🥳 "),s("strong",[e._v("Congratulation")]),e._v(" - You've done it! 🥳")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/day4/challenges/05-challenge-common-cicd.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),s("RouterLink",{attrs:{to:"/day4/"}},[e._v("🔼 Day 4")]),e._v(" |")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);