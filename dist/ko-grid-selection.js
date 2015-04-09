/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function u(p,q){return function(h){return h}(function(h,k,l){function r(c){var e=window.document.createElement("input");e.className="ko-grid-selection-element";e.type=c?"checkbox":"radio";e.tabIndex=-1;return e}l.defineExtension("ko-grid-selection",{r:function(c,e,b){function h(){t?(g={},f([])):b.data.source.streamValues(function(a){return a.filteredBy(b.data.predicate)}).then(function(a){return a.reduce(function(a,d){var c=b.data.valueSelector(d[m]);a.k.push(c);a.predicate[c]=!0;return a},{k:[],
predicate:{}})}).then(function(a){g=a.predicate;f(a.k)})}function l(a,c,d){a=b.data.observableValueSelector(k.unwrap(d[m]));n||(g={},f().length=0);g[a]?(delete g[a],f.remove(a)):(g[a]=!0,f.push(a))}var n=!(!c.allowMultiSelection&&!e.allowMultiSelection);e=!(!c.evaluateRowClicks&&!e.evaluateRowClicks);var f=c.selectedEntriesIds||k.observableArray([]),p=c.selectedEntryId||k.observable(null),t=!1;c=b.columns.add({key:"selection",label:"",width:b.layout.determineCellDimensions(r(n)).width+"px"});var v=
b.headers.forColumn(c),g={},m=b.primaryKey;c.overrideValueBinding(function(){return{init:function(a){a.appendChild(r(n))},update:function(a,c,d){f();a.firstChild.checked=!!g[b.data.valueSelector(d[m])]}}});var q=v.element.subscribe(function(a){if(n&&a){var b=r(!0);a.appendChild(b);a.addEventListener("click",function(b){b.target===a&&(b.preventDefault(),h())})}});b.headers.onColumnHeaderClick(".ko-grid-selection-element",function(a){a.preventApplicationButAllowBrowserDefault();h()});if(e)b.data.onCellClick(l);
else b.data.onCellClick(".ko-grid-selection-element",l);b.data.rows.installClassifier(function(a){f();return g[b.data.observableValueSelector(k.unwrap(a[m]))]?["selected"]:[]});var w=k.computed(function(){var a=f().length,c=b.data.view.filteredSize();p(a?f()[a-1]:null);t=!!a&&a===c;var d=v.element();if(d=d&&d.querySelector(".ko-grid-selection-element"))d.checked=t,d.F=a>c});this.dispose=function(){q.dispose();w.dispose()}}});return l.declareExtensionAlias("selection","ko-grid-selection")}({},q,p))}
"function"===typeof define&&define.amd?define(["ko-grid","knockout","ko-data-source","ko-indexed-repeat"],u):window["ko-grid-selection"]=u(window.ko.bindingHandlers.grid,window.ko);