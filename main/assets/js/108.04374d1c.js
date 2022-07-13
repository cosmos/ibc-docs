(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{640:function(e,n,a){"use strict";a.r(n);var t=a(0),o=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"migrating-from-ibc-go-v3-to-v4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-ibc-go-v3-to-v4"}},[e._v("#")]),e._v(" Migrating from ibc-go v3 to v4")]),e._v(" "),a("p",[e._v("This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here.")]),e._v(" "),a("p",[e._v("There are four sections based on the four potential user groups of this document:")]),e._v(" "),a("ul",[a("li",[e._v("Chains")]),e._v(" "),a("li",[e._v("IBC Apps")]),e._v(" "),a("li",[e._v("Relayers")]),e._v(" "),a("li",[e._v("IBC Light Clients")])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" ibc-go supports golang semantic versioning and therefore all imports must be updated to bump the version number on major releases.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Z2l0aHViLmNvbS9jb3Ntb3MvaWJjLWdvL3YzIC0mZ3Q7IGdpdGh1Yi5jb20vY29zbW9zL2liYy1nby92NAo="}}),e._v(" "),a("p",[e._v("No genesis or in-place migrations required when upgrading from v1 or v2 of ibc-go.")]),e._v(" "),a("h2",{attrs:{id:"chains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chains"}},[e._v("#")]),e._v(" Chains")]),e._v(" "),a("ul",[a("li",[e._v("No relevant changes were made in this release.")])]),e._v(" "),a("h2",{attrs:{id:"ibc-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-apps"}},[e._v("#")]),e._v(" IBC Apps")]),e._v(" "),a("h3",{attrs:{id:"ics03-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics03-connection"}},[e._v("#")]),e._v(" ICS03 - Connection")]),e._v(" "),a("p",[e._v("Crossing hellos have been removed from 03-connection handshake negotiation.\n"),a("code",[e._v("PreviousConnectionId")]),e._v(" in "),a("code",[e._v("MsgConnectionOpenTry")]),e._v(" has been deprecated and is no longer used by core IBC.")]),e._v(" "),a("h3",{attrs:{id:"ics04-channel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics04-channel"}},[e._v("#")]),e._v(" ICS04 - Channel")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("WriteAcknowledgement")]),e._v(" API now takes the "),a("code",[e._v("exported.Acknowledgement")]),e._v(" type instead of passing in the acknowledgement byte array directly.\nThis is an API breaking change and as such IBC application developers will have to update any calls to "),a("code",[e._v("WriteAcknowledgement")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("OnChanOpenInit")]),e._v(" application callback has been modified.\nThe return signature now includes the application version as detailed in the latest IBC "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/pull/629",target:"_blank",rel:"noopener noreferrer"}},[e._v("spec changes"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("NewErrorAcknowledgement")]),e._v(" method signature has changed.\nIt now accepts an "),a("code",[e._v("error")]),e._v(" rather than a "),a("code",[e._v("string")]),e._v(". This was done in order to prevent accidental state changes.\nAll error acknowledgements now contain a deterministic ABCI code and error message. It is the responsibility of the application developer to emit error details in events.")]),e._v(" "),a("p",[e._v("Crossing hellos have been removed from 04-channel handshake negotiation.\nIBC Applications no longer need to account from already claimed capabilities in the "),a("code",[e._v("OnChanOpenTry")]),e._v(" callback. The capability provided by core IBC must be able to be claimed with error.\n"),a("code",[e._v("PreviousChannelId")]),e._v(" in "),a("code",[e._v("MsgChannelOpenTry")]),e._v(" has been deprecated and is no longer used by core IBC.")]),e._v(" "),a("h3",{attrs:{id:"ics27-interchain-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ics27-interchain-accounts"}},[e._v("#")]),e._v(" ICS27 - Interchain Accounts")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("RegisterInterchainAccount")]),e._v(" API has been modified to include an additional "),a("code",[e._v("version")]),e._v(" argument. This change has been made in order to support ICS29 fee middleware, for relayer incentivization of ICS27 packets.\nConsumers of the "),a("code",[e._v("RegisterInterchainAccount")]),e._v(" are now expected to build the appropriate JSON encoded version string themselves and pass it accordingly.\nThis should be constructed within the interchain accounts authentication module which leverages the APIs exposed via the interchain accounts "),a("code",[e._v("controllerKeeper")]),e._v(". If an empty string is passed in the "),a("code",[e._v("version")]),e._v(" argument, then the version will be initialized to a default value in the "),a("code",[e._v("OnChanOpenInit")]),e._v(" callback of the controller's handler, so that channel handshake can proceed.")]),e._v(" "),a("p",[e._v("The following code snippet illustrates how to construct an appropriate interchain accounts "),a("code",[e._v("Metadata")]),e._v(" and encode it as a JSON bytestring:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgICBWZXJzaW9uOiAgICAgICAgICAgICAgICBpY2F0eXBlcy5WZXJzaW9uLAogICAgQ29udHJvbGxlckNvbm5lY3Rpb25JZDogY29udHJvbGxlckNvbm5lY3Rpb25JRCwKICAgIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgICBFbmNvZGluZzogICAgICAgICAgICAgICBpY2F0eXBlcy5FbmNvZGluZ1Byb3RvYnVmLAogICAgVHhUeXBlOiAgICAgICAgICAgICAgICAgaWNhdHlwZXMuVHhUeXBlU0RLTXVsdGlNc2csCn0KCmFwcFZlcnNpb24sIGVyciA6PSBpY2F0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtpY2FNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrLmljYUNvbnRyb2xsZXJLZWVwZXIuUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudChjdHgsIG1zZy5Db25uZWN0aW9uSWQsIG1zZy5Pd25lciwgc3RyaW5nKGFwcFZlcnNpb24pKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0K"}}),e._v(" "),a("p",[e._v("Similarly, if the application stack is configured to route through ICS29 fee middleware and a fee enabled channel is desired, construct the appropriate ICS29 "),a("code",[e._v("Metadata")]),e._v(" type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aWNhTWV0YWRhdGEgOj0gaWNhdHlwZXMuTWV0YWRhdGF7CiAgICBWZXJzaW9uOiAgICAgICAgICAgICAgICBpY2F0eXBlcy5WZXJzaW9uLAogICAgQ29udHJvbGxlckNvbm5lY3Rpb25JZDogY29udHJvbGxlckNvbm5lY3Rpb25JRCwKICAgIEhvc3RDb25uZWN0aW9uSWQ6ICAgICAgIGhvc3RDb25uZWN0aW9uSUQsCiAgICBFbmNvZGluZzogICAgICAgICAgICAgICBpY2F0eXBlcy5FbmNvZGluZ1Byb3RvYnVmLAogICAgVHhUeXBlOiAgICAgICAgICAgICAgICAgaWNhdHlwZXMuVHhUeXBlU0RLTXVsdGlNc2csCn0KCmFwcFZlcnNpb24sIGVyciA6PSBpY2F0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtpY2FNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmZlZU1ldGFkYXRhIDo9IGZlZXR5cGVzLk1ldGFkYXRhewogICAgQXBwVmVyc2lvbjogc3RyaW5nKGFwcFZlcnNpb24pLAogICAgRmVlVmVyc2lvbjogZmVldHlwZXMuVmVyc2lvbiwKfQoKZmVlRW5hYmxlZFZlcnNpb24sIGVyciA6PSBmZWV0eXBlcy5Nb2R1bGVDZGMuTWFyc2hhbEpTT04oJmFtcDtmZWVNZXRhZGF0YSkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KCmlmIGVyciA6PSBrLmljYUNvbnRyb2xsZXJLZWVwZXIuUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudChjdHgsIG1zZy5Db25uZWN0aW9uSWQsIG1zZy5Pd25lciwgc3RyaW5nKGZlZUVuYWJsZWRWZXJzaW9uKSk7IGVyciAhPSBuaWwgewogICAgcmV0dXJuIGVycgp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"relayers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relayers"}},[e._v("#")]),e._v(" Relayers")]),e._v(" "),a("p",[e._v("When using the "),a("code",[e._v("DenomTrace")]),e._v(" gRPC, the full IBC denomination with the "),a("code",[e._v("ibc/")]),e._v(" prefix may now be passed in.")]),e._v(" "),a("p",[e._v("Crossing hellos are no longer supported by core IBC for 03-connection and 04-channel. The handshake should be completed in the logical 4 step process (INIT, TRY, ACK, CONFIRM).")])],1)}),[],!1,null,null,null);n.default=o.exports}}]);