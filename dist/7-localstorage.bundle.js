webpackJsonp([3],[function(t,e,n){(function(t,e){"use strict";var r=n(4),o=n(10),i=r.createClass({displayName:"LocalStorageLayout",mixins:[r.addons.PureRenderMixin],getDefaultProps:function(){var e={};if(t.localStorage)try{e=JSON.parse(t.localStorage.getItem("rgl-7"))||{}}catch(n){}return{className:"layout",cols:12,rowHeight:30,layout:e.layout||[]}},getInitialState:function(){return{}},componentDidUpdate:function(){this._saveToLocalStorage()},resetLayout:function(){this.setState({layout:[]})},_saveToLocalStorage:function(){t.localStorage&&t.localStorage.setItem("rgl-7",JSON.stringify({layout:this.state.layout}))},onLayoutChange:function(t){console.log("layout changed",t),this.props.onLayoutChange(t),this.setState({layout:t})},render:function(){return r.createElement("div",null,r.createElement("button",{onClick:this.resetLayout},"Reset Layout"),r.createElement(o,r.__spread({},this.props,{onLayoutChange:this.onLayoutChange}),r.createElement("div",{key:1,_grid:{w:2,h:3,x:0,y:0}},r.createElement("span",{className:"text"},"1")),r.createElement("div",{key:2,_grid:{w:2,h:3,x:2,y:0}},r.createElement("span",{className:"text"},"2")),r.createElement("div",{key:3,_grid:{w:2,h:3,x:4,y:0}},r.createElement("span",{className:"text"},"3")),r.createElement("div",{key:4,_grid:{w:2,h:3,x:6,y:0}},r.createElement("span",{className:"text"},"4")),r.createElement("div",{key:5,_grid:{w:2,h:3,x:8,y:0}},r.createElement("span",{className:"text"},"5"))))}});e.exports=i,n.c[0]===e&&n(11)(e.exports)}).call(e,function(){return this}(),n(9)(t))}]);