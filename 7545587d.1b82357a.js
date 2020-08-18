(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(168)),i={id:"defaults",title:"Defaults"},c={unversionedId:"tutorials/structured_config/defaults",id:"tutorials/structured_config/defaults",isDocsHomePage:!1,title:"Defaults",description:"You can define a defaults list in your primary Structured Config just like you can in your primary config.yaml file.",source:"@site/docs/tutorials/structured_config/4_defaults.md",permalink:"/docs/next/tutorials/structured_config/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/4_defaults.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1597766824,sidebar:"docs",previous:{title:"Config Groups",permalink:"/docs/next/tutorials/structured_config/config_groups"},next:{title:"Structured config schema",permalink:"/docs/next/tutorials/structured_config/schema"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can define a defaults list in your primary Structured Config just like you can in your primary ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," file.\nThe example below extends the previous example by adding a defaults list that will load ",Object(o.b)("inlineCode",{parentName:"p"},"db=mysql")," by default."),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: You can still place your defaults list in your primary (YAML) config file (Example in next page)."),Object(o.b)("br",null),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'@dataclass\nclass MySQLConfig:\n    ...\n\n@dataclass\nclass PostGreSQLConfig:\n    ...\n\ndefaults = [\n    # Load the config "mysql" from the config group "db"\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config(DictConfig):\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\ncs.store(name="config", node=Config)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"my_app.py")," loads the mysql config option by default:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  ...\n")),Object(o.b)("p",null,"You can override the default option via the command line (note how we do not need ",Object(o.b)("inlineCode",{parentName:"p"},"+")," anymore, compared to the previous example):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  ...\n")),Object(o.b)("p",null,"Note also that the ",Object(o.b)("inlineCode",{parentName:"p"},"db")," command line argument can be made mandatory by using ",Object(o.b)("inlineCode",{parentName:"p"},"MISSING")," as default value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'defaults = [\n    # An error will be raised if the user forgets to specify `db=...`\n    {"db": MISSING}\n]\n')))}u.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);