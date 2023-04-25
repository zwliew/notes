"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[3969],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1604:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="CS3210 Parallel Computing review",u={permalink:"/blog/2022/12/20/mod-review/cs3210-review",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/mod-review/2022-12-20-cs3210-review.md",source:"@site/blog/mod-review/2022-12-20-cs3210-review.md",title:"CS3210 Parallel Computing review",description:"Taken in AY22/23 Sem 1 under Prof Cristina Carbunaru.",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[],readingTime:2.305,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"CS2104 Programming Language Concepts review",permalink:"/blog/2022/12/26/mod-review/cs2104-review"},nextItem:{title:"CS2106 Introduction to Operating Systems review",permalink:"/blog/2022/06/09/mod-review/cs2106-review"}},c={authorsImageUrls:[]},m=[{value:"Overview",id:"overview",level:2},{value:"Topics",id:"topics",level:2},{value:"Lectures",id:"lectures",level:2},{value:"Tutorials/Labs",id:"tutorialslabs",level:2},{value:"Assessment",id:"assessment",level:2},{value:"Summary",id:"summary",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Taken in AY22/23 Sem 1 under Prof Cristina Carbunaru."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This course provides an introduction to the field of parallel computing with hands-on parallel programming experience on real parallel machines. We learn about parallel architectures, parallel computation models, performance of parallel systems, and parallel algorithm design."),(0,o.kt)("h2",{id:"topics"},"Topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parallel architectures: Processor and memory organization, cache coherence, memory consistency, interconnection networks"),(0,o.kt)("li",{parentName:"ul"},"Parallel computation models: shared-memory (OpenMP), distributed memory (MPI), data parallel architectures (GPGPU, CUDA)"),(0,o.kt)("li",{parentName:"ul"},"Performance: metrics, tools, and techniques for measuring and quantifying the performance of parallel systems, performance instrumentation")),(0,o.kt)("h2",{id:"lectures"},"Lectures"),(0,o.kt)("p",null,"I enjoyed Prof Cristina's teaching, and her lecture (recordings) are typically interesting and enjoyable to watch. Her lectures contain explanations and concepts that aren't stated in the slides, so it is useful to listen to them. The lecture content is not very in-depth, but that is somewhat acceptable for an introductory course."),(0,o.kt)("h2",{id:"tutorialslabs"},"Tutorials/Labs"),(0,o.kt)("p",null,"Tutorials and labs share the same time slot but alternate. They are slightly interesting and serve to strengthen our understanding of the lecture content. I was blessed to have an amazing TA (Rohit) who is always so energetic and knowledgeable. Any lack of interest in the tutorial/lab content was made up for by the TA's energy and also the joy of attending with a friend. Oh, speaking of which, I should also mention that attending tutorials/labs and doing assignments with a friend makes the journey that much more enjoyable."),(0,o.kt)("h2",{id:"assessment"},"Assessment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Weekly alternating labs and tutorials (4% for attendance)"),(0,o.kt)("li",{parentName:"ul"},"3 graded lab sheets (6%)"),(0,o.kt)("li",{parentName:"ul"},"3 programming assignments (35%)"),(0,o.kt)("li",{parentName:"ul"},"5 quizzes on even weeks starting from week 4 (15%)"),(0,o.kt)("li",{parentName:"ul"},"Final exam (40%)")),(0,o.kt)("p",null,"Prof Cristina is generous with grades and tends to give credit for answers with reasonable explanations. Hence, there is hardly any need to worry about grades. Instead, focus on getting the assignments right as they are the most rewarding and interesting part of the course, particularly since they are the only practical parts of the course."),(0,o.kt)("p",null,"Each assignment involves designing and writing a parallel program that uses a parallel computation model to solve a problem. The first assignment had us write an OpenMP program to simulate a train network; the second had us write a CUDA program to perform virus signature matching on files; the third had us use MPI to do the same thing as in assignment 1. All in all, the assignments were well-designed and challenging. My only gripe is that the problem in the third assignment could've been something different."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"One of the most interesting, fun, and enjoyable courses I've taken so far. Workload is a tad heavy due to the assignments, but they are very rewarding to do. I strongly recommend it if you're interesting in learning about parallel computing."))}d.isMDXComponent=!0}}]);