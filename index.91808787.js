function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r=document.querySelector("table");document.querySelector("thead").addEventListener("click",function(e){var n,o,a,i=(o=e.target.textContent.trim(),((function(r){if(Array.isArray(r))return t(r)})((n=Array.from(r.querySelectorAll("thead th")).map(function(t){return t.textContent.trim()}),a=Array.from(r.querySelectorAll("tbody tr")).map(function(t){var r=Array.from(t.querySelectorAll("td")),e={};return n.forEach(function(t,n){e[t]=r[n].textContent.trim()}),e})))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(a)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(t,r){return"string"!=typeof t[o]||"string"!=typeof r[o]||t[o].includes("$")?t[o].replace(/[$,]/g,"")-r[o].replace(/[$,]/g,""):t[o].localeCompare(r[o])})),l=r.querySelector("tbody");l.innerHTML="",i.forEach(function(t){var r=document.createElement("tr"),e=!0,n=!1,o=void 0;try{for(var a,i=Object.keys(t)[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var c=a.value;!function(t,r){var e=document.createElement("td");e.textContent=t,r.appendChild(e)}(t[c],r)}}catch(t){n=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw o}}l.appendChild(r)})});
//# sourceMappingURL=index.91808787.js.map