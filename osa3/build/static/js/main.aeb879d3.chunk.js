(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),u=n.n(l),c=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.name))},m=function(e){return r.a.createElement("div",null,r.a.createElement(o,{input:e.parts[0]}),r.a.createElement(o,{input:e.parts[1]}),r.a.createElement(o,{input:e.parts[2]}))},o=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.input.name," ",e.input.exercises))},i=function(e){for(var t=0,n=0;n<e.input.length;n++)t+=e.input[n].exercises;return r.a.createElement("div",null,r.a.createElement("p",null,"Total ",t," exercises"))},s=function(e){var t=e.course;return r.a.createElement("div",null,r.a.createElement(c,{name:t.name}),r.a.createElement(m,{parts:t.parts}),r.a.createElement(i,{input:t.parts}))},p=n(11),d=n(12),E=n(14),h=n(13),f=n(15),v=n(2),b=n.n(v),w=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(E.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){return n.fetchData()},n.fetchData=function(){return b.a.get("http://calm-mesa-10558.herokuapp.com/api/persons").then(function(e){n.setState({persons:e.data,newName:"",newNumber:""})})},n.handleNameChange=function(e){console.log(e.target.value),n.setState({newName:e.target.value})},n.handleNumberChange=function(e){console.log(e.target.value),n.setState({newNumber:e.target.value})},n.deleteEntry=function(e,t){e.preventDefault(),window.confirm("You sure you want to delete this, m8?")&&(console.log(t),b.a.delete("http://calm-mesa-10558.herokuapp.com/api/persons/"+t).then(function(e){console.log("contact deleted"),n.fetchData()}))},n.addName=function(e){e.preventDefault();var t={name:n.state.newName,number:n.state.newNumber,id:Math.round(1e4*Math.random())};""===t.name||""===t.number?alert("every contact needs both name and number"):-1!==n.state.persons.map(function(e){return e.name}).indexOf(t.name)?(alert("person already on the list"),n.setState({newName:"",newNumber:""})):b.a.post("http://calm-mesa-10558.herokuapp.com/api/persons",t).then(function(e){console.log(e),n.fetchData()})},n.state={persons:[],newName:"",newNumber:""},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(N,{caller:this}),r.a.createElement(g,{caller:this}))}}]),t}(r.a.Component),g=function(e){var t=e.caller;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numerot"),r.a.createElement("table",null,r.a.createElement("tbody",null,t.state.persons.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number," "),r.a.createElement("td",null,r.a.createElement("form",{onSubmit:function(n){return t.deleteEntry(n,e.id)}},r.a.createElement(x,{type:"submit",text:"Poista"}))))}))))},N=function(e){var t=e.caller;e.submit;return r.a.createElement("form",{onSubmit:t.addName},r.a.createElement(y,{caller:t}),r.a.createElement(x,{type:"submit",text:"L\xe4het\xe4"}))},y=function(e){var t=e.caller;return r.a.createElement("div",null,r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:t.state.newName,onChange:t.handleNameChange})),r.a.createElement("div",null,"numero: ",r.a.createElement("input",{value:t.state.newNumber,onChange:t.handleNumberChange})))},x=function(e){var t=e.type,n=e.text;return r.a.createElement("div",null,r.a.createElement("button",{type:t},n))},C=w;u.a.render(r.a.createElement(function(){return r.a.createElement("div",null,r.a.createElement(s,{course:{name:"Superadvanced web and mobile programming",parts:[{name:"Basics of React",exercises:8,id:1},{name:"Using props",exercises:10,id:2},{name:"Component states",exercises:12,id:3}]}}),r.a.createElement(C,null))},null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.aeb879d3.chunk.js.map