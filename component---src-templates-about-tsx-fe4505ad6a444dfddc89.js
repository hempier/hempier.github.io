(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[733],{5860:function(e,t,a){"use strict";a(7294);var s=a(8312),n=a(4382);t.Z=function(e){var t=e.text;return(0,n.tZ)("div",{className:"page-text col-xs"},(0,s.Z)(t.text.childMarkdownRemark.htmlAst))}},8107:function(e,t,a){"use strict";var s=a(2122),n=(a(7294),a(2218)),r=a(4382),i=function(e){var t=e.image,a=e.link;return(0,r.tZ)("a",{href:a,target:"_blank",className:"partners-about-us__item"},(0,r.tZ)("img",{src:t.file.url,alt:t.title,className:"partners-about-us__image"}))};t.Z=function(e){var t=e.component;if(!Boolean(null==t?void 0:t.content))return(0,r.tZ)("div",null,"no content");var a=t.content,o={dots:!1,slidesToShow:a.length>=4?4:a.length,responsive:[{breakpoint:1140,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};return(0,r.tZ)("section",{className:"partners-about-us container"},(0,r.tZ)("span",{className:"partners-about-us__name subtitle-2 col-xs-12"},t.name),(0,r.tZ)("h2",{className:"partners-about-us__title col-xs-12"},t.title),(0,r.tZ)("div",{className:"partners-about-us__inner-wrap col-xs-12"},(0,r.tZ)(n.Z,{customSettings:o},a.map((function(e,t){return(0,r.tZ)(i,(0,s.Z)({key:t.toString()},e))})))))}},2218:function(e,t,a){"use strict";var s=a(2122),n=a(7294),r=a(7193),i=a(8673),o=a.n(i),l=a(7863),c=a.n(l),C=a(4382);t.Z=function(e){var t=e.children,a=e.customSettings,i=void 0===a?{}:a,l=n.useRef(null);(0,n.useEffect)((function(){}),[l]);var m=Object.assign({dots:!1,arrows:!1,className:"slider",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1140,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},i);return(0,C.tZ)(n.Fragment,null,function(e){var t=e.slider;return(0,C.tZ)("div",{className:"slider-arrow"},(0,C.tZ)("div",{className:"slider-arrow__prev",onClick:function(){return t.current.slickPrev()}},(0,C.tZ)(o(),{className:"slider-arrow__prev"})),(0,C.tZ)("div",{className:"slider-arrow__next",onClick:function(){return t.current.slickNext()}},(0,C.tZ)(c(),{className:"slider-arrow__next"})))}({slider:l}),(0,C.tZ)(r.Z,(0,s.Z)({ref:l},m),t))}},4766:function(e,t,a){"use strict";var s=a(1574),n=(a(7294),a(4382));t.Z=function(e){var t=e.heading,a=e.description,r=e.image,i=(0,s.Z)("div",{target:"e1ln9nvo0"})("background-repeat:no-repeat;background-position:center;background-size:cover;background-image:url(",(null==r?void 0:r.file.url)||[],");");return(0,n.tZ)(i,{className:"top-banner"},(0,n.tZ)("div",{className:"top-banner__inner-wrap container"},(0,n.tZ)("h1",{className:"top-banner__title col-xs"},t),Boolean(null==a?void 0:a.childMarkdownRemark)&&(0,n.tZ)("p",{className:"top-banner__description col-xs"},a.childMarkdownRemark.rawMarkdownBody)))}},8549:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return H}});var s=a(7294),n=a(4671),r=a(8107),i=a(4766),o=a(5860),l=a(2122),c=a(8312),C=a(4382),m=function(e){var t=e.year,a=e.description;return(0,C.tZ)("div",{className:"awards__item col-xs-12 col-sm-6 col-lg-3"},(0,C.tZ)("h3",{className:"awards__heading"},t),(0,C.tZ)("p",{className:"awards__description"},(0,c.Z)(a.childMarkdownRemark.htmlAst)))},u=function(e){var t=e.items,a=(null==t?void 0:t.content)||[];return(0,C.tZ)("section",{className:"awards container"},(0,C.tZ)("div",{className:"awards__name subtitle-1 col-xs-12"},t.name),(0,C.tZ)("h2",{className:"awards__title col-xs-12"},t.title),(0,C.tZ)("div",{className:"awards__inner-wrap"},a.map((function(e,t){return(0,C.tZ)(m,(0,l.Z)({key:t.toString()},e))}))))},d=a(6499),b=a.n(d),Z=a(3497),p=a.n(Z),_=function(e){var t=e.value,a=e.measure;e.identifier;return(0,C.tZ)("div",{className:"cabsorb-counter__item col-xs-4 col-sm-6 col-lg-3"},(0,C.tZ)("div",{className:"cabsorb-counter__value"},(0,C.tZ)("span",{className:"cabsorb-counter__value-inner-wrap"},t)),(0,C.tZ)("span",{className:"cabsorb-counter__label"},a))},v=1e9,f=1e6,g=1e3,N=Date.now(),h=function(e){var t=e.props,a=e.measure,n=t.initialMg+(N-t.initialDate)/g*t.incrementMg,r=s.useState(n),i=r[0],o=r[1],l=Math.floor(i/v),c=l*v,m=Math.floor((i-c)/f),u=m*f,d=Math.floor((i-c-u)/g),Z=d*g,h=Math.floor(i-c-u-Z);return s.useEffect((function(){var e=setInterval((function(){o(i+t.incrementMg)}),g);return function(){return clearTimeout(e)}}),[i]),(0,C.tZ)("div",{className:"cabsorb"},(0,C.tZ)("div",{className:"cabsorb-counter"},(0,C.tZ)(_,{value:l,measure:a.tonsLabel}),(0,C.tZ)(_,{value:m,measure:a.kilogramsLabel}),(0,C.tZ)(_,{value:d,measure:a.gramsLabel}),(0,C.tZ)(_,{value:h,measure:a.miligramsLabel})),(0,C.tZ)("div",{className:"cabsorb-emission col-xs-12"},(0,C.tZ)("div",{className:"cabsorb-emission__item"},(0,C.tZ)("div",{className:"cabsorb-emission__icon-wrap"},(0,C.tZ)(b(),{className:"cabsorb-emission__icon"})),(0,C.tZ)("div",{className:"cabsorb-emission__conten"},(0,C.tZ)("strong",{className:"cabsorb-emission__value"},t.carCarbonEmissionNumber),(0,C.tZ)("div",{className:"cabsorb-emission__description"},t.carCarbonEmissionTitle))),(0,C.tZ)("div",{className:"cabsorb-emission__item"},(0,C.tZ)("div",{className:"cabsorb-emission__icon-wrap"},(0,C.tZ)(p(),{className:"cabsorb-emission__icon"})),(0,C.tZ)("div",{className:"cabsorb-emission__conten"},(0,C.tZ)("strong",{className:"cabsorb-emission__value"},t.peoplesCarbonEmissionNumber),(0,C.tZ)("div",{className:"cabsorb-emission__description"},t.peoplesCarbonEmissionTitle)))))},k=function(e){var t=e.name,a=e.title,s=e.heading,n=e.tonsLabel,r=e.kilogramsLabel,i=e.gramsLabel,o=e.miligramsLabel,l=e.carCarbonEmissionTitle,c=e.carCarbonEmissionNumber,m=e.peoplesCarbonEmissionTitle,u=e.peoplesCarbonEmissionNumber,d={tonsLabel:n,kilogramsLabel:r,gramsLabel:i,miligramsLabel:o},b={initialMg:e.initialMg,incrementMg:e.incrementMg,initialDate:e.initialDate,carCarbonEmissionTitle:l,peoplesCarbonEmissionTitle:m,carCarbonEmissionNumber:c,peoplesCarbonEmissionNumber:u};return(0,C.tZ)("section",{className:"carbon-counter container"},(0,C.tZ)("div",{className:"carbon-counter__inner-wrap"},(0,C.tZ)("div",{className:"carbon-counter__subtitle subtitle-2 col-xs-12"},t),(0,C.tZ)("h2",{className:"carbon-counter__title col-xs-12"},a),(0,C.tZ)("div",{className:"carbon-counter__content"},(0,C.tZ)("h3",{className:"carbon-counter__heading col-xs-12"},s),(0,C.tZ)(h,{props:b,measure:d}))))},w=a(1330),M=a(4799),H=(a(6534).g.Ua,function(e){var t=e.pageContext,a=t.page,s=t.allLocales,l=(0,M.q)(a,M.r.PartnersAboutUsSlider),c=(0,M.q)(a,M.r.AboutPartnersAboutUsSlider),m=(0,M.q)(a,M.r.AboutPageTopBanner),d=(0,M.q)(a,M.r.AboutPageAwards),b=(0,M.q)(a,M.r.AboutPageText),Z=(0,M.q)(a,M.r.CarbonDioxidCounter),p=(0,M.q)(a,M.r.FeedbackForm);return(0,C.tZ)(n.Z,{allLocales:s,currentLocale:a.node_locale},(0,C.tZ)(i.Z,m),(0,C.tZ)(o.Z,{text:b}),(0,C.tZ)(u,{items:d}),(0,C.tZ)(k,Z),(0,C.tZ)(r.Z,{component:c}),(0,C.tZ)(r.Z,{component:l}),(0,C.tZ)(w.Z,p))})},6499:function(e,t,a){var s=a(7294);function n(e){return s.createElement("svg",e,[s.createElement("path",{d:"M62.8492 26.082L61.0397 23.4433C60.9959 22.7612 60.7723 21.1182 59.6627 19.3782C57.6354 16.199 54.0501 14.9082 51.0333 14.273C51.0276 14.2718 51.0216 14.2709 51.0157 14.2697C50.6931 14.2095 50.3764 14.1583 50.0687 14.1148C44.8796 9.00029 40.4548 5.06229 38.2626 3.15642C36.9211 1.98904 35.2811 1.23717 33.5217 0.982291C32.7107 0.863541 32.0611 0.775415 31.4154 0.69679C30.9009 0.63354 30.4339 1.00004 30.3714 1.51404C30.3088 2.02804 30.6747 2.49541 31.1887 2.55804C31.8188 2.63479 32.4544 2.72104 33.2514 2.83779C34.6552 3.04117 35.9623 3.64042 37.0321 4.57129C39.0057 6.28717 42.8023 9.66266 47.3362 14.065H45.0528V13.7823C45.0528 12.27 43.8224 11.0397 42.3102 11.0397H41.3554C40.2769 11.0397 39.3996 11.9172 39.3996 12.9955V14.065H23.3277V2.23554C24.5247 2.18054 25.7229 2.17167 26.9261 2.21442C27.4438 2.23279 27.8779 1.82842 27.8963 1.31092C27.9148 0.79354 27.5103 0.35904 26.9928 0.340665C21.1102 0.130415 15.4753 1.06567 9.97769 2.89279C8.98344 3.22329 8.16632 3.92454 7.67706 4.86767C6.47306 7.18842 4.50419 12.5015 4.69857 22.1858C3.58907 23.1469 2.76131 24.1132 2.11306 25.1998C1.84781 25.6444 1.99319 26.2199 2.43794 26.4852C2.58844 26.5749 2.75394 26.6178 2.91731 26.6177C3.23656 26.6177 3.54781 26.4544 3.72331 26.1603C4.27769 25.231 5.00232 24.3954 5.98819 23.55H7.74556C9.61782 23.55 11.0453 21.876 10.7534 20.0293L10.4174 17.9044C10.1229 16.0419 8.75219 14.588 6.97206 14.1554C7.54606 9.83029 8.59919 7.16179 9.34132 5.73129C9.60457 5.22392 10.0406 4.84779 10.5689 4.67217C11.7779 4.27042 12.9766 3.92092 14.1689 3.61742C12.0846 7.35442 11.9876 11.2218 12.1563 13.3897C12.2672 14.8195 13.4673 15.9397 14.8884 15.9397H39.3997V17.3754C39.3997 18.4539 40.2772 19.3313 41.3556 19.3313H42.3103C43.8226 19.3313 45.0529 18.1009 45.0529 16.5887V15.9395C45.0529 15.9395 49.4723 15.9265 49.5157 15.932C49.6207 15.9453 49.7229 15.96 49.8257 15.9745C49.7982 17.8678 50.4536 19.623 51.7502 21.0943C53.5709 23.1604 56.6112 24.5333 59.6097 24.6729L61.3024 27.1414C61.8406 27.9275 62.1249 28.8458 62.1249 29.797V31.5345H58.2876C56.8958 28.9085 54.1348 27.1147 50.9616 27.1147C47.7883 27.1147 45.0273 28.9085 43.6356 31.5345H19.7646C18.3728 28.9085 15.6118 27.1147 12.4386 27.1147C9.26532 27.1147 6.50431 28.9085 5.11257 31.5345H2.09669C2.16406 30.9962 2.24331 30.4909 2.33606 30.0172C2.43556 29.509 2.10431 29.0165 1.59619 28.9169C1.08819 28.8173 0.595565 29.1487 0.49594 29.6568C0.33519 30.4777 0.211565 31.3768 0.121315 32.3734C0.121065 32.376 0.12094 32.3787 0.12069 32.3813C0.0728149 32.9109 0.0338149 33.4667 0.00481487 34.0557C-0.0473101 35.1125 0.32519 36.1162 1.05406 36.8818C1.78069 37.6452 2.76119 38.0657 3.81494 38.0657H4.59419C5.70644 41.3313 8.80157 43.6879 12.4388 43.6879C16.0761 43.6879 19.1713 41.3313 20.2836 38.0657H43.1171C44.2293 41.3313 47.3244 43.6879 50.9617 43.6879C54.5989 43.6879 57.6942 41.3313 58.8064 38.0657H59.7239C62.0818 38.0657 64.0002 36.1473 64.0002 33.7894V29.7969C63.9998 28.4665 63.6021 27.182 62.8492 26.082ZM8.56557 18.1973L8.90156 20.3222C9.01269 21.025 8.47431 21.6752 7.74569 21.6752H6.56569C6.53857 19.5795 6.61619 17.7104 6.76419 16.0464C7.70057 16.3669 8.40456 17.179 8.56557 18.1973ZM14.0257 13.2445C13.8516 11.0077 13.9903 6.75267 16.7861 3.02517C18.3469 2.71942 19.9001 2.50029 21.4527 2.36204V14.0648H14.8884C14.4403 14.0648 14.0613 13.7045 14.0257 13.2445ZM43.1779 16.5889C43.1779 17.0673 42.7887 17.4565 42.3103 17.4565H41.3556C41.3109 17.4565 41.2747 17.4202 41.2747 17.3757V12.9954C41.2747 12.9508 41.3111 12.9145 41.3556 12.9145H42.3103C42.7887 12.9145 43.1779 13.3038 43.1779 13.7822V16.5889ZM53.1568 19.8548C52.2409 18.8155 51.7554 17.6337 51.7037 16.3314C57.3221 17.7037 58.7176 21.0718 59.0623 22.7499C56.7677 22.4917 54.5301 21.4132 53.1568 19.8548ZM3.81469 36.191C3.27944 36.191 2.78119 35.9774 2.41194 35.5894C2.04056 35.1993 1.85069 34.6875 1.87731 34.1485C1.88981 33.8953 1.90469 33.6505 1.92081 33.4098H4.39557C4.23744 34.0482 4.15194 34.715 4.15194 35.4017C4.15194 35.668 4.16582 35.9312 4.19044 36.191H3.81469ZM12.4386 41.8133C8.90319 41.8133 6.02694 38.937 6.02694 35.4017C6.02694 31.8663 8.90319 28.99 12.4386 28.99C15.9741 28.99 18.8503 31.8663 18.8503 35.4017C18.8503 38.937 15.9739 41.8133 12.4386 41.8133ZM20.6867 36.191C20.7114 35.931 20.7252 35.6679 20.7252 35.4017C20.7252 34.715 20.6398 34.0483 20.4816 33.4098H42.9182C42.7601 34.0482 42.6746 34.715 42.6746 35.4017C42.6746 35.668 42.6884 35.9312 42.7131 36.191H20.6867ZM50.9613 41.8133C47.4259 41.8133 44.5497 38.937 44.5497 35.4017C44.5497 31.8663 47.4259 28.99 50.9613 28.99C54.4968 28.99 57.3731 31.8663 57.3731 35.4017C57.3731 38.937 54.4968 41.8133 50.9613 41.8133ZM59.7236 36.191H59.2096C59.2343 35.931 59.2481 35.6679 59.2481 35.4017C59.2481 34.715 59.1627 34.0483 59.0044 33.4098H62.1248V33.7898C62.1248 35.1138 61.0476 36.191 59.7236 36.191Z",fill:"#40BB88",key:0}),s.createElement("path",{d:"M12.4384 31.8264C10.4672 31.8264 8.86328 33.4303 8.86328 35.4015C8.86328 37.3728 10.4672 38.9767 12.4384 38.9767C14.4098 38.9767 16.0137 37.3728 16.0137 35.4015C16.0137 33.4303 14.4098 31.8264 12.4384 31.8264ZM12.4384 37.1017C11.5009 37.1017 10.7383 36.3389 10.7383 35.4015C10.7383 34.4642 11.501 33.7014 12.4384 33.7014C13.3759 33.7014 14.1387 34.4642 14.1387 35.4015C14.1387 36.3389 13.3759 37.1017 12.4384 37.1017Z",fill:"#40BB88",key:1}),s.createElement("path",{d:"M50.9618 31.8264C48.9906 31.8264 47.3867 33.4303 47.3867 35.4015C47.3867 37.3728 48.9906 38.9767 50.9618 38.9767C52.9332 38.9767 54.5371 37.3728 54.5371 35.4015C54.5371 33.4303 52.9332 31.8264 50.9618 31.8264ZM50.9618 37.1017C50.0245 37.1017 49.2617 36.3389 49.2617 35.4015C49.2617 34.4642 50.0245 33.7014 50.9618 33.7014C51.8993 33.7014 52.6621 34.4642 52.6621 35.4015C52.6621 36.3389 51.8993 37.1017 50.9618 37.1017Z",fill:"#40BB88",key:2}),s.createElement("path",{d:"M26.1268 20.4043C26.6446 20.4043 27.0643 19.9845 27.0643 19.4668C27.0643 18.949 26.6446 18.5293 26.1268 18.5293H22.1113C21.5936 18.5293 21.1738 18.949 21.1738 19.4668C21.1738 19.9845 21.5936 20.4043 22.1113 20.4043H26.1268Z",fill:"#40BB88",key:3})])}n.defaultProps={width:"64",height:"44",viewBox:"0 0 64 44",fill:"none"},e.exports=n,n.default=n},3497:function(e,t,a){var s=a(7294);function n(e){return s.createElement("svg",e,[s.createElement("path",{d:"M37.8672 25.2128C36.6689 25.2128 36.6674 27.0253 37.8672 27.0253C40.8628 27.0253 42.3984 24.6423 42.3984 21.5878C42.3984 15.8551 36.0547 15.8545 36.0547 20.6816C36.0547 21.8796 37.8672 21.8815 37.8672 20.6816C37.8672 18.2029 40.5859 18.3411 40.5859 21.5878C40.5859 22.6778 40.321 25.2128 37.8672 25.2128Z",fill:"#40BB88",key:0}),s.createElement("path",{d:"M39.6797 43.5C37.9978 43.5019 36.3853 44.1709 35.1961 45.3601C34.0068 46.5494 33.3378 48.1618 33.3359 49.8437V57.0937C33.3359 58.2918 35.1484 58.2936 35.1484 57.0937V49.8437C35.1484 48.642 35.6258 47.4894 36.4756 46.6397C37.3254 45.7899 38.4779 45.3125 39.6797 45.3125C40.8814 45.3125 42.034 45.7899 42.8837 46.6397C43.7335 47.4894 44.2109 48.642 44.2109 49.8437V57.0937C44.2109 58.2918 46.0234 58.2936 46.0234 57.0937V49.8437C46.0215 48.1618 45.3525 46.5494 44.1633 45.3601C42.974 44.1709 41.3615 43.5019 39.6797 43.5Z",fill:"#40BB88",key:1}),s.createElement("path",{d:"M52.5845 18.7513C53.6445 14.2453 53.4855 10.1639 52.1368 7.25874C51.101 5.02711 49.4311 3.67669 47.3957 3.40448C45.3986 -0.3501 40.9387 -0.363241 36.7604 0.401404C35.5823 0.616638 35.9065 2.40115 37.0868 2.18422C46.3395 0.49067 45.1773 5.11071 46.7711 5.16871C48.7865 5.24189 49.9075 6.76064 50.4929 8.0218C51.6543 10.5237 51.7735 14.2832 50.8202 18.3362C49.7336 22.9551 47.3508 27.7602 43.9148 32.2708C42.3536 31.5839 41.1324 30.6293 40.1943 29.3662C39.4806 28.4042 38.0239 29.4831 38.7392 30.4466C39.8772 31.9793 41.4114 33.1647 43.3034 33.9788V37.5167C41.6835 38.3509 36.1005 41.0471 30.6561 41.5908C33.3286 37.7635 32.1074 41.1196 32.4285 34.4376C32.4285 34.2999 32.3971 34.164 32.3367 34.0402C32.2763 33.9164 32.1885 33.808 32.0799 33.7233C31.9713 33.6385 31.8449 33.5796 31.7102 33.5511C31.5754 33.5225 31.436 33.525 31.3023 33.5584L27.2457 34.5727C26.737 34.7005 26.2013 34.6678 25.7121 34.4788C25.2228 34.2899 24.8041 33.9541 24.5134 33.5176C25.1009 33.0601 28.4205 32.4575 28.0123 29.3921C27.7434 27.3716 26.0486 26.2281 22.7575 28.0465C22.4389 27.153 22.4932 26.7019 22.0284 26.4159L19.944 25.1333C22.2112 22.1195 22.4589 22.1314 22.4589 21.5876V16.6106C24.893 17.5395 28.2314 17.2223 34.2401 17.2189C35.4383 17.2189 35.4398 15.4065 34.2401 15.4065H25.8437C25.6837 15.2939 18.6096 16.1675 17.9678 5.49688C20.4399 6.78183 24.0937 5.73738 29.6172 4.11384C29.7093 4.0572 31.1322 3.92206 30.8089 2.81972C30.4842 1.7124 29.2178 2.37238 29.1061 2.37498C24.6787 3.67624 19.234 5.47967 17.8547 3.05319C17.4743 2.2344 16.211 2.43842 16.1423 3.3987C15.8463 7.51645 17.061 13.099 20.6473 15.643V21.2772C16.7366 26.54 16.5898 25.0186 20.7847 27.7786L21.3578 29.6866C21.3983 29.8215 21.4696 29.945 21.5661 30.0475C21.6627 30.15 21.7818 30.2285 21.9139 30.277C22.0461 30.3254 22.1878 30.3424 22.3277 30.3265C22.4676 30.3107 22.6018 30.2625 22.7199 30.1857C24.7552 28.8621 25.5784 28.8916 25.838 28.9654C26.2555 29.0845 26.5252 30.3671 25.6454 30.9263L22.921 32.2868C21.3125 33.0903 23.9908 37.2541 27.685 36.3309L30.6156 35.5982V38.6348C26.6646 43.3782 23.3657 50.4549 23.3657 57.0937C23.3657 58.2917 25.1782 58.2935 25.1782 57.0937C25.1782 51.6562 27.4585 46.7253 29.4202 43.4893C35.4755 43.2935 41.8427 40.3014 43.9428 39.228C52.548 51.1012 47.891 58 50.5534 58C50.7937 58 51.0243 57.9045 51.1942 57.7346C51.3642 57.5646 51.4596 57.3341 51.4596 57.0938C51.4596 50.4555 50.3923 44.8895 45.1159 37.7621V33.6811C48.834 28.8798 51.4148 23.7236 52.5845 18.7513Z",fill:"#40BB88",key:2}),s.createElement("path",{d:"M33.3374 2.71911C34.5356 2.71911 34.5373 0.906616 33.3374 0.906616C32.1375 0.906616 32.1375 2.71911 33.3374 2.71911Z",fill:"#40BB88",key:3}),s.createElement("path",{d:"M18.8367 29.0001H9.77427C8.57598 29.0001 8.57451 30.8126 9.77427 30.8126H18.8367C20.0351 30.8126 20.0366 29.0001 18.8367 29.0001Z",fill:"#40BB88",key:4}),s.createElement("path",{d:"M18.8367 32.625H7.05551C5.85723 32.625 5.85576 34.4375 7.05551 34.4375H18.8367C20.0351 34.4375 20.0366 32.625 18.8367 32.625Z",fill:"#40BB88",key:5}),s.createElement("path",{d:"M10.317 36.7025C8.89925 39.1532 5.14943 38.0451 5.24425 35.2857C5.24062 35.2744 5.28808 34.538 4.56456 34.3525C1.85353 33.6571 1.85251 29.7809 4.56456 29.0849C4.76424 29.0337 4.94049 28.9159 5.06422 28.7511C5.18795 28.5862 5.25177 28.3841 5.24515 28.178L5.24425 28.1518C5.14943 25.3945 8.89506 24.2805 10.3159 26.735C10.4363 26.9431 10.6344 27.0947 10.8666 27.1567C11.0989 27.2187 11.3462 27.1859 11.5542 27.0655C13.0577 26.1955 10.5158 23.5626 7.9614 23.5626C6.85416 23.564 5.78563 23.9701 4.95704 24.7046C4.12844 25.439 3.59696 26.451 3.46268 27.5501C-0.1998 29.1102 -0.197194 34.3283 3.46268 35.8876C3.97822 40.1809 9.70501 41.3802 11.8859 37.6103C12.4858 36.5729 10.9175 35.6638 10.317 36.7025Z",fill:"#40BB88",key:6})])}n.defaultProps={width:"54",height:"58",viewBox:"0 0 54 58",fill:"none"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-templates-about-tsx-fe4505ad6a444dfddc89.js.map