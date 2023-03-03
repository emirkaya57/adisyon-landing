<template>
  <div style="height: 80px; width: 100vw" class="position-relative bg-white">
    <loading :loading="loading"></loading>
    <div class="position-fixed w-100 d-flex justify-content-center" style="z-index: 9999">
      <div v-if="width > 1200" class="position-fixed py-3 top-0 w-100 header-wraper">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-center">
            <a href="/"><img height="45px" src="/images/is_black3.png" alt="header-logo" /></a>
          </div>
          <el-menu mode="horizontal" class="p-1">
            <el-submenu index="/diğer el-sub-menu">
              <template slot="title"><a
                  style=" font-size: 20px;color: #463853 !important;font-weight: 600;font-family: 'Kanit' sans-serif;">Diğer</a></template>
              <el-menu-item>
                <a class="p-3" href="/iletisim">İletişim</a></el-menu-item>
              <el-menu-item>
                <a class="p-3" href="/paketler">Paketler</a></el-menu-item>
            </el-submenu>
            <el-menu-item><a target="_blank" href="https://muhasebe.ishesap.com/login">Giriş</a></el-menu-item>
            <el-menu-item><a target="_blank" class="btn btn-skyblue" style="color: #fff !important"
                href="https://muhasebe.ishesap.com/register">Ücretsiz Dene</a>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div v-else>
        <div class="d-flex justify-content-between" style="padding: 20px; width: 100vw; background-color: #fff">
          <a href="/">
            <img height="50px" src="/images/is_black3.png" alt="header-logo" /></a>
          <a id="wsnavtoggle" @click="menuOpen = !menuOpen"><i class="bi bi-list" style="font-size: 40px"></i></a>
        </div>

        <div v-show="menuOpen" class="menu">
          <el-menu mode="vertical" class="menu-items">
            <el-menu-item style="background: rgba(255, 39, 39, 0.1)">
              <a :class="menuOpen == false ? 'd-none' : ''" @click="menuOpen = !menuOpen">
                <i class="bi bi-x-lg mr-3" style="font-size: 30px"></i>
                Kapat
              </a>
            </el-menu-item>
            <hr />
            <el-menu-item><a
                style="font-size:16px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; "
                href="https://ishesap.com/docs">Doküman</a></el-menu-item>
            <!-- <el-menu-item><a style="font-size:16px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; " href="https://ishesap.com/blog">Blog</a></el-menu-item>
            <el-menu-item><a style="font-size:16px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; " href="/sss">SSS</a></el-menu-item> -->
            <el-menu-item><a
                style="font-size:16px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; "
                href="/iletisim">İletişim</a></el-menu-item>
            <el-menu-item><a
                style="font-size:16px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; "
                href="/paketler">Paketler</a></el-menu-item>
            <hr />

            <el-menu-item><a
                style="font-size:18px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; "
                href="https://muhasebe.ishesap.com/login" class="btn btn-default">Giriş</a></el-menu-item>
            <el-menu-item style="background: rgba(0, 0, 255, 0.2)">
              <a style="font-size:18px;font-family:Arial, Helvetica, sans-serif; color:#463853; font-weight: 600; "
                href="https://muhasebe.ishesap.com/register">
                Ücretsiz Dene
              </a>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading"],
  data() {
    return {
      width: 0,
      menuOpen: false,
      blacks: [
        "/muhasebe",
        "/blog",
        "/paketler",
        "/sss",
        "/iletisim",
        "/",
        "/sozlesme",
      ],
    };
  },
  mounted() {
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap');

.el-menu-item.is-active {
  border-bottom: none;
}

.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: none;
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border-bottom: none !important;
}

.el-submenu.is-active .el-submenu__title {
  border-bottom: none;
}

#wsnavtoggle {
  cursor: pointer;
}

.header-wraper {
  background: #fff;
  z-index: 1003;
}

.label-dark a {
  color: black !important;
}

.scroll .logo {
  display: none;
}

.logo-2 {
  display: none;
}

.scroll .logo-2 {
  display: block;
}

.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}

.el-menu a {
  font-size: 20px;
  color: #463853 !important;
  font-weight: 600;
  font-family: 'Kanit' sans-serif;
}

.el-submenu a {
  font-size: 20px;
  font-family: 'Kanit' sans-serif;
  font-weight: 500;

}



.menu {
  list-style: none;
  background: #fff;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -19px -10px 38px -15px rgba(0, 0, 0, 0.1);
  transition: 400ms ease-in-out;
}

.menu li a {
  display: block;
  color: black;
  font-size: 15px;
  text-decoration: none;
  transition: 400ms all;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
}

.menu-close {
  position: absolute;
  top: 25px;
  right: 220px;
  z-index: 1004;
}

.menu-items {
  margin-top: 40px;
  overflow: auto;
}
</style>
