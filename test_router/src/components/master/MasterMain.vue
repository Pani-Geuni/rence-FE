<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable camelcase -->
<!-- eslint-disable max-len -->
<template>

  <div class="tableWrap">
    <section class="host-apply-list">
      <div class="custom-table">
        <div class="ct-header">
          <div class="ct-header-cell">신청 일자</div>
          <div class="ct-header-cell">상호명</div>
          <div class="ct-header-cell">사업자 이름</div>
          <div class="ct-header-cell">사업자 번호</div>
          <div class="ct-header-cell">사업체 이름</div>
          <div class="ct-header-cell">사업자 전화번호</div>
          <div class="ct-header-cell">사업자 이메일</div>
          <div class="ct-header-cell">수락/거절</div>
        </div>
        <!-- END ct-header -->

        <div class="ct-body">
          <div v-for="vo in vos" :key="vo" class="ct-body-row master" :idx="vo.backoffice_no">
            <div id="backoffice_no" class="ct-body-cell apply blind" @click="goDetailInfo">{{ vo.backoffice_no }}</div>
            <div id="apply_date" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.apply_date }}</div>
            <div id="backoffice_name" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.backoffice_name }}</div>
            <div id="owner_name" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.owner_name }}</div>
            <div id="backoffice_id" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.backoffice_id }}</div>
            <div id="company_name" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.company_name }}</div>
            <div id="backoffice_tel" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.backoffice_tel }}</div>
            <div id="backoffice_email" class="ct-body-cell apply" @click="goDetailInfo">{{ vo.backoffice_email }}</div>
            <div class="ct-body-cell">
              <div class="btn-group" :idx="vo.backoffice_no">
                <button @click="clickGrantPopup" id="btn-grant-host">수락</button>
                <button @click="clickRefusePopup" id="btn-refuse-host">거절</button>
              </div>
              <!-- END btn-group -->
            </div>
          </div>
          <!-- END ct-body-row -->
        </div>
        <!-- END ct-body -->
      </div>
      <!-- END custom-table -->
    </section>
  </div>

</template>

<style scoped>
@import '@/assets/CSS/master/master-main.scss';
</style>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {

  name: 'MainView',
  data() {
    return {
      // vos: []
      vos: [
        {
          backoffice_no: 'B1001',
          apply_date: '2022-12-10',
          backoffice_name: '테스트',
          owner_name: '테스터',
          backoffice_id: '1234567890',
          company_name: '테스트 이름',
          backoffice_tel: '010-1234-1234',
          backoffice_email: 'test@test.com',
        },
        {
          backoffice_no: 'B1002',
          apply_date: '2022-12-10',
          backoffice_name: '테스트2',
          owner_name: '테스터2',
          backoffice_id: '123456789022',
          company_name: '테스트 이름2',
          backoffice_tel: '010-1234-5678',
          backoffice_email: 'test@test.com22',
        },
      ],
    };
  },

  methods: {
    goDetailInfo(e) {
      // eslint-disable-next-line camelcase
      const backoffice_no = e.target.parentElement.getAttribute('idx');

      console.log(backoffice_no);

      // eslint-disable-next-line camelcase
      const url = `/master/backoffice_apply_detail?backoffice_no=${backoffice_no}&page=apply`;
      this.$router.push(url);
    },

    clickGrantPopup(e) {
      console.log(e.target.parentElement.getAttribute('idx'));
      // const backoffice_no = e.target.parentElement.getAttribute('idx');
      $('.popup-background:eq(0)').removeClass('blind');
      $('#grant-popup').removeClass('blind');
      $('#grant-popup').children('.confirm-btn-section').children('#grant-btn').attr('backoffice_no', e.target.parentElement.getAttribute('idx'));
    },

    clickRefusePopup(e) {
      console.log(e.target.parentElement.getAttribute('idx'));

      $('.popup-background:eq(0)').removeClass('blind');
      $('#refuse-popup').removeClass('blind');
      $('#refuse-popup').children('.confirm-btn-section').children('#refuse-btn').attr('backoffice_no', e.target.parentElement.getAttribute('idx'));
    },

    // 신청 목록 가져오기
    getSelectAllApplyList() {
      const url = 'localhost:8800/master/main';

      axios.get(url).then((res) => {
        console.log(res.data.vos);
        this.vos = res.data.vos;
      });
    },
  },
};

</script>
