function e(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.classList.add(t?"error":"success"),n.setAttribute("data-qa","notification"),n.textContent=e,n}function t(t){var n=e(t);document.body.appendChild(n)}function n(t){var n=e(t.message,!0);document.body.appendChild(n)}new Promise(function(e,t){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){t(Error("First promise was rejected"))},3e3)}).then(t).catch(n),new Promise(function(e){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(){e("Second promise was resolved")})}).then(t).catch(n),new Promise(function(e,t){var n=function(){o.left&&o.right&&e("Third promise was resolved")},o={left:!1,right:!1};document.addEventListener("click",function(){o.left=!0,n()}),document.addEventListener("contextmenu",function(){o.right=!0,n()})}).then(t).catch(n);
//# sourceMappingURL=index.c1e633c8.js.map