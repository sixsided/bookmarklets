javascript:(function(){;!function()%7Bfunction%20n(n)%7Breturn%5B%5D.slice.call(document.querySelectorAll(n))%7Dfunction%20e(e)%7Bconsole.log(%22delineate%22,e),n(e).forEach(function(n)%7Bn.style.outline=%221px%20fuchsia%20solid%22%7D)%7Dfunction%20t(n,e)%7Bfor(var%20t%20in%20e)n%5Bt%5D=e%5Bt%5D;return%20n%7Dfunction%20r(n)%7Bvar%20e=%7B%7D,r=window.getMatchedCSSRules(n);for(var%20i%20in%20r)t(e,o(r%5Bi%5D.style)),t(e,o(n.getAttribute(%22style%22)));return%20e%7Dfunction%20o(n)%7Bvar%20e,t=%7B%7D;if(!n)return%20t;if(n%20instanceof%20CSSStyleDeclaration)for(e%20in%20n)n%5Be%5D.toLowerCase&&(t%5Bn%5Be%5D.toLowerCase()%5D=n%5Bn%5Be%5D%5D);else%20if(%22string%22==typeof%20n)%7Bn=n.split(%22;%20%22);for(e%20in%20n)%7Bvar%20r=n%5Be%5D.split(%22:%20%22);t%5Br%5B0%5D.toLowerCase()%5D=r%5B1%5D%7D%7Dreturn%20t%7Dfunction%20e(e)%7Bn(e).forEach(function(n)%7Bn.style.outline=%221px%20fuchsia%20solid%22%7D)%7Dfunction%20i(t)%7Bfunction%20o(n)%7Bvar%20e=%5B%5D;for(var%20t%20in%20n)e.push(t);return%20e%7Dfunction%20i(n)%7Bvar%20e=%5B%5D;for(var%20t%20in%20n)e.push(t+%22:%22+n%5Bt%5D);return%20e%7Dfunction%20u(n,e)%7Breturn%20n%5Be%5D=1,n%7Dfunction%20c(n)%7Breturn%20o(n.reduce(u,%7B%7D))%7Dfunction%20f(n)%7Breturn!!n%7Dfunction%20a(n)%7Breturn%5Bn.tagName%5D.concat(n.className.split(%22%20%22)).filter(f).join(%22.%22)%7Dfunction%20l(n)%7Breturn%20s.test(n)%7Dconsole.log(%22working...%22);var%20s=new%20RegExp(t),g=c(n(%22*%22).map(a)),h=g.reduce(function(t,o)%7Bvar%20u=r(n(o)%5B0%5D),c=i(u),f=c.filter(l);return%20f.length?(e(o),t.concat(%7Bselector:o,matchingRules:f%7D)):t%7D,%5B%5D);return%20h%7Dfunction%20u(n)%7Breturn%20JSON.stringify(i(n),void%200,4)%7Dwindow.getMatchedCSSRules?console.log(u(prompt(%22enter%20regex%20to%20search%20css%20rules%20for:%22))):alert(%22This%20bookmarklet%20requires%20Chrome%20or%20Safari%22)%7D();})()