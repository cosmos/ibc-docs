(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{645:function(e,t,r){"use strict";r.r(t);var a=r(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"roadmap-ibc-go"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#roadmap-ibc-go"}},[e._v("#")]),e._v(" Roadmap ibc-go")]),e._v(" "),r("p",[r("em",[e._v("Lastest update: Dec 22, 2021")])]),e._v(" "),r("p",[e._v("This document endeavours to inform the wider IBC community about plans and priorities for work on ibc-go byt the team at Interchain GmbH. It is intended to broadly inform all users of ibc-go, including developers and operators of IBC, relayer, chain and wallet applications.")]),e._v(" "),r("p",[e._v("This roadmap should be read as a high-level guide, rather than a commitment to schedules and deliverables. The degree of specificity is inversely proportional to the timeline. We will update this document periodically to reflect the status and plans.")]),e._v(" "),r("p",[e._v("The release tags and timelines are educated guesses based on the information at hand at the moment of updating this document. Since predicting the final version number (specially for minor and patch numbers) can be challenging (since we might need to release unforeseen security vulnerability patches or urgent bug fixes), we are using alphabet letters as placeholders. Once we get closer to the release date, the placeholder will be replaced with the right number. An example for clarification...")]),e._v(" "),r("p",[e._v("Let's assume that the planned release schedule looks like the following:")]),e._v(" "),r("ul",[r("li",[e._v("At time "),r("code",[e._v("t0")]),e._v(":\n"),r("ul",[r("li",[e._v("The first planned patch release for the "),r("code",[e._v("v2.0.x")]),e._v(" release series with release tag "),r("code",[e._v("v2.0.a")]),e._v(". The placeholder is "),r("code",[e._v("a")]),e._v(" since this is the first patch release in the given quarter.")]),e._v(" "),r("li",[e._v("The first planned minor release for the "),r("code",[e._v("v2.x")]),e._v(" release series with release tag "),r("code",[e._v("v2.a.0")]),e._v(". The placeholder is "),r("code",[e._v("a")]),e._v(" since this is the first minor release in the given quarter.")])])]),e._v(" "),r("li",[e._v("At time "),r("code",[e._v("t0 + delta")]),e._v(":\n"),r("ul",[r("li",[e._v("The second planned patch release for the "),r("code",[e._v("v2.0.x")]),e._v(" release series with release tag "),r("code",[e._v("v2.0.b")]),e._v(". The placehoder is "),r("code",[e._v("b")]),e._v(" since this is the next patch release of this release series after "),r("code",[e._v("v2.0.a")]),e._v(" in the given quarter.")]),e._v(" "),r("li",[e._v("The first planned patch release for the new "),r("code",[e._v("v2.a.x")]),e._v(" release series with release tag "),r("code",[e._v("v2.a.a")]),e._v(". The patch version placeholder is "),r("code",[e._v("a")]),e._v(" because this is the first planned patch release of the series in the given quarter.")])])])]),e._v(" "),r("h2",{attrs:{id:"q1-2022"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q1-2022"}},[e._v("#")]),e._v(" Q1 - 2022")]),e._v(" "),r("h3",{attrs:{id:"interchain-accounts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interchain-accounts"}},[e._v("#")]),e._v(" Interchain accounts")]),e._v(" "),r("ul",[r("li",[e._v("Work on any issues that may come out of the two external audits.")]),e._v(" "),r("li",[e._v("Create beta, release candidate and final releases.")])]),e._v(" "),r("h3",{attrs:{id:"relayer-incentivisation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relayer-incentivisation"}},[e._v("#")]),e._v(" Relayer incentivisation")]),e._v(" "),r("ul",[r("li",[e._v("Work on issues that may arise from internal audit.")]),e._v(" "),r("li",[e._v("External audit (issues may arise that we need to work on before release).")]),e._v(" "),r("li",[e._v("Create alpha, beta, release candidate and final release.")])]),e._v(" "),r("h3",{attrs:{id:"support-for-wasm-based-light-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support-for-wasm-based-light-clients"}},[e._v("#")]),e._v(" Support for Wasm-based light clients")]),e._v(" "),r("p",[e._v("There is an open "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/208",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR"),r("OutboundLink")],1),e._v(" that implements support for Wasm-based light clients, but it needs to be updated after the finalization of the "),r("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/client/ics-008-wasm-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS28"),r("OutboundLink")],1),e._v(" specification. The PR will also need a final review from ibc-go core team members.")]),e._v(" "),r("h3",{attrs:{id:"align-implementation-with-ics02"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#align-implementation-with-ics02"}},[e._v("#")]),e._v(" Align implementation with ICS02")]),e._v(" "),r("ul",[r("li",[e._v("Finalize work for: "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/284",target:"_blank",rel:"noopener noreferrer"}},[e._v("#284"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/285",target:"_blank",rel:"noopener noreferrer"}},[e._v("#285"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/286",target:"_blank",rel:"noopener noreferrer"}},[e._v("#286"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/594",target:"_blank",rel:"noopener noreferrer"}},[e._v("#594"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/599",target:"_blank",rel:"noopener noreferrer"}},[e._v("#599"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"interchain-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interchain-security"}},[e._v("#")]),e._v(" Interchain security")]),e._v(" "),r("ul",[r("li",[e._v("Testnet testing of "),r("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/docs/interchain-security.md#v1---full-validator-set",target:"_blank",rel:"noopener noreferrer"}},[e._v("V1"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"backlog-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#backlog-issues"}},[e._v("#")]),e._v(" Backlog issues")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/545",target:"_blank",rel:"noopener noreferrer"}},[e._v("#545"),r("OutboundLink")],1),e._v(": Remove the "),r("code",[e._v("GetTransferAccount")]),e._v(" function, since we never use the ICS20 transfer module account (every escrow address is created as a regular account).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/559",target:"_blank",rel:"noopener noreferrer"}},[e._v("#559"),r("OutboundLink")],1),e._v(": Changes needed to support the migration to SMT storage. This is basically adding a new proof spec that will be used during connection handshake with a chain that has migrated to SMT to verify that the light client of the counterparty chain uses the correct proof specs to be able to verify proofs for that chain.")]),e._v(" "),r("li",[e._v("And more to be added later!")])]),e._v(" "),r("h3",{attrs:{id:"release-schedule"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#release-schedule"}},[e._v("#")]),e._v(" Release schedule")]),e._v(" "),r("h4",{attrs:{id:"h1-january"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h1-january"}},[e._v("#")]),e._v(" H1 January")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/12",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v3.0.0-beta")]),r("OutboundLink")],1),e._v(": Beta release of "),r("code",[e._v("v3.0.0")]),e._v(" including Interchain Accounts, an update of Golang from "),r("code",[e._v("v1.15")]),e._v(" to "),r("code",[e._v("v1.17")]),e._v(", and some core improvements. This is a Go-API breaking change because of "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/472",target:"_blank",rel:"noopener noreferrer"}},[e._v("#472"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"h2-january"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h2-january"}},[e._v("#")]),e._v(" H2 January")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/14",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v2.0.a")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/12",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v3.0.0-rc0")]),r("OutboundLink")],1),e._v(": Release candidate 0 of "),r("code",[e._v("v3.0.0")]),e._v(" including Interchain Accounts, an update of Golang from "),r("code",[e._v("v1.15")]),e._v(" to "),r("code",[e._v("v1.17")]),e._v(", and some core improvements. This is a Go-API breaking change because of "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/472",target:"_blank",rel:"noopener noreferrer"}},[e._v("#472"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/16",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v4.0.0-alpha")]),r("OutboundLink")],1),e._v(": Alpha release of "),r("code",[e._v("v4.0.0")]),e._v(" including Relayer Incentivisation and the issues to bring ibc-go implementation in line with ICS02 (which are Go-API breaking changes). This release will include fixes to issues that surfaced during internal audit.")])]),e._v(" "),r("h4",{attrs:{id:"h1-february"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h1-february"}},[e._v("#")]),e._v(" H1 February")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/12",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v3.0.0")]),r("OutboundLink")],1),e._v(": Final release of "),r("code",[e._v("v3.0.0")]),e._v(" including Interchain Accounts, an update of Golang from "),r("code",[e._v("v1.15")]),e._v(" to "),r("code",[e._v("v1.17")]),e._v(", and some core improvements. This is a Go-API breaking change because of "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/472",target:"_blank",rel:"noopener noreferrer"}},[e._v("#472"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"h2-february"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h2-february"}},[e._v("#")]),e._v(" H2 February")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/16",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v4.0.0-beta")]),r("OutboundLink")],1),e._v(": Beta release of "),r("code",[e._v("v4.0.0")]),e._v(" including Relayer Incentivisation and the issues to bring ibc-go implementation in line with ICS02 (which are Go-API breaking changes). This release will include fixes to issues that surfaced during external audit.")])]),e._v(" "),r("h4",{attrs:{id:"h1-march"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h1-march"}},[e._v("#")]),e._v(" H1 March")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/16",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v4.0.0-rc0")]),r("OutboundLink")],1),e._v(": Release candidate 0 of "),r("code",[e._v("v4.0.0")]),e._v(" including Relayer Incentivisation and the issues to bring ibc-go implementation in line with ICS02 (which are Go-API breaking changes).")])]),e._v(" "),r("h4",{attrs:{id:"h2-march"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h2-march"}},[e._v("#")]),e._v(" H2 March")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/16",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v4.0.0")]),r("OutboundLink")],1),e._v(": Final release of "),r("code",[e._v("v4.0.0")]),e._v(" including Relayer Incentivisation and the issues to bring ibc-go implementation in line with ICS02 (which are Go-API breaking changes).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/17",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v1.a.0")]),r("OutboundLink")],1),e._v(": Minor release in "),r("code",[e._v("v1.x")]),e._v(" seires including the update of Cosmos SDK to "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/milestone/46",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.46")]),r("OutboundLink")],1),e._v(" and Tendermint to "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/releases/tag/v0.35.0",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.35")]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/18",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v2.a.0")]),r("OutboundLink")],1),e._v(": Minor release in "),r("code",[e._v("v2.x")]),e._v(" series including the update of Cosmos SDK to "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/milestone/46",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.46")]),r("OutboundLink")],1),e._v(" and Tendermint to "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/releases/tag/v0.35.0",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.35")]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/19",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v3.a.0")]),r("OutboundLink")],1),e._v(": Minor release in "),r("code",[e._v("v3.x")]),e._v(" series including the update of Cosmos SDK to "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/milestone/46",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.46")]),r("OutboundLink")],1),e._v(" and Tendermint to "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/releases/tag/v0.35.0",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.35")]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/22",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v4.a.0")]),r("OutboundLink")],1),e._v(": Minor release in "),r("code",[e._v("v4.x")]),e._v(" series including the update of Cosmos SDK to "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/milestone/46",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.46")]),r("OutboundLink")],1),e._v(" and Tendermint to "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/releases/tag/v0.35.0",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v0.35")]),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"q2-2022"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q2-2022"}},[e._v("#")]),e._v(" Q2 - 2022")]),e._v(" "),r("p",[e._v("Scope is still TBD.")]),e._v(" "),r("h3",{attrs:{id:"release-schedule-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#release-schedule-2"}},[e._v("#")]),e._v(" Release schedule")]),e._v(" "),r("h4",{attrs:{id:"h1-april"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h1-april"}},[e._v("#")]),e._v(" H1 April")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/21",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v5.0.0-rc0")]),r("OutboundLink")],1),e._v(": Release candidate that includes the update of Cosmos SDK from "),r("code",[e._v("v0.46")]),e._v(" to "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/milestone/52",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v1.0")]),r("OutboundLink")],1),e._v(" and that will support the migration to SMT storage.")])]),e._v(" "),r("h4",{attrs:{id:"h2-april"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#h2-april"}},[e._v("#")]),e._v(" H2 April")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/milestone/21",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("v5.0.0")]),r("OutboundLink")],1),e._v(": Final release that includes the update of Cosmos SDK from "),r("code",[e._v("v0.46")]),e._v(" to "),r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/milestone/52",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.0"),r("OutboundLink")],1),e._v(" and that will support the migration to SMT storage.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);