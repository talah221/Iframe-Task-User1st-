# User1st Task
To run this app, run this code at console / with Scripty once you are in
 https://www.ikea.co.il/catalogue/Workspaces

Code is:
```
const root = document.querySelector("body")
let iframe = document.createElement('iframe')
iframe.setAttribute("id", "search-iframe");

iframe.src="http://localhost:8080"
iframe.style="position:fixed; min-height:600px; top:100px; z-index:99999999; border:none;"
iframe.onload = ()=>{
const images = document.querySelectorAll('img')
let imgs = Object.values(images)

imgs = [...images]
imgs = imgs.map(i=>{
return {imgUrl:i.src,title:i.alt}
}).filter(i=>i.title && i.imgUrl)
iframe.contentWindow.postMessage({call:'sendValue', value: imgs},'*')
}

root.appendChild(iframe)
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
