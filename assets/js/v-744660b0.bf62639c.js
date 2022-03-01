"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77935],{57420:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-744660b0",path:"/guide/configuration/ota-device-updates.html",title:"OTA device firmware update",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"OTA Index override file",slug:"ota-index-override-file",children:[]}],filePathRelative:"guide/configuration/ota-device-updates.md",git:{updatedTime:1646150005e3}}},54338:(e,a,n)=>{n.r(a),n.d(a,{default:()=>m});var s=n(66252);const t=(0,s._)("h1",{id:"ota-device-firmware-update",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ota-device-firmware-update","aria-hidden":"true"},"#"),(0,s.Uk)(" OTA device firmware update")],-1),i=(0,s.Uk)("Also see the "),o=(0,s.Uk)("OTA firmware update usage guide"),l=(0,s.Uk)("."),r=(0,s.uE)('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Optional: OTA update settings</span>\n<span class="token comment"># See https://www.zigbee2mqtt.io/guide/usage/ota_updates.html for more info</span>\n<span class="token key atrule">ota</span><span class="token punctuation">:</span>\n    <span class="token comment"># Optional: use IKEA TRADFRI OTA test server, see OTA updates documentation (default: false)</span>\n    <span class="token key atrule">ikea_ota_use_test_url</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token comment"># Minimum time between OTA update checks</span>\n    <span class="token key atrule">update_check_interval</span><span class="token punctuation">:</span> <span class="token number">1440</span>\n    <span class="token comment"># Disable automatic update checks</span>\n    <span class="token key atrule">disable_automatic_update_check</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="ota-index-override-file" tabindex="-1"><a class="header-anchor" href="#ota-index-override-file" aria-hidden="true">#</a> OTA Index override file</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">ota</span><span class="token punctuation">:</span>\n    <span class="token key atrule">zigbee_ota_override_index_location</span><span class="token punctuation">:</span> my_index.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Value of this key is a file name in the configuration directory (next to <code>configuration.yaml</code>). The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container.</p><p>Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case <code>zigbee_ota_override_index_location</code> key should be an URL of the index file.</p>',5),p=(0,s.Uk)("Please refer to "),u=(0,s.Uk)("OTA firmware update usage guide"),c=(0,s.Uk)(" for more details how Zigbee2MQTT fetches OTA images, how to add an image for a DIY device, or how to override official images with other ones."),d={},m=(0,n(83744).Z)(d,[["render",function(e,a){const n=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[i,(0,s.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[o])),_:1}),l]),r,(0,s._)("p",null,[p,(0,s.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[u])),_:1}),c])],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{for(const[n,s]of a)e[n]=s;return e}}}]);