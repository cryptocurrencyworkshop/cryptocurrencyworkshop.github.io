(this["webpackJsonp@my-app/react-app"]=this["webpackJsonp@my-app/react-app"]||[]).push([[0],{113:function(e,t,n){},121:function(e,t){},129:function(e,t){},132:function(e,t){},133:function(e,t){},134:function(e,t,n){"use strict";n.r(t);var a,i,s,p,o,r,l,u=n(25),d=(n(113),n(140)),y=n(147),c=n(8),m=n.n(c),b=n(89),f=n.n(b),h=n(59),v=n(35),x=n(150),g=n(39),j=n(40),w=j.a.div(a||(a=Object(g.a)(['\n  align-items: center;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  font-family: "Liberation Mono", "Courier New", monospace;\n  font-size: calc(5px + 2vmin);\n  justify-content: center;\n  margin-top: 40px;\n']))),T=j.a.table(i||(i=Object(g.a)(["\n  caption-side: top;\n  border-collapse: separate;\n  border-spacing: 5px 10px;\n\n  caption-side: bottom;\n  /* empty-cell: show | hide;  */\n  /* empty-cell is a property of table or the cells themselves */\n\n  /* vertical-align: baseline | sub | super | text-top | \n                text-bottom | middle | top | bottom | \n                <percentage> | <length> */\n\n  /* tbody {\n    vertical-align: top;\n  }              */\n  td,\n  /* td,\n  th {\n    border: 1px solid;\n  } */\n\n  td {\n    padding: 5px 30px;\n  }\n\n  tbody tr {\n    :nth-of-type(odd) {\n      // background-color: lightpink;\n    }\n    :hover {\n      background-color: lightpink;\n    }\n  }\n  // thead > tr {\n  //   background-color: #c2c2c2;\n  // }\n  caption {\n    font-size: 0.9em;\n    padding: 5px;\n    font-weight: bold;\n  }\n"]))),O=(j.a.button(s||(s=Object(g.a)(["\n  background-color: white;\n  border: none;\n  border-radius: 8px;\n  color: #282c34;\n  cursor: pointer;\n  font-size: 16px;\n  margin: 0px 20px;\n  padding: 12px 24px;\n  text-align: center;\n  text-decoration: none;\n"]))),j.a.div(p||(p=Object(g.a)(["\n  background-color: #ff5e3a;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh);\n"])))),M=(j.a.header(o||(o=Object(g.a)(["\n  align-items: center;\n  background-color: #282c34;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  min-height: 70px;\n"]))),j.a.img(r||(r=Object(g.a)(["\n  height: 20vmin;\n  margin-bottom: 16px;\n  pointer-events: none;\n"])))),P=(j.a.a.attrs({target:"_blank",rel:"noopener noreferrer"})(l||(l=Object(g.a)(["\n  color: #61dafb;\n  margin-top: 8px;\n"]))),n.p+"static/media/infura.f17f4efa.png"),k={erc20:n(93),ownable:n(94),competition:n(95)},_={ceaErc20:"0xa6dF0C88916f3e2831A329CE46566dDfBe9E74b7",competition:"0x5cEA36C6F25Ad0F59d1BA96e4EE8758D92849611"},E=n(11);var J=function(){var e,t,n,a,i,s=null!==(e=Object(x.a)({contract:new v.a(_.competition,k.competition),method:"isCompetitionEnabled",args:[]}))&&void 0!==e?e:{},p=(s.error,s.value);console.log(p);var o=null!==(t=Object(x.a)({contract:new v.a(_.competition,k.competition),method:"getParticipants",args:[]}))&&void 0!==t?t:{},r=(o.error,o.value);r=r||["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000"];for(var l=[],u=0;u<r.length;u++)for(var d=0;d<r[u].length;d++)l.push(r[u][d]);for(var y=[],c=[],m=[],b=0;b<l.length;b++)y.push({contract:new v.a(_.competition,k.competition),method:"getParticipantPoints",args:[l[b]]}),c.push({contract:new v.a(_.competition,k.competition),method:"isInJail",args:[l[b]]}),m.push({contract:new v.a(_.competition,k.competition),method:"getParticipantName",args:[l[b]]});for(var f=null!==(n=Object(x.b)(y))&&void 0!==n?n:{},h=null!==(a=Object(x.b)(c))&&void 0!==a?a:{},g=null!==(i=Object(x.b)(m))&&void 0!==i?i:{},j=[],J=0;J<f.length;J++)f[J]&&!f[J].error&&j.push(f[J].value);for(var F=[],A=0;A<h.length;A++)h[A]&&!h[A].error&&F.push(h[A].value);var C=[];console.log(g);for(var S=0;S<g.length;S++)g[S]&&!g[S].error&&C.push(g[S].value);var N=[];if(l.length===j.length)for(var I=0;I<l.length;I++)console.log(l[I],j[I].toString(),F[I]),N.push({address:l[I],points:j[I].toString(),jail:F[I].toString(),name:C[I]});var B="Game is OFF";return p&&!0===p[0]&&(B="Game is ON"),Object(E.jsx)(O,{children:Object(E.jsxs)(w,{children:[Object(E.jsx)("h1",{children:Object(E.jsx)("a",{href:"https://ropsten.etherscan.io/address/0x5cEA36C6F25Ad0F59d1BA96e4EE8758D92849611",children:"Game contract"})}),Object(E.jsx)(T,{children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"Competitor"}),Object(E.jsx)("th",{children:"Name"}),Object(E.jsx)("th",{children:"Jail"}),Object(E.jsx)("th",{children:"Points"})]}),N.map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:e.address}),Object(E.jsx)("td",{children:e.name}),Object(E.jsx)("td",{children:e.jail}),Object(E.jsx)("td",{children:e.points})]},t)}))]})}),B,Object(E.jsx)(M,{src:P,alt:"ethereum-logo"})]})})},F={readOnlyChainId:d.e.chainId,readOnlyUrls:Object(u.a)({},d.e.chainId,Object(h.a)("ropsten")),pollingInterval:1e4};f.a.render(Object(E.jsx)(m.a.StrictMode,{children:Object(E.jsx)(y.a,{config:F,children:Object(E.jsx)(J,{})})}),document.getElementById("root"))},93:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},94:function(e){e.exports=JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},95:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_simplePoint","type":"uint256"},{"internalType":"uint256","name":"_blocksToWait","type":"uint256"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPoints","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalPoints","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"PointsAwarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"deductedPoints","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalPoints","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"PointsDeducted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_saved","type":"address"}],"name":"ReleasedFromJail","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_victim","type":"address"}],"name":"SentToJail","type":"event"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"approvedRoots","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"_merkleBranch","type":"bytes"},{"internalType":"address","name":"_deductVictim","type":"address"}],"name":"deductFromRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_deductVictim","type":"address"}],"name":"flattenTheEnemy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"getMerkleRoots","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_participant","type":"address"}],"name":"getParticipantName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_participant","type":"address"}],"name":"getParticipantPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParticipants","outputs":[{"internalType":"address payable[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getRandomPoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable[]","name":"_accounts","type":"address[]"},{"internalType":"string[]","name":"_names","type":"string[]"}],"name":"installParticipants","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"installedParticipants","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCompetitionEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_participant","type":"address"}],"name":"isInJail","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"jail","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kickstartGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"participants","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"points","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"releaseFromJail","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_victim","type":"address"}],"name":"sendToJail","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},[[134,1,2]]]);
//# sourceMappingURL=main.72f01b49.chunk.js.map