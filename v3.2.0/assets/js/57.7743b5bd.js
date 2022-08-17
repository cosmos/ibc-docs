(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{665:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"updating-the-docs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-docs"}},[e._v("#")]),e._v(" Updating the docs")]),e._v(" "),o("p",[e._v("If you want to update the documentation please open a pr on ibc-go.")]),e._v(" "),o("h2",{attrs:{id:"translating"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#translating"}},[e._v("#")]),e._v(" Translating")]),e._v(" "),o("ul",[o("li",[e._v("Docs translations live in a "),o("code",[e._v("docs/country-code/")]),e._v(" folder, where "),o("code",[e._v("country-code")]),e._v(" stands for the country code of the language used ("),o("code",[e._v("cn")]),e._v(" for Chinese, "),o("code",[e._v("kr")]),e._v(" for Korea, "),o("code",[e._v("fr")]),e._v(" for France, ...).")]),e._v(" "),o("li",[e._v("Always translate content living on "),o("code",[e._v("main")]),e._v(".")]),e._v(" "),o("li",[e._v("Specify the release/tag of the translation in the README of your translation folder. Update the release/tag each time you update the translation.")])]),e._v(" "),o("h2",{attrs:{id:"docs-build-workflow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docs-build-workflow"}},[e._v("#")]),e._v(" Docs Build Workflow")]),e._v(" "),o("p",[e._v("The documentation for IBC-Go is hosted at https://ibc.cosmos.network.")]),e._v(" "),o("p",[e._v("built from the files in this ("),o("code",[e._v("/docs")]),e._v(") directory for\n"),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("main"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How It Works")]),e._v(" "),o("p",[e._v("There is a CircleCI job listening for changes in the "),o("code",[e._v("/docs")]),e._v(" directory, on\nthe "),o("code",[e._v("main")]),e._v(" branch. Any updates to files in this directory\non that branch will automatically trigger a website deployment. Under the hood,\nthe private website repository has a "),o("code",[e._v("make build-docs")]),e._v(" target consumed by a CircleCI job in that repo.")]),e._v(" "),o("h2",{attrs:{id:"readme"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#readme"}},[e._v("#")]),e._v(" README")]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/"}},[e._v("README.md")]),e._v(" is also the landing page for the documentation\non the website. During the Jenkins build, the current commit is added to the bottom\nof the README.")],1),e._v(" "),o("h2",{attrs:{id:"config-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#config-js"}},[e._v("#")]),e._v(" Config.js")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"./.vuepress/config.js"}},[e._v("config.js")]),e._v(" generates the sidebar and Table of Contents\non the website docs. Note the use of relative links and the omission of\nfile extensions. Additional features are available to improve the look\nof the sidebar.")]),e._v(" "),o("h2",{attrs:{id:"links"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),o("p",[o("strong",[e._v("NOTE:")]),e._v(" Strongly consider the existing links - both within this directory\nand to the website docs - when moving or deleting files.")]),e._v(" "),o("p",[e._v("Relative links should be used nearly everywhere, having discovered and weighed the following:")]),e._v(" "),o("h3",{attrs:{id:"relative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relative"}},[e._v("#")]),e._v(" Relative")]),e._v(" "),o("p",[e._v("Where is the other file, relative to the current one?")]),e._v(" "),o("ul",[o("li",[e._v("works both on GitHub and for the VuePress build")]),e._v(" "),o("li",[e._v("confusing / annoying to have things like: "),o("code",[e._v("../../../../myfile.md")])]),e._v(" "),o("li",[e._v("requires more updates when files are re-shuffled")])]),e._v(" "),o("h3",{attrs:{id:"absolute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#absolute"}},[e._v("#")]),e._v(" Absolute")]),e._v(" "),o("p",[e._v("Where is the other file, given the root of the repo?")]),e._v(" "),o("ul",[o("li",[e._v("works on GitHub, doesn't work for the VuePress build")]),e._v(" "),o("li",[e._v("this is much nicer: "),o("code",[e._v("/docs/hereitis/myfile.md")])]),e._v(" "),o("li",[e._v("if you move that file around, the links inside it are preserved (but not to it, of course)")])]),e._v(" "),o("h3",{attrs:{id:"full"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#full"}},[e._v("#")]),e._v(" Full")]),e._v(" "),o("p",[e._v("The full GitHub URL to a file or directory. Used occasionally when it makes sense\nto send users to the GitHub.")]),e._v(" "),o("h2",{attrs:{id:"building-locally"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-locally"}},[e._v("#")]),e._v(" Building Locally")]),e._v(" "),o("p",[e._v("Make sure you are in the "),o("code",[e._v("docs")]),e._v(" directory and run the following commands:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cm0gLXJmIG5vZGVfbW9kdWxlcwo="}}),e._v(" "),o("p",[e._v("This command will remove old version of the visual theme and required packages. This step is optional.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bnBtIGluc3RhbGwK"}}),e._v(" "),o("p",[e._v("Install the theme and all dependencies.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bnBtIHJ1biBzZXJ2ZQo="}}),e._v(" "),o("p",[e._v("Run "),o("code",[e._v("pre")]),e._v(" and "),o("code",[e._v("post")]),e._v(" hooks and start a hot-reloading web-server. See output of this command for the URL (it is often https://localhost:8080).")]),e._v(" "),o("p",[e._v("To build documentation as a static website run "),o("code",[e._v("npm run build")]),e._v(". You will find the website in "),o("code",[e._v(".vuepress/dist")]),e._v(" directory.")]),e._v(" "),o("h2",{attrs:{id:"search"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[e._v("#")]),e._v(" Search")]),e._v(" "),o("p",[e._v("TODO: update or remove")]),e._v(" "),o("p",[e._v("We are using "),o("a",{attrs:{href:"https://www.algolia.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Algolia"),o("OutboundLink")],1),e._v(" to power full-text search. This uses a public API search-only key in the "),o("code",[e._v("config.js")]),e._v(" as well as a "),o("a",{attrs:{href:"https://github.com/algolia/docsearch-configs/blob/master/configs/cosmos_network.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos_network.json"),o("OutboundLink")],1),e._v(" configuration file that we can update with PRs.")]),e._v(" "),o("h2",{attrs:{id:"consistency"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consistency"}},[e._v("#")]),e._v(" Consistency")]),e._v(" "),o("p",[e._v("Because the build processes are identical (as is the information contained herein), this file should be kept in sync as\nmuch as possible with its "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/docs/DOCS_README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("counterpart in the Cosmos SDK repo"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"update-and-build-the-rpc-docs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-and-build-the-rpc-docs"}},[e._v("#")]),e._v(" Update and Build the RPC docs")]),e._v(" "),o("ol",[o("li",[e._v("Execute the following command at the root directory to install the swagger-ui generate tool.\n    "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSB0b29scwo="}})],1),e._v(" "),o("li",[e._v("Edit API docs\n"),o("ol",[o("li",[e._v("Directly Edit API docs manually: "),o("code",[e._v("client/lcd/swagger-ui/swagger.yaml")]),e._v(".")]),e._v(" "),o("li",[e._v("Edit API docs within the "),o("a",{attrs:{href:"https://editor.swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Swagger Editor"),o("OutboundLink")],1),e._v(". Please refer to this "),o("a",{attrs:{href:"https://swagger.io/docs/specification/2-0/basic-structure/",target:"_blank",rel:"noopener noreferrer"}},[e._v("document"),o("OutboundLink")],1),e._v(" for the correct structure in "),o("code",[e._v(".yaml")]),e._v(".")])])]),e._v(" "),o("li",[e._v("Download "),o("code",[e._v("swagger.yaml")]),e._v(" and replace the old "),o("code",[e._v("swagger.yaml")]),e._v(" under fold "),o("code",[e._v("client/lcd/swagger-ui")]),e._v(".")]),e._v(" "),o("li",[e._v("Compile simd\n    "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWFrZSBpbnN0YWxsCg=="}})],1)])],1)}),[],!1,null,null,null);t.default=s.exports}}]);