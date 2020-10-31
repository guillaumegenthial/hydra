(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),i=(n(0),n(239)),o={id:"simple_cli",title:"Simple command line application",sidebar_label:"Simple command line application"},c={unversionedId:"tutorial/simple_cli",id:"version-0.11/tutorial/simple_cli",isDocsHomePage:!1,title:"Simple command line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/versioned_docs/version-0.11/tutorial/1_simple_cli_app.md",slug:"/tutorial/simple_cli",permalink:"/docs/0.11/tutorial/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/1_simple_cli_app.md",version:"0.11",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1604164656,sidebar_label:"Simple command line application",sidebar:"version-0.11/docs",previous:{title:"Getting started",permalink:"/docs/0.11/intro"},next:{title:"Configuration file",permalink:"/docs/0.11/tutorial/config_file"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"my_app")," function is a place holder\nfor your code. We will slowly evolve this example to show-case more Hydra features."),Object(i.b)("p",null,"The examples in this tutorial are available ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/examples/tutorial"}),"here"),"."),Object(i.b)("p",null,"Python file: ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'import hydra\n\n@hydra.main()\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cfg")," is an ",Object(i.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"OmegaConf"),"\nobject that holds the configuration for your function.\nYou don't need a deep understanding of OmegaConf for this tutorial."),Object(i.b)("p",null,"We can pass arbitrary command line arguments from which Hydra creates a hierarchical configuration object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db.driver=mysql db.user=omry db.pass=secret\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")))}s.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);