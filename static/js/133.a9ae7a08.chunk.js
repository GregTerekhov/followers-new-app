"use strict";(self.webpackChunkfollowers_new_app=self.webpackChunkfollowers_new_app||[]).push([[133],{724:function(n,e,t){t.d(e,{U:function(){return x}});var o=t(2791),i=t(9434),r=function(n){return n.users.items},a=function(n){return n.users.page},s=function(n){return n.users.filter},d=t(9806),p=t(1882),c=function(n){return n.tweets.followersIds},l=function(n){return n.tweets.isFollowing},x=function(){var n=(0,i.v9)(r),e=(0,i.v9)(a),t=(0,i.v9)(s),x=(0,i.v9)(l),f=(0,i.v9)(c),u=(0,i.I0)(),h=(0,o.useCallback)((function(){u((0,d.u)(e))}),[u,e]),m=(0,o.useCallback)((function(){u((0,p.bh)())}),[u]),w=(0,o.useCallback)((function(n){u((0,p.Tv)(n))}),[u]);return{users:n,page:e,filter:t,isFollowing:x,followerIds:f,fetchUsers:h,loadMore:m,handleFilterChange:w}}},2952:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var o=t(2791),i=t(7689),r=t(724);var a,s,d,p,c,l,x,f,u,h,m,w,g,b=t.p+"static/media/logo.89604f2827917106f320d36dad457a91.svg",v=t.p+"static/media/picture-question.032662a2a907475127d7.png",Z=t(168),k=t(225),j=k.Z.li(a||(a=(0,Z.Z)(["\n  width: 380px;\n  padding: 20px 0 36px;\n  text-align: center;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 420px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: calc((100% - 60px) / 3);\n  }\n"]))),y=k.Z.img(s||(s=(0,Z.Z)(["\n  position: relative;\n  left: 20px;\n"]))),z=k.Z.img(d||(d=(0,Z.Z)(["\n  position: relative;\n  top: -14px;\n  margin: auto;\n\n  @media screen and (min-width: 768px) {\n    top: 0;\n  }\n"]))),C=k.Z.img(p||(p=(0,Z.Z)(["\n  position: relative;\n  z-index: 2;\n  width: 80px;\n  top: -32px;\n  margin: auto;\n  outline: 8px solid #ebd8ff;\n  border-radius: 50%;\n\n  @media screen and (min-width: 768px) {\n    width: 112px;\n    top: 0;\n    margin-bottom: 24px;\n  }\n"]))),F=k.Z.span(c||(c=(0,Z.Z)(["\n  position: relative;\n  top: -80px;\n  display: inline-block;\n  height: 8px;\n  width: 100%;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),I=k.Z.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 26px;\n\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n    margin-bottom: 40px;\n  }\n"]))),M=k.Z.p(x||(x=(0,Z.Z)(["\n  font-family: 'Montserrat';\n  font-weight: 500;\n  font-size: 20px;\n  color: #ebd8ff;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),U=k.Z.button(f||(f=(0,Z.Z)(["\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 18px;\n  width: 196px;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n  color: #373737;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 400ms ease-in-out;\n\n  &:focus,\n  &:hover,\n  &:active {\n    background-color: #5cd3a8;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n    width: 220px;\n  }\n"]))),T=function(n){var e=n.toString();if(e.length>3){var t=e.charAt(e-3);e=e.slice(0,e.length-3)+","+t+e.slice(e.length-3)}return e},_=t(9434),q=t(9806),S=t(9143),G=t(3329),L=function(n){var e=n.id,t=n.user,o=n.tweets,i=n.followers,a=n.avatar,s=(0,r.U)().followerIds,d=(0,_.I0)(),p=function(n){return-1!==s.indexOf(n)}(e);return(0,G.jsxs)(j,{children:[(0,G.jsx)("a",{href:"https://www.goit.global",children:(0,G.jsx)(y,{src:b,alt:"Logotype of Go-IT School"})}),(0,G.jsx)(z,{src:v,alt:"picture with a question and an answer",width:"308px"}),(0,G.jsx)(C,{src:a,alt:t,width:"80px"}),(0,G.jsx)(F,{}),(0,G.jsxs)(I,{children:[(0,G.jsxs)(M,{children:["Tweets: ",T(o)]}),(0,G.jsxs)(M,{children:["Followers: ",T(i)]})]}),(0,G.jsx)(U,{type:"submit",following:p,onClick:function(){var n={id:e,followers:p?i-1:i+1};d((0,q.b)(n)),d(p?(0,S.fv)(e):(0,S.ZN)(e))},style:{backgroundColor:p?"#5cd3a8":"#ebd8ff"},children:p?"Following":"Follow"})]})},A=t(1087),E=k.Z.div(u||(u=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 40px;\n  }\n"]))),H=(0,k.Z)(A.rU)(h||(h=(0,Z.Z)(["\n  display: inline-block;\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 18px;\n  width: 196px;\n  padding: 14px 0;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-bottom: 40px;\n  color: #373737;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 400ms ease-in-out;\n\n  &:focus,\n  &:hover,\n  &:active {\n    background-color: #5cd3a8;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 56px;\n    font-size: 24px;\n    width: 220px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-bottom: 80px;\n    font-size: 24px;\n    width: 276px;\n  }\n"]))),N=k.Z.p(m||(m=(0,Z.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 2;\n"]))),O=k.Z.ul(w||(w=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 40px;\n  margin-bottom: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 56px;\n  }\n\n  @media screen and (min-width: 960px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  @media screen and (min-width: 1200px) {\n    margin-bottom: 80px;\n    gap: 30px;\n  }\n"]))),R=k.Z.button(g||(g=(0,Z.Z)(["\n  font-family: 'Montserrat';\n  font-weight: 600;\n  font-size: 18px;\n  width: 196px;\n  padding: 14px 0;\n  text-transform: uppercase;\n  border: none;\n  cursor: pointer;\n  color: #373737;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  transition: background-color 400ms ease-in-out;\n\n  &:focus,\n  &:hover,\n  &:active {\n    background-color: #5cd3a8;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n    width: 220px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    font-size: 24px;\n    width: 276px;\n  }\n"]))),B=function(){var n,e,t=(0,r.U)(),a=t.loadMore,s=t.fetchUsers,d=t.users,p=t.page,c=(0,i.TH)(),l=(0,o.useRef)(null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),x=0===d.length;return(0,o.useEffect)((function(){s()}),[s,p]),(0,G.jsxs)(E,{children:[(0,G.jsx)(H,{to:l.current,children:"Go back"}),x?(0,G.jsxs)(N,{children:["Sorry, no tweets for your request.",(0,G.jsx)("br",{})," Try again"]}):(0,G.jsx)(O,{children:d&&d.map((function(n,e){var t=n.id,o=n.user,i=n.tweets,r=n.followers,a=n.avatar;return(0,G.jsx)(L,{id:t,user:o,tweets:i,followers:r,avatar:a},e)}))}),!x&&(0,G.jsx)(R,{type:"button",onClick:a,children:"Load more"})]})}}}]);
//# sourceMappingURL=133.a9ae7a08.chunk.js.map