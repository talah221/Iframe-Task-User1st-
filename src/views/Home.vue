<template>

<!-- STEP 1 Mock Data -->
  <!-- <main class="container">
    <section class="catalog">
      <div class="product" v-for="product in ikeaItems" :key="product.id">
        <img :src="product.imgUrl" :alt="product.title">
        <p>{{product.title}}</p>
        <h3>{{(Math.random()*1000).toFixed(0)}}₪</h3>
      </div>
    </section>
  </main> -->

  <!--  Search modal (Used both for step 1 && step 2)-->
  <div class="search-modal">
    <h5>חיפוש תמונות</h5>
    <input type="text"  @keyup="setFilter">
    <div class="items-wrapper">
    <div class="product" v-for="(product,idx) in filterdIkeaItems" :key="idx">
<img :src="product.imgUrl" :alt="product.title">
<p>{{product.title}}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {

  //"Scripty Code:"

  /*
  
let root = document.querySelector(".cat_view_wrapper_right")
let iframe = document.createElement('iframe')
iframe.setAttribute("id", "search-iframe");

iframe.src="http://localhost:8080"
iframe.style="position:fixed; min-height:600px; top:100px; z-index:10"
iframe.onload = ()=>{
let images = document.querySelectorAll('img')
let imgs = Object.values(images)

imgs = [...images]
imgs = imgs.map(i=>{
return {imgUrl:i.src,title:i.alt}
}).filter(i=>i.title && i.imgUrl)
iframe.contentWindow.postMessage({call:'sendValue', value: imgs},'*')
}

root.appendChild(iframe)
  */

  name: "Home",
  components: {},
  directives: {},
  data() {
    return {
      filter: "",
      // MOCK DATA:
      ikeaItems: [
        {
          id: 1,
          title: "שולחן עם מגירות",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/794/17/802/79417802_Big.jpg",
        },
        {
          id: 2,
          title: "כיסא משרדי שחור",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/203/39/420/20339420_Big.jpg",
        },
        {
          id: 3,
          title: "יחידת מגירות קטן",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/594/22/220/59422220_Big.jpg",
        },
        {
          id: 4,
          title: "שולחן עם מגירות",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/594/17/742/59417742_Big.jpg",
        },
        {
          id: 6,
          title: "שולחן עם מגירות אפור",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/394/16/814/39416814_Big.jpg",
        },
        {
          id: 7,
          title: "שולחן עם מגירות כחול",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/294/17/003/29417003_Big.jpg",
        },
        {
          id: 8,
          title: " גדוליחידת מגירות",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/904/86/139/90486139_Big.jpg",
        },
        {
          id: 9,
          title: "ארון עם דלתות הזזה מזכוכית",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/803/60/951/80360951_Big.jpg",
        },
        {
          id: 10,
          title: "יחידה מדפים",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/103/73/495/10373495_Big.jpg",
        },
        {
          id: 11,
          title: "ארון עם נעילה חכמה",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/092/87/192/09287192_Med.jpg",
        },
        {
          id: 12,
          title: "כיסא משרדי ורוד",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/992/52/541/99252541_Med.jpg",
        },
        {
          id: 13,
          title: "כיסא משרדי כחול",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/292/52/511/29252511_Med.jpg",
        },
        {
          id: 14,
          title: "מעמד למחשב נייד",
          imgUrl:
            "https://www.ikea.co.il/images/Fittings/ikea/704/03/512/70403512_Med.jpg",
        },
      ],
    };
  },
  created() {
    
window.addEventListener("message", (event) => {
  const items =event.data.value;
  this.setItems(items)
}, false);

  },
  mounted() {},
  methods: {
    setItems(items){
      if(!items) return;
      this.ikeaItems=items
    },
    setFilter(ev) {
      this.filter = ev.target.value;
    },
  },
  computed: {
    filterdIkeaItems() {
      return this.ikeaItems.filter((product) => {
        return product.title.includes(this.filter);
      });
    },
  },
  watch: {},
  unmounted() {},
};
</script>

<style lang="scss">
@import "../assets/style/global.scss";
.container {
  .catalog {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    .product {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

.search-modal {
  position: fixed;
  left: 20px;
  top: 20px;
  color: white;
  background: #2b2b2bcf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    background: #636363b3;
    padding: 14px;
  }
  input {
    width: 90%;
    margin: 0 auto;
    padding: 3px 12px;
    border-radius: 50px;
    border: none;
    outline: none;
  }
  .items-wrapper {
    overflow: auto;
    max-height: 600px;
    direction: ltr;
    margin-top: 10px;
    &::-webkit-scrollbar {
      width: 10px;
      height: 8px;
      margin-right: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 6px;
      border: 2px solid #535353;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #b3afb3;
    }
    &::-webkit-scrollbar-track {
      background: white;
      border: 4.4px solid #535353;
      border-radius: 0px;
      box-shadow: inset 0px 0px 0px 0px #f0f0f0;
    }

    .product {
      direction: rtl;
      padding: 30px;
    }
  }
}
</style>