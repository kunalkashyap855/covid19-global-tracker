(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__1LnRW",card:"Cards_card__1K1kI",infected:"Cards_infected__3-phO",recovered:"Cards_recovered__3xmzi",deaths:"Cards_deaths__2BG-S"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),s=a(6),u=a.n(s),i=a(10),l=a(74),d=a(75),m=a(86),p=a(85),f=a(32),v=a.n(f),h="https://covid19.mathdro.id/api",b=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h,t&&(a="".concat(h,"/countries/").concat(t)),e.prev=2,e.next=5,v.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=a(225),x=a(230),C=a(226),_=a(227),O=a(33),k=a.n(O),j=a(34),w=a.n(j),N=a(13),D=a.n(N),S=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths;t.lastUpdate;return a?r.a.createElement("div",{className:D.a.container},r.a.createElement(y.a,{container:!0,spacinf:3,justify:"center"},r.a.createElement(y.a,{item:!0,component:x.a,xs:12,md:3,className:w()(D.a.card,D.a.infected)},r.a.createElement(C.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(_.a,{variant:"h5"},r.a.createElement(k.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(_.a,{variant:"body2"},"Number of confirmed cases of COVID-19"))),r.a.createElement(y.a,{item:!0,component:x.a,xs:12,md:3,className:w()(D.a.card,D.a.recovered)},r.a.createElement(C.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(_.a,{variant:"h5"},r.a.createElement(k.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(_.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(y.a,{item:!0,component:x.a,xs:12,md:3,className:w()(D.a.card,D.a.deaths)},r.a.createElement(C.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(_.a,{variant:"h5"},r.a.createElement(k.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(_.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},I=a(31),U=a(45),A=a(81),B=a.n(A),V=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)([]),d=Object(I.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(U.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:B.a.container},s?v:f)},L=a(229),R=a(228),z=a(82),G=a.n(z),J=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(I.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(L.a,{className:G.a.formControl},r.a.createElement(R.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},P=a(83),q=a.n(P),F=function(e){var t=e.data.lastUpdate,a=new Date(t).toUTCString().replace(" 2020",",").slice(5);return r.a.createElement("div",{className:q.a.container},r.a.createElement(_.a,{color:"textSecondary"},r.a.createElement("strong",null,a)))},K=a(46),M=a.n(K),T=a(84),W=a.n(T),X=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:M.a.container},r.a.createElement("img",{className:M.a.image,src:W.a,alt:"COVID-19"}),r.a.createElement(F,{data:t}),r.a.createElement(S,{data:t}),r.a.createElement(J,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__E3fsq",image:"App_image__2sYAF"}},81:function(e,t,a){e.exports={container:"Chart_container__1AzXd"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3k7ll"}},83:function(e,t,a){e.exports={container:"LastUpdated_container__2yEcZ"}},84:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.927d5a03.chunk.js.map