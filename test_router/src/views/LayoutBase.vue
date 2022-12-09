<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable no-tabs -->
<template>
    <div class="pageWrap" >
      <HeaderView />
      <router-view></router-view>
      <FooterView />
    </div>

    <div class="popup-background blind">
		<!-- START LOGIN SECTION -->
		<div id="login-section" class="blind">
			<section class="login-popup-logo-section">
				<img src="../assets/IMG/common/RENCE.svg" alt ="로고이미지" class="popup-logo">
			</section>
			<section class="login-popup-input-section">
				<input type="text" id="login-id" class="login-popup-input" placeholder="아이디를 입력하세요."
					autocomplete="off" />
				<input type="password" id="login-pw" class="login-popup-input" placeholder="비밀번호를 입력하세요." />
			</section>
			<section class="login-popup-btn-section">
				<input type="button" id="login-btn" value="로그인">
				<div class="txt-btn-wrap">
					<span id="go-find-id" class="txt-btn">아이디 찾기</span>
					<span id="go-find-pw" class="txt-btn">비밀번호 찾기</span>
					<span class="txt-btn login-close">창닫기</span>
				</div>
			</section>
		</div>
		<!-- END LOGIN SECTION -->

		<!-- START JOIN SECTION -->
		<div id="join-section" class="blind">
			<section class="join-popup-title-section">
				<span>회원가입</span>
				<span class="join-closer">
					<img src="../assets/IMG/common/closer.svg" alt="closer-img" class="closer-img" />
				</span>
			</section>
			<section class="join-popup-input-section">
				<div class="input-wrap">
					<div class="input-check">
						<input type="email" id="join-email" class="join-popup-input-short" placeholder="이메일"
							autocomplete="off" />
						<input type="button" id="check_email" class="join-popup-check-btn" value="인증하기" />
					</div>
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<div class="input-check">
						<input type="text" id="join-email-code" 
             class="join-popup-input-short" placeholder="인증번호"
             autocomplete="off" />
						<input type="button" id="check_email-code" class="join-popup-check-btn" value="확인" />
					</div>
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<div class="input-check">
						<input type="text" id="join-id" class="join-popup-input-short"
							placeholder="아이디(소문자, 숫자만 입력 = 5~10자))" autocomplete="off" />
						<input type="button" id="check_id" class="join-popup-check-btn" value="중복확인" />
					</div>
					<span class="warning-text blind">이미 아이디가 존재합니다.</span>
				</div>
				<div class="input-wrap">
					<input type="password" id="join-pw" class="join-popup-input"
						placeholder="비밀번호(영문+숫자+특수문자 = 8~10글자)" />
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<input type="password" id="join-re-pw" class="join-popup-input" placeholder="비밀번호 재입력" />
					<span class="warning-text blind">다시 시도해주세요.</span>
				</div>
				<div class="input-wrap">
					<input type="text" id="join-name" class="join-popup-input" 
           placeholder="이름" autocomplete="off" />
				</div>
				<div class="input-wrap">
					<input type="number" id="join-tel" class="join-popup-input" placeholder="전화번호(-없이 입력)"
						autocomplete="off" />
					<span class="warning-text blind">-없이 입력하세요.</span>
				</div>
				<div class="input-wrap">
					<input type="number" id="join-birth" class="join-popup-input" placeholder="생년월일(숫자로만 입력)"
						autocomplete="off" />
					<span class="warning-text blind">숫자로만 입력가능합니다.</span>
				</div>
			</section>
			<section class="join-popup-btn-section">
				<input type="button" id="join-btn" value="회원가입">
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
				<input type="email" id="find-id-email" class="find-popup-input" placeholder="이메일을 입력하세요."
					autocomplete="off" />
			</section>
			<section class="find-popup-btn-section">
				<input type="button" id="find-id-btn" class="find-btn" value="메일 보내기">
				<input type="button" id="find-id-close" class="p-close" value="창닫기">
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
					<input type="email" id="find-pw-email" class="find-popup-input" placeholder="이메일을 입력하세요."
						autocomplete="off" />
				</div>
				<div>
					<span class="find-guide-txt">회원가입 시 입력한 아이디를 입력해 주세요.</span>
					<input type="text"
           id="find-pw-id"
           class="find-popup-input"
           placeholder="아이디를 입력하세요."
           autocomplete="off" />
				</div>
			</section>
			<section class="find-popup-btn-section">
				<input type="button" id="find-pw-btn" class="find-btn" value="비밀번호 찾기">
				<input type="button" id="find-pw-close" class="p-close" value="창닫기">
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
				<div id="logout-btn" class="confirm-yesBtn">로그아웃</div>
				<div id="logout-closeBtn" class="confirm-noBtn">닫기</div>
			</section>
		</div>
	</div>

	<div class="popup-background blind">
		<!-- START SPINNER SECTION -->
		<div id="spinner-section" class="blind">
			<img src="../assets/IMG/common/spinner.gif" alt="로딩이미지" class="spinner-img">
		</div>
		<!-- END SPINNER SECTION -->

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
				<span>해당 이메일로 가입된 회원이 없습니다.</span>
			</section>
			<section id="fail-alert-btn" class="alert-btn-section">
				<span>확인</span>
			</section>
    </div>
  </div>
</template>

<style>
  @import '../assets/CSS/common/common.css';
  @import '../assets/CSS/office/login.css';
</style>

<script>
import HeaderView from '../components/office/common/HeaderView.vue';
import FooterView from '../components/office/common/FooterView.vue';

export default {
  name: 'LayoutBase',
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
