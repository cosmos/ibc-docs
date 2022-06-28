(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{647:function(e,t,s){"use strict";s.r(t);var o=s(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fee-distribution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fee-distribution"}},[e._v("#")]),e._v(" Fee distribution")]),e._v(" "),s("p",{attrs:{synopsis:""}},[e._v("Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators.")]),e._v(" "),s("h2",{attrs:{id:"pre-requisite-readings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite readings")]),e._v(" "),s("ul",[s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/middleware/ics29-fee/overview.html"}},[e._v("Fee Middleware")])],1)]),e._v(" "),s("p",[e._v("Packet fees are divided into 3 distinct amounts in order to compensate relayer operators for packet relaying on fee enabled IBC channels.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("RecvFee")]),e._v(": The sum of all packet receive fees distributed to a payee for successful execution of "),s("code",[e._v("MsgRecvPacket")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("AckFee")]),e._v(": The sum of all packet acknowledgement fees distributed to a payee for successful execution of "),s("code",[e._v("MsgAcknowledgement")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("TimeoutFee")]),e._v(": The sum of all packet timeout fees distributed to a payee for successful execution of "),s("code",[e._v("MsgTimeout")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"register-a-payee-address-for-forward-relaying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-a-payee-address-for-forward-relaying"}},[e._v("#")]),e._v(" Register a payee address for forward relaying")]),e._v(" "),s("p",[e._v("As mentioned in "),s("RouterLink",{attrs:{to:"/middleware/ics29-fee/overview.html#concepts"}},[e._v("ICS29 Concepts")]),e._v(", the forward relayer describes the actor who performs the submission of "),s("code",[e._v("MsgRecvPacket")]),e._v(" on the destination chain.\nFee distribution for incentivized packet relays takes place on the packet source chain.\nRelayer operators are expected to register a counterparty payee address, in order to be compensated accordingly with "),s("code",[e._v("RecvFee")]),e._v("s upon completion of a packet lifecycle.\nThe counterparty payee address registered on the destination chain is encoded into the packet acknowledgement and communicated as such to the source chain for fee distribution.\nIf a counterparty payee is not registered for the forward relayer on the destination chain, the escrowed fees will be refunded upon fee distribution.")],1),e._v(" "),s("p",[e._v("A transaction must be submitted to the destination chain including a "),s("code",[e._v("CounterpartyPayee")]),e._v(" address of an account on the source chain.\nThe transaction must be signed by the "),s("code",[e._v("Relayer")]),e._v(".")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZWdpc3RlckNvdW50ZXJwYXJ0eVBheWVlIHN0cnVjdCB7CgkvLyB1bmlxdWUgcG9ydCBpZGVudGlmaWVyCglQb3J0SWQgc3RyaW5nCgkvLyB1bmlxdWUgY2hhbm5lbCBpZGVudGlmaWVyCglDaGFubmVsSWQgc3RyaW5nCgkvLyB0aGUgcmVsYXllciBhZGRyZXNzCglSZWxheWVyIHN0cmluZwoJLy8gdGhlIGNvdW50ZXJwYXJ0eSBwYXllZSBhZGRyZXNzCglDb3VudGVycGFydHlQYXllZSBzdHJpbmcKfQo="}}),e._v(" "),s("p",[e._v("This message is expected to fail if:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("PortId")]),e._v(" is invalid (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ChannelId")]),e._v(" is invalid (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("li",[s("code",[e._v("Relayer")]),e._v(" is an invalid address (see "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/basics/accounts.md#Addresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Addresses"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("li",[s("code",[e._v("CounterpartyPayee")]),e._v(" is empty.")])]),e._v(" "),s("p",[e._v("See below for an example CLI command:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2ltZCB0eCBpYmMtZmVlIHJlZ2lzdGVyLWNvdW50ZXJwYXJ0eS1wYXllZSB0cmFuc2ZlciBjaGFubmVsLTAgY29zbW9zMXJzcDgzN2E0a3Z0Z3AybTR1cXpkZ2Uwenp1NmVmcWd1Y20wcWRoIG9zbW8xdjV5MHR6MDFsbHh6ZjRjMmFmbWw4czNhd3VlMHltanUyMnd4eDIgLS1mcm9tIGNvc21vczFyc3A4MzdhNGt2dGdwMm00dXF6ZGdlMHp6dTZlZnFndWNtMHFkaAo="}}),e._v(" "),s("h2",{attrs:{id:"register-a-payee-address-for-reverse-and-timeout-relaying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-a-payee-address-for-reverse-and-timeout-relaying"}},[e._v("#")]),e._v(" Register a payee address for reverse and timeout relaying")]),e._v(" "),s("p",[e._v("As mentioned in "),s("RouterLink",{attrs:{to:"/middleware/ics29-fee/overview.html#concepts"}},[e._v("ICS29 Concepts")]),e._v(", the reverse relayer describes the actor who performs the submission of "),s("code",[e._v("MsgAcknowledgement")]),e._v(" on the source chain.\nSimilarly the timeout relayer describes the actor who performs the submission of "),s("code",[e._v("MsgTimeout")]),e._v(" (or "),s("code",[e._v("MsgTimeoutOnClose")]),e._v(") on the source chain.\nRelayer operators may choose to register an optional payee address, in order to be compensated accordingly with "),s("code",[e._v("AckFee")]),e._v("s and "),s("code",[e._v("TimeoutFee")]),e._v("s upon completion of a packet life cycle.\nIf a payee is not registered for the reverse or timeout relayer on the source chain, then fee distribution assumes the default behaviour, where fees are paid out to the relayer account which delivers "),s("code",[e._v("MsgAcknowledgement")]),e._v(" or "),s("code",[e._v("MsgTimeout")]),e._v("/"),s("code",[e._v("MsgTimeoutOnClose")]),e._v(".")],1),e._v(" "),s("p",[e._v("A transaction must be submitted to the source chain including a "),s("code",[e._v("Payee")]),e._v(" address of an account on the source chain.\nThe transaction must be signed by the "),s("code",[e._v("Relayer")]),e._v(".")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dSZWdpc3RlclBheWVlIHN0cnVjdCB7CgkvLyB1bmlxdWUgcG9ydCBpZGVudGlmaWVyCglQb3J0SWQgc3RyaW5nCgkvLyB1bmlxdWUgY2hhbm5lbCBpZGVudGlmaWVyCglDaGFubmVsSWQgc3RyaW5nCgkvLyB0aGUgcmVsYXllciBhZGRyZXNzCglSZWxheWVyIHN0cmluZwoJLy8gdGhlIHBheWVlIGFkZHJlc3MKCVBheWVlIHN0cmluZwp9Cg=="}}),e._v(" "),s("p",[e._v("This message is expected to fail if:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("PortId")]),e._v(" is invalid (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("ChannelId")]),e._v(" is invalid (see "),s("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",target:"_blank",rel:"noopener noreferrer"}},[e._v("24-host naming requirements"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("li",[s("code",[e._v("Relayer")]),e._v(" is an invalid address (see "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/basics/accounts.md#Addresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Addresses"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("li",[s("code",[e._v("Payee")]),e._v(" is an invalid address (see "),s("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/basics/accounts.md#Addresses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK Addresses"),s("OutboundLink")],1),e._v(").")])]),e._v(" "),s("p",[e._v("See below for an example CLI command:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c2ltZCB0eCBpYmMtZmVlIHJlZ2lzdGVyLXBheWVlIHRyYW5zZmVyIGNoYW5uZWwtMCBjb3Ntb3MxcnNwODM3YTRrdnRncDJtNHVxemRnZTB6enU2ZWZxZ3VjbTBxZGggY29zbW9zMTUzbGY0em50cXQzM2E0djBzbTVjeXRyeHlxbjc4cTdrejhqOHg1IC0tZnJvbSBjb3Ntb3MxcnNwODM3YTRrdnRncDJtNHVxemRnZTB6enU2ZWZxZ3VjbTBxZGgK"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);