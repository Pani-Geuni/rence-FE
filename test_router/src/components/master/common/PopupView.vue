<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="popup-background blind">
    <div id="grant-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="grant-txt">
          해당 호스트를 승낙하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div @click="grantOK" id="grant-btn" class="confirm-yesBtn">가입 승인</div>
        <div @click="closeGrantBtn" id="grant-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END grant popup -->

    <div id="refuse-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="refuse-txt">
          해당 호스트를 거절하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div @click="refuseOK" id="refuse-btn" class="confirm-yesBtn">가입 거절</div>
        <div @click="closeRefuseBtn" id="refuse-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END refuse popup -->

    <div id="delete-popup" class="confirm-popup blind">
      <section class="confirm-txt-section">
        <span class="refuse-txt">
          해당 호스트의 탈퇴를 진행하시겠습니까?
        </span>
      </section>
      <section class="confirm-btn-section">
        <div @click="revokeOK" id="delete-btn" class="confirm-yesBtn">호스트 삭제</div>
        <div @click="closeDeleteBtn" id="delete-closeBtn" class="confirm-noBtn">닫기</div>
      </section>
    </div>
    <!-- END delete popup -->
  </div>

  <div class="popup-background blind">
    <!-- START COMMON CUSTOM ALERT POPUP -->
    <div id="common-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span class="common-alert-txt"></span>
      </section>
      <section id="common-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START SUCCESS CUSTOM ALERT POPUP -->
    <div id="success-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>해당 이메일로 비밀번호를 전송하였습니다.</span>
      </section>
      <section id="success-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>

    <!-- START FAIL CUSTOM ALERT POPUP -->
    <div id="fail-alert-popup" class="alert-popup blind">
      <section class="alert-txt-section">
        <span>이메일 혹은 사업자 등록 번호를 <br />
          다시 확인해 주세요</span>
      </section>
      <section id="fail-alert-btn" class="alert-btn-section">
        <span>확인</span>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/CSS/common/common.scss';
</style>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name: 'PopupView',

  methods: {
    // 신청 수락
    grantOK(e) {
      console.log('grantOK :', e.target.getAttribute('backoffice_no'));

      axios.post('/master/grant', {
        backoffice_no: e.target.getAttribute('backoffice_no'),
      }).then((res) => {
        if (res.data.result === '1') {
          this.$router.replace('/master/main');
        }
      });
    },
    closeGrantBtn() {
      $('#grant-popup').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },

    // 신청 요청 거절
    refuseOK(e) {
      console.log('refuseOK :', e.target.getAttribute('backoffice_no'));

      axios.post('/master/refuse', {
        backoffice_no: e.target.getAttribute('backoffice_no'),
      }).then((res) => {
        if (res.data.result === '1') {
          this.$router.replace('/master/main');
        }
      });
    },
    closeRefuseBtn() {
      $('#refuse-popup').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },

    // 탈퇴 요청 수락
    revokeOK(e) {
      console.log('deleteOK :', e.target.getAttribute('backoffice_no'));

      axios.post('/master/revoke', {
        backoffice_no: e.target.getAttribute('backoffice_no'),
      }).then((res) => {
        if (res.data.result === '1') {
          this.$router.replace('/master/backoffice_end');
        }
      });
    },

    closeDeleteBtn() {
      $('#delete-popup').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },
  },
};
</script>
