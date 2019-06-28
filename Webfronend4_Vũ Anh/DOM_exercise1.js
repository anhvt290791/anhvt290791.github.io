
var logo=document.getElementById("hplogo");
undefined
logo
<img alt=​"Google" height=​"92" id=​"hplogo" src=​"/​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png" srcset=​"/​images/​branding/​googlelogo/​1x/​googlelogo_color_272x92dp.png 1x, /​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png 2x" style=​"padding-top:​109px" width=​"272" onload=​"window.lol&&lol()​" data-atf=​"1">​
logo.removeAttribute('src');
undefined
logo.removeAttribute('srcset');
undefined
logo
<img alt=​"Google" height=​"92" id=​"hplogo" style=​"padding-top:​109px" width=​"272" onload=​"window.lol&&lol()​" data-atf=​"1">​
logo.setAttribute("src", "https://logos-download.com/wp-content/uploads/2016/02/Yahoo_logo.png");
undefined
var text = document.getElementsByTagName('input');
undefined
text
HTMLCollection(7) [input, input, input.gLFyf.gsfi, input.gNO89b, input, input.gNO89b, input, source: input, ei: input, q: input.gLFyf.gsfi, btnK: input.gNO89b, btnI: input]
var text2 = input[5]
VM556:1 Uncaught ReferenceError: input is not defined
    at <anonymous>:1:13
(anonymous) @ VM556:1
var text2 = text[5];
undefined
text2
<input class=​"gNO89b" value=​"Google Search" aria-label=​"Google Search" name=​"btnK" type=​"submit">​
text2.removeAttribute("value");
undefined
text2
<input class=​"gNO89b" aria-label=​"Google Search" name=​"btnK" type=​"submit">​
text2.setAttribute("value", "Yahoo!");
undefined
text2
<input class=​"gNO89b" aria-label=​"Google Search" name=​"btnK" type=​"submit" value=​"Yahoo!">​