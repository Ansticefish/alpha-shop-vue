<template>
  <nav>
    <input type="checkbox" id="hamburger">
    <div class="hamburger">
      <label for="hamburger">
        <img src="~@/assets/images/hamburger.png" alt="hamburger">
      </label>
    </div>
    <a href="#" class="links-logo">
      <div></div>
    </a>
    <div class="links">
      <ul class="links-subwebs">
        <li class="subweb1">
          <a href="#">男款</a>
        </li>
        <li class="subweb2">
          <a href="#">女款</a>
        </li>
        <li class="subweb3">
          <a href="#">最新消息</a>
        </li>
        <li class="subweb4">
          <a href="#">客製商品</a>
        </li>
        <li class="subweb5">
          <a href="#">聯絡我們</a>
        </li>
      </ul>
      <ul class="links-functions">
        <li>
          <a href="#">
            <div class="search-button"></div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="cart-button"></div>
          </a>
        </li>
        <li>
          <input type="checkbox" id="night-mode">
          <label for="night-mode">
            <div class="moon-button"></div>
          </label>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>

nav {
  height: 56px;
  @include flex( $align-items: center);
  input {
      @include hide(visibility);
    }
  .hamburger {
    img {
      @include image-size(20px, 15px);
      margin-left: 17px;
    }
  }
  .links-logo {
    margin: 16px auto;
    div {
      @include background-image($logo-image, 169.83px, 30px);
    }
  }
}

.links {
  @include hide(display);
  width: 100%;
  @include position-absolute(top, left, 56px, 0);
  background-color: $main-background;
  @include font-style($font-weight: 500);
  .links-subwebs {
    li {
      @include size(90%, 72px);
      margin: 0 auto;
      border-bottom: 2px solid $nav-border;
      @include flex(row, center, center);
    }
  }
  .links-functions {
    width: 80%;
    margin: 0 auto 30px;
    @include flex($justify-content: space-evenly);
    .search-button {
      @include background-image($search-image);
    }
    .cart-button {
      @include background-image($cart-image);
    }
    .moon-button {
      @include background-image($moon-image);
      cursor:pointer;
    }
  }
}

#hamburger:checked ~ .links {
  display: block;
  z-index: 1;
}

@media screen and (min-width: 375px) {
  nav {
    height: 60px;
    .hamburger {
      @include hide(display);
    }
    .links-logo {
      @include position-absolute(top, left,0 ,50%);
      transform: translate(-50%);
      z-index: 1;
    }
  }

  .links {
    // 優化方向：改html，使用grid排版
    position: relative;
    top: 0;
    display: flex;
  
    .links-subwebs {
      @include flex;
      width: 35%;
      margin-right: auto;
      li {
        @include size(fit-content, inherit);
        border: none;
        @include flex($align-items: center);
      }
    }
  
    .links-functions {
      width: 15%;
      margin: 0 10px 0 0;
      @include flex(row, space-between, center);
    }
  }
}


</style>