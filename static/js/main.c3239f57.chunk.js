(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),s=(n(12),n(1)),i=n(2),l=n(4),h=n(3),u=function(e){e.robots;throw new Error("Noooooo")},d=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba ba--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"700px"}},e.children)},b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),n}(o.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.email.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(m,null,r.a.createElement(b,null,r.a.createElement(u,{robots:o})))):r.a.createElement("h1",null,"Loading")}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c3239f57.chunk.js.map