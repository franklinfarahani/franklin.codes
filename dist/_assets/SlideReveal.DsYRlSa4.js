import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r}from"./index.Cd_vQiNd.js";const d=({isLoading:t=!1,as:a="h1",delay:s=0,className:o="",children:n})=>{const[l,i]=r.useState(!1),c=a;return r.useEffect(()=>{if(!t){const m=setTimeout(()=>{i(!0)},s);return()=>clearTimeout(m)}},[t,s]),e.jsx(c,{className:o,children:e.jsx("span",{className:"block overflow-hidden",children:e.jsx("span",{className:`
            block
            transition-transform
            duration-1000
            ease-[cubic-bezier(0.23,1,0.32,1)]
            ${l?"translate-y-0":"translate-y-full"}
          `,children:n})})})};export{d as default};
