(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{1671:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return s(1373)}])},1373:function(e,t,s){"use strict";s.r(t);var l=s(5893),a=s(7294),n=s(1163);let r=[{question:"What is Next.js?",answer:"Next.js is a React framework for building web applications."},{question:"How does Tailwind CSS work?",answer:"Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."},{question:"What is the purpose of getStaticProps?",answer:"getStaticProps is used to fetch data at build time in Next.js."}],i=e=>{let{question:t,answer:s,isOpen:n,toggleAccordion:r}=e,i=(0,a.useRef)(null);return(0,l.jsxs)("div",{className:"rounded-lg mb-4",children:[(0,l.jsx)("button",{className:"w-full p-4 sm:p-5 md:p-6 text-left hover:bg-gray-900 border-t border-teal-600",onClick:r,children:(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)("span",{className:"font-semibold text-sm sm:text-base md:text-lg",children:t}),(0,l.jsx)("svg",{className:"w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 ".concat(n?"rotate-180":""),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M19 9l-7 7-7-7"})})]})}),(0,l.jsx)("div",{ref:i,className:"overflow-hidden transition-all duration-300 ease-in-out",style:{maxHeight:n?"".concat(i.current.scrollHeight,"px"):"0px"},children:(0,l.jsx)("div",{className:"px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 bg-black",children:(0,l.jsx)("p",{className:"text-sm sm:text-base md:text-lg",children:s})})})]})},o=e=>{let{searchTerm:t,handleSearch:s}=e;return(0,l.jsx)("div",{className:"mb-6 sm:mb-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto",children:(0,l.jsx)("input",{type:"text",placeholder:"Search for a question",value:t,onChange:s,className:"w-full p-2 sm:p-3 md:p-4 rounded-xl border border-teal-600 bg-black hover:bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-white"})})},d=e=>{let{areAllExpanded:t,handleExpandCollapseAll:s}=e;return(0,l.jsx)("div",{className:"flex justify-center md:justify-end mb-6",children:(0,l.jsx)("button",{onClick:s,className:"w-full md:w-32 text-sm sm:text-base md:text-lg px-4 py-2 bg-white hover:bg-teal-600 text-black hover:text-white font-semibold rounded-lg transition-all duration-300",children:t?"Collapse All":"Expand All"})})};t.default=()=>{let[e,t]=(0,a.useState)(r),[s,c]=(0,a.useState)(""),[u,m]=(0,a.useState)([]),x=(0,n.useRouter)();(0,a.useEffect)(()=>{let e=x.query.search||"";c(e),t(r.filter(t=>t.question.toLowerCase().includes(e.toLowerCase())))},[x.query.search]);let h=e=>{m(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,l.jsxs)("div",{className:"p-4 sm:p-6 md:p-8 ",children:[(0,l.jsx)("h1",{className:"mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl md:text-4xl text-center",children:"Frequently Asked Questions"}),(0,l.jsx)(o,{searchTerm:s,handleSearch:e=>{let s=e.target.value.toLowerCase();c(s),t(r.filter(e=>e.question.toLowerCase().includes(s))),m([]),x.push("?search=".concat(s),void 0,{shallow:!0})}}),(0,l.jsxs)("div",{className:"max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto",children:[(0,l.jsx)(d,{areAllExpanded:u.length===e.length,handleExpandCollapseAll:()=>{u.length===e.length?m([]):m(e.map((e,t)=>t))}}),e.length>0?e.map((e,t)=>{let{question:s,answer:a}=e;return(0,l.jsx)(i,{question:s,answer:a,isOpen:u.includes(t),toggleAccordion:()=>h(t)},t)}):(0,l.jsx)("p",{className:"text-center text-white",children:"No questions found matching your query"})]})]})}},1163:function(e,t,s){e.exports=s(9090)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1671)}),_N_E=e.O()}]);