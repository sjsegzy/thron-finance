(()=>{"use strict";var t={151:(t,e)=>{function i(t,e){if(void 0===t)throw new Error("".concat(null!=e?e:"Value"," is undefined"));return t}function r(t,e){if(null===t)throw new Error("".concat(null!=e?e:"Value"," is null"));return t}e.ensureNotNull=void 0,e.ensureNotNull=r}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,i),o.exports}(()=>{var t=i(151);function e(t=location.host){return-1!==["i18n.tradingview.com","partial.tradingview.com","www.tradingview.com","wwwcn.tradingview.com"].indexOf(t)||-1!==["d33t3vvu2t2yu5.cloudfront.net","dwq4do82y8xi7.cloudfront.net","s.tradingview.com","s3.tradingview.com"].indexOf(t)||t.match(/^[a-z]{2}\.tradingview\.com/)||t.match(/prod-[^.]+.tradingview.com/)?"battle":t.includes("tradingview.com")||t.includes("staging")?"staging":t.match(/webcharts/)?"staging_local":(t.match(/^localhost(:\d+)?$/),"local")}const r={"color-gull-gray":"#9db2bd","color-brand":"#2962FF","color-brand-hover":"#1E53E5","color-brand-active":"#1848CC"}
;const n=JSON.parse('{"crypto-mkt-screener":{"width":1000,"height":490,"defaultColumn":"overview","market":"crypto","screener_type":"crypto_mkt","displayCurrency":"USD","isTransparent":false},"events":{"width":510,"height":600,"isTransparent":false,"hideImportanceIndicator":false,"autosize":false},"forex-cross-rates":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD"],"frameElementId":null,"autosize":false},"forex-heat-map":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],"frameElementId":null,"autosize":false},"hotlists":{"width":400,"height":600,"isTransparent":false,"dateRange":"12M","showSymbolLogo":false},"market-overview":{"width":400,"height":650,"isTransparent":false,"dateRange":"12M","showSymbolLogo":true},"market-quotes":{"width":770,"height":450,"isTransparent":false,"showSymbolLogo":false},"mini-symbol-overview":{"width":350,"height":220,"symbol":"FX:EURUSD","dateRange":"12M","isTransparent":false,"autosize":false,"largeChartUrl":""},"symbol-overview":{"width":1000,"height":500,"symbols":[["Apple","AAPL|1D"],["Google","GOOGL|1D"],["Microsoft","MSFT|1D"]],"autosize":false,"chartOnly":false,"hideDateRanges":false,"hideMarketStatus":false,"hideSymbolLogo":false,"scalePosition":"right","scaleMode":"Normal","fontFamily":"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif","fontSize":"10","noTimeScale":false,"chartType":"area","valuesTracking":"0","changeMode":"price-and-percent"},"screener":{"width":1100,"height":523,"defaultColumn":"overview","defaultScreen":"general","market":"forex","showToolbar":true,"isTransparent":false},"single-quote":{"width":350,"symbol":"FX:EURUSD","isTransparent":false},"symbol-profile":{"width":480,"height":650,"symbol":"NASDAQ:AAPL","isTransparent":false},"symbol-info":{"width":1000,"symbol":"NASDAQ:AAPL","isTransparent":false},"technical-analysis":{"interval":"1m","width":425,"isTransparent":false,"height":450,"symbol":"NASDAQ:AAPL","showIntervalTabs":true},"ticker-tape":{"isTransparent":false,"displayMode":"adaptive","showSymbolLogo":false},"tickers":{"isTransparent":false,"showSymbolLogo":false},"financials":{"width":480,"height":830,"autosize":false,"symbol":"NASDAQ:AAPL","isTransparent":false,"displayMode":"regular","largeChartUrl":""},"timeline":{"width":480,"height":830,"autosize":false,"isTransparent":false,"displayMode":"regular","feedMode":"all_symbols"}}');var o,s;!function(t){let e;!function(t){t.SetSymbol="set-symbol",t.SetInterval="set-interval"}(e=t.Names||(t.Names={}))}(o||(o={})),function(t){let e;!function(t){t.SymbolClick="tv-widget-symbol-click",t.WidgetLoad="tv-widget-load",t.WidgetReady="tv-widget-ready",t.ResizeIframe="tv-widget-resize-iframe",t.NoData="tv-widget-no-data"}(e=t.Names||(t.Names={}))}(s||(s={}));const a="__FAIL__",l="__NHTTP__",c=new RegExp("^http(s)?:(//)?");function h(t=location.href){const e=function(t){try{const e=new URL(t);return c.test(e.protocol)?null:l}catch(t){return a}}(t)
;return e||t.replace(c,"")}const d=["locale","symbol","market"];new class extends class{constructor(t){this._copyrightContainer=null;const e=null!=t?t:this._getScriptInfo();e&&this._replaceScript(e)}hasCopyright(){return!!this._copyrightContainer}get widgetId(){throw new Error("Method must be overridden")}widgetUtmName(){return this.widgetId}get defaultSettings(){return n[this.widgetId]}get propertiesToWorkWith(){return[]}get useSeparateWidgetHost(){return!1}get useParamsForConnectSocket(){return!1}filterRawSettings(t){const e={},i=Object.keys(t),r=new Set(this.propertiesToWorkWith);return i.forEach((i=>{r.has(i)&&(e[i]=t[i])})),e}get propertiesToSkipInHash(){return["customer","locale"]}get propertiesToAddToGetParams(){return["locale"]}_defaultWidth(){}_defaultHeight(){}_getScriptInfo(){const t=document.currentScript;if(!t||!t.src)return console.error("Could not self-replace the script, widget embedding has been aborted"),null;const i=function(t){const e=new URL(t,document.baseURI);return{host:e.host,pathname:e.pathname,href:e.href,protocol:e.protocol}}(t.src);return{scriptURL:i,scriptEnv:e(i.host),scriptElement:t,id:t.id,rawSettings:this._scriptContentToJSON(t)}}_replaceScript(e){const{scriptEnv:i,scriptURL:n,scriptElement:o,rawSettings:a,id:l}=e,c=o.parentNode,h=function(t){if(null===t)return null;const e=t.querySelector("#tradingview-copyright"),i=t.querySelector("#tradingview-quotes"),r=e||i;return r&&t.removeChild(r),r}(c),d=c.querySelector(".tradingview-widget-copyright");this._copyrightContainer=h||d;const g=c.classList.contains("tradingview-widget-container");this.iframeContainer=c&&g?c:document.createElement("div"),a&&(this.settings=this.filterRawSettings(a)),a&&this._validateSettings()||(console.error("Invalid settings provided, fall back to defaults"),this.settings=this.filterRawSettings(this.defaultSettings));const u="32px",{width:m,height:p}=this.settings,f=void 0===p?void 0:`${p}${Number.isInteger(p)?"px":""}`,w=void 0===m?void 0:`${m}${Number.isInteger(m)?"px":""}`;void 0!==w&&(this.iframeContainer.style.width=w),void 0!==f&&(this.iframeContainer.style.height=f),this.iframeContainer.appendChild(function(){const t=document.createElement("style")
;return t.innerHTML=`\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: ${r["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: ${r["color-brand"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: ${r["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: ${r["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: ${r["color-brand-hover"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: ${r["color-brand-active"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: ${r["color-brand"]} !important;\n\t}\n\t`,t}());const y=h&&!this.settings.whitelabel,v=this.hasCopyright()&&f?`calc(${f} - 32px)`:f,b=location.hostname,S=d?"widget_new":"widget",C=this.widgetUtmName();this.settings.utm_source=b,this.settings.utm_medium=S,this.settings.utm_campaign=C,this._updateCopyrightHrefParams(b,S,C),this.iframe=this._createIframe(v,w,n,i,l);const _=this.iframeContainer.querySelector(".tradingview-widget-container__widget");if(_?((0,t.ensureNotNull)(_.parentElement).replaceChild(this.iframe,_),null==o||o.remove()):g?(this.iframeContainer.appendChild(this.iframe),null==o||o.remove()):(this.iframeContainer.appendChild(this.iframe),c.replaceChild(this.iframeContainer,(0,t.ensureNotNull)(o))),function(t,e,i){const r=e.contentWindow;if(!r)return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"),()=>{};function n(e){e.source&&e.source===r&&e.data&&e.data.name&&e.data.name===t&&i(e.data.data)}window.addEventListener("message",n,!1)}(s.Names.ResizeIframe,this.iframe,(t=>{t.width&&(this.iframe.style.width=t.width+"px",this.iframeContainer.style.width=t.width+"px"),this.iframe.style.height=t.height+"px",this.iframeContainer.style.height=t.height+(this.hasCopyright()?32:0)+"px"})),y){const t=document.createElement("div");t.style.height=u,t.style.lineHeight=u,void 0!==w&&(t.style.width=w),t.style.textAlign="center",t.style.verticalAlign="middle",t.innerHTML=h.innerHTML,this.iframeContainer.appendChild(t)}}_iframeSrcBase(t,e){let i=`${this._iframeSrcHost(t,e)}/embed-widget/${this.widgetId}/`;return this.settings.customer&&-1!==this.propertiesToSkipInHash.indexOf("customer")&&(i+=`${this.settings.customer}/`),i}_iframeSrcHost(t,e){const i=["staging","local"].includes(e)?"https://www.xstaging-widget.tv":"https://www.tradingview-widget.com";if(this.settings.useWidgetHost)return i
;return t.host.includes("beta.tradingview.com")||t.host.includes("betacdn.tradingview.com")?this.useSeparateWidgetHost?i:"https://betacdn.tradingview.com":["staging","local"].includes(e)?`${t.protocol}//${t.host}`:this.useSeparateWidgetHost?i:"https://s.tradingview.com"}_validateSettings(){const t=(t,e)=>{if(void 0===t)return e;const i=String(t);return/^\d+$/.test(i)?parseInt(i):/^(\d+%|auto)$/.test(i)?i:null},e=t(this.settings.width,this._defaultWidth()),i=t(this.settings.height,this._defaultHeight());return null!==e&&null!==i&&(this.settings.width=e,this.settings.height=i,!0)}_setSettingsQueryString(t){const e=this.propertiesToAddToGetParams.filter((t=>-1!==d.indexOf(t))),i=function(t,e){const i=Object.create(Object.getPrototypeOf(t));for(const r of e)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r]);return i}(this.settings,e);for(const[e,r]of Object.entries(i))t.searchParams.append(e,r)}_setHashString(t,e){const i={};e&&(i.frameElementId=e),Object.keys(this.settings).forEach((t=>{-1===this.propertiesToSkipInHash.indexOf(t)&&(i[t]=this.settings[t])})),this.useParamsForConnectSocket&&(i["page-uri"]=h());Object.keys(i).length>0&&(t.hash=encodeURIComponent(JSON.stringify(i)))}_scriptContentToJSON(t){const e=t.innerHTML.trim();try{return JSON.parse(e)}catch(t){return console.error(`Widget settings parse error: ${t}`),null}}_createIframe(t,e,i,r,n){const o=document.createElement("iframe");n&&(o.id=n),this.settings.enableScrolling||o.setAttribute("scrolling","no"),o.setAttribute("allowtransparency","true"),o.setAttribute("frameborder","0"),o.style.boxSizing="border-box",o.style.display="block",void 0!==t&&(o.style.height=t),void 0!==e&&(o.style.width=e);const s=new URL(this._iframeSrcBase(i,r));return this._setSettingsQueryString(s),this._setHashString(s,n),o.setAttribute("src",s.toString()),o}_updateCopyrightHrefParams(t,e,i){if(this._copyrightContainer){const r=this._copyrightContainer.querySelector("a");if(r){const n=r.getAttribute("href");if(n)try{const o=new URL(n);o.searchParams.set("utm_source",t),o.searchParams.set("utm_medium",e),o.searchParams.set("utm_campaign",i),r.setAttribute("href",o.toString())}catch(t){console.log(`Cannot update link UTM params, href="${n}"`)}}}}}{get widgetId(){return"hotlists"}get useParamsForConnectSocket(){return!0}get propertiesToWorkWith(){return["belowLineFillColorFalling","belowLineFillColorGrowing","belowLineFillColorFallingBottom","belowLineFillColorGrowingBottom","colorTheme","customer","exchange","gridLineColor","height","dateRange","isTransparent","largeChartUrl","locale","plotLineColorFalling","plotLineColorGrowing","scaleFontColor","showChart","showSymbolLogo","showFloatingTooltip","symbolActiveColor","symbolDescriptionColor","symbolSeparatorColor","symbolShortNameColor","tickerColorFalling","tickerColorGrowing","useWidgetHost","whitelabel","width"]}}})()})();