(this.webpackJsonpd20organizer=this.webpackJsonpd20organizer||[]).push([[0],{27:function(e,a,t){e.exports=t(39)},37:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),s=t.n(r),l=t(6),i=t(8),u=(t(36),t(37),t(9)),f=t(10),m=t(2),o=function(e){return(e>0?"+":"")+e},d={attack:{string:"ATK",getter:o},ac:{string:"AC",getter:function(e){return e}},damage:{string:"DMG",getter:o}},_=function(e){var a=e.items,t=e.selected,n=e.keyProp,r=void 0===n?"code":n,s=e.nameGetter,l=e.descriptionGetter,i=e.onItemClick;return c.a.createElement("div",{className:"multiselect"},c.a.createElement("div",{className:"multiselect__wrapper"},a.map((function(e){var a="fa "+(-1!==t.indexOf(e[r])?"fa-square":"fa-square-o");return c.a.createElement("div",{className:"multiselect__item {isSelected ? 'multiselect__item--selected' : ''}",onClick:function(){i(e)},key:e[r]},c.a.createElement("div",{className:"multiselect__item-icon"},c.a.createElement("i",{className:a})),c.a.createElement("div",{className:"multiselect__item-name"},s(e)),c.a.createElement("div",{className:"multiselect__item-description"},l(e)))}))))},b={currentCharacterUpdated:function(e){return{type:"CURRENT_CHARACTER_UPDATED",payload:e}},currentCharacterBuffToggle:function(e){return{type:"CURRENT_CHARACTER_BUFF_TOGGLE",payload:e}}},E=Object(l.b)((function(e){return{buffs:e.buffs,currentCharacter:e.currentCharacter,currentResult:e.currentResult}}),b)((function(e){var a=e.buffs,t=e.currentCharacter,n=e.currentResult,r=e.currentCharacterUpdated,s=e.currentCharacterBuffToggle,l=function(e){return function(a){var n=a.target.value.replace(/[^\d.-]/g,"");if("-"!==n&&"0-"!==n){var c=Object(m.a)({},t,{stats:Object(m.a)({},t.stats,Object(f.a)({},e,+n))});r(c)}}};return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page__wrapper"},c.a.createElement("div",{className:"page__title"},"Calculator"),c.a.createElement("div",{className:"page__section"},c.a.createElement("div",{className:"charedit"},c.a.createElement("div",{className:"charedit__title"},t.name),c.a.createElement("div",{className:"charedit__stats"},Object.keys(t.stats).map((function(e){var a="charedit__stats-bonus ";return n&&n.delta&&(n.delta[e]>0?a+="charedit__stats-bonus--positive":n.delta[e]<0&&(a+="charedit__stats-bonus--negative")),c.a.createElement("div",{className:"charedit__stats-item",key:e},c.a.createElement("div",{className:"charedit__stats-label"},d[e].string,":"),c.a.createElement("div",{className:"charedit__stats-content"},c.a.createElement("div",{className:"charedit__stats-rawval"},c.a.createElement("input",{value:t.stats[e],onChange:l(e),type:"text"})),n.delta&&c.a.createElement("div",{className:a},n.delta?d[e].getter(n.delta[e]):""),c.a.createElement("div",{className:"charedit__stats-result"},n.stats?d[e].getter(n.stats[e]):"")))}))))),c.a.createElement("div",{className:"page__section page__section--grower page__section--nopadding"},c.a.createElement(_,{items:a,selected:t.buffs,keyProp:"code",nameGetter:function(e){return e.name},descriptionGetter:function(e){return Object.keys(e.bonuses).filter((function(a){return e.bonuses[a]})).map((function(a){return d[a].string+": "+d[a].getter(e.bonuses[a])})).join(", ")},onItemClick:function(e){s(e.code)}}))))})),p=function(e){var a=e.buff,t=e.onDelete,n=e.onEdit;return c.a.createElement("div",{className:"buff-item"},c.a.createElement("div",{className:"buff-item__wrapper"},c.a.createElement("div",{className:"buff-item__header"},c.a.createElement("div",{className:"buff-item__title"},a.name),c.a.createElement("div",{className:"buff-item__actions"},c.a.createElement("div",{className:"buff-item__action buff-item__action--delete",onClick:function(){t(a)}},c.a.createElement("i",{className:"fa fa-trash"})),c.a.createElement("div",{className:"buff-item__action buff-item__action--edit",onClick:function(){n(a)}},c.a.createElement("i",{className:"fa fa-pencil"})))),c.a.createElement("div",{className:"buff-item__content"},c.a.createElement("div",{className:"buff-item__stat-list"},Object.keys(d).map((function(e){var t=a.bonuses?a.bonuses[e]:null,n=a.multipliers?a.multipliers[e]:null,r=!!t&&o(t)||n||!1||null,s="buff-item__stat ";return t>0||n>1?s+="buff-item__stat--positive":(t<0||n>0&&n<1)&&(s+="buff-item__stat--negative"),t||n?c.a.createElement("div",{className:s,key:e},c.a.createElement("div",{className:"buff-item__stat-label"},d[e].string,":"),c.a.createElement("div",{className:"buff-item__stat-value"},r||null)):null}))))))},v={buffDeleted:function(e){return{type:"BUFF_DELETED",payload:e}},buffSelected:function(e){return{type:"BUFF_SELECTED",payload:e}}},N=Object(l.b)((function(e){return{buffs:e.buffs}}),v)((function(e){var a=e.buffs,t=e.buffDeleted,n=e.buffSelected,r=function(e){t(e.code)},s=function(e){n(e.code)};return c.a.createElement("div",null,a.map((function(e){return c.a.createElement(p,{key:e.name,buff:e,onDelete:r,onEdit:s})})))})),g=t(26),h=t(25),y=function(e,a){e[a];return Object(g.a)(e,[a].map(h.a))},C={currentBuffUpdated:function(e){return{type:"CURRENT_BUFF_UPDATED",payload:e}},currentBuffSaved:function(e){return{type:"CURRENT_BUFF_SAVED",payload:e}}},O=Object(l.b)((function(e){return{buff:e.currentBuff}}),C)((function(e){var a=e.buff,t=e.currentBuffUpdated,n=e.currentBuffSaved,r=function(e,t){return"bonus"===t?function(e){return a.bonuses&&a.bonuses.hasOwnProperty(e)}(e):"multiplier"===t&&function(e){return a.multiplier&&a.multiplier.hasOwnProperty(e)}(e)};return c.a.createElement("div",{className:"buff-form"},c.a.createElement("div",{className:"buff-form__wrapper"},c.a.createElement("div",{className:"buff-form__header"},c.a.createElement("div",{className:"buff-form__title"},a&&a.code?"Edit buff":"Create buff"),c.a.createElement("div",{className:"buff-form__actions"},c.a.createElement("div",{className:"buff-form__action buff-form__action--cancel",onClick:function(){t(null)}},c.a.createElement("i",{className:"fa fa-close"})),c.a.createElement("div",{className:"buff-form__action buff-form__action--save",onClick:function(){n(a)}},c.a.createElement("i",{className:"fa fa-save"})))),c.a.createElement("div",{className:"buff-form__content"},c.a.createElement("div",{className:"buff-form__name"},a.name),c.a.createElement("div",{className:"buff-form__subtitle"},"Plain bonuses"),c.a.createElement("div",{className:"buff-form__props"},c.a.createElement("div",{className:"chips"},c.a.createElement("div",{className:"chips__list"},Object.keys(d).map((function(e){var n="chips__item "+(r(e,"bonus")?"chips__item--active":"");return c.a.createElement("div",{className:n,key:e,onClick:function(){return function(e){a.bonuses.hasOwnProperty(e)?t(Object(m.a)({},a,{bonuses:y(a.bonuses,e)})):t(Object(m.a)({},a,{bonuses:Object(m.a)({},a.bonuses,Object(f.a)({},e,0))}))}(e)}},d[e].string)}))))),c.a.createElement("div",{className:"buff-form__field-list"},Object.keys(d).map((function(e){if(a.bonuses.hasOwnProperty(e)){return c.a.createElement("div",{className:"buff-form__field-item",key:e},c.a.createElement("div",{className:"buff-form__field-label"},d[e].string,":"),c.a.createElement("div",{className:"buff-form__field-content"},c.a.createElement("input",{type:"text",className:"buff-form__field-input",value:a.bonuses[e],onChange:function(n){var c=n.target.value.replace(/[^\d.-]/g,"");"-"!==c&&"0-"!==c&&t(Object(m.a)({},a,{bonuses:Object(m.a)({},a.bonuses,Object(f.a)({},e,+c))}))}})))}}))))))})),k=Object(l.b)((function(e){return{currentBuff:e.currentBuff}}),{})((function(e){var a=e.currentBuff;return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page__wrapper"},c.a.createElement("div",{className:"page__title"},c.a.createElement("div",null,"Buffs page")),c.a.createElement("div",{className:"page__section page__section--grower"},c.a.createElement(N,null)),a?c.a.createElement("div",{className:"page__section page__section--nopadding",style:{maxHeight:"250px"}},c.a.createElement(O,null)):null))})),j=function(){return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page__wrapper"},c.a.createElement("div",{className:"page__title"},"d20organizer"),c.a.createElement("div",{className:"page__section"},c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__page-list"},c.a.createElement("div",{className:"home__page-item"},c.a.createElement(i.b,{className:"home__page-link",to:"/buffs"},"Calculator")),c.a.createElement("div",{className:"home__page-item"},c.a.createElement(i.b,{className:"home__page-link",to:"/buffs"},"Buff catalog")))))))},R=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar__list"},c.a.createElement(i.b,{to:"/calculator",className:"navbar__item",activeClassName:"navbar__item--active"},c.a.createElement("i",{className:"fa fa-calculator"})),c.a.createElement(i.b,{to:"/buffs",className:"navbar__item",activeClassName:"navbar__item--active"},c.a.createElement("i",{className:"fa fa-list"}))))},B=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__header"}),c.a.createElement("div",{className:"app__body"},c.a.createElement("div",{className:"app__content"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",component:j,exact:!0}),c.a.createElement(u.a,{path:"/calculator",component:E}),c.a.createElement(u.a,{path:"/buffs",component:k})))),c.a.createElement("div",{className:"app__footer"},c.a.createElement("div",{className:"app__navbar"},c.a.createElement(R,null))))},U=t(15),T=t(16),D=function(e,a){var t={};return Object.keys(e).forEach((function(n){t[n]=e[n],a.forEach((function(e){e.bonuses&&e.bonuses[n]&&(t[n]+=e.bonuses[n])}))})),t},F=function(e,a){var t={};return Object.keys(a).forEach((function(n){t[n]=a[n]-e[n]})),t},A=function(e,a){var t=a.filter((function(a){return-1!==e.buffs.indexOf(a.code)}));return{stats:D(e.stats,t),delta:F(e.stats,D(e.stats,t))}},w={buffs:[{code:"bigger",name:"Bigger size",bonuses:{ac:-2,damage:1}},{code:"rage",name:"Rage",bonuses:{ac:-2,attack:2,damage:2}},{code:"fatigued",name:"Fatigued",bonuses:{ac:-1,attack:-1,damage:-1}},{code:"stonestrike",name:"Stone strike",bonuses:{attack:1,damage:1}},{code:"fightdefencively",name:"Fighting defencively",bonuses:{ac:2,attack:-4}},{code:"defencivestance",name:"Defencive Stance",bonuses:{ac:2,attack:2,damage:2}}],currentCharacter:{name:"Skyor",stats:{ac:31,attack:12,damage:3},buffs:[]},currentResult:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BUFFS_LOADED":return Object(m.a)({},e,{books:a.payload});case"CURRENT_CHARACTER_UPDATED":return Object(m.a)({},e,{currentCharacter:a.payload,currentResult:A(a.payload,e.buffs)});case"CURRENT_CHARACTER_BUFF_TOGGLE":var t;return t=-1!==e.currentCharacter.buffs.indexOf(a.payload)?e.currentCharacter.buffs.filter((function(e){return e!==a.payload})):[].concat(Object(T.a)(e.currentCharacter.buffs),[a.payload]),Object(m.a)({},e,{currentCharacter:Object(m.a)({},e.currentCharacter,{buffs:t}),currentResult:A(Object(m.a)({},e.currentCharacter,{buffs:t}),e.buffs)});case"BUFF_DELETED":return Object(m.a)({},e,{buffs:e.buffs.filter((function(e){return e.code!==a.payload}))});case"BUFF_SELECTED":return Object(m.a)({},e,{currentBuff:e.buffs.find((function(e){return e.code===a.payload}))});case"CURRENT_BUFF_UPDATED":return Object(m.a)({},e,{currentBuff:a.payload});case"CURRENT_BUFF_SAVED":var n=e.buffs.findIndex((function(e){return e.code===a.payload.code}));return Object(m.a)({},e,{buffs:[].concat(Object(T.a)(e.buffs.slice(0,n)),[a.payload],Object(T.a)(e.buffs.slice(n+1))),currentBuff:null});default:return e}return e},P=Object(U.b)(S);s.a.render(c.a.createElement(l.a,{store:P},c.a.createElement(i.a,{basename:"/d20organizer"},c.a.createElement(B,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.91225069.chunk.js.map