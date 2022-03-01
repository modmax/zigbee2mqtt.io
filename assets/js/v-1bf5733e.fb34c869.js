"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34035],{92469:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-1bf5733e",path:"/devices/ICZB-RM11S.html",title:"iCasa ICZB-RM11S control via MQTT",lang:"en-US",frontmatter:{title:"iCasa ICZB-RM11S control via MQTT",description:"Integrate your iCasa ICZB-RM11S via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-11-01T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Resetting",slug:"resetting",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ICZB-RM11S.md",git:{updatedTime:1646150005e3}}},54318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var i=a(66252);const n=(0,i.uE)('<h1 id="icasa-iczb-rm11s" tabindex="-1"><a class="header-anchor" href="#icasa-iczb-rm11s" aria-hidden="true">#</a> iCasa ICZB-RM11S</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ICZB-RM11S</td></tr><tr><td>Vendor</td><td>iCasa</td></tr><tr><td>Description</td><td>Zigbee 3.0 remote control</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ICZB-RM11S.jpg" alt="iCasa ICZB-RM11S"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the All Off and All On button on the Remote until the Status LED turns on. Then immediately press the All Off button. The Status LED will blink 5 times quickly to indicate a successful pairing.</p><h3 id="resetting" tabindex="-1"><a class="header-anchor" href="#resetting" aria-hidden="true">#</a> Resetting</h3><p>Press and hold the All Off and All On button on the Remote until the Status LED turns on. Then immediately press 5 times the All On button.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',8),s=(0,i.Uk)("How to use device type specific configuration"),o=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>recall_*</code>, <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},r=(0,a(83744).Z)(d,[["render",function(e,t){const a=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);