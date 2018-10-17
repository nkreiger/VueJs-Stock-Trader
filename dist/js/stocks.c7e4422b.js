(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stocks"],{"3b7b":function(t,s,n){},"462f":function(t,s,n){"use strict";var c=n("d5c7"),e=n.n(c);e.a},"8f2b":function(t,s,n){"use strict";n.r(s);var c=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"row"},t._l(t.stocks,function(t,s){return n("app-stock",{key:s,attrs:{stock:t}})}))},e=[],i=n("a697"),u={components:{appStock:i["default"]},computed:{stocks:function(){return this.$store.getters.stocks}}},o=u,a=(n("cfae"),n("2877")),r=Object(a["a"])(o,c,e,!1,null,"2f8bf7df",null);r.options.__file="Stocks.vue";s["default"]=r.exports},a697:function(t,s,n){"use strict";n.r(s);var c=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",{staticClass:"col-sm-6 col-md-4"},[n("div",{staticClass:"card border-success"},[n("div",{staticClass:"card-header"},[n("h3",{staticClass:"card-title"},[t._v("\n          "+t._s(t.stock.name)+"\n          "),n("small",[t._v("(Price: "+t._s(t.stock.price)+")")])])]),n("div",{staticClass:"card-body text-success"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"form-control",class:{danger:t.insufficientFunds},attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(s){s.target.composing||(t.quantity=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),n("br"),n("button",{staticClass:"btn btn-success",attrs:{disabled:t.insufficientFunds||t.quantity<=0||!Number.isInteger(t.quantity)},on:{click:t.buyStock}},[t._v("\n          "+t._s(t.insufficientFunds?"Insufficient Funds":"Buy")+"\n        ")])])])])])},e=[],i={props:["stock"],data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};console.log("order dispatched"),this.$store.dispatch("buyStock",t),this.quantity=0}}},u=i,o=(n("462f"),n("2877")),a=Object(o["a"])(u,c,e,!1,null,"45ec8c5f",null);a.options.__file="Stock.vue";s["default"]=a.exports},cfae:function(t,s,n){"use strict";var c=n("3b7b"),e=n.n(c);e.a},d5c7:function(t,s,n){}}]);
//# sourceMappingURL=stocks.c7e4422b.js.map