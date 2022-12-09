<template>
  <div class="list-page-wrap">
    <section class="list-box-null-section">
      <div class="null-first-section">
        <span class="advice-txt">해당 검색어에 관한 공간이 없습니다.</span>
      </div>

      <div class="null-second-section">
        <span class="advice-txt-small">이런 공간은 어떠세요?</span>
        <router-link to="/">
            <input type="button" id="go-main-btn" class="go-all-list" value="다른 곳 보러 가기" />
        </router-link>
    </div>
    </section>
  </div>
</template>

<style>
  @import '../../assets/CSS/office/list-page.css';
</style>

<script>
import $ from 'jquery';

export default {
  name: 'ListView',
  mounted() {
    console.log(this.$route.params.call);
    if (this.$route.params.call === 'desk') $('#go-main-btn').val('dd');
  },
};
</script>
