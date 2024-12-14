(function(){"use strict";var e={8317:function(e,t,n){var a=n(5130),r=n(6768);const o={id:"app"};function s(e,t,n,a,s,l){const i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.bF)(i)])}var l={name:"App"},i=n(1241);const c=(0,i.A)(l,[["render",s]]);var d=c,u=n(1387);const p={class:"login-container d-flex justify-content-center align-items-center min-vh-100"},f={class:"card p-4 shadow-lg",style:{width:"300px","background-color":"#1c1c1c",color:"#f5f5f5"}},m={class:"mb-3"},b={class:"mb-3"},g={class:"text-center mt-3"};function h(e,t,n,o,s,l){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",p,[(0,r.Lk)("div",f,[t[9]||(t[9]=(0,r.Lk)("h3",{class:"text-center mb-4"},"Login",-1)),(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,a.D$)(((...e)=>l.login&&l.login(...e)),["prevent"])),class:"needs-validation",novalidate:""},[(0,r.Lk)("div",m,[t[3]||(t[3]=(0,r.Lk)("label",{for:"username",class:"form-label"},"Username:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),class:"form-control bg-dark text-light",id:"username",required:""},null,512),[[a.Jo,s.username]]),t[4]||(t[4]=(0,r.Lk)("div",{class:"invalid-feedback"}," Please enter your username. ",-1))]),(0,r.Lk)("div",b,[t[5]||(t[5]=(0,r.Lk)("label",{for:"password",class:"form-label"},"Password:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),class:"form-control bg-dark text-light",id:"password",required:""},null,512),[[a.Jo,s.password]]),t[6]||(t[6]=(0,r.Lk)("div",{class:"invalid-feedback"}," Please enter your password. ",-1))]),t[7]||(t[7]=(0,r.Lk)("button",{type:"submit",class:"btn btn-primary w-100"},"Login",-1))],32),(0,r.Lk)("p",g,[(0,r.bF)(i,{to:"/register",class:"text-light"},{default:(0,r.k6)((()=>t[8]||(t[8]=[(0,r.eW)("Register here")]))),_:1})])])])}n(4114);var k={data(){return{username:"",password:""}},methods:{async login(){try{const e=await fetch("http://localhost:7080/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password}),credentials:"include"});e.ok?this.$router.push("/upload"):alert("Login failed!")}catch(e){console.error("Error during login:",e)}}}};const v=(0,i.A)(k,[["render",h]]);var L=v;const w={class:"register-container d-flex justify-content-center align-items-center min-vh-100"},y={class:"card p-4 shadow-lg",style:{width:"300px","background-color":"#1c1c1c",color:"#f5f5f5"}},x={class:"mb-3"},O={class:"mb-3"},A={class:"mb-3"},U={class:"text-center mt-3"};function j(e,t,n,o,s,l){const i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",w,[(0,r.Lk)("div",y,[t[12]||(t[12]=(0,r.Lk)("h3",{class:"text-center mb-4"},"Register",-1)),(0,r.Lk)("form",{onSubmit:t[3]||(t[3]=(0,a.D$)(((...e)=>l.register&&l.register(...e)),["prevent"])),class:"needs-validation",novalidate:""},[(0,r.Lk)("div",x,[t[4]||(t[4]=(0,r.Lk)("label",{for:"username",class:"form-label"},"Username:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),class:"form-control bg-dark text-light",id:"username",required:""},null,512),[[a.Jo,s.username]]),t[5]||(t[5]=(0,r.Lk)("div",{class:"invalid-feedback"}," Please enter a username. ",-1))]),(0,r.Lk)("div",O,[t[6]||(t[6]=(0,r.Lk)("label",{for:"password",class:"form-label"},"Password:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),class:"form-control bg-dark text-light",id:"password",required:""},null,512),[[a.Jo,s.password]]),t[7]||(t[7]=(0,r.Lk)("div",{class:"invalid-feedback"}," Please enter a password. ",-1))]),(0,r.Lk)("div",A,[t[8]||(t[8]=(0,r.Lk)("label",{for:"email",class:"form-label"},"Email:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>s.email=e),class:"form-control bg-dark text-light",id:"email",required:""},null,512),[[a.Jo,s.email]]),t[9]||(t[9]=(0,r.Lk)("div",{class:"invalid-feedback"}," Please enter a valid email address. ",-1))]),t[10]||(t[10]=(0,r.Lk)("button",{type:"submit",class:"btn btn-primary w-100"},"Register",-1))],32),(0,r.Lk)("p",U,[(0,r.bF)(i,{to:"/login",class:"text-light"},{default:(0,r.k6)((()=>t[11]||(t[11]=[(0,r.eW)("Back to login")]))),_:1})])])])}var P={data(){return{username:"",password:"",email:""}},methods:{async register(){try{const e=await fetch("http://localhost:7080/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password,email:this.email})});e.ok?(alert("Registration successful!"),this.$router.push("/login")):alert("Registration failed!")}catch(e){console.error("Error during registration:",e)}}}};const C=(0,i.A)(P,[["render",j]]);var E=C,F=n(4232);const _={class:"container-fluid p-0 vh-100 d-flex flex-column bg-black"},S={class:"navbar navbar-expand-lg navbar-dark bg-dark"},J={class:"container-fluid"},T={class:"d-flex align-items-center"},q={class:"text-white me-3"},N={class:"d-flex justify-content-center align-items-center flex-grow-1"},R={class:"mb-3"};function V(e,t,n,o,s,l){return(0,r.uX)(),(0,r.CE)("div",_,[(0,r.Lk)("nav",S,[(0,r.Lk)("div",J,[t[3]||(t[3]=(0,r.Lk)("a",{class:"navbar-brand",href:"/path-to-audios"},"My Audios",-1)),(0,r.Lk)("div",T,[(0,r.Lk)("span",q,(0,F.v_)(s.userName),1),(0,r.Lk)("button",{class:"btn btn-outline-danger",type:"button",onClick:t[0]||(t[0]=(...e)=>l.logout&&l.logout(...e))},"Logout")])])]),(0,r.Lk)("div",N,[(0,r.Lk)("form",{class:"text-center p-4 rounded bg-dark",onSubmit:t[2]||(t[2]=(0,a.D$)(((...e)=>l.uploadAudio&&l.uploadAudio(...e)),["prevent"])),style:{"max-width":"500px",width:"100%",color:"#fff"}},[t[4]||(t[4]=(0,r.Lk)("h3",{class:"mb-3 text-white"},[(0,r.eW)("Select "),(0,r.Lk)("span",null,"Audio")],-1)),(0,r.Lk)("div",R,[(0,r.Lk)("input",{class:"form-control",type:"file",id:"formFile",onChange:t[1]||(t[1]=(...e)=>l.handleFileUpload&&l.handleFileUpload(...e))},null,32)]),t[5]||(t[5]=(0,r.Lk)("button",{type:"submit",class:"btn",style:{"background-color":"#ff8c00"}},"Upload",-1))],32)])])}var $=n(8704),X={name:"AppMain",data(){return{userName:"User Name"}},methods:{logout(){$.A.remove("token"),window.location.href="/login"},handleFileUpload(e){const t=e.target.files[0];console.log("File selected:",t.name)},uploadAudio(){console.log("Uploading audio...")}}};const D=(0,i.A)(X,[["render",V],["__scopeId","data-v-2a3ffc07"]]);var M=D;const W=[{path:"/login",component:L},{path:"/register",component:E},{path:"/upload",component:M}],B=(0,u.aE)({history:(0,u.LA)(),routes:W});var I=B;(0,a.Ef)(d).use(I).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],o=e[d][2];for(var l=!0,i=0;i<a.length;i++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(l=!1,o<s&&(s=o));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],l=a[1],i=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(i)var d=i(n)}for(t&&t(a);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkaudio_app"]=self["webpackChunkaudio_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(8317)}));a=n.O(a)})();
//# sourceMappingURL=app.68f09c43.js.map