console.log(" iRingo: 📺 TV Response");const e=function(){if("undefined"!=typeof $environment&&$environment["surge-version"])return"Surge";if("undefined"!=typeof $environment&&$environment["stash-version"])return"Stash";if("undefined"!=typeof module&&module.exports)return"Node.js";if("undefined"!=typeof $task)return"Quantumult X";if("undefined"!=typeof $loon)return"Loon";if("undefined"!=typeof $rocket)return"Shadowrocket";if("undefined"!=typeof Egern)return"Egern"}();class t{constructor(e,t=void 0){return console.log("\n🟧 URL v2.1.2\n"),e=this.#e(e,t),this}#e(e,t=void 0){const s=/(?:(?<protocol>\w+:)\/\/(?:(?<username>[^\s:"]+)(?::(?<password>[^\s:"]+))?@)?(?<host>[^\s@/]+))?(?<pathname>\/?[^\s@?]+)?(?<search>\?[^\s?]+)?/,a=/(?<hostname>.+):(?<port>\d+)$/;if(e=e.match(s)?.groups||{},t&&(!(t=t?.match(s)?.groups||{}).protocol||!t.hostname))throw new Error(`🚨 ${name}, ${t} is not a valid URL`);if((e.protocol||t?.protocol)&&(this.protocol=e.protocol||t.protocol),(e.username||t?.username)&&(this.username=e.username||t.username),(e.password||t?.password)&&(this.password=e.password||t.password),(e.host||t?.host)&&(this.host=e.host||t.host,Object.freeze(this.host),this.hostname=this.host.match(a)?.groups.hostname??this.host,this.port=this.host.match(a)?.groups.port??""),e.pathname||t?.pathname){if(this.pathname=e.pathname||t?.pathname,this.pathname.startsWith("/")||(this.pathname="/"+this.pathname),this.paths=this.pathname.split("/").filter(Boolean),Object.freeze(this.paths),this.paths){const e=this.paths[this.paths.length-1];if(e?.includes(".")){const t=e.split(".");this.format=t[t.length-1],Object.freeze(this.format)}}}else this.pathname="";return(e.search||t?.search)&&(this.search=e.search||t.search,Object.freeze(this.search),this.search&&(this.searchParams=this.search.slice(1).split("&").map((e=>e.split("="))))),this.searchParams=new Map(this.searchParams||[]),this.harf=this.toString(),Object.freeze(this.harf),this}toString(){let e="";return this.protocol&&(e+=this.protocol+"//"),this.username&&(e+=this.username+(this.password?":"+this.password:"")+"@"),this.hostname&&(e+=this.hostname),this.port&&(e+=":"+this.port),this.pathname&&(e+=this.pathname),0!==this.searchParams.size&&(e+="?"+Array.from(this.searchParams).map((e=>e.join("="))).join("&")),e}toJSON(){return JSON.stringify({...this})}}class s{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class a{static name="Storage";static version="1.1.0";static about(){return i("",`🟧 ${this.name} v${this.version}`,"")}static data=null;static dataFile="box.dat";static#t=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static getItem(t=new String,a=null){let i=a;if(!0===t.startsWith("@")){const{key:e,path:a}=t.match(this.#t)?.groups;t=e;let o=this.getItem(t,{});"object"!=typeof o&&(o={}),i=s.get(o,a);try{i=JSON.parse(i)}catch(e){}}else{switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":i=$persistentStore.read(t);break;case"Quantumult X":i=$prefs.valueForKey(t);break;case"Node.js":this.data=this.#s(this.dataFile),i=this.data?.[t];break;default:i=this.data?.[t]||null}try{i=JSON.parse(i)}catch(e){}}return i??a}static setItem(t=new String,a=new String){let i=!1;if("object"==typeof a)a=JSON.stringify(a);else a=String(a);if(!0===t.startsWith("@")){const{key:e,path:o}=t.match(this.#t)?.groups;t=e;let r=this.getItem(t,{});"object"!=typeof r&&(r={}),s.set(r,o,a),i=this.setItem(t,r)}else switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":i=$persistentStore.write(a,t);break;case"Quantumult X":i=$prefs.setValueForKey(a,t);break;case"Node.js":this.data=this.#s(this.dataFile),this.data[t]=a,this.#a(this.dataFile),i=!0;break;default:i=this.data?.[t]||null}return i}static removeItem(t){let a=!1;if(!0===t.startsWith("@")){const{key:e,path:i}=t.match(this.#t)?.groups;t=e;let o=this.getItem(t);"object"!=typeof o&&(o={}),keyValue=s.unset(o,i),a=this.setItem(t,o)}else switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:a=!1;break;case"Quantumult X":a=$prefs.removeValueForKey(t)}return a}static clear(){let t=!1;switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:t=!1;break;case"Quantumult X":t=$prefs.removeAllValues()}return t}static#s(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s);if(!a&&!i)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#a(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s),o=JSON.stringify(this.data);a?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(s,o):this.fs.writeFileSync(t,o)}}}const i=(...e)=>console.log(e.join("\n"));var o={Switch:!0},r={Storefront:[["AE","143481"],["AF","143610"],["AG","143540"],["AI","143538"],["AL","143575"],["AM","143524"],["AO","143564"],["AR","143505"],["AT","143445"],["AU","143460"],["AZ","143568"],["BA","143612"],["BB","143541"],["BD","143490"],["BE","143446"],["BF","143578"],["BG","143526"],["BH","143559"],["BJ","143576"],["BM","143542"],["BN","143560"],["BO","143556"],["BR","143503"],["BS","143539"],["BT","143577"],["BW","143525"],["BY","143565"],["BZ","143555"],["CA","143455"],["CD","143613"],["CG","143582"],["CH","143459"],["CI","143527"],["CL","143483"],["CM","143574"],["CN","143465"],["CO","143501"],["CR","143495"],["CV","143580"],["CY","143557"],["CZ","143489"],["DE","143443"],["DK","143458"],["DM","143545"],["DO","143508"],["DZ","143563"],["EC","143509"],["EE","143518"],["EG","143516"],["ES","143454"],["FI","143447"],["FJ","143583"],["FM","143591"],["FR","143442"],["GA","143614"],["GB","143444"],["GD","143546"],["GF","143615"],["GH","143573"],["GM","143584"],["GR","143448"],["GT","143504"],["GW","143585"],["GY","143553"],["HK","143463"],["HN","143510"],["HR","143494"],["HU","143482"],["ID","143476"],["IE","143449"],["IL","143491"],["IN","143467"],["IQ","143617"],["IS","143558"],["IT","143450"],["JM","143511"],["JO","143528"],["JP","143462"],["KE","143529"],["KG","143586"],["KH","143579"],["KN","143548"],["KP","143466"],["KR","143466"],["KW","143493"],["KY","143544"],["KZ","143517"],["TC","143552"],["TD","143581"],["TJ","143603"],["TH","143475"],["TM","143604"],["TN","143536"],["TO","143608"],["TR","143480"],["TT","143551"],["TW","143470"],["TZ","143572"],["LA","143587"],["LB","143497"],["LC","143549"],["LI","143522"],["LK","143486"],["LR","143588"],["LT","143520"],["LU","143451"],["LV","143519"],["LY","143567"],["MA","143620"],["MD","143523"],["ME","143619"],["MG","143531"],["MK","143530"],["ML","143532"],["MM","143570"],["MN","143592"],["MO","143515"],["MR","143590"],["MS","143547"],["MT","143521"],["MU","143533"],["MV","143488"],["MW","143589"],["MX","143468"],["MY","143473"],["MZ","143593"],["NA","143594"],["NE","143534"],["NG","143561"],["NI","143512"],["NL","143452"],["NO","143457"],["NP","143484"],["NR","143606"],["NZ","143461"],["OM","143562"],["PA","143485"],["PE","143507"],["PG","143597"],["PH","143474"],["PK","143477"],["PL","143478"],["PT","143453"],["PW","143595"],["PY","143513"],["QA","143498"],["RO","143487"],["RS","143500"],["RU","143469"],["RW","143621"],["SA","143479"],["SB","143601"],["SC","143599"],["SE","143456"],["SG","143464"],["SI","143499"],["SK","143496"],["SL","143600"],["SN","143535"],["SR","143554"],["ST","143598"],["SV","143506"],["SZ","143602"],["UA","143492"],["UG","143537"],["US","143441"],["UY","143514"],["UZ","143566"],["VC","143550"],["VE","143502"],["VG","143543"],["VN","143471"],["VU","143609"],["XK","143624"],["YE","143571"],["ZA","143472"],["ZM","143622"],["ZW","143605"]]},n={Settings:o,Configs:r},c={Switch:!0,PEP:{GCC:"US"}},l={Settings:c},p={Switch:!0,UrlInfoSet:{Dispatcher:"AutoNavi",Directions:"AutoNavi",RAP:"Apple",LocationShift:"AUTO"},TileSet:{Map:"CN",Satellite:"HYBRID",Traffic:"CN",POI:"CN",Flyover:"XX",Munin:"XX"},GeoManifest:{Dynamic:{Config:{CountryCode:{default:"CN",iOS:"AUTO",iPadOS:"AUTO",watchOS:"US",macOS:"AUTO"}}}},Config:{Announcements:{"Environment:":{default:"AUTO",iOS:"AUTO",iPadOS:"AUTO",watchOS:"AUTO",macOS:"AUTO"}}}},h={},u={Settings:p,Configs:h},d={Switch:!0,CountryCode:"US",NewsPlusUser:!0},m={Settings:d},S={Switch:!0,CountryCode:"US",canUse:!0},f={Settings:S},y={Switch:!0,CountryCode:"SG",Region:"AUTO",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},g={VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]}},b={Settings:y,Configs:g},v={Switch:"true",CountryCode:"US",MultiAccount:"false",Universal:"true"},w={Settings:v},T={Switch:!0,"Third-Party":!1,HLSUrl:"play-edge.itunes.apple.com",ServerUrl:"play.itunes.apple.com",Tabs:["WatchNow","Originals","MLS","Sports","Kids","Store","Movies","TV","ChannelsAndApps","Library","Search"],CountryCode:{Configs:"AUTO",Settings:"AUTO",View:["SG","TW"],WatchNow:"AUTO",Channels:"AUTO",Originals:"AUTO",Sports:"US",Kids:"US",Store:"AUTO",Movies:"AUTO",TV:"AUTO",Persons:"SG",Search:"AUTO",Others:"AUTO"}},A={Locale:[["AU","en-AU"],["CA","en-CA"],["GB","en-GB"],["KR","ko-KR"],["HK","yue-Hant"],["JP","ja-JP"],["MO","zh-Hant"],["TW","zh-Hant"],["US","en-US"],["SG","zh-Hans"]],Tabs:[{title:"主页",type:"WatchNow",universalLinks:["https://tv.apple.com/watch-now","https://tv.apple.com/home"],destinationType:"Target",target:{id:"tahoma_watchnow",type:"Root",url:"https://tv.apple.com/watch-now"},isSelected:!0},{title:"Apple TV+",type:"Originals",universalLinks:["https://tv.apple.com/channel/tvs.sbd.4000","https://tv.apple.com/atv"],destinationType:"Target",target:{id:"tvs.sbd.4000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.4000"}},{title:"MLS Season Pass",type:"MLS",universalLinks:["https://tv.apple.com/mls"],destinationType:"Target",target:{id:"tvs.sbd.7000",type:"Brand",url:"https://tv.apple.com/us/channel/tvs.sbd.7000"}},{title:"体育节目",type:"Sports",universalLinks:["https://tv.apple.com/sports"],destinationType:"Target",target:{id:"tahoma_sports",type:"Root",url:"https://tv.apple.com/sports"}},{title:"儿童",type:"Kids",universalLinks:["https://tv.apple.com/kids"],destinationType:"Target",target:{id:"tahoma_kids",type:"Root",url:"https://tv.apple.com/kids"}},{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}},{title:"商店",type:"Store",universalLinks:["https://tv.apple.com/store"],destinationType:"SubTabs",subTabs:[{title:"电影",type:"Movies",universalLinks:["https://tv.apple.com/movies"],destinationType:"Target",target:{id:"tahoma_movies",type:"Root",url:"https://tv.apple.com/movies"}},{title:"电视节目",type:"TV",universalLinks:["https://tv.apple.com/tv-shows"],destinationType:"Target",target:{id:"tahoma_tvshows",type:"Root",url:"https://tv.apple.com/tv-shows"}}]},{title:"频道和 App",destinationType:"SubTabs",subTabsPlacementType:"ExpandedList",type:"ChannelsAndApps",subTabs:[]},{title:"资料库",type:"Library",destinationType:"Client"},{title:"搜索",type:"Search",universalLinks:["https://tv.apple.com/search"],destinationType:"Target",target:{id:"tahoma_search",type:"Root",url:"https://tv.apple.com/search"}}],i18n:{WatchNow:[["en","Home"],["zh","主页"],["zh-Hans","主頁"],["zh-Hant","主頁"]],Movies:[["en","Movies"],["zh","电影"],["zh-Hans","电影"],["zh-Hant","電影"]],TV:[["en","TV"],["zh","电视节目"],["zh-Hans","电视节目"],["zh-Hant","電視節目"]],Store:[["en","Store"],["zh","商店"],["zh-Hans","商店"],["zh-Hant","商店"]],Sports:[["en","Sports"],["zh","体育节目"],["zh-Hans","体育节目"],["zh-Hant","體育節目"]],Kids:[["en","Kids"],["zh","儿童"],["zh-Hans","儿童"],["zh-Hant","兒童"]],Library:[["en","Library"],["zh","资料库"],["zh-Hans","资料库"],["zh-Hant","資料庫"]],Search:[["en","Search"],["zh","搜索"],["zh-Hans","搜索"],["zh-Hant","蒐索"]]}},O={Settings:T,Configs:A},C=Database={Default:Object.freeze({__proto__:null,Configs:r,Settings:o,default:n}),Location:Object.freeze({__proto__:null,Settings:c,default:l}),Maps:Object.freeze({__proto__:null,Configs:h,Settings:p,default:u}),News:Object.freeze({__proto__:null,Settings:d,default:m}),PrivateRelay:Object.freeze({__proto__:null,Settings:S,default:f}),Siri:Object.freeze({__proto__:null,Configs:g,Settings:y,default:b}),TestFlight:Object.freeze({__proto__:null,Settings:v,default:w}),TV:Object.freeze({__proto__:null,Configs:A,Settings:T,default:O})};function L(e,t,o){i("☑️ Set Environment Variables","");let{Settings:r,Caches:n,Configs:c}=function(e,t,i){let o=a.getItem(e,i),r={};switch(typeof $argument){case"string":let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let t in e)s.set(r,t,e[t]);break;case"object":for(let e in $argument)s.set(r,e,$argument[e])}const n={Settings:i?.Default?.Settings||{},Configs:i?.Default?.Configs||{},Caches:{}};Array.isArray(t)||(t=[t]);for(let e of t)n.Settings={...n.Settings,...i?.[e]?.Settings,...r,...o?.[e]?.Settings},n.Configs={...n.Configs,...i?.[e]?.Configs},o?.[e]?.Caches&&"string"==typeof o?.[e]?.Caches&&(o[e].Caches=JSON.parse(o?.[e]?.Caches)),n.Caches={...n.Caches,...o?.[e]?.Caches};return function e(t,s){for(var a in t){var i=t[a];t[a]="object"==typeof i&&null!==i?e(i,s):s(a,i)}return t}(n.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>c(e))):c(t)),t))),n;function c(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(e,t,o);switch(t){case"WeatherKit":Array.isArray(r?.AQI?.ReplaceProviders)||s.set(r,"AQI.ReplaceProviders",r?.AQI?.ReplaceProviders?[r.AQI.ReplaceProviders.toString()]:[]),r.AQI.ReplaceProviders.includes("TWC")&&r.AQI.ReplaceProviders.push("The Weather Channel"),r.AQI.ReplaceProviders.includes("QWeather")&&r.AQI.ReplaceProviders.push("和风天气"),r.AQI.ReplaceProviders.push(void 0),Array.isArray(r?.AQI?.Local?.ReplaceScales)||s.set(r,"AQI.Local.ReplaceScales",r?.AQI?.Local?.ReplaceScales?[r.AQI.Local.ReplaceScales.toString()]:[]);break;case"Siri":Array.isArray(r?.Domains)||s.set(r,"Domains",r?.Domains?[r.Domains.toString()]:[]),Array.isArray(r?.Functions)||s.set(r,"Functions",r?.Functions?[r.Functions.toString()]:[]);break;case"TV":Array.isArray(r?.Tabs)||s.set(r,"Tabs",r?.Tabs?[r.Tabs.toString()]:[])}if(i(`✅ Set Environment Variables, Settings: ${typeof r}, Settings内容: ${JSON.stringify(r)}`,""),c.Storefront=new Map(c.Storefront),c.Locale&&(c.Locale=new Map(c.Locale)),c.i18n)for(let e in c.i18n)c.i18n[e]=new Map(c.i18n[e]);return{Settings:r,Caches:n,Configs:c}}i("v3.3.2(1007)");const U=new t($request.url);i(`⚠ url: ${U.toJSON()}`,"");const k=$request.method,M=U.hostname,N=U.pathname,P=U.paths;i(`⚠ METHOD: ${k}, HOST: ${M}, PATH: ${N}`,"");const R=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];function $(e,s,a){i("☑️ Set Playable Content","");let o=e?.assets,r=e?.itunesMediaApiData;return o&&(o=n(o,s,a)),r?.movieClips&&(r.movieClips=r.movieClips.map((e=>n(e,s,a)))),r?.offers&&(r.offers=r.offers.map((e=>n(e,s,a)))),r?.personalizedOffers&&(r.personalizedOffers=r.personalizedOffers.map((e=>n(e,s,a)))),i("✅ Set Playable Content",""),e;function n(e,s,a){if(i("☑️ Set Url",""),e?.hlsUrl){let a=new t(e.hlsUrl);switch(a.pathname){case"/WebObjects/MZPlay.woa/hls/playlist.m3u8":switch(a.hostname=s||"play.itunes.apple.com",a.hostname){case"play.itunes.apple.com":a.pathname="/WebObjects/MZPlay.woa/hls/playlist.m3u8";break;case"play-edge.itunes.apple.com":a.pathname="/WebObjects/MZPlayLocal.woa/hls/playlist.m3u8"}break;case"/WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8":switch(a.hostname=s||"play-edge.itunes.apple.com",a.hostname){case"play.itunes.apple.com":a.pathname="/WebObjects/MZPlay.woa/hls/subscription/playlist.m3u8";break;case"play-edge.itunes.apple.com":a.pathname="/WebObjects/MZPlayLocal.woa/hls/subscription/playlist.m3u8"}break;case"/WebObjects/MZPlay.woa/hls/workout/playlist.m3u8":switch(a.hostname=s||"play.itunes.apple.com",a.hostname){case"play.itunes.apple.com":a.pathname="/WebObjects/MZPlay.woa/hls/workout/playlist.m3u8";break;case"play-edge.itunes.apple.com":a.pathname="/WebObjects/MZPlayLocal.woa/hls/workout/playlist.m3u8"}}e.hlsUrl=a.toString()}if(e?.fpsKeyServerUrl){let s=new t(e.fpsKeyServerUrl);switch(s.hostname=a||"play-edge.itunes.apple.com",s.hostname){case"play.itunes.apple.com":s.pathname="/WebObjects/MZPlay.woa/wa/fpsRequest";break;case"play-edge.itunes.apple.com":s.pathname="/WebObjects/MZPlayLocal.woa/wa/fpsRequest"}e.fpsKeyServerUrl=s.toString()}if(e?.fpsNonceServerUrl){let s=new t(e.fpsNonceServerUrl);switch(s.hostname=a||"play.itunes.apple.com",s.hostname){case"play.itunes.apple.com":s.pathname="/WebObjects/MZPlay.woa/wa/checkInNonceRequest";break;case"play-edge.itunes.apple.com":s.pathname="/WebObjects/MZPlayLocal.woa/wa/checkInNonceRequest"}e.fpsNonceServerUrl=s.toString()}return i("✅ Set Url",""),e}}i(`⚠ FORMAT: ${R}`,""),(async()=>{const{Settings:e,Caches:t,Configs:s}=L("iRingo","TV",C);switch(i(`⚠ Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:let t={};switch(R){case void 0:case"application/x-www-form-urlencoded":case"text/plain":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/html":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(t=JSON.parse($response.body),M){case"uts-api.itunes.apple.com":const a=parseInt(U.searchParams.get("v"),10),o=U.searchParams.get("pfm"),r=U.searchParams.get("caller");U.searchParams.get("sf");const n=($request.headers?.["X-Apple-I-Locale"]??$request.headers?.["x-apple-i-locale"])?.split("_")?.[0]??"zh";switch(N){case"/uts/v3/configurations":if("wta"!==r&&t?.data?.applicationProps){let i=[];e.Tabs.forEach((e=>{if(t.data.applicationProps.tabs.some((t=>t?.type===e))){let s=t.data.applicationProps.tabs.find((t=>t?.type===e));0===t.data.applicationProps.tabs.findIndex((t=>t?.type===e))?i.unshift(s):i.push(s)}else if(s.Tabs.some((t=>t?.type===e))){let t=s.Tabs.find((t=>t?.type===e));switch(t?.destinationType){case"SubTabs":t.subTabs=t.subTabs.map((e=>(e.title=s.i18n?.[e.type]?.get(n)??t.title,e)));case"Target":case"Client":t.title=s.i18n?.[t.type]?.get(n)??t.title}switch(t?.type){case"WatchNow":case"Originals":case"Library":default:i.push(t);break;case"Store":a>=54&&(a>=74&&(t.destinationType="Target",t.target={id:"tahoma_store",type:"Root",url:"https://tv.apple.com/store"},t.universalLinks=["https://tv.apple.com/store","https://tv.apple.com/movies","https://tv.apple.com/tv-shows"],delete t?.subTabs),i.push(t));break;case"Movies":case"TV":a<54&&(t.secondaryEnabled=!0),a<54&&i.push(t);break;case"MLS":if(a>=64)switch(o){case"atv":case"ipad":case"appletv":case"desktop":default:i.push(t);case"iphone":return}break;case"Sports":case"Kids":if(a<54&&(t.secondaryEnabled=!0),a<54)i.push(t);else switch(o){case"atv":case"ipad":case"appletv":case"desktop":default:i.push(t);case"iphone":}break;case"Search":a>=74&&(t.target.id="tahoma_searchlanding"),i.push(t);break;case"ChannelsAndApps":if(a>=74)switch(o){case"atv":case"ipad":case"appletv":i.push(t)}}}})),t.data.applicationProps.tabs=i}break;case"/uts/v3/user/settings":break;case"/uts/v3/canvases/Roots/watchNow":case"/uts/v3/canvases/Channels/tvs.sbd.4000":case"/uts/v3/canvases/Channels/tvs.sbd.7000":let i=t?.data?.canvas?.shelves;i&&(i=i.map((t=>(t?.items&&(t.items=t.items.map((t=>{let s=t?.playable||t?.videos?.shelfVideoTall,a=t?.playables;return s&&(s=$(s,e?.HLSUrl,e?.ServerUrl)),a&&Object.keys(a).forEach((t=>a[t]=$(a[t],e?.HLSUrl,e?.ServerUrl))),t}))),t))),t.data.canvas.shelves=i);break;case"/uts/v3/shelves/uts.col.UpNext":case"/uts/v3/shelves/uts.col.ChannelUpNext.tvs.sbd.4000":case"/uts/v3/shelves/uts.col.ChannelUpNext.tvs.sbd.7000":case"/uts/v3/shelves/edt.col.62d7229e-d9a1-4f00-98e5-458c11ed3938":let c=t?.data?.shelf;c?.items&&(c.items=c.items.map((t=>{let s=t?.playable||t?.videos?.shelfVideoTall,a=t?.playables;return s&&(s=$(s,e?.HLSUrl,e?.ServerUrl)),a&&Object.keys(a).forEach((t=>a[t]=$(a[t],e?.HLSUrl,e?.ServerUrl))),t})));break;default:if("uts"===P[0])if("v3"===P[1])switch(P[2]){case"movies":case"shows":case"episodes":case"sporting-events":let s=t?.data?.canvas?.shelves,a=t?.data?.content?.backgroundVideo,i=t?.data?.playables;s&&(s=s.map((t=>(t?.items&&(t.items=t.items.map((t=>{let s=t?.playable||t?.videos?.shelfVideoTall;s&&(s=$(s,e?.HLSUrl,e?.ServerUrl));let a=t?.playables;return a&&Object.keys(a).forEach((t=>a[t]=$(a[t],e?.HLSUrl,e?.ServerUrl))),t}))),t))),t.data.canvas.shelves=s),a&&(a=$(a,e?.HLSUrl,e?.ServerUrl)),i&&Object.keys(i).forEach((t=>i[t]=$(i[t],e?.HLSUrl,e?.ServerUrl)))}}break;case"umc-tempo-api.apple.com":switch(N){case"/v3/register":case"/v3/channels/scoreboard":case"/v3/channels/scoreboard/":i(JSON.stringify(t))}}$response.body=JSON.stringify(t);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case!1:}})().catch((t=>function(t){switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:i("","❗️执行错误!",t,"");break;case"Node.js":i("","❗️执行错误!",t.stack,"")}}(t))).finally((()=>function(t={}){switch(e){case"Surge":t.policy&&s.set(t,"headers.X-Surge-Policy",t.policy),i("",`🚩 执行结束! 🕛 ${(new Date).getTime()/1e3-$script.startTime} 秒`,""),$done(t);break;case"Loon":t.policy&&(t.node=t.policy),i("",`🚩 执行结束! 🕛 ${(new Date-$script.startTime)/1e3} 秒`,""),$done(t);break;case"Stash":t.policy&&s.set(t,"headers.X-Stash-Selected-Proxy",encodeURI(t.policy)),i("",`🚩 执行结束! 🕛 ${(new Date-$script.startTime)/1e3} 秒`,""),$done(t);break;case"Egern":case"Shadowrocket":default:i("","🚩 执行结束!",""),$done(t);break;case"Quantumult X":t.policy&&s.set(t,"opts.policy",t.policy),delete t["auto-redirect"],delete t["auto-cookie"],delete t["binary-mode"],delete t.charset,delete t.host,delete t.insecure,delete t.method,delete t.opt,delete t.path,delete t.policy,delete t["policy-descriptor"],delete t.scheme,delete t.sessionIndex,delete t.statusCode,delete t.timeout,t.body instanceof ArrayBuffer?(t.bodyBytes=t.body,delete t.body):ArrayBuffer.isView(t.body)?(t.bodyBytes=t.body.buffer.slice(t.body.byteOffset,t.body.byteLength+t.body.byteOffset),delete t.body):t.body&&delete t.bodyBytes,i("","🚩 执行结束!",""),$done(t);break;case"Node.js":i("","🚩 执行结束!",""),process.exit(1)}}($response)));
