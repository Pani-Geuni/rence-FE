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
  @import '../../assets/CSS/office/list-page.scss';
  </style>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  name: 'ListView',
  data() {
    return {
      list: '',
      url: '',
    };
  },
  mounted() {
    console.log(this.$route.params.call);

    if (this.$route.params.call.includes('list_page')) {
      this.url = `http://localhost:8800/office/list_page?${this.$route.params.call.split('?')[1]}`;
    } else if (this.$route.params.call.includes('search_list')) {
      console.log(window.location.href);
      this.url = `http://localhost:8800/common/search_list?${window.location.href.split('?')[1]}`;
    }
    console.log(this.url);
    // // 로딩 화면
    // $('.popup-background:eq(1)').removeClass('blind');
    // $('#spinner-section').removeClass('blind');

    // axios.post('http://localhost:8800/rence/find_id', {
    //   user_email: $('#find-id-email').val().trim(),
    // })
    //   .then((res) => {
    //     this.find_id_flag = true;

    //     // 로딩 화면 닫기
    //     $('.popup-background:eq(1)').addClass('blind');
    //     $('#spinner-section').addClass('blind');

    //     // 아이디 찾기 성공
    //     if (res.result == 1) {
    //       // INPUT 초기화
    //       $('#find-id-email').val('');

    //       // 널 값 경고테두리 제거
    //       $('#find-id-email').removeClass('null-input-border');

    //       // 팝업 관련창 닫음
    //       $('#find-id-section').addClass('blind');
    //       $('.popup-background:eq(0)').addClass('blind');

    //       // 성공 알림창
    //       $('.popup-background:eq(1)').removeClass('blind');
    //       $('#common-alert-popup').removeClass('blind');
    //       $('.common-alert-txt').text('이메일로 아이디를 발송해드렸어요!');
    //     }
    //     // 아이디 찾기 실패
    //     else {
    //       $('.popup-background:eq(1)').removeClass('blind');
    //       $('#common-alert-popup').removeClass('blind');
    //       $('.common-alert-txt').text('해당 아이디로 가입된 회원이 없습니다.');
    //     }
    //   })
    //   .catch(() => {
    //     this.find_id_flag = true;

    //     // 로딩 화면 닫기
    //     $('.popup-background:eq(1)').addClass('blind');
    //     $('#spinner-section').addClass('blind');

    //     $('.popup-background:eq(1)').removeClass('blind');
    //     $('#common-alert-popup').removeClass('blind');
    //     $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
    //   });
  },
};
</script>
