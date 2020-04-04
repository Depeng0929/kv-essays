<template>
  <div id="app">
    <nav id="nav">
      <ul class="app-ul">
        <li class="app-li"><router-link to="/">Home</router-link></li>
        <li class="app-li"><router-link to="/form">Form</router-link></li>
        <li class="app-li"><router-link to="/check">check</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import store from './store/index'
export default {
  provide: {
    store
  }
}
</script>

<style lang="scss">
  @import "./styles/index";
  #app {
    .app-li {
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
</style>
