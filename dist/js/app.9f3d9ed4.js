(function(){"use strict";var t={9533:function(t,e,o){var s=o(9242),n=o(3396);const i={class:"app"};function a(t,e,o,s,a,r){const l=(0,n.up)("navigation-bar"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(l),(0,n._)("div",i,[(0,n.Wm)(u)])],64)}const r={class:"navbar"},l={class:"naav__btns"},u=(0,n.Uk)(" Posts "),p=(0,n.Uk)(" About the site "),c=(0,n.Uk)(" With store ");function d(t,e,o,s,i,a){const d=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/")),class:"vue3"},"Vue 3"),(0,n._)("div",l,[(0,n.Wm)(d,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)(d,{onClick:e[2]||(e[2]=e=>t.$router.push("/about")),style:{"margin-left":"20px"}},{default:(0,n.w5)((()=>[p])),_:1}),(0,n.Wm)(d,{onClick:e[3]||(e[3]=e=>t.$router.push("/store")),style:{"margin-left":"20px"}},{default:(0,n.w5)((()=>[c])),_:1})])])}const m={class:"btn"};function h(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("button",m,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var v={name:"my-button"},g=o(89);const f=(0,g.Z)(v,[["render",h],["__scopeId","data-v-5b5edbc8"]]);var y=f,w={components:{MyButton:y}};const _=(0,g.Z)(w,[["render",d],["__scopeId","data-v-322bd046"]]);var b=_,k={components:{NavigationBar:b}};const P=(0,g.Z)(k,[["render",a]]);var D=P;const C=["value"];function V(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>a.updateInput&&a.updateInput(...t)),class:"input",type:"text"},null,40,C)}var W={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const O=(0,g.Z)(W,[["render",V],["__scopeId","data-v-0e9e7bd4"]]);var $=O;function U(t,e,o,i,a,r){return t.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,s.iM)(((...e)=>t.hideDialog&&t.hideDialog(...e)),["stop"]))},[(0,n._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,n.WI)(t.$slots,"default")])])):(0,n.kq)("",!0)}var I={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){}},x={name:"my-dialog",mixins:[I]};const M=(0,g.Z)(x,[["render",U]]);var Z=M,L=o(7139);const j=(0,n._)("option",{disabled:"",value:""},"Choose from the list",-1),S=["value"];function z(t,e,o,i,a,r){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.modelValue=t),change:"changeOption"},[j,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.options,(t=>((0,n.wg)(),(0,n.iD)("option",{key:t.value,value:t.value},(0,L.zw)(t.name),9,S)))),128))],512)),[[s.bM,o.modelValue]])}var B={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const Q=(0,g.Z)(B,[["render",z]]);var T=Q;const A={class:"page__wrapper"},E=["onClick"];function F(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("div",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.totalPages,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:(0,L.C_)(["page",{"current-page":t.page===e}]),onClick:t=>a.changePage(e)},(0,L.zw)(e),11,E)))),128))])}var H={name:"my-pagination-page",methods:{changePage(t){this.page=t,this.fetchPosts()}},props:{}};const Y=(0,g.Z)(H,[["render",F]]);var R=Y,q=[y,$,Z,T,R],K=o(2483);const N=(0,n._)("h3",null,"We are glad to welcome you from here fuck))",-1),G=[N];function J(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("div",null,G)}var X={};const tt=(0,g.Z)(X,[["render",J]]);var et=tt;const ot=(0,n._)("h3",null,"Page with posts",-1),st={class:"app__btns"},nt=(0,n.Uk)(" Сreate a post "),it={key:1},at={class:"observer"};function rt(t,e,o,s,i,a){const r=(0,n.up)("my-input"),l=(0,n.up)("my-button"),u=(0,n.up)("my-select"),p=(0,n.up)("post-form"),c=(0,n.up)("my-dialog"),d=(0,n.up)("post-list"),m=(0,n.Q2)("focus"),h=(0,n.Q2)("intersection");return(0,n.wg)(),(0,n.iD)("div",null,[ot,(0,n.wy)((0,n.Wm)(r,{modelValue:i.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>i.searchQuery=t),placeholder:"search..."},null,8,["modelValue"]),[[m]]),(0,n._)("div",st,[(0,n.Wm)(l,{onClick:a.showDialog},{default:(0,n.w5)((()=>[nt])),_:1},8,["onClick"]),(0,n.Wm)(u,{modelValue:i.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>i.selectedSort=t),options:i.sortOptions},null,8,["modelValue","options"])]),(0,n.Wm)(c,{show:i.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>i.dialogVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{onCreate:a.createPost},null,8,["onCreate"])])),_:1},8,["show"]),i.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",it," Downloading... ")):((0,n.wg)(),(0,n.j4)(d,{key:0,posts:a.sortAndSearchedPosts,onRemove:a.removePost},null,8,["posts","onRemove"])),(0,n.wy)((0,n._)("div",at,null,512),[[h,a.loadMorePosts]])])}const lt=t=>((0,n.dD)("data-v-25e9d1f9"),t=t(),(0,n.Cn)(),t),ut=lt((()=>(0,n._)("h3",null,"Creating a post",-1))),pt=(0,n.Uk)(" Create a post ");function ct(t,e,o,i,a,r){const l=(0,n.up)("my-input"),u=(0,n.up)("my-button"),p=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[ut,(0,n.wy)((0,n.Wm)(l,{modelValue:a.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>a.post.title=t),type:"text",placeholder:"Name"},null,8,["modelValue"]),[[p]]),(0,n.Wm)(l,{modelValue:a.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>a.post.body=t),type:"text",placeholder:"Description"},null,8,["modelValue"]),(0,n.Wm)(u,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:r.createPost},{default:(0,n.w5)((()=>[pt])),_:1},8,["onClick"])],32)}var dt={components:{MyInput:$},data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const mt=(0,g.Z)(dt,[["render",ct],["__scopeId","data-v-25e9d1f9"]]);var ht=mt;const vt=t=>((0,n.dD)("data-v-094818ce"),t=t(),(0,n.Cn)(),t),gt=vt((()=>(0,n._)("h3",null,"List of users",-1))),ft={style:{color:"#616161"}};function yt(t,e,o,i,a,r){const l=(0,n.up)("post-item");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("div",null,[gt,(0,n.Wm)(s.W3,{name:"user-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.posts,(e=>((0,n.wg)(),(0,n.j4)(l,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})],512),[[s.F8,o.posts.length>0]]),(0,n.wy)((0,n._)("h3",ft," The list of users is empty ",512),[[s.F8,0===o.posts.length]])],64)}const wt=t=>((0,n.dD)("data-v-4644eb14"),t=t(),(0,n.Cn)(),t),_t={class:"post"},bt=wt((()=>(0,n._)("strong",null,"Title:",-1))),kt=wt((()=>(0,n._)("strong",null,"Description:",-1))),Pt={class:"post_btns"},Dt=(0,n.Uk)(" Open a post "),Ct=(0,n.Uk)(" Delete a post ");function Vt(t,e,o,s,i,a){const r=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",_t,[(0,n._)("div",null,[(0,n._)("div",null,(0,L.zw)(o.post.id),1),(0,n._)("div",null,[bt,(0,n.Uk)(" "+(0,L.zw)(o.post.title),1)]),(0,n._)("div",null,[kt,(0,n.Uk)(" "+(0,L.zw)(o.post.body),1)])]),(0,n._)("div",Pt,[(0,n.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,n.w5)((()=>[Dt])),_:1}),(0,n.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,n.w5)((()=>[Ct])),_:1})])])}var Wt={props:{post:{type:Object,required:!0}},methods:{},components:{MyButton:y}};const Ot=(0,g.Z)(Wt,[["render",Vt],["__scopeId","data-v-4644eb14"]]);var $t=Ot,Ut={components:{PostItem:$t},props:{posts:{type:Array,required:!0}}};const It=(0,g.Z)(Ut,[["render",yt],["__scopeId","data-v-094818ce"]]);var xt=It,Mt=o(6265),Zt=o.n(Mt),Lt={components:{PostForm:ht,PostList:xt},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPage:0,sortOptions:[{value:"title",name:"By title"},{value:"body",name:"By body"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await Zt().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Error")}finally{this.isPostsLoading=!1}},async loadMorePosts(){try{this.page+=1;const t=await Zt().get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert("Error")}}},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},mounted(){this.fetchPosts()}};const jt=(0,g.Z)(Lt,[["render",rt]]);var St=jt;const zt=(0,n._)("h1",null," uppu pu ",-1),Bt=[zt];function Qt(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("div",null,Bt)}var Tt={};const At=(0,g.Z)(Tt,[["render",Qt]]);var Et=At;function Ft(t,e,o,s,i,a){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h3",null,"This is the page of the post with id "+(0,L.zw)(t.$route.params.id),1)])}var Ht={};const Yt=(0,g.Z)(Ht,[["render",Ft]]);var Rt=Yt;const qt=(0,n.Uk)("Dislike"),Kt=(0,n.Uk)("Like");function Nt(t,e,o,s,i,a){const r=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",null,(0,L.zw)(t.store.state.post.limit),1),(0,n._)("h1",null,(0,L.zw)(t.$store.state.isAuth?"The user is logged in":"Log in to use the service"),1),(0,n._)("h1",null,(0,L.zw)(t.$store.state.likes),1),(0,n._)("div",null,[(0,n.Wm)(r,{onClick:e[0]||(e[0]=e=>t.$store.commit("decrementLikes"))},{default:(0,n.w5)((()=>[qt])),_:1}),(0,n.Wm)(r,{onClick:e[1]||(e[1]=e=>t.$store.commit("incrementLikes"))},{default:(0,n.w5)((()=>[Kt])),_:1})])])}var Gt={components:{PostForm:ht,PostList:xt},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPage:0,sortOptions:[{value:"title",name:"By title"},{value:"body",name:"By body"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0}},mounted(){}};const Jt=(0,g.Z)(Gt,[["render",Nt]]);var Xt=Jt;const te=[{path:"/",component:et},{path:"/posts",component:St},{path:"/about",component:Et},{path:"/posts/:id",component:Rt},{path:"/store",component:Xt}],ee=(0,K.p7)({history:(0,K.PO)("/"),routes:te});var oe=ee,se={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},n=new IntersectionObserver(s,o);n.observe(t)},name:"intersecton"},ne={mounted(t){t.focus()},name:"focus"},ie=[ne,se],ae=o(65),re=(0,ae.MT)({modules:{post:postModule}});const le=(0,s.ri)(D);q.forEach((t=>{le.component(t.name,t)})),ie.forEach((t=>{le.directive(t.name,t)})),le.use(oe).use(re).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,i){if(!s){var a=1/0;for(p=0;p<t.length;p++){s=t[p][0],n=t[p][1],i=t[p][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){t.splice(p--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[s,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,a=s[0],r=s[1],l=s[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(l)var p=l(o)}for(e&&e(s);u<a.length;u++)i=a[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(p)},s=self["webpackChunkproject1"]=self["webpackChunkproject1"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(9533)}));s=o.O(s)})();
//# sourceMappingURL=app.9f3d9ed4.js.map