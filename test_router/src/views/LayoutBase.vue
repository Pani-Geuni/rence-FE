<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable no-tabs -->
<template>
    <div class="pageWrap" >
      <HeaderView />
      <router-view></router-view>
      <FooterView />
    </div>
		<PopupView />
</template>

<style>
  @import '../assets/CSS/common/common.css';
</style>

<script>
import HeaderView from '../components/office/common/HeaderView.vue';
import FooterView from '../components/office/common/FooterView.vue';
import PopupView from '../components/office/common/PopupView.vue';

export default {
  name: 'LayoutBase',
  components: {
    HeaderView,
    FooterView,
    PopupView,
  },
};
</script>
