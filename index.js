const host1 = document.querySelector("#host1");
const shadow1 = host.attachShadow({ mode: "open" });
const heading = document.createElement("h1");
heading.textContent = 'This heading is located in the Shadow DOM'
shadow1.appendChild(heading);

const host2 = document.querySelector("#host2");
const shadow2 = host.attachShadow({ mode: "open" });
const button = document.createElement("button");
button.setAttribute('tabindex', '2');
button.textContent = 'Button with a positive tabindex'
shadow2.appendChild(button);

const host3 = document.querySelector("#host3);
const shadow3 = host.attachShadow({ mode: "open" });
const span = document.createElement("span");
span.setAttribute('aria-label', 'Spans do not consistently support aria-label attributes');
span.textContent = 'Span with an incompatible aria-label attribute'
shadow3.appendChild(span);
