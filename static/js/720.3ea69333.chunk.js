(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[720],{2942:function(t,e,r){"use strict";r(2791);var n=r(7892),s=r.n(n),i=r(184);e.Z=function(t){var e=t.data;return(0,i.jsx)("div",{className:"cell-container",children:(0,i.jsxs)("article",{className:"mini-post",children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("h3",{children:(0,i.jsx)("a",{href:e.link,children:e.title})}),(0,i.jsx)("time",{className:"published",children:s()(e.date).format("MMMM, YYYY")})]}),(0,i.jsx)("a",{href:e.link,className:"image",children:(0,i.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsx)("p",{children:e.desc})})]})})}},4720:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return c}});r(2791);var n=r(1087),s=r(8350),i=r(2942),a=[{title:"open-mastr python package",subtitle:"A collaborative software to download the energy database Marktstammdatenregister (MaStR)",image:"/images/projects/openmastr.jpg",link:"https://github.com/OpenEnergyPlatform/open-MaStR",date:"2022-01-01",desc:"Built in collaboration with the Reiner-Lemoine-Institut. open-mastr is a python package to download and clean the german energy database Marktstammdatenregister. It can save several days of writing data parsers for the individual."}],u=r(184),c=function(){return(0,u.jsx)(s.Z,{title:"Projects",description:"Learn about Florian Kotthoff's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(n.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I created myself or in collaboration with others."})]})}),a.map((function(t){return(0,u.jsx)(i.Z,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",h="quarter",d="year",f="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},g=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},M={s:g,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+g(n,2,"0")+":"+g(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,a=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:d,w:c,d:u,D:f,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=p;var D=function(t){return t instanceof j},w=function t(e,r,n){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),r&&(y[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!n&&s&&(v=s),s||!n&&v},S=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},b=M;b.l=w,b.i=D,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!(this.$d.toString()===l)},g.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,r){return b.u(t)?this[e]:this.set(r,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var r=this,n=!!b.u(e)||e,h=b.p(t),l=function(t,e){var s=b.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return b.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,p=this.$M,g=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case d:return n?l(1,0):l(31,11);case o:return n?l(1,p):l(0,p+1);case c:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return l(n?g-y:g+(6-y),p);case u:case f:return $(M+"Hours",0);case a:return $(M+"Minutes",1);case i:return $(M+"Seconds",2);case s:return $(M+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var r,c=b.p(t),h="set"+(this.$u?"UTC":""),l=(r={},r[u]=h+"Date",r[f]=h+"Date",r[o]=h+"Month",r[d]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===d){var m=this.clone().set(f,1);m.$d[l]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[b.p(t)]()},g.add=function(n,h){var f,l=this;n=Number(n);var $=b.p(h),m=function(t){var e=S(l);return b.w(e.date(e.date()+Math.round(t*n)),l)};if($===o)return this.set(o,this.$M+n);if($===d)return this.set(d,this.$y+n);if($===u)return m(1);if($===c)return m(7);var p=(f={},f[i]=e,f[a]=r,f[s]=t,f)[$]||1,g=this.$d.getTime()+n*p;return b.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$H,a=this.$m,u=this.$M,c=r.weekdays,o=r.months,h=r.meridiem,d=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},f=function(t){return b.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return d(r.monthsShort,u,o,3);case"MMMM":return d(o,u);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,c,2);case"ddd":return d(r.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,l){var $,m=this,p=b.p(f),g=S(n),M=(g.utcOffset()-this.utcOffset())*e,v=this-g,y=function(){return b.m(m,g)};switch(p){case d:$=y()/12;break;case o:$=y();break;case h:$=y()/3;break;case c:$=(v-M)/6048e5;break;case u:$=(v-M)/864e5;break;case a:$=v/r;break;case i:$=v/e;break;case s:$=v/t;break;default:$=v}return l?$:b.a($)},g.daysInMonth=function(){return this.endOf(o).$D},g.$locale=function(){return y[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),x=j.prototype;return S.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",d],["$D",f]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,j,S),t.$i=!0),S},S.locale=w,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=y[v],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=720.3ea69333.chunk.js.map