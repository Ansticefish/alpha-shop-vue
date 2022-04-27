<template>
   <footer>
    <div class="content-wrapper">
      <a href="#">
        <div></div>
      </a>
      <div class="service">
        <h3>客戶服務</h3>
        <ul>
          <li>
            <a href="#">運送說明</a>
          </li>
          <li>
            <a href="#">退換貨相關</a>
          </li>
          <li>
            <a href="#">付款資訊</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div class="about">
        <h3>關於我們</h3>
        <ul>
          <li>
            <a href="#">品牌故事</a>
          </li>
          <li>
            <a href="#">媒體聯繫</a>
          </li>
          <li>
            <a href="#">Press Kit</a>
          </li>
        </ul>
      </div>
      <div class="information">
        <h3>資訊</h3>
        <ul>
          <li>
            <a href="#">隱私權政策</a>
          </li>
          <li>
            <a href="#">Cookie</a>
          </li>
          <li>
            <a href="#">GDPR</a>
          </li>
        </ul>
      </div>
      <div class="follow">
        <h3>追蹤ALPHPA Shop</h3>
        <a href="#">+886 02123-45678</a>
        <ul class="social-media">
          <li>
            <a href="#">
              <img src="~@/assets/images/fb.png" alt="Facebook">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="~@/assets/images/ig.png" alt="Instagram">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="~@/assets/images/phone.png" alt="Line">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {
  @include hide(display);
}

@media screen and (min-width: 375px){
  footer {
    display: block;
    @include size(100%, 284px);
    background-color: $footer-background;
    padding-top: 64px;
    .content-wrapper {
      @include flex($justify-content: space-evenly);
       a {
         align-self: center;
        div {
        @include background-image($logo-image, 169.83px, 30px);
        }
      }
      div {
        h3 {
          @include font-style(24px, 700, $footer-title);
        }
        a {
          @include font-style(16px, 400, $footer-color);
        }
      }
      .follow > .social-media {
        width: 50%;
        @include flex($justify-content: space-between);
        img {
          @include image-size(24px, 24px);
        }
      }
    }
  }
}
</style>