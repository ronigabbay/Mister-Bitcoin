(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),o=n(23),s=n.n(o),i=(n(49),n(50),n(11)),u=n(6),l=n(7),h=n(8),p=n(10),m=n(9),d={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=b;e&&e.name&&(e.term=e.name),e&&e.phone&&(e.term=e.phone),e&&e.term&&(console.log("filterBy.term",e.name),a=j(e.term)),t(f(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=b.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=b.findIndex((function(t){return t._id===e}));-1!==a&&b.splice(a,1),t(b)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=b.findIndex((function(t){return e._id===t._id}));-1!==a&&(b[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),b.push(e),t(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},b=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function f(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function j(e){return b.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.includes(e)||t.email.toLocaleLowerCase().includes(e)}))}function v(e){var t=e.contact;return Object(a.jsx)("li",{className:"conact-preview ",children:Object(a.jsxs)(i.b,{className:"flex align-center",to:"/contact/".concat(t._id),children:[Object(a.jsx)("img",{className:"contact-img",src:"https://robohash.org/"+t._id+"?set=set5"}),Object(a.jsxs)("h2",{children:[t.name," "]})]})})}function A(e){var t=e.contacts;return Object(a.jsx)("ul",{className:"contact-list clean-list flex wrap justify-center",children:t.map((function(e){return Object(a.jsx)(v,{contact:e},e._id)}))})}var g=n(5),O=n(18),x=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:""},e.onChangeHandler=function(t){var n=t.target.name,a="number"===t.target.type?+t.target.value:t.target.value;e.setState(Object(O.a)({},n,a),(function(){e.props.onSetFilter(Object(g.a)({},e.state))}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name;e.phone;return Object(a.jsxs)("form",{className:"contact-filter",children:[Object(a.jsx)("label",{htmlFor:""}),Object(a.jsx)("input",{name:"name",value:t,type:"name",placeholder:"Search",onChange:this.onChangeHandler})]})}}]),n}(c.a.Component),C=n(16),w=n(2),S=n.n(w),y=n(4);function k(e){return console.log(e),function(){var t=Object(y.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.getContactById(e);case 2:a=t.sent,console.log(a),n({type:"SET_CONTACT",contact:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var N=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filterBy:null},e.onSetFilter=function(t){console.log("Filter Happend!",t),e.setState({filterBy:t},(function(){e.props.getContacts(e.state.filterBy)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.getContacts(this.state.filterBy)}},{key:"render",value:function(){var e=this.props.contacts;return Object(a.jsxs)("div",{className:"contact-page flex col align-center",children:[Object(a.jsxs)("div",{className:" btn-section flex space-between align-center",children:[Object(a.jsx)(i.b,{className:"add-btn",to:"/contact/edit",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPRSURBVFhH3VhLTxNRFJ5El/ozfCQm6j9wo33QUlcmEI00JuJSRR4LTNwI7UwLCxagCZjgkoWPqGGhPDSQzkzZKIkgJIgSNHEjdKYYQsl4vnobZDwwt3QgyJd8Sds595zTufe8rnJgcUEbOxtWM3ei6exgNG3MhzQ9H0xmCiA+R9PmZzyj7w0hLXNaLNtdxNSxo+Gk3hxJmwuxzqxV/3j2192XPxx1JOd0ZVad7myhSHzGb6307AbJxDqyFtZUqXrTuXsjR4Q6/0BKD4eSemNYM6z4o+l8+5sl58HEujR7iG1DS068d8oOa7oV1DIN0CnUV4ZA2/jJKs2Yvfxw0kq/s1kHymHqre3U9kxakZQxHVTHTggzO0OVpl8k56zmZ9/WOWOVEDrDqm4H1UxMmCsPoYR+LZI28snhHGvADyaGl51IylwJJ/Srwqwcim8uZeT92FIvYsthS/pNijNntQ8tswp3g7BFTlqeZxKRFU2ZMy3Pv/t+5rxIZ7JAgTO1bXQjlSBaOQVedIOT8WJtzwcrpOq3hTubgQRKW5vb6blzg5PxIs5jOGXk4ItwawMh1WhBEuYWytANTkaG8d5pm0plo3BrA7T/C8j23CIZusHJyLCNqhT58kW49QeBhH4m1jFhoSRxi2ToBicjQ/iA2h1MGqeEe4qCrgRFnVsgSzc4GVle759doYC9JdxTlGhndhBdCScsSzc4GVmiC6pOm6+Ee+Qg9W7J0cpKmhucjCxRXqk9mxPuYYv1fJe+ygqX6Dc4GyWin0RbJtxTFHTB3WaBFS7Rb3A2Suw21xxK2GvCvf/AwX2/xdST7e8gQZpBaHPCsnSDk5Fl6wtXmtmPiZp8uincK5U6094vpa66I2tvKnUAFeivKNTcIhm6wcnI8P7rnw4Vjnnh1gbQ4sT7pm1ukQzd4GRkWEezc4COnHBrA2gSEdpoGrmFXnSDk/GiNmpRetmiYQUw8WOo5hZ70Q1OZjvi7NX0vKfB6a/gcAMDC+XET81PF/d8aGp6slgcmi4NDBwS7vDA6IeJf6/HTtgMtxvHhRvbA0M0humdnsdyWPbgXkIoadThWmI33yRmoIhmroQSmSvCbHkIqONRGkXtJp/PJAKCdBZwgxFM6BFhbmc4r2aO4fBiqE6NVr7lGm1pDemKpoyP0C3MVAZENyZ+DNXxvikbFaecsghZVAgkYehAKoFOod4/IIHiGhelCKMhijq6ILRHxStganpBfMZveFbfP7NSvAKmlg5XK1smYb+BYo7REG1RNJ2dK15Gikt0+hM2/Yk5PIPMP4X/4EBRfgMZf0kSNetpswAAAABJRU5ErkJggg=="})}),e&&Object(a.jsx)(x,{onSetFilter:this.onSetFilter})]}),e&&Object(a.jsx)(A,{contacts:e})]})}}]),n}(c.a.Component);var R={getContacts:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.getContacts(e);case 2:a=t.sent,n({type:"SET_CONTACTS",contacts:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},B=Object(C.b)((function(e){return{contacts:e.contactReducer.contacts}}),R)(N),I={storeToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t)||null)},loadFromStorage:function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0},makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},getRandomIntInclusive:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}};var T=n(25),E=n.n(T),M={getUser:function(){var e=I.loadFromStorage(D);return e||U[0]},signup:function(e){var t={name:e,coins:100,moves:[],_id:P(),imgUrl:"https://robohash.org/".concat(e,"?set=set5")};return I.storeToStorage(D,t),U.unshift(t),localStorage.setItem("users",JSON.stringify(U)),t},addMove:function(e,t){return{toId:e._id,to:e.name,at:new Date,amount:t}},saveUser:function(e){I.storeToStorage(D,e),function(e){var t=U.findIndex((function(t){return t._id===e._id}));-1!==t&&(U.splice(t,1,e),localStorage.setItem("users",JSON.stringify(U)))}(e)}},D="userDb",U=function(){var e=JSON.parse(localStorage.getItem("users"));e&&e.length||(e=[],localStorage.setItem("users",JSON.stringify(e)));return e}();function P(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var Y=n(27),V=n.n(Y),z={getRate:function(e){return H.apply(this,arguments)},getMarketPrice:function(){return J.apply(this,arguments)},getConfirmedTransactions:function(){return L.apply(this,arguments)}};function H(){return(H=Object(y.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://blockchain.info/tobtc?currency=USD&value=".concat(t));case 2:return n=e.sent,e.prev=3,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(3),console.log("Had an error: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}function J(){return(J=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(3),console.log("Had an error: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}function L(){return(L=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true");case 2:return t=e.sent,e.prev=3,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(3),console.log("Had an error: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[3,7]])})))).apply(this,arguments)}n(75);function X(e){var t=e.title,n=e.moveList;return console.log(t),console.log(n),Object(a.jsxs)("div",{className:"MoveList",children:["Your Moves"===t&&Object(a.jsx)("h2",{className:"your-moves",children:"Your Moves"}),"Your Moves"===t&&Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsxs)("li",{className:"move-details-details",children:[Object(a.jsxs)("h3",{children:["At: ",E()(e.at).format("MMMM Do YYYY, h:mm:ss a")]})," ",Object(a.jsxs)("h3",{children:["Amount: ",e.amount]}),"  "]},e.at)}))}),"Your Last Moves"===t&&Object(a.jsx)("h2",{className:"your-moves-home",children:"Your Last Moves"}),"Your Last Moves"===t&&Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsxs)("li",{className:"move-details-home",children:[" ",Object(a.jsxs)("h3",{children:["To: ",e.to," "]})," ",Object(a.jsxs)("h3",{children:["At: ",E()(e.at).format("MMMM Do YYYY, h:mm:ss a")]})," ",Object(a.jsxs)("h3",{children:["Amount: ",e.amount]}),"  "]},e.at)}))})]})}function F(){return function(){var e=Object(y.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.getUser();case 3:return n=e.sent,t({type:"SET_USER",user:n}),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}function W(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.addMove(e);case 2:a=t.sent,n({type:"SAVE_USER",newUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}n.p;var G=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={bitcoinRate:null},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log("props",this.props),this.getUser(),this.getRate()}},{key:"getUser",value:function(){var e=Object(y.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadUser();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRate",value:function(){var e=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getRate(1);case 2:t=e.sent,this.setState({bitcoinRate:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.user?Object(a.jsxs)("div",{className:"homePage flex align-center col",children:[Object(a.jsxs)("div",{className:"user-details",children:[this.props.user&&Object(a.jsxs)("div",{children:["  ",Object(a.jsxs)("h1",{children:[Object(a.jsx)("img",{src:this.props.user.imgUrl})," Hello ",this.props.user.name]}),"  ",Object(a.jsxs)("h3",{children:["Your Coins: ",this.props.user.coins]})]}),this.state.bitcoinRate&&Object(a.jsxs)("h3",{children:[" Bitcoin USD Rate: ",this.state.bitcoinRate," "]})]}),this.userMoves&&this.userMoves.length>0&&Object(a.jsx)(X,{title:"Your Last Moves",moveList:this.userMoves})]}):Object(a.jsx)(u.a,{to:"/signup"})}},{key:"userMoves",get:function(){var e=this.props.user,t=[];if(e.moves)for(var n=0;n<e.moves.length;n++)if(t.push(e.moves[n]),t.length>2)return t;return t}}]),n}(c.a.Component),Q={getById:k,loadUser:F,addMove:W},Z=Object(C.b)((function(e){return{contact:e.contactReducer.currContact,user:e.userReducer.user}}),Q)(G),K=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null,amount:""},e.handleChange=function(t){t.preventDefault();var n=+t.target.value;e.setState({amount:n},(function(){console.log(e.state.amount)}))},e.onTransfer=function(t){t.preventDefault();var n=e.state.user;e.state.amount<=n.coins&&(n.coins-=e.state.amount,console.log(n),n.moves.push(M.addMove(e.props.contact,e.state.amount)),M.saveUser(n),console.log(e.props))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.state.user=M.getUser(),console.log(this.state.user)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"transferFunds",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{children:"Amount: "}),Object(a.jsx)("input",{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange}),Object(a.jsx)("button",{onClick:this.onTransfer,children:"Transfer"})]})})}}]),n}(c.a.Component),q=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).goBack=function(){e.props.history.push("/contact")},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(y.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getById(this.props.match.params.id);case 2:return e.sent,e.next=5,this.props.loadUser();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.contact,n=e.user;return!t&&n?Object(a.jsx)("h2",{children:"Loading..."}):Object(a.jsxs)("div",{className:"main-edit",children:[Object(a.jsxs)("div",{className:" edit-btn-section flex space-between",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACDElEQVRYhb2XvWsUQRiHnzmO4xALSSEhiBxWqTVYWUgkYiGksrGIjX+BiIWdiIiIWKZPYS82RtAUFhLwE2wD0cNCJMQQ82Wij8Xdwd3p7s7e7vordz6e3zvvOzM7gUipDeAscA44CbSAI93m78Aq8B54DrwIIfyMnTsLfFS9p34zXmvqfXW8CLiuXlM3coCHtaXeVOujRL1UADysV8auhtpSV0qE97SitrLg4xXB+01MpOX8ZYXwnpbtq4lan4frwJmoPMHvyH7/0mngxnD0E3YqNkb76pz6q8AqbNmfCvVhDvjl7pj9AgZUH/TgDTsHRzS8O26voIE1tVkHpoGxjLwdAFdCCI/6vp1isIaStJQw/xgwXQdmRoATQvgYAUc9SGmeqQFTeeElagr1U0zOR5X6NaUO2ph8y10tI8QMA+tpRXRJbZZhIk01YDuh7TzwuGIT2zXgc0qHqk2s1oC3GZ2qNPE6qBeBJxGdnwGzIYRdAHWeuINoDkgyP4vaVNdTKrVfi72VsPhRvKEeqnUjWoiIBMpNx0IIobMB1OPqTg73ixa7DXcc/j1TbxWYMK/u/LUedq7l5f8Af2dSCtVjartCeNuIP+NJ9UtF8Mmo8rRTlG9KhH8wK/KEmrhtvt0xrD31rkW2rZ2X0ry6mQO82R1zImv+kMPIYeACg8/zRrd5l8Hn+dMQwo+Yef8AzQGZOl50xh8AAAAASUVORK5CYII=",onClick:this.goBack,className:"back-btn"}),Object(a.jsxs)(i.b,{to:"/contact/edit/"+t._id,className:"edit-btn",children:[" ",Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACq0lEQVRYhe3WT4TdVxjG8TPXiJjFGBEVY4waESNqVBYxi6iIGlGjZjEqKouqiqiKGDGLLEpFF9FFFhFVXUREF1lUVUQWoyoqqkZKFtVGRMwiIkbEiBhx1aeL81x+YhJ6/3TTvJt7zzkv3/c875/zK+X/bkODBqBVSnmrlDJVShkppfw1NDT0+6C5Hfh2XFbtKe7gb1zH6KDhU1gNsGO38Qn+xErUGQh8EU9wDeNYwHqC2MDBKLLYb/A2XMBznEQLb+BbPMRmgrgYv2v9hL8Zye9jPwo+xmP8ir34qlEPR/CgX/D3ArqKHcn/SuT+tJPrpKZjX+BRr+AWPo/kpzGMz3LDq5iIX8n+80YAD3tKAcYCWcdcUvBzlDiKjt8oriSoj/ILbezvFj6t9vQtTAb4RO3v8YbfPtxN+03jfbUt/8Byt/D55PY77MSlVPeJxq1Lcr+JrzHSSNXJjt+/BRcsRbpl7MlN7mCm4TeG76PIBwnyOh7hULe3HlZ7+WlknAvgB42Rilm1DVfTCbNYw2+Y7BY+mpZaw0wKqY0vG+3VwqlIfE59A5ayPo9t3cLHU0C38v9Y4McaPjvVkfs46uxId2zoZdRid+Skjs7lwI82fA7iAW6mGw5EqVVM9QJ/N+3Szu1uJpDlnLfUSdbG2Uh+upGC7iRvBHA20N1ZH1ef0IIJdeCs4zB24aes53sCB1YCW2rsfYNn2d/AvQRyOO11Q8ZuPwI4EGknGnvT6ofE8aTknvqytXEGw32BB/Yjrrzk7O1UO/Ux6W6wvAI+m1vNbHE2F/mlBnb1G17wCy5vcbZdHaciff8kb0COpNAmsx7Dh+pTupGzC30HB7YQwGaKaiU9va6+dgsYGRR8MXnv2FpkfmcgUm8RwFoDPI+xgUNfCOCQ+vHw34JfW+wfnwSMj6o0rrgAAAAASUVORK5CYII=",alt:"",srcset:""})," "]})]}),Object(a.jsxs)("div",{className:"contact-details flex justify-center align-center col",children:[Object(a.jsxs)("h2",{children:[t.name," "]}),Object(a.jsx)("img",{className:"contact-img",src:"https://robohash.org/"+t._id+"?set=set5"}),Object(a.jsxs)("h3",{children:["Phone: ",t.phone]}),Object(a.jsx)(K,{contact:t}),this.userMoves.length>0&&Object(a.jsx)(X,{title:"Your Moves",moveList:this.userMoves})]})]})}},{key:"userMoves",get:function(){var e=this;return this.props.user.moves.filter((function(t){return t.toId===e.props.contact._id}))}}]),n}(c.a.Component),_={getById:k,loadUser:F,addMove:W},$=Object(C.b)((function(e){return{contact:e.contactReducer.currContact,user:e.userReducer.user}}),_)(q),ee=n(21);function te(e){var t=e.marketPrice,n=e.confirmedTransactions;return Object(a.jsxs)("div",{className:"chart-container",children:[Object(a.jsxs)("div",{className:"chart chart-marketPrice",children:[Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)(ee.Sparklines,{className:"Sparklines",data:t.values.map((function(e){return e.y})),limit:100,width:200,height:55,"margin-bottom":5,children:Object(a.jsx)(ee.SparklinesLine,{color:"black"})}),Object(a.jsx)("h4",{children:t.description})]}),Object(a.jsxs)("div",{className:" chart chart-confirmedTransactions",children:[Object(a.jsx)("h2",{children:n.name}),Object(a.jsx)(ee.Sparklines,{className:"Sparklines",data:n.values.map((function(e){return e.y})),limit:100,width:200,height:55,"margin-bottom":5,children:Object(a.jsx)(ee.SparklinesLine,{color:"black"})}),Object(a.jsx)("h4",{children:n.description})]})]})}var ne=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={marketPrice:null,confirmedTransactions:null},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMarketPrice(),this.getConfirmedTransactions()}},{key:"getMarketPrice",value:function(){var e=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getMarketPrice();case 2:t=e.sent,this.setState({marketPrice:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getConfirmedTransactions",value:function(){var e=Object(y.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getConfirmedTransactions();case 2:t=e.sent,this.setState({confirmedTransactions:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.marketPrice,n=e.confirmedTransactions;return Object(a.jsx)("div",{children:t&&n&&Object(a.jsx)(te,{marketPrice:t,confirmedTransactions:n})})}}]),n}(c.a.Component),ae=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:{name:"",phone:"",email:""}},e.handleChange=function(t){var n=t.target.name,a="number"===t.target?+t.target.value:t.target.value;e.setState((function(e){var t=e.contact;return{contact:Object(g.a)(Object(g.a)({},t),{},Object(O.a)({},n,a))}}))},e.onSaveContact=function(){var t=Object(y.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),console.log("this.props.connect",e.props.contact),!e.props.match.params){t.next=7;break}return t.next=5,e.props.updateContact(e.state.contact);case 5:t.next=9;break;case 7:return t.next=9,e.props.addContact(e.state.contact);case 9:e.props.history.push("/contact");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onDeleteContact=Object(y.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.props.match.params.id),n=e.props.match.params.id,t.next=4,e.props.removeContact(n);case 4:e.props.history.push("/contact");case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(y.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,console.log(t),!t){e.next=8;break}return e.next=5,d.getContactById(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,d.getEmptyContact();case 10:e.t0=e.sent;case 11:(n=e.t0)?this.setState({contact:n}):this.setState({errMsg:"Contact Not Found!"});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contact,t=e.name,n=e.phone,r=e.email;return Object(a.jsx)("div",{className:"edit-container",children:Object(a.jsxs)("form",{className:"edit-form flex align-center justify-center col ",onSubmit:this.onSaveContact,children:[Object(a.jsx)("label",{className:"edit-label",children:"Name:  "}),Object(a.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{className:"edit-label",children:"Phone: "}),Object(a.jsx)("input",{type:"number",name:"phone",value:n,onChange:this.handleChange}),Object(a.jsx)("label",{className:"edit-label",children:"Email: "}),Object(a.jsx)("input",{type:"email",name:"email",value:r,onChange:this.handleChange}),Object(a.jsxs)("div",{className:"flex align-center",children:[this.props.match.params.id&&Object(a.jsx)("img",{className:"delete-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACD0lEQVRYhe2XwYtPURTHP+d1Qxoa0jRJkzTNSpKksNEoTVaShWRtSvIfWPsbLC1koewokZWNjZUsRTKlDNIQmXlfi3feuN68N+8+834vyrdu997vOZ1z7jn39O6DDpA0IemGpDeSFn189PmtpJuSprrY7OJ8j6TXasc7STOpdq1DAHeAc759AjwHloHMxwww6/LHZnYy1XaK862SvvsJ70lq0rsVZWIyxXbWYCjEA9gNbHLxQyBUdVzvQWRmb43OGl+/lUDSOPAU2FcTXLnPEw9V1cuBBeComS1UlUvsp6hl4Fdts4pelU/VC8AUcDh2GMqFpDlgvuV0fWBeUjCzu2WUJQ4BZwYI4DRwvNyESPCJokYBmHBuCfi6QYdbgO2+fk/RuouN2pIySSveSlc26BxJF6LW3FmV17bhkGgKII/lksYk3fZxzLnpiDvg3MGIm4xtVOw2w0vww1N21bldURrPO3ck4k45Nxdx085djLjx1AwMhv8BtAXQR4DrXsK2Lhg5/voSjNzHEHegs4NR1j/5EvaJf68Eg/pI+hr2iDV3INRp1cg/ADt8Xb6QnkXcks+PIu5zio+2ALYBmFlO8WRbhZktp3DAWKcAzAxJLygeqZclZcAXivSVKWxq1SyaM2AzcMm5l8C39YJZhaTZ6FHSB1Ykna3z1fhzKukEcJ3iR+VPL2MOvAKumdn9OoWfDuzME+CFdPkAAAAASUVORK5CYII=",alt:"",srcset:"",onClick:this.onDeleteContact}),Object(a.jsx)("img",{onClick:this.onSaveContact,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABpElEQVRYhc2XsUoDQRCGvz1EJFiICFqkEAurICIWVoKVPoWlhZ1ltAwRxEIsfA0t7DVgIVZ2IoLiAwhJYRVCfovbJJfN3ZGVuOcPy93NMDM/M7M7twZA0hpQB9aBaSCyi8TTRddD/gWcGGOuXYWRVAEegVlHdwdc5ARKQ5J0BJSAKlCx8lNLZGAh6Ubp2PIIjKRtSTVJdbsWrPzA8XslacjwPYPApieBmmO/auX7Kb77JCLimqfBJ/U9X+P6OSTuOaZyDH3h26zHkp4jS8LHcJI4S263IjCfFzxEBsjLQJDM5BHI6o2JE8jCiqevOrCYWB9WvpxnZCQ1gbkU3TfQANrE/fCbnigBe2Rns5VHIARaRW5BoNgzABitTQvYAT4Z1H1SMwFgCbgHyn2JpGZiSj15BvOGpNtEvKbLtvPXBHAyWgSBIbgEgpz/eQRCYKQE3SxlCLgEguPflSA4Ioa3XvCMFJGByP1oZylDIAJeEt8zAWImY7wZSRvAA/HfSxs4Ip6GHdKn4Tgli5z33ioDlzZWB9g1APYeeE58PQ+BV6BqjGn8AB+k+ufwPvUJAAAAAElFTkSuQmCC",className:"save-img"}),Object(a.jsx)("button",{className:"save-btn",children:" "})]})]})})}}]),n}(c.a.Component),re={removeContact:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.deleteContact(e);case 3:n({type:"REMOVE_CONTACT",contactId:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("ERROR!");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.saveContact(e);case 3:a=t.sent,n({type:"ADD_CONTACT",contact:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ERROR!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},getById:k,getEmptyContact:function(){return function(){var e=Object(y.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.getEmptyContact();case 2:n=e.sent,t({type:"SET_CONTACT",contact:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateContact:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.saveContact(e);case 3:a=t.sent,n({type:"UPDATE_CONTACT",contact:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("ERROR!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},ce=Object(C.b)(null,re)(ae),oe=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"app-header",children:[Object(a.jsx)(i.c,{to:"/contact",children:"Contacts"}),Object(a.jsx)(i.c,{to:"/statistic",children:"Statictic"}),Object(a.jsx)(i.c,{to:"/signup",children:"Signup"}),Object(a.jsx)(i.c,{exact:!0,to:"/",children:"Home"})]})}}]),n}(r.Component),se=(Object(u.g)(oe),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{name:""}},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState((function(e){var t=e.user;return{user:Object(g.a)(Object(g.a)({},t),{},Object(O.a)({},n,a))}}))},e.onSignup=function(t){t.preventDefault(),e.props.addUser(e.state.user.name),e.props.history.push("/contact")},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.name;return Object(a.jsxs)("form",{className:"signUp-form align-center justify-center flex col",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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"}),Object(a.jsx)("label",{className:"signup-label",htmlFor:"name",children:"Please entar your name"}),Object(a.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Enter Your Name",onChange:this.handleChange}),Object(a.jsx)("button",{className:"signup-btn",onClick:this.onSignup,children:"Sign Up"})]})}}]),n}(c.a.Component)),ie={addUser:function(e){return function(){var t=Object(y.a)(S.a.mark((function t(n){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.signup(e);case 2:a=t.sent,n({type:"SAVE_USER",newUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ue=Object(C.b)(null,ie)(se);function le(){return Object(a.jsx)("div",{className:"App flex col align-center",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(oe,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{path:"/contact/edit/:id?",component:ce}),Object(a.jsx)(u.b,{path:"/contact/:id",component:$}),Object(a.jsx)(u.b,{path:"/contact",component:B}),Object(a.jsx)(u.b,{path:"/signup",component:ue}),Object(a.jsx)(u.b,{path:"/statistic",component:ne}),Object(a.jsx)(u.b,{path:"/",component:Z})]})]})})}var he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},pe=n(19),me=n(43),de=n(26),be={contacts:[],currContact:null};var fe={users:[],user:localStorage.getItem("userDb")||null};var je=Object(pe.c)({contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(g.a)(Object(g.a)({},e),{},{contacts:t.contacts});case"SET_CONTACT":return Object(g.a)(Object(g.a)({},e),{},{currContact:t.contact});case"REMOVE_CONTACT":return Object(g.a)(Object(g.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});case"ADD_CONTACT":return Object(g.a)(Object(g.a)({},e),{},{contacts:[].concat(Object(de.a)(e.contacts),[t.contact])});case"UPDATE_CONTACT":return Object(g.a)(Object(g.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_USER":return Object(g.a)(Object(g.a)({},e),{},{user:t.user});case"SAVE_USER":return Object(g.a)(Object(g.a)({},e),{},{users:[].concat(Object(de.a)(e.users),[t.newUser])});default:return e}}}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,Ae=Object(pe.e)(je,ve(Object(pe.a)(me.a)));n(76);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C.a,{store:Ae,children:Object(a.jsx)(le,{})})}),document.getElementById("root")),he()}},[[77,1,2]]]);
//# sourceMappingURL=main.2996922b.chunk.js.map