<template>
  <nav >
      <ul class="nav-wrapper">
          <li v-for="item in navItems" :key="item.id">
              <router-link :to="item.to">
              {{item.title}}
              </router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: "",
  components: {},
  directives: {},
  data() {
    return {
        navItems:[
{id:1,title:'חדרים',to:'/'},
{id:2,title:'איקאה סייל | IKEA SALE',to:'/'},
{id:3,title:'מתחם המטבחים',to:'/'},
{id:4,title:'איקאה מגזין',to:'/'},
{id:5,title:'החנות השבדית',to:'/'},

        ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  unmounted() {},
};
</script>

<style lang="scss" scoped>
nav{
    .nav-wrapper{
        display: flex;
        gap: 10px;
        justify-content: space-between;
        margin: 30px 15px;
    }
}
</style>