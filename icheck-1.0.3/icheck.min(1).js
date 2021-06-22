/*
 iCheck v1.0.3, http://git.io/arlzeA
 ===================================
 Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization

 (c) 2013 Damir Sultanov, http://fronteed.com
 MIT Licensed
*/
(function(k){function E(a,b,e){var c=a[0],f=/er/.test(e)?"indeterminate":/bl/.test(e)?"disabled":"checked",d="update"==e?{checked:c.checked,disabled:c.disabled,indeterminate:"true"==a.attr("indeterminate")||"false"==a.attr("determinate")}:c[f];if(/^(ch|di|in)/.test(e)&&!d)B(a,f);else if(/^(un|en|de)/.test(e)&&d)v(a,f);else if("update"==e)for(var l in d)d[l]?B(a,l,!0):v(a,l,!0);else b&&"toggle"!=e||(b||a.trigger("ifClicked"),d?"radio"!==c.type&&v(a,f):B(a,f))}function B(a,b,e){var c=a[0],f=a.parent(),
  d="checked"==b,l="indeterminate"==b,t="disabled"==b,u=l?"determinate":d?"unchecked":"enabled",x=q(a,u+C(c.type)),y=q(a,b+C(c.type));if(!0!==c[b]){if(!e&&"checked"==b&&"radio"==c.type&&c.name){var z=a.closest("form"),r='input[name="'+c.name+'"]';r=z.length?z.find(r):k(r);r.each(function(){this!==c&&k(this).data("iCheck")&&v(k(this),b)})}l?(c[b]=!0,c.checked&&v(a,"checked","force")):(e||(c[b]=!0),d&&c.indeterminate&&v(a,"indeterminate",!1));I(a,d,b,e)}c.disabled&&q(a,"cursor",!0)&&f.find(".iCheck-helper").css("cursor",
  "default");f.addClass(y||q(a,b)||"");f.attr("role")&&!l&&f.attr("aria-"+(t?"disabled":"checked"),"true");f.removeClass(x||q(a,u)||"")}function v(a,b,e){var c=a[0],f=a.parent(),d="checked"==b,l="indeterminate"==b,t="disabled"==b,u=l?"determinate":d?"unchecked":"enabled",x=q(a,u+C(c.type)),y=q(a,b+C(c.type));if(!1!==c[b]){if(l||!e||"force"==e)c[b]=!1;I(a,d,u,e)}!c.disabled&&q(a,"cursor",!0)&&f.find(".iCheck-helper").css("cursor","pointer");f.removeClass(y||q(a,b)||"");f.attr("role")&&!l&&f.attr("aria-"+
  (t?"disabled":"checked"),"false");f.addClass(x||q(a,u)||"")}function J(a,b){a.data("iCheck")&&(a.parent().html(a.attr("style",a.data("iCheck").s||"")),b&&a.trigger(b),a.off(".i").unwrap(),k('label[for="'+a[0].id+'"]').add(a.closest("label")).off(".i"))}function q(a,b,e){if(a.data("iCheck"))return a.data("iCheck").o[b+(e?"":"Class")]}function C(a){return a.charAt(0).toUpperCase()+a.slice(1)}function I(a,b,e,c){c||(b&&a.trigger("ifToggled"),a.trigger("change").trigger("ifChanged").trigger("if"+C(e)))}
  var G=/ip(hone|od|ad)|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints;k.fn.iCheck=function(a,b){var e='input[type="checkbox"], input[type="radio"]',c=k(),f=function(g){g.each(function(){var m=k(this);c=m.is(e)?c.add(m):c.add(m.find(e))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),f(this),c.each(function(){var g=k(this);"destroy"==a?
  J(g,"ifDestroyed"):E(g,!0,a);k.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var d=k.extend({checkedClass:"checked",disabledClass:"disabled",indeterminateClass:"indeterminate",labelHover:!0},a),l=d.handle,t=d.hoverClass||"hover",u=d.focusClass||"focus",x=d.activeClass||"active",y=!!d.labelHover,z=d.labelHoverClass||"hover",r=(""+d.increaseArea).replace("%","")|0;if("checkbox"==l||"radio"==l)e='input[type="'+l+'"]';-50>r&&(r=-50);f(this);return c.each(function(){var g=k(this);J(g);var m=
  this,H=m.id,F=-r+"%",w=100+2*r+"%";w={position:"absolute",top:F,left:F,display:"block",width:w,height:w,margin:0,padding:0,background:"#fff",border:0,opacity:0};F=G?{position:"absolute",visibility:"hidden"}:r?w:{position:"absolute",opacity:0};var M="checkbox"==m.type?d.checkboxClass||"icheckbox":d.radioClass||"iradio",D=k('label[for="'+H+'"]').add(g.closest("label")),K=!!d.aria,L="iCheck-"+Math.random().toString(36).substr(2,6),h='<div class="'+M+'" '+(K?'role="'+m.type+'" ':"");K&&D.each(function(){h+=
  'aria-labelledby="';this.id?h+=this.id:(this.id=L,h+=L);h+='"'});h=g.wrap(h+"/>").trigger("ifCreated").parent().append(d.insert);w=k('<ins class="iCheck-helper"/>').css(w).appendTo(h);g.data("iCheck",{o:d,s:g.attr("style")}).css(F);d.inheritClass&&h.addClass(m.className||"");d.inheritID&&H&&h.attr("id","iCheck-"+H);"static"==h.css("position")&&h.css("position","relative");E(g,!0,"update");if(D.length)D.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i",function(p){var n=p.type,A=k(this);
  if(!m.disabled){if("click"==n){if(k(p.target).is("a"))return;E(g,!1,!0)}else y&&(/ut|nd/.test(n)?(h.removeClass(t),A.removeClass(z)):(h.addClass(t),A.addClass(z)));if(G)p.stopPropagation();else return!1}});g.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(p){var n=p.type;p=p.keyCode;if("click"==n)return!1;if("keydown"==n&&32==p)return"radio"==m.type&&m.checked||(m.checked?v(g,"checked"):B(g,"checked")),!1;if("keyup"==n&&"radio"==m.type)!m.checked&&B(g,"checked");else if(/us|ur/.test(n))h["blur"==
  n?"removeClass":"addClass"](u)});w.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(p){var n=p.type,A=/wn|up/.test(n)?x:t;if(!m.disabled){if("click"==n)E(g,!1,!0);else if(/wn|er|in/.test(n)?h.addClass(A):h.removeClass(A+" "+x),D.length&&y&&A==t)D[/ut|nd/.test(n)?"removeClass":"addClass"](z);if(G)p.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);