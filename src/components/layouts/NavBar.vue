<template>
  <nav>
    <div class="nav-inner">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/images/ahsap-logo.png" alt="" />
      </div>
      <!-- Links -->
      <div class="links">
        <a href="#"> Saksı</a>
        <a href="#"> Bank & Koltuk</a>
        <a href="#"> Deck </a>
        <a href="#"> Dekorasyon </a>
      </div>
      <!-- Icons -->
      <div class="icons">
        <span class="icon">
          <i class="ri-search-line ri-lg"></i>
        </span>
        <span class="icon">
          <i class="ri-heart-3-line ri-lg"></i>
        </span>
        <span class="icon">
          <i class="ri-shopping-bag-line ri-lg"></i>
        </span>
        <span class="icon">
          <i class="ri-user-3-line ri-lg"></i>
        </span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 2px solid #f8f8f8;
}
nav .nav-inner {
  height: 90px;
  display: flex;
  align-items: center;
  max-width: calc(1440px - 170px);
  width: 100%;
  margin: auto;
}
.logo {
  width: 100px;
  height: 50px;
}
.links {
  display: flex;
  align-items: center;
  margin-left: 20px; /* Linklerin logo ile arasında sabit boşluk */
  flex-grow: 1; /* Linkler, aralarındaki boşluğu kaplayacak şekilde büyür */
}
.links a {
  margin: 0px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121212;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}
.links a:hover {
  border-color: #121212;
}
.icons {
  display: flex;
  align-items: center;
}
.icons span {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

