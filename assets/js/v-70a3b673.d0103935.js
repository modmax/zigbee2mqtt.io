"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24411],{52202:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-70a3b673",path:"/devices/99120-021.html",title:"Kwikset 99120-021 control via MQTT",lang:"en-US",frontmatter:{title:"Kwikset 99120-021 control via MQTT",description:"Integrate your Kwikset 99120-021 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2022-02-10T16:39:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Pin_code (composite)",slug:"pin-code-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/99120-021.md",git:{updatedTime:1646150005e3}}},92655:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});var i=o(66252);const d=(0,i.uE)('<h1 id="kwikset-99120-021" tabindex="-1"><a class="header-anchor" href="#kwikset-99120-021" aria-hidden="true">#</a> Kwikset 99120-021</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>99120-021</td></tr><tr><td>Vendor</td><td>Kwikset</td></tr><tr><td>Description</td><td>912 SmartCode traditional electronic lever</td></tr><tr><td>Exposes</td><td>lock (state, lock_state), battery, pin_code, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/99120-021.jpg" alt="Kwikset 99120-021"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the lock to Zigbee2MQTT by pressing the A button 4 times in a row.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),a=(0,i.Uk)("How to use device type specific configuration"),c=(0,i.uE)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin_code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code></p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for.</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock. Allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled. Allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),s={},r=(0,o(83744).Z)(s,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);