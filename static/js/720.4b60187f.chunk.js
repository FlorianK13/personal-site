(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[720],{942:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});n(791);var r=n(892),s=n.n(r),a=n(184);const i=t=>{let{data:e}=t;return(0,a.jsx)("div",{className:"cell-container",children:(0,a.jsxs)("article",{className:"mini-post",children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("h3",{children:(0,a.jsx)("a",{href:e.link,children:e.title})}),(0,a.jsx)("time",{className:"published",children:s()(e.date).format("MMMM, YYYY")})]}),(0,a.jsx)("a",{href:e.link,className:"image",children:(0,a.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,a.jsx)("div",{className:"description",children:(0,a.jsx)("p",{children:e.desc})})]})})}},720:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});n(791);var r=n(87),s=n(350),a=n(942);const i=[{title:"marktstammdaten.kotthoff.dev",subtitle:"Monitoring Data Quality of the German Core Energy Registry Marktstammdatenregister",image:"/images/projects/marktstammdaten-dashboard.png",link:"https://marktstammdaten.kotthoff.dev",date:"2024-03-01",desc:"Using the two frameworks dbt and datasette, I built a data testing pipeline that runs regularly and publishes relevant metrics as  datasette dasboards."},{title:"openpv.de",subtitle:"Simulating the solar potential of your building in the browser",image:"/images/projects/openpv.jpg",link:"https://www.openpv.de",date:"2023-06-01",desc:"Together with two friends I built a website to simulate the solar potential of roofs and facades using openly available 3D building data. Right now we can simulate every building in Bavaria and we are working on extending to other states as well."},{title:"open-mastr python package",subtitle:"A collaborative software to download the energy database Marktstammdatenregister (MaStR)",image:"/images/projects/openmastr.jpg",link:"https://github.com/OpenEnergyPlatform/open-MaStR",date:"2022-01-01",desc:"Built in collaboration with the Reiner-Lemoine-Institut. open-mastr is a python package to download and clean the german energy database Marktstammdatenregister. It can save several days of writing data parsers for the individual."},{title:"Bundestag ePetitionen Mastodon Bot",subtitle:"A mastodon bot that posts petitions from the german parliament website which reached 10k supporters",image:"/images/projects/mastodon_logo.jpg",link:"https://troet.cafe/@bundestagpetitionen10k",date:"2023-10-01",desc:"The first Mastodon bot I created scans the German Bundestag petition site and shares petitions with 10,000+ supporters. It runs once per day."}];var o=n(184);const u=()=>(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Florian Kotthoff's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I created myself or in collaboration with others."})]})}),i.map((t=>(0,o.jsx)(a.Z,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",a="minute",i="hour",o="day",u="week",c="month",d="quarter",h="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),a=n-s<0,i=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-s)/(a?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:u,d:o,D:l,h:i,m:a,s:s,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=g;var w=function(t){return t instanceof S},b=function t(e,n,r){var s;if(!e)return M;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(s=a),n&&(y[a]=n,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var o=e.name;y[o]=e,s=o}return!r&&s&&(M=s),s||!r&&M},D=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},k=v;k.l=b,k.i=w,k.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=b(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return k},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,r=!!k.u(e)||e,d=k.p(t),f=function(t,e){var s=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(o)},m=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case u:var M=this.$locale().weekStart||0,y=(p<M?p+7:p)-M;return f(r?$-y:$+(6-y),g);case o:case l:return m(v+"Hours",0);case i:return m(v+"Minutes",1);case a:return m(v+"Seconds",2);case s:return m(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,u=k.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[l]=d+"Date",n[c]=d+"Month",n[h]=d+"FullYear",n[i]=d+"Hours",n[a]=d+"Minutes",n[s]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===h){var p=this.clone().set(l,1);p.$d[f](m),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[k.p(t)]()},$.add=function(r,d){var l,f=this;r=Number(r);var m=k.p(d),p=function(t){var e=D(f);return k.w(e.date(e.date()+Math.round(t*r)),f)};if(m===c)return this.set(c,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return p(1);if(m===u)return p(7);var g=(l={},l[a]=e,l[i]=n,l[s]=t,l)[m]||1,$=this.$d.getTime()+r*g;return k.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=k.z(this),a=this.$H,i=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,h=function(t,n,s,a){return t&&(t[n]||t(e,r))||s[n].slice(0,a)},l=function(t){return k.s(a%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return o+1;case"MM":return k.s(o+1,2,"0");case"MMM":return h(n.monthsShort,o,c,3);case"MMMM":return h(c,o);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,u,2);case"ddd":return h(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return m(a,i,!0);case"A":return m(a,i,!1);case"m":return String(i);case"mm":return k.s(i,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,l,f){var m,p=this,g=k.p(l),$=D(r),v=($.utcOffset()-this.utcOffset())*e,M=this-$,y=function(){return k.m(p,$)};switch(g){case h:m=y()/12;break;case c:m=y();break;case d:m=y()/3;break;case u:m=(M-v)/6048e5;break;case o:m=(M-v)/864e5;break;case i:m=M/n;break;case a:m=M/e;break;case s:m=M/t;break;default:m=M}return f?m:k.a(m)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return y[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return k.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),j=S.prototype;return D.prototype=j,[["$ms",r],["$s",s],["$m",a],["$H",i],["$W",o],["$M",c],["$y",h],["$D",l]].forEach((function(t){j[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,S,D),t.$i=!0),D},D.locale=b,D.isDayjs=w,D.unix=function(t){return D(1e3*t)},D.en=y[M],D.Ls=y,D.p={},D}()}}]);
//# sourceMappingURL=720.4b60187f.chunk.js.map