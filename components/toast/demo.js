webpackJsonp([19],{8:function(n,t,e){"use strict";e(15),e(14)},14:function(n,t){},15:function(n,t){},18:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var a=e(24),o=s(a),i=e(23),l=s(i);t["default"]=function(){function n(n,t){var e=[],s=!0,a=!1,o=void 0;try{for(var i,u=(0,l["default"])(n);!(s=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);s=!0);}catch(c){a=!0,o=c}finally{try{!s&&u["return"]&&u["return"]()}finally{if(a)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if((0,o["default"])(Object(t)))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},19:function(n,t){"use strict";function e(n,t){var e={},s={};return Object.keys(n).forEach(function(a){t.indexOf(a)!==-1?e[a]=n[a]:s[a]=n[a]}),[e,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},20:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n){return Object.keys(n).forEach(function(t){return n[t]=t}),n}function o(n,t){var e={};return t.forEach(function(t){e[t]=n[t]}),e}function i(n){var t=n.touches,e=n.changedTouches,s=t&&t.length>0,a=e&&e.length>0;return!s&&a?e[0]:s?t[0]:n}function l(){return Date.now()-g>=D}Object.defineProperty(t,"__esModule",{value:!0});var u=e(1),c=s(u),p=e(12),r=s(p),E=e(2),f=s(E),R=a({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null}),d={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},h={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},_={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},S=a({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),T={NOT_RESPONDER:{DELAY:R.ERROR,RESPONDER_GRANT:R.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:R.ERROR,RESPONDER_TERMINATED:R.ERROR,ENTER_PRESS_RECT:R.ERROR,LEAVE_PRESS_RECT:R.ERROR,LONG_PRESS_DETECTED:R.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:R.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:R.ERROR,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:R.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:R.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:R.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:R.ERROR,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:R.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:R.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:R.ERROR,RESPONDER_GRANT:R.ERROR,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:R.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:R.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:R.ERROR,RESPONDER_GRANT:R.ERROR,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:R.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:R.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:R.ERROR,RESPONDER_GRANT:R.ERROR,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:R.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:R.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:R.ERROR,RESPONDER_GRANT:R.ERROR,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:R.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:R.ERROR},error:{DELAY:R.NOT_RESPONDER,RESPONDER_GRANT:R.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:R.NOT_RESPONDER,RESPONDER_TERMINATED:R.NOT_RESPONDER,ENTER_PRESS_RECT:R.NOT_RESPONDER,LEAVE_PRESS_RECT:R.NOT_RESPONDER,LONG_PRESS_DETECTED:R.NOT_RESPONDER}},N=130,k=20,P=500,O=P-N,m=10,g=0,D=200,v=c["default"].createClass({displayName:"Touchable",getDefaultProps:function(){return{disabled:!1,delayPressIn:N,delayLongPress:O,delayPressOut:100,pressRetentionOffset:{left:k,right:k,top:k,bottom:k},hitSlop:void 0,longPressCancelsPress:!0}},getInitialState:function(){return{active:!1}},componentWillMount:function(){this.touchable={touchState:void 0}},componentDidMount:function(){this.root=f["default"].findDOMNode(this)},componentDidUpdate:function(){this.root=f["default"].findDOMNode(this)},componentWillUnmount:function(){this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},callChildEvent:function(n,t){var e=this.props.children.props[n];e&&e(t)},onTouchStart:function(n){this.callChildEvent("onTouchStart",n),this.lockMouse=!0,this.releaseLockTimer&&clearTimeout(this.releaseLockTimer),this.touchableHandleResponderGrant(n.nativeEvent)},onTouchMove:function(n){this.callChildEvent("onTouchMove",n),this.touchableHandleResponderMove(n.nativeEvent)},onTouchEnd:function(n){var t=this;this.callChildEvent("onTouchEnd",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderRelease(n.nativeEvent)},onTouchCancel:function(n){var t=this;this.callChildEvent("onTouchCancel",n),this.releaseLockTimer=setTimeout(function(){t.lockMouse=!1},300),this.touchableHandleResponderTerminate(n.nativeEvent)},onMouseDown:function(n){this.callChildEvent("onMouseDown",n),this.lockMouse||(this.touchableHandleResponderGrant(n.nativeEvent),document.addEventListener("mousemove",this.touchableHandleResponderMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1))},onMouseUp:function(n){document.removeEventListener("mousemove",this.touchableHandleResponderMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.touchableHandleResponderRelease(n)},_remeasureMetricsOnInit:function(n){var t=this.root,e=i(n),s=t.getBoundingClientRect();this.touchable={touchState:this.touchable.touchState,startMouse:{pageX:e.pageX,pageY:e.pageY},positionOnGrant:{left:s.left+window.pageXOffset,top:s.top+window.pageYOffset,width:s.width,height:s.height,clientLeft:s.left,clientTop:s.top}}},touchableHandleResponderGrant:function(n){var t=this;if(this.touchable.touchState=R.NOT_RESPONDER,this.pressOutDelayTimeout&&(clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null),!this.props.fixClickPenetration||l()){this._remeasureMetricsOnInit(n),this._receiveSignal(S.RESPONDER_GRANT,n);var e=this.props.delayPressIn;e?this.touchableDelayTimeout=setTimeout(function(){t._handleDelay(n)},e):this._handleDelay(n);var s=this.props.delayLongPress;this.longPressDelayTimeout=setTimeout(function(){t._handleLongDelay(n)},s+e)}},checkScroll:function(n){var t=this.touchable.positionOnGrant,e=this.root.getBoundingClientRect();if(e.left!==t.clientLeft||e.top!==t.clientTop)return this._receiveSignal(S.RESPONDER_TERMINATED,n),!1},touchableHandleResponderRelease:function(n){if(this.touchable.startMouse){var t=i(n);return Math.abs(t.pageX-this.touchable.startMouse.pageX)>30||Math.abs(t.pageY-this.touchable.startMouse.pageY)>30?void this._receiveSignal(S.RESPONDER_TERMINATED,n):void(this.checkScroll(n)!==!1&&this._receiveSignal(S.RESPONDER_RELEASE,n))}},touchableHandleResponderTerminate:function(n){this.touchable.startMouse&&this._receiveSignal(S.RESPONDER_TERMINATED,n)},checkTouchWithinActive:function(n){var t=this.touchable.positionOnGrant,e=this.props,s=e.pressRetentionOffset,a=e.hitSlop,o=s.left,l=s.top,u=s.right,c=s.bottom;a&&(o+=a.left,l+=a.top,u+=a.right,c+=a.bottom);var p=i(n),r=p&&p.pageX,E=p&&p.pageY;return r>t.left-o&&E>t.top-l&&r<t.left+t.width+u&&E<t.top+t.height+c},touchableHandleResponderMove:function(n){if(this.touchable.startMouse&&this.touchable.dimensionsOnActivate&&this.touchable.touchState!==R.NOT_RESPONDER&&this.touchable.touchState!==R.RESPONDER_INACTIVE_PRESS_IN){var t=i(n),e=t&&t.pageX,s=t&&t.pageY;if(this.pressInLocation){var a=this._getDistanceBetweenPoints(e,s,this.pressInLocation.pageX,this.pressInLocation.pageY);a>m&&this._cancelLongPressDelayTimeout()}if(this.checkTouchWithinActive(n)){this._receiveSignal(S.ENTER_PRESS_RECT,n);var o=this.touchable.touchState;o===R.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(S.LEAVE_PRESS_RECT,n)}},touchableHandleActivePressIn:function(n){this.setActive(!0),this.props.onPressIn&&this.props.onPressIn(n)},touchableHandleActivePressOut:function(n){this.setActive(!1),this.props.onPressOut&&this.props.onPressOut(n)},touchableHandlePress:function(n){this.props.onPress&&this.props.onPress(n),g=Date.now()},touchableHandleLongPress:function(n){this.props.onLongPress&&this.props.onLongPress(n)},setActive:function(n){(this.props.activeClassName||this.props.activeStyle)&&this.setState({active:n})},_remeasureMetricsOnActivation:function(){this.touchable.dimensionsOnActivate=this.touchable.positionOnGrant},_handleDelay:function(n){this.touchableDelayTimeout=null,this._receiveSignal(S.DELAY,n)},_handleLongDelay:function(n){this.longPressDelayTimeout=null;var t=this.touchable.touchState;t!==R.RESPONDER_ACTIVE_PRESS_IN&&t!==R.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+t+"` to `"+R.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(S.LONG_PRESS_DETECTED,n)},_receiveSignal:function(n,t){var e=this.touchable.touchState,s=T[e]&&T[e][n];s&&s!==R.ERROR&&e!==s&&(this._performSideEffectsForTransition(e,s,n,t),this.touchable.touchState=s)},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&(clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null)},_isHighlight:function(n){return n===R.RESPONDER_ACTIVE_PRESS_IN||n===R.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(n){var t=i(n),e=t&&t.pageX,s=t&&t.pageY;this.pressInLocation={pageX:e,pageY:s}},_getDistanceBetweenPoints:function(n,t,e,s){var a=n-e,o=t-s;return Math.sqrt(a*a+o*o)},_performSideEffectsForTransition:function(n,t,e,s){var a=this._isHighlight(n),o=this._isHighlight(t),i=e===S.RESPONDER_TERMINATED||e===S.RESPONDER_RELEASE;if(i&&this._cancelLongPressDelayTimeout(),!d[n]&&d[t]&&this._remeasureMetricsOnActivation(),h[n]&&e===S.LONG_PRESS_DETECTED&&this.touchableHandleLongPress(s),o&&!a?this._startHighlight(s):!o&&a&&this._endHighlight(s),h[n]&&e===S.RESPONDER_RELEASE){var l=!!this.props.onLongPress,u=_[n]&&(!l||!this.props.longPressCancelsPress),c=!_[n]||u;c&&(o||a||(this._startHighlight(s),this._endHighlight(s)),this.touchableHandlePress(s))}this.touchableDelayTimeout&&(clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null)},_startHighlight:function(n){this._savePressInLocation(n),this.touchableHandleActivePressIn(n)},_endHighlight:function(n){var t=this;this.props.delayPressOut?this.pressOutDelayTimeout=setTimeout(function(){t.touchableHandleActivePressOut(n)},this.props.delayPressOut):this.touchableHandleActivePressOut(n)},render:function(){var n=this.props,t=n.children,e=n.disabled,s=n.activeStyle,a=n.activeClassName,i=e?void 0:o(this,["onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","onMouseDown"]),l=c["default"].Children.only(t);if(this.state.active){var u=l.props,p=u.style,E=u.className;return s&&(p=(0,r["default"])({},p,s)),a&&(E?E+=" "+a:E=a),c["default"].cloneElement(l,(0,r["default"])({className:E,style:p},i))}return c["default"].cloneElement(l,i)}});t["default"]=v,n.exports=t["default"]},23:function(n,t,e){n.exports={"default":e(25),__esModule:!0}},24:function(n,t,e){n.exports={"default":e(26),__esModule:!0}},25:function(n,t,e){e(22),e(17),n.exports=e(27)},26:function(n,t,e){e(22),e(17),n.exports=e(28)},27:function(n,t,e){var s=e(33),a=e(35);n.exports=e(16).getIterator=function(n){var t=a(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return s(t.call(n))}},28:function(n,t,e){var s=e(44),a=e(21)("iterator"),o=e(34);n.exports=e(16).isIterable=function(n){var t=Object(n);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(s(t))}},29:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(9),o=s(a),i=e(1),l=s(i);t["default"]=function(n){var t=n.type,e=n.className,s=void 0===e?"":e;return l["default"].createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+t).trim()}))},n.exports=t["default"]},31:function(n,t,e){"use strict";e(37)},37:function(n,t){},46:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=e(7),o=s(a),i=e(4),l=s(i),u=e(6),c=s(u),p=e(5),r=s(p),E=e(1),f=s(E),R=e(3),d=s(R),h=function(n){function t(){return(0,l["default"])(this,t),(0,c["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,s=t.size,a=t.className,i=t.style,l=t.onClick,u=(0,d["default"])((n={},(0,o["default"])(n,""+e,!0),(0,o["default"])(n,e+"-"+s,!0),(0,o["default"])(n,a,!!a),n));return f["default"].createElement("div",{className:u,style:i,onClick:l})},t}(f["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=t["default"]},47:function(n,t,e){"use strict";e(8),e(63)},48:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n){return"string"==typeof n}function o(n){return a(n.type)&&C(n.props.children)?T["default"].cloneElement(n,{},n.props.children.split("").join(" ")):a(n)?(C(n)&&(n=n.split("").join(" ")),T["default"].createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var i=e(9),l=s(i),u=e(7),c=s(u),p=e(18),r=s(p),E=e(4),f=s(E),R=e(6),d=s(R),h=e(5),_=s(h),S=e(1),T=s(S),N=e(3),k=s(N),P=e(29),O=s(P),m=e(19),g=s(m),D=e(20),v=s(D),y=/^[\u4e00-\u9fa5]{2}$/,C=y.test.bind(y),I=function(n){function t(){return(0,f["default"])(this,t),(0,d["default"])(this,n.apply(this,arguments))}return(0,_["default"])(t,n),t.prototype.render=function(){var n,t=(0,g["default"])(this.props,["children","className","prefixCls","type","size","inline","across","disabled","icon","loading","activeStyle"]),e=(0,r["default"])(t,2),s=e[0],a=s.children,i=s.className,u=s.prefixCls,p=s.type,E=s.size,f=s.inline,R=s.across,d=s.disabled,h=s.icon,_=s.loading,S=s.activeStyle,N=e[1],P=(n={},(0,c["default"])(n,i,i),(0,c["default"])(n,u,!0),(0,c["default"])(n,u+"-primary","primary"===p),(0,c["default"])(n,u+"-ghost","ghost"===p),(0,c["default"])(n,u+"-warning","warning"===p),(0,c["default"])(n,u+"-small","small"===E),(0,c["default"])(n,u+"-inline",f),(0,c["default"])(n,u+"-across",R),(0,c["default"])(n,u+"-disabled",d),(0,c["default"])(n,u+"-loading",_),n),m=_?"loading":h,D=T["default"].Children.map(a,o);return m&&(P[u+"-icon"]=!0),delete N.htmlType,T["default"].createElement(v["default"],{activeClassName:S?u+"-active":void 0,disabled:d,activeStyle:S},T["default"].createElement("button",(0,l["default"])({},N,{type:this.props.htmlType||"button",className:(0,k["default"])(P),disabled:d}),m?T["default"].createElement(O["default"],{type:m}):null,D))},t}(T["default"].Component);I.defaultProps={prefixCls:"am-button",size:"large",inline:!1,across:!1,disabled:!1,loading:!1,activeStyle:{}},t["default"]=I,n.exports=t["default"]},49:function(n,t,e){"use strict";e(8),e(31),e(62)},62:function(n,t){},63:function(n,t){},64:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var a=e(7),o=s(a),i=e(4),l=s(i),u=e(6),c=s(u),p=e(5),r=s(p),E=e(1),f=s(E),R=e(3),d=s(R),h=function(n){function t(){return(0,l["default"])(this,t),(0,c["default"])(this,n.apply(this,arguments))}return(0,r["default"])(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,s=t.size,a=t.className,i=t.children,l=t.style,u=(0,d["default"])((n={},(0,o["default"])(n,""+e,!0),(0,o["default"])(n,e+"-"+s,!0),(0,o["default"])(n,a,!!a),n));return f["default"].createElement("div",{className:u,style:l},i)},t}(f["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=t["default"]},65:function(n,t,e){"use strict";e(8),e(79)},79:function(n,t){},162:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(){return E&&(E.destroy(),E=null),E=c["default"].newInstance({prefixCls:f,style:{top:0},transitionName:"am-fade"})}function o(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,s=arguments[3],o={info:"",success:"check-circle-o",fail:"cross-circle-o",offline:"frown",loading:"loading"}[t];"function"==typeof e&&(s=e,e=3);var i=a();i.notice({duration:e,style:{},content:o?l["default"].createElement("div",{className:f+"-text "+f+"-text-icon"},l["default"].createElement(r["default"],{type:o}),l["default"].createElement("div",null,n)):l["default"].createElement("div",{className:f+"-text"},l["default"].createElement("div",null,n)),onClose:function(){s&&s(),i.destroy(),i=null,E=null}})}Object.defineProperty(t,"__esModule",{value:!0});var i=e(1),l=s(i),u=e(209),c=s(u),p=e(29),r=s(p),E=void 0,f="am-toast";t["default"]={SHORT:3,LONG:8,show:function(n,t){return o(n,"info",t,function(){})},info:function(n,t,e){return o(n,"info",t,e)},success:function(n,t,e){return o(n,"success",t,e)},fail:function(n,t,e){return o(n,"fail",t,e)},offline:function(n,t,e){return o(n,"offline",t,e)},loading:function(n,t,e){return o(n,"loading",t,e)},hide:function(){E&&(E.destroy(),E=null)}},n.exports=t["default"]},163:function(n,t,e){"use strict";e(8),e(31),e(198)},198:function(n,t){},207:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}Object.defineProperty(t,"__esModule",{value:!0});var o=e(1),i=s(o),l=e(3),u=s(l),c=i["default"].createClass({displayName:"Notice",propTypes:{duration:o.PropTypes.number,onClose:o.PropTypes.func,children:o.PropTypes.any},getDefaultProps:function(){return{onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}}},componentDidMount:function(){var n=this;this.props.duration&&(this.closeTimer=setTimeout(function(){n.close()},1e3*this.props.duration))},componentWillUnmount:function(){this.clearCloseTimer()},clearCloseTimer:function(){this.closeTimer&&(clearTimeout(this.closeTimer),this.closeTimer=null)},close:function(){this.clearCloseTimer(),this.props.onClose()},render:function(){var n,t=this.props,e=t.prefixCls+"-notice",s=(n={},a(n,""+e,1),a(n,e+"-closable",t.closable),a(n,t.className,!!t.className),n);return i["default"].createElement("div",{className:(0,u["default"])(s),style:t.style},i["default"].createElement("div",{className:e+"-content"},t.children),t.closable?i["default"].createElement("a",{tabIndex:"0",onClick:this.close,className:e+"-close"},i["default"].createElement("span",{className:e+"-close-x"})):null)}});t["default"]=c,n.exports=t["default"]},208:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(){return"rcNotification_"+N+"_"+T++}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},l=e(1),u=s(l),c=e(2),p=s(c),r=e(71),E=s(r),f=e(210),R=s(f),d=e(3),h=s(d),_=e(207),S=s(_),T=0,N=Date.now(),k=u["default"].createClass({displayName:"Notification",propTypes:{prefixCls:l.PropTypes.string,transitionName:l.PropTypes.string,animation:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.object]),style:l.PropTypes.object},getDefaultProps:function(){return{prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}}},getInitialState:function(){return{notices:[]}},getTransitionName:function(){var n=this.props,t=n.transitionName;return!t&&n.animation&&(t=n.prefixCls+"-"+n.animation),t},add:function(n){var t=n.key=n.key||o();this.setState(function(e){var s=e.notices;if(!s.filter(function(n){return n.key===t}).length)return{notices:s.concat(n)}})},remove:function(n){this.setState(function(t){return{notices:t.notices.filter(function(t){return t.key!==n})}})},render:function(){var n,t=this,e=this.props,s=this.state.notices.map(function(n){var s=(0,R["default"])(t.remove.bind(t,n.key),n.onClose);return u["default"].createElement(S["default"],i({prefixCls:e.prefixCls},n,{onClose:s}),n.content)}),o=(n={},a(n,e.prefixCls,1),a(n,e.className,!!e.className),n);return u["default"].createElement("div",{className:(0,h["default"])(o),style:e.style},u["default"].createElement(E["default"],{transitionName:this.getTransitionName()},s))}});k.newInstance=function(n){var t=n||{},e=document.createElement("div");document.body.appendChild(e);var s=p["default"].render(u["default"].createElement(k,t),e);return{notice:function(n){s.add(n)},removeNotice:function(n){s.remove(n)},component:s,destroy:function(){p["default"].unmountComponentAtNode(e),document.body.removeChild(e)}}},t["default"]=k,n.exports=t["default"]},209:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(208),o=s(a);t["default"]=o["default"],n.exports=t["default"]},210:function(n,t){"use strict";function e(){var n=arguments;return function(){for(var t=0;t<n.length;t++)n[t]&&n[t].apply&&n[t].apply(this,arguments)}}n.exports=e},753:function(n,t,e){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var a=(e(65),e(64)),o=s(a),i=(e(49),e(48)),l=s(i),u=(e(47),e(46)),c=s(u),p=(e(163),e(162)),r=s(p),E=e(1),f=s(E),R=e(2);s(R);n.exports={content:[["p","\u7eaf\u6587\u5b57\u3001\u7eaf\u56fe\u6807\u3001\u6210\u529f\u3001\u5931\u8d25\u3001\u79bb\u7ebf\u3001loading"]],meta:{order:0,title:"\u666e\u901a",filename:"components/toast/demo/basic.md",id:"components-toast-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Toast<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">successToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u6210\u529f!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">failToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u5931\u8d25!!!\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">offline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">offline</span><span class="token punctuation">(</span><span class="token string">\'\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">loadingToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  Toast<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u4e2d...\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u52a0\u8f7d\u5b8c\u6210!!!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> ToastExample <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7eaf\u6587\u5b57 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>successToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u6210\u529f toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>failToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5931\u8d25 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>offline<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u7f51\u7edc toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loadingToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u52a0\u8f7d\u4e2d toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ToastExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(){r["default"].info("\u8fd9\u662f\u4e00\u4e2a toast \u63d0\u793a!!!")}function t(){r["default"].success("\u52a0\u8f7d\u6210\u529f!!!")}function e(){r["default"].fail("\u52a0\u8f7d\u5931\u8d25!!!",1)}function s(){r["default"].offline("\u7f51\u7edc\u8fde\u63a5\u5931\u8d25!!!");
}function a(){r["default"].loading("\u52a0\u8f7d\u4e2d...",1,function(){console.log("\u52a0\u8f7d\u5b8c\u6210!!!")})}var i=f["default"].createClass({displayName:"ToastExample",render:function(){return f["default"].createElement(o["default"],null,f["default"].createElement(c["default"],null),f["default"].createElement(l["default"],{onClick:n},"\u7eaf\u6587\u5b57 toast"),f["default"].createElement(c["default"],null),f["default"].createElement(l["default"],{onClick:t},"\u6210\u529f toast"),f["default"].createElement(c["default"],null),f["default"].createElement(l["default"],{onClick:e},"\u5931\u8d25 toast"),f["default"].createElement(c["default"],null),f["default"].createElement(l["default"],{onClick:s},"\u7f51\u7edc toast"),f["default"].createElement(c["default"],null),f["default"].createElement(l["default"],{onClick:a},"\u52a0\u8f7d\u4e2d toast"),f["default"].createElement(c["default"],null))}});return f["default"].createElement(i,null)}}},890:function(n,t,e){n.exports={basic:e(753)}}});