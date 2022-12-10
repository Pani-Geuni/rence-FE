<!-- eslint-disable no-plusplus -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable no-tabs -->
<!-- eslint-disable no-plusplus -->
<!-- eslint-disable array-callback-return -->
<!-- eslint-disable space-before-blocks -->
<!-- eslint-disable -->
<template>
  <div class="popup-background blind">
		<!-- START LOGIN SECTION -->
		<div id="login-section" class="blind">
			<section class="login-popup-logo-section">
				<img src="@/assets/IMG/common/RENCE.svg" alt ="로고이미지" class="popup-logo">
			</section>
			<section class="login-popup-input-section">
				<input type="text" id="login-id" @click="remove_null_input_border($event.target)" class="login-popup-input" placeholder="아이디를 입력하세요." autocomplete="off" />
				<input type="password" id="login-pw" @click="remove_null_input_border($event.target)" class="login-popup-input" placeholder="비밀번호를 입력하세요." />
			</section>
			<section class="login-popup-btn-section">
				<input type="button" id="login-btn" value="로그인">
				<div class="txt-btn-wrap">
					<span @click="go_find_id" class="txt-btn">아이디 찾기</span>
					<span @click="go_find_pw" class="txt-btn">비밀번호 찾기</span>
					<span @click="close_login_popup" class="txt-btn login-close">창닫기</span>
				</div>
			</section>
		</div>
		<!-- END LOGIN SECTION -->

		<!-- START JOIN SECTION -->
		<div id="join-section" class="blind">
			<section class="join-popup-title-section">
				<span>회원가입</span>
				<span class="join-closer">
					<img src="@/assets/IMG/common/closer.svg" @click="close_join_popup" alt="closer-img" class="closer-img" />
				</span>
			</section>
			<section class="join-popup-input-section">
				<div class="input-wrap">
					<div class="input-check">
						<input type="email" @keyup="test_regx($event.target)" @keydown="test_regx($event.target)" @click="remove_null_input_border($event.target)" id="join-email" class="join-popup-input-short" placeholder="이메일"
							autocomplete="off" />
						<input type="button" @click="do_check_email" id="check_email" class="join-popup-check-btn" value="인증하기" />
					</div>
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<div class="input-check">
						<input type="text" id="join-email-code" @click="remove_null_input_border($event.target)" class="join-popup-input-short" placeholder="인증번호" autocomplete="off" />
						<input type="button" id="check_email-code" @click="do_check_email_code" class="join-popup-check-btn" value="확인" />
					</div>
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<div class="input-check">
						<input type="text" @keyup="test_regx($event.target)" @keydown="test_regx($event.target)" id="join-id" @click="remove_null_input_border($event.target)" class="join-popup-input-short" placeholder="아이디(소문자, 숫자만 입력 = 5~10자))" autocomplete="off" />
						<input type="button" @click="do_check_id" id="check_id" class="join-popup-check-btn" value="중복확인" />
					</div>
					<span class="warning-text blind">이미 아이디가 존재합니다.</span>
				</div>
				<div class="input-wrap">
					<input type="password" @keyup="test_regx($event.target)" @keydown="test_regx($event.target)" id="join-pw" @click="remove_null_input_border($event.target)" class="join-popup-input"
						placeholder="비밀번호(영문+숫자+특수문자 = 8~10글자)" />
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<input type="password" @keyup="test_regx($event.target)" @keydown="test_regx($event.target)" id="join-re-pw" @click="remove_null_input_border($event.target)" class="join-popup-input" placeholder="비밀번호 재입력" />
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<input type="text" id="join-name" @click="remove_null_input_border($event.target)" class="join-popup-input"
           placeholder="이름" autocomplete="off" />
				</div>
				<div class="input-wrap">
					<input type="number" @keyup="test_regx($event.target)" @keydown="test_regx($event.target)" id="join-tel" @click="remove_null_input_border($event.target)" class="join-popup-input" 
					placeholder="전화번호(-없이 입력)" autocomplete="off" />
					<span class="warning-text blind">-없이 입력하세요.</span>
				</div>
				<div class="input-wrap">
					<input type="number" @keyup="test_regx($event.target)" @keydown="test_regx($event.target)" id="join-birth" @click="remove_null_input_border($event.target)" class="join-popup-input" placeholder="생년월일(숫자로만 입력)" autocomplete="off" />
					<span class="warning-text blind">숫자로만 입력가능합니다.</span>
				</div>
			</section>
			<section class="join-popup-btn-section">
				<input type="button" @click="do_join" id="join-btn" value="회원가입">
			</section>
		</div>
		<!-- END JOIN SECTION -->

		<!-- START FIND-ID SECTION -->
		<div id="find-id-section" class="find-section blind">
			<section class="find-popup-logo-section">
				<span>아이디 찾기</span>
			</section>
			<section class="find-popup-input-section">
				<span class="find-guide-txt">회원가입 시 입력한 이메일을 입력해주세요.</span>
				<input type="email" id="find-id-email" class="find-popup-input" placeholder="이메일을 입력하세요." autocomplete="off" />
			</section>
			<section class="find-popup-btn-section">
				<input type="button" @click="do_find_id" id="find-id-btn" class="find-btn" value="메일 보내기">
				<input type="button" @click="close_find_id_popup" id="find-id-close" class="p-close" value="창닫기">
			</section>
		</div>
		<!-- END FIND-ID SECTION -->

		<!-- START FIND-PW SECTION -->
		<div id="find-pw-section" class="find-section blind">
			<section class="find-popup-logo-section">
				<span>비밀번호 찾기</span>
			</section>
			<section class="find-popup-input-section">
				<div class="email-wrap">
					<span class="find-guide-txt">회원가입 시 입력한 이메일을 입력해주세요.</span>
					<input type="email" @click="remove_null_input_border($event.target)" id="find-pw-email" class="find-popup-input" placeholder="이메일을 입력하세요." autocomplete="off" />
				</div>
				<div>
					<span class="find-guide-txt">회원가입 시 입력한 아이디를 입력해 주세요.</span>
					<input type="text" @click="remove_null_input_border($event.target)" id="find-pw-id" class="find-popup-input" placeholder="아이디를 입력하세요." autocomplete="off" />
				</div>
			</section>
			<section class="find-popup-btn-section">
				<input type="button" @click="do_find_pw" id="find-pw-btn" class="find-btn" value="비밀번호 찾기">
				<input type="button" @click="close_find_pw_popup" id="find-pw-close" class="p-close" value="창닫기">
			</section>
		</div>
		<!-- END FIND-PW SECTION -->

		<!-- START LOGOUT CONFIRM POPUP -->
		<div id="logout-popup" class="confirm-popup blind">
			<section class="confirm-txt-section">
				<span class="logout-txt">
					로그아웃 하시겠습니까?<br><br>
					로그아웃 시 메인페이지로 이동됩니다.
				</span>
			</section>
			<section class="confirm-btn-section">
				<div id="logout-btn" @click="do_logout" class="confirm-yesBtn">로그아웃</div>
				<div id="logout-closeBtn" @click="close_logout_popup" class="confirm-noBtn">닫기</div>
			</section>
		</div>
	</div>

	<div class="popup-background blind">
		<!-- START SPINNER SECTION -->
		<div id="spinner-section" class="blind">
			<img src="@/assets/IMG/common/spinner.gif" alt="로딩이미지" class="spinner-img">
		</div>
		<!-- END SPINNER SECTION -->

		<!-- START COMMON CUSTOM ALERT POPUP -->
		<div id="common-alert-popup" class="alert-popup blind">
			<section class="alert-txt-section">
				<span class="common-alert-txt"></span>
			</section>
			<section id="common-alert-btn" class="alert-btn-section">
				<span @click="common_alert($event.target)">확인</span>
			</section>
		</div>
  </div>
</template>

<style>
  @import '@/assets/CSS/office/login.css';
</style>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  name: 'PopupView',
  data() {
    return {
      // eslint-disable-next-line array-callback-return
      time: '',
      find_id_flag: true,
      find_pw_flag: true,
      join_flag: true,
      check_id_flag: true,
      check_email_flag: true,
      code_flag: true,
    };
  },
  methods: {
    // 공용 알러트 버튼 클릭 이벤트 함수
    common_alert(param) {
      $('.popup-background:eq(1)').addClass('blind');
      $('#common-alert-popup').addClass('blind');

      if ($(param).attr('is_reload') === 'true') {
        window.location.reload();
        $(param).attr('is_reload', false);
      }
    },
    // input NULL값 경고 테두리 클릭 시 제거하는 함수
    remove_null_input_border(param) {
      if ($(param).hasClass('null-input-border')) {
        $(param).removeClass('null-input-border');
      }
    },
    // 아이디 찾기 버튼 클릭 이벤트
    go_find_id() {
      $('#login-section').addClass('blind');
      $('#find-id-section').removeClass('blind');
    },
    // 비밀번호 찾기 버튼 클릭 이벤트
    go_find_pw() {
      $('#login-section').addClass('blind');
      $('#find-pw-section').removeClass('blind');
    },
    // 로그인 창닫기 찾기 버튼 클릭 이벤트
    close_login_popup() {
      // INPUT 초기화
      $('#login-id').val('');
      $('#login-pw').val('');

      $('#login-id').removeClass('null-input-border');
      $('#login-pw').removeClass('null-input-border');

      // 팝업 관련창 닫음
      $('#login-section').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },
    // 아이디 찾기 팝업 창닫기 버튼
    close_find_id_popup() {
      // INPUT 초기화
      $('#find-id-email').val('');
      // 경고 테두리 초기화
      $('#find-id-email').removeClass('null-input-border');
      // 팝업 관련창 닫음
      $('#find-id-section').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },
    // 비밀번호 찾기 팝업 창닫기 버튼
    close_find_pw_popup() {
      // INPUT 초기화
      $('.find-popup-input').val('');
      // 경고 테두리 초기화
      $('.find-popup-input').removeClass('null-input-border');
      // 팝업 관련창 닫음
      $('#find-pw-section').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },
    // 회원가입 팝업 창닫기 버튼
    close_join_popup() {
      // INPUT 초기화
      $('.join-popup-input').val('');
      $('.join-popup-input-short').val('');
      $('.join-popup-input-short').removeClass('readOnly');
      $('.join-popup-input-short').attr('readonly', false);

      // 에러 메세지 초기화
      $('.warning-text').addClass('blind');

      // 경고 테두리 초기화
      $('.join-popup-input').removeClass('null-input-border');
      $('.join-popup-input-short').removeClass('null-input-border');

      // 버튼 초기화
      $('#check_id').prop('check', false);
      $('#check_id').val('중복확인');
      $('#check_email').prop('check', false);
      $('#check_email').val('인증하기');
      $('#check_email-code').prop('check', false);
      $('#check_email-code').val('확인');

      // 팝업 관련창 닫음
      $('#join-section').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');

      clearInterval(this.time);
    },
    // 로그아웃 팝업 창닫기 버튼
    close_logout_popup() {
      $('#logout-popup').addClass('blind');
      $('.popup-background:eq(0)').addClass('blind');
    },
    do_logout() {
      // 로딩 화면 닫기
      $('.popup-background:eq(1)').removeClass('blind');
      $('#spinner-section').removeClass('blind');

      axios.get('http://localhost:8800/rence/user_logoutOK')
        .then((res) => {
          this.find_id_flag = true;

          // 로딩 화면 닫기
          $('.popup-background:eq(1)').addClass('blind');
          $('#spinner-section').addClass('blind');

          // 로그아웃 성공
          if (res.result === 1) {
            window.location.href = 'http://localhost:8081/';
          }
          // 로그아웃 실패
          else {
            // 로딩 화면 닫기
            $('.popup-background:eq(1)').addClass('blind');
            $('#spinner-section').addClass('blind');

            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').text('오류 발생으로 인해 로그아웃에 실패하였습니다');
          }
        })
        .catch(() => {
          this.find_id_flag = true;

          // 로딩 화면 닫기
          $('.popup-background:eq(1)').addClass('blind');
          $('#spinner-section').addClass('blind');

          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
        });
    },
    do_find_id() {
      if ($('#find-id-email').val().trim().length > 0) {
        if (this.find_id_flag) {
          // 로딩 화면
          $('.popup-background:eq(1)').removeClass('blind');
          $('#spinner-section').removeClass('blind');

          this.find_id_flag = false;

          axios.post('http://localhost:8800/rence/find_id', {
            user_email: $('#find-id-email').val().trim(),
          })
            .then((res) => {
              this.find_id_flag = true;

              // 로딩 화면 닫기
              $('.popup-background:eq(1)').addClass('blind');
              $('#spinner-section').addClass('blind');

              // 아이디 찾기 성공
              if (res.result == 1) {
                // INPUT 초기화
                $('#find-id-email').val('');

                // 널 값 경고테두리 제거
                $('#find-id-email').removeClass('null-input-border');

                // 팝업 관련창 닫음
                $('#find-id-section').addClass('blind');
                $('.popup-background:eq(0)').addClass('blind');

                // 성공 알림창
                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('이메일로 아이디를 발송해드렸어요!');
              }
              // 아이디 찾기 실패
              else {
                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('해당 아이디로 가입된 회원이 없습니다.');
              }
            })
            .catch(() => {
              this.find_id_flag = true;

              // 로딩 화면 닫기
              $('.popup-background:eq(1)').addClass('blind');
              $('#spinner-section').addClass('blind');

              $('.popup-background:eq(1)').removeClass('blind');
              $('#common-alert-popup').removeClass('blind');
              $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
            });
        } else {
          $('#find-id-email').addClass('null-input-border');
        }
      }
    },
    do_find_pw() {
      if ($('#find-pw-email').val().trim().length > 0 && $('#find-pw-id').val().trim().length > 0) {
        if (this.find_pw_flag) {
          // 로딩 화면
          $('.popup-background:eq(1)').removeClass('blind');
          $('#spinner-section').removeClass('blind');

          this.find_pw_flag = false;

          axios.post('http://localhost:8800/rence/find_pw', {
            user_email: $('#find-pw-email').val().trim(),
            user_id: $('#find-pw-id').val().trim(),
          })
            .then((res) => {
              this.find_pw_flag = true;

              // 로딩 화면 닫기
              $('.popup-background:eq(1)').addClass('blind');
              $('#spinner-section').addClass('blind');

              // 비밀번호 찾기 성공
              if (res.result == 1) {
                // INPUT 초기화
                $('.find-popup-input').val('');

                // 경고 테두리 초기화
                $('.find-popup-input').removeClass('null-input-border');

                // 팝업 관련창 닫음
                $('#find-pw-section').addClass('blind');
                $('.popup-background:eq(0)').addClass('blind');

                // 성공 알림창
                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('이메일로 비밀번호를 발송해드렸어요!');
              }
              // 아이디 찾기 실패
              else {
                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('이메일 발송에 실패하였습니다.');
              }
            })
            .catch(() => {
              this.find_pw_flag = true;

              // 로딩 화면 닫기
              $('.popup-background:eq(1)').addClass('blind');
              $('#spinner-section').addClass('blind');

              $('.popup-background:eq(1)').removeClass('blind');
              $('#common-alert-popup').removeClass('blind');
              $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
            });
        }
      } else {
        if ($('#find-pw-email').val().trim().length === 0) {
          $('#find-pw-email').addClass('null-input-border');
        }
        if ($('#find-pw-id').val().trim().length === 0) {
          $('#find-pw-id').addClass('null-input-border');
        }
      }
    },
    test_regx(param) {
      // 비밀번호 조건 확인
      if ($(param).attr('id') === 'join-pw') {
        const password = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/;
        if (!password.test($(param).val().trim())) {
          $('.warning-text:eq(3)').removeClass('blind');
          $('.warning-text:eq(3)').text('비밀번호 조건과 일치하지않습니다.');
        } else {
          $('.warning-text:eq(3)').addClass('blind');

          if ($('#join-re-pw').val().trim().length > 0) {
            if ($(param).val().trim() !== $('#join-re-pw').val().trim()) {
              $('.warning-text:eq(4)').removeClass('blind');
              $('.warning-text:eq(4)').text('위 비밀번호와 일치하지않습니다.');
            } else {
              $('.warning-text:eq(4)').addClass('blind');
            }
          }
        }
      }
      // 비밀번호 조건 확인
      else if ($(param).attr('id') === 'join-re-pw') {
        if ($(param).val().trim() !== $('#join-pw').val().trim()) {
          $('.warning-text:eq(4)').removeClass('blind');
          $('.warning-text:eq(4)').text('위 비밀번호와 일치하지않습니다.');
        } else {
          $('.warning-text:eq(4)').addClass('blind');
        }
      }
      // 전화번호 형식인지 확인
      else if ($(param).attr('id') === 'join-tel') {
        const phoneReg = /^01(0|1[6-9])(\d{3,4})(\d{4})$/;

        if (!phoneReg.test($(param).val().trim())) {
          $('.warning-text:eq(5)').removeClass('blind');
          $('.warning-text:eq(5)').text('전화번호 형식이 아닙니다.');
        } else {
          $('.warning-text:eq(5)').addClass('blind');
        }
      }
      // 생년월일 형식인지 확인
			 else if ($(param).attr('id') === 'join-birth') {
        const birthReg = /^[0-9]{8}$/;
        if (!birthReg.test($(param).val().trim())) {
          $('.warning-text:eq(6)').removeClass('blind');
          $('.warning-text:eq(6)').text('지정된 생년월일 형식이 아닙니다.');
        } else {
          $('.warning-text:eq(6)').addClass('blind');
        }
      }
      // 이메일 형식인지 확인
      else if ($(param).attr('id') === 'join-email') {
        const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!email.test($(param).val().trim())) {
          $('.warning-text:eq(0)').removeClass('blind');
          $('.warning-text:eq(0)').text('이메일 형식이 아닙니다.');
        } else {
          $('.warning-text:eq(0)').addClass('blind');
        }
      }
      // 아이디 형식에 맞는지 확인
      else if ($(param).attr('id') === 'join-id') {
        const regExp = /^[a-z]+[a-z0-9]{4,5}$/g;
        if (!regExp.test($(param).val().trim())) {
          $('.warning-text:eq(2)').removeClass('blind');
          $('.warning-text:eq(2)').text('아이디 형식이 아닙니다.');
        } else {
          $('.warning-text:eq(2)').addClass('blind');
        }
      }
    },
    do_check_id() {
      if ($('#check_id').prop('check') === true) {
        $('#check_id').prop('check', false);
        $('#join-id').attr('readonly', false);
        $('#join-id').removeClass('readOnly');
        $('#check_id').val('중복확인');
      } else if ($('#join-id').val().trim().length > 0) {
        if ($('.warning-text:eq(2)').hasClass('blind') || $('.warning-text:eq(0)').text() === '이미 존재하는 아이디입니다.') {
          if (this.check_id_flag) {
            // 로딩 화면
            $('.popup-background:eq(1)').removeClass('blind');
            $('#spinner-section').removeClass('blind');

            this.check_id_flag = false;

            axios.post('http://localhost:8800/rence/user_idCheckOK', {
              user_id: $('#join-id').val().trim(),
            })
              .then((res) => {
                this.check_id_flag = true;

                // 로딩 화면 닫기
                $('.popup-background:eq(1)').addClass('blind');
                $('#spinner-section').addClass('blind');

                // 아이디 중복 성공
                if (res.result === 1) {
                  $('#check_id').prop('check', true);
                  $('#check_id').val('재입력');
                  $('#join-id').attr('readonly', true);
                  $('#join-id').addClass('readOnly');
                } else {
                  $('.warning-text:eq(2)').removeClass('blind');
                  $('.warning-text:eq(2)').text('이미 존재하는 아이디입니다.');
                }
              })
              .catch(() => {
                this.check_id_flag = true;

                // 로딩 화면 닫기
                $('.popup-background:eq(1)').addClass('blind');
                $('#spinner-section').addClass('blind');

                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
              });
          }
        } else {
          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('조건에 맞는 아이디를 입력하신 후 중복체크 해주세요.');
        }
      } else {
        $('.popup-background:eq(1)').removeClass('blind');
        $('#common-alert-popup').removeClass('blind');
        $('.common-alert-txt').text('아이디를 입력하신 후 중복체크 해주세요.');
      }
    },
    do_check_email() {
      if ($('#check_email').prop('check') !== true) {
        if ($('#join-email').val().trim().length > 0) {
          if ($('.warning-text:eq(0)').hasClass('blind') || $('.warning-text:eq(0)').text() == '이미 존재하는 이메일입니다.') {
            if (this.check_email_flag) {
              this.check_email_flag = false;

              // 로딩 화면
              $('.popup-background:eq(1)').removeClass('blind');
              $('#spinner-section').removeClass('blind');

	            axios.post('http://localhost:8800/rence/user_auth', {
                user_email: $('#join-email').val().trim(),
              })
                .then((res) => {
                  this.check_email_flag = true;

                  // 로딩 화면 닫기
                  $('.popup-background:eq(1)').addClass('blind');
                  $('#spinner-section').addClass('blind');

                  // 이메일 중복 성공
                  if (res.authNum === 1) {
                    $('#check_email').prop('check', true);
                    $('#check_email').val('메일발송');

                    this.timer();

                    $('#join-email').attr('readonly', true);
                    $('#join-email').addClass('readOnly');

                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').html('이메일로 인증번호를 발송하였습니다.<br> 2분 내로 인증번호 인증을 완료해주세요.<br> 2분 초과 시 이메일 재인증이 필요합니다!');
                  } else if (res.authNum === 2) {
                    $('.warning-text:eq(0)').removeClass('blind');
                    $('.warning-text:eq(0)').text('이미 존재하는 이메일입니다.');
                  } else if (res.authNum === 3) {
                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').html('해당 이메일은 인증번호 발송 후<br> 2분이 되지 않았습니다.<br> 잠시만 기다려주세요!');
                  } else {
                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').text('오류 발생으로 인해 이메일 인증번호 발송에 실패하였습니다.');
                  }
                })
                .catch(() => {
                  this.check_email_flag = true;

                  // 로딩 화면 닫기
                  $('.popup-background:eq(1)').addClass('blind');
                  $('#spinner-section').addClass('blind');

                  $('.popup-background:eq(1)').removeClass('blind');
                  $('#common-alert-popup').removeClass('blind');
                  $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
                });
            }
          } else {
            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').text('조건에 맞는 이메일을 입력하신 후 중복체크 해주세요.');
          }
        } else {
          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('이메일을 입력하신 후 중복체크 해주세요.');
        }
      }
    },
    do_check_email_code() {
      if ($('#check_email-code').prop('check') !== true) {
        if ($('#join-email-code').val().trim().length > 0) {
          if (this.code_flag) {
            this.code_flag = false;

            // 로딩 화면
            $('.popup-background:eq(1)').removeClass('blind');
            $('#spinner-section').removeClass('blind');

            axios.post('http://localhost:8800/rence/user_authOK', {
              user_email: $('#join-email').val().trim(),
              email_code: $('#join-email-code').val().trim(),
            })
              .then((res) => {
                this.code_flag = true;

                // 로딩 화면 닫기
                $('.popup-background:eq(1)').addClass('blind');
                $('#spinner-section').addClass('blind');

                // 이메일 인증번호 확인 성공
                if (res.result === 1) {
                  this.timer('true');

                  $('#check_email-code').prop('check', true);
                  $('#check_email-code').val('인증완료');
                  $('#join-email-code').attr('readonly', true);
                  $('#join-email-code').addClass('readOnly');
                } else {
                  $('.popup-background:eq(1)').removeClass('blind');
                  $('#common-alert-popup').removeClass('blind');
                  $('.common-alert-txt').text('알맞지 않은 인증번호입니다.');
                }
              })
              .catch(() => {
                this.code_flag = true;

                // 로딩 화면 닫기
                $('.popup-background:eq(1)').addClass('blind');
                $('#spinner-section').addClass('blind');

                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
              });
          }
        } else {
          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('인증번호 입력하신 후 시도해주세요.');
        }
      }
    },
    do_join() {
      if (
        $('#join-email').val().trim().length > 0
            && $('#join-email-code').val().trim().length > 0
            && $('#join-id').val().trim().length > 0
            && $('#join-pw').val().trim().length > 0
            && $('#join-re-pw').val().trim().length > 0
            && $('#join-name').val().trim().length > 0
            && $('#join-tel').val().trim().length > 0
            && $('#join-birth').val().trim().length > 0) {
        const arr = $('.warning-text');
        let tmp = true;
        for (let i = 0; i < arr.length; i++) {
          if (!$(arr[i]).hasClass('blind')) {
            tmp = false;
            break;
          }
        }

        if (tmp === true) {
          if ($('#check_email').prop('check') === true) {
            if ($('#check_email-code').prop('check') === true) {
              if ($('#check_id').prop('check') === true) {
                if (this.join_flag) {
                  // 로딩 화면
                  $('.popup-background:eq(1)').removeClass('blind');
                  $('#spinner-section').removeClass('blind');

                  this.join_flag = false;

                  axios.post('http://localhost:8800/rence/joinOK', {
                    user_id: $('#join-id').val().trim(),
                    user_pw: $('#join-pw').val().trim(),
                    user_email: $('#join-email').val().trim(),
                    user_name: $('#join-name').val().trim(),
                    user_tel: $('#join-tel').val().trim(),
                    user_birth: $('#join-birth').val().trim(),
                  }).then((res) => {
                    this.find_pw_flag = true;

                    // 비밀번호 찾기 성공
                    if (res.result == 1) {
                      // INPUT 초기화
                      $('.find-popup-input').val('');

                      // 경고 테두리 초기화
                      $('.find-popup-input').removeClass('null-input-border');

                      // 팝업 관련창 닫음
                      $('#find-pw-section').addClass('blind');
                      $('.popup-background:eq(0)').addClass('blind');

                      // 성공 알림창
                      $('.popup-background:eq(1)').removeClass('blind');
                      $('#common-alert-popup').removeClass('blind');
                      $('.common-alert-txt').text('이메일로 비밀번호를 발송해드렸어요!');
                    }
                    // 아이디 찾기 실패
                    else {
                      $('.popup-background:eq(1)').removeClass('blind');
                      $('#common-alert-popup').removeClass('blind');
                      $('.common-alert-txt').text('이메일 발송에 실패하였습니다.');
                    }
                  }).catch(() => {
                    this.find_pw_flag = true;

                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
                  });
                }
              } else {
                $('.popup-background:eq(1)').removeClass('blind');
                $('#common-alert-popup').removeClass('blind');
                $('.common-alert-txt').text('아이디 중복체크를 완료하세요.');
              }
            } else {
              $('.popup-background:eq(1)').removeClass('blind');
              $('#common-alert-popup').removeClass('blind');
              $('.common-alert-txt').text('인증번호 확인을 완료하세요.');
            }
          } else {
            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').text('이메일 인증을 완료하세요.');
          }
        }
      } else {
        if ($('#join-email').val().trim().length === 0) {
          $('#join-email').addClass('null-input-border');
        }
        if ($('#join-email-code').val().trim().length === 0) {
          $('#join-email-code').addClass('null-input-border');
        }
        if ($('#join-id').val().trim().length === 0) {
          $('#join-id').addClass('null-input-border');
        }
        if ($('#join-pw').val().trim().length === 0) {
          $('#join-pw').addClass('null-input-border');
        }
        if ($('#join-re-pw').val().trim().length === 0) {
          $('#join-re-pw').addClass('null-input-border');
        }
        if ($('#join-name').val().trim().length === 0) {
          $('#join-name').addClass('null-input-border');
        }
        if ($('#join-tel').val().trim().length === 0) {
          $('#join-tel').addClass('null-input-border');
        }
        if ($('#join-birth').val().trim().length === 0) {
          $('#join-birth').addClass('null-input-border');
        }
      }
    },
    timer(check) {
      let minute = 1;
      let seconds = 60;

      if (check === 'true') {
        clearInterval(this.time);
        $('#check_email').val('인증완료');
        return;
      }

      this.time = setInterval(() => {
        seconds--;

        if (seconds <= 9) $('#check_email').val(`0${minute} : ` + `0${seconds}`);
        else $('#check_email').val(`0${minute} : ${seconds}`);

        if (seconds === 0) {
          if (minute !== 0) {
		            --minute;
		            seconds = 60;
		        } else {
            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').html('이메일 인증 시간을 초과했습니다.<br>다시 시도해주세요.');

            $('#check_email').prop('check', false);
            $('#check_email').val('인증하기');
            $('#join-email').val('');
            $('#join-email').attr('readonly', false);
            $('#join-email').removeClass('readOnly');

            $('#check_email-code').prop('check', false);
            $('#check_email-code').val('확인');
            $('#join-email-code').val('');
            $('#join-email-code').attr('readonly', false);
            $('#join-email-code').removeClass('readOnly');

            clearInterval(this.time);
		        }
		    }
      }, 1000);
    },
  }, // END methods()
};
</script>
