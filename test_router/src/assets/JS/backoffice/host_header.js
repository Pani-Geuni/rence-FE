/* eslint-disable linebreak-style */
/**
* @author : 전판근, 김예은
*/

import $ from 'jquery';

$(() => {
  /** 호스트 마이페이지 */
  // $('#go-myPage').on('click', () => {
  // 	$('#after_login>.custom-select-host').addClass('blind');
  // 	window.location.href = '/backoffice/go_my_page';
  // });

  // ==================
  // 비밀번호 재설정 input 체크
  // ==================

  $('.input-update-pw').on('keydown keyup', function () {
    if ($(this).attr('id') == 'input-update-pw') {
      const password = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{8,10}$/;
      if (!password.test($(this).val().trim())) {
        if (($('#input-update-pw-re').val().trim().length > 0) && ($(this).val().trim() != $('#input-update-pw-re').val().trim())) {
          $('.pw-warning-text:eq(0)').removeClass('blind');
          $('.pw-warning-text:eq(0)').text('아래 비밀번호와 일치하지 않습니다.');
        } else {
          $('.pw-warning-text:eq(0)').removeClass('blind');
          $('.pw-warning-text:eq(0)').text('비밀번호 조건 (소문자+숫자+특수문자 포함 8~10글자)');
        }
      } else {
        $('.pw-warning-text:eq(0)').addClass('blind');

        if ($('#input-update-pw-re').val().trim().length > 0) {
          if ($(this).val().trim() != $('#input-update-pw-re').val().trim()) {
            $('.pw-warning-text:eq(1)').removeClass('blind');
            $('.pw-warning-text:eq(1)').text('위의 비밀번호와 일치하지 않습니다.');
          } else {
            $('.pw-warning-text:eq(1)').addClass('blind');
          }
        }
      }
    } else if ($(this).attr('id') == 'input-update-pw-re') {
      if ($(this).val().trim() != $('#input-update-pw').val().trim()) {
        $('.pw-warning-text:eq(1)').removeClass('blind');
        $('.pw-warning-text:eq(1)').text('위의 비밀번호와 일치하지 않습니다.');
      } else {
        $('.pw-warning-text:eq(1)').addClass('blind');
      }
    }
  });

  // 비밀번호 재설정 ajax
  $('#btn-pw-update').on('click', () => {
    const password = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/;
    const backoffice_no = $(window.location).attr('search').split('?backoffice_no=')[1];

    if ($('#input-update-pw').val().trim().length > 0 && $('#input-update-pw-re').val().trim().length > 0) {
      if ($('#input-update-pw').val().trim() == $('#input-update-pw-re').val().trim() && password.test($('#input-update-pw').val().trim())) {
        // 로딩 화면
        $('.popup-background:eq(1)').removeClass('blind');
        $('#spinner-section').removeClass('blind');

        $.ajax({
          url: '/backoffice/settingOK_pw',
          type: 'POST',
          dataType: 'json',
          data: {
            backoffice_no,
            backoffice_pw: $('#input-update-pw').val().trim(),
          },
          success(res) {
            // 로딩 화면 닫기
            $('.popup-background:eq(1)').addClass('blind');
            $('#spinner-section').addClass('blind');

            if (res.result == 1) {
              window.location.href = `/backoffice/settings?backoffice_no=${$.cookie('backoffice_no')}`;
            } else if (res.result == 2) {
              window.location.href = '/backoffice/landing';
            } else {
              $('.popup-background:eq(1)').removeClass('blind');
              $('#common-alert-popup').removeClass('blind');
              $('.common-alert-txt').text('비밀번호 변경에 실패하였습니다.');
            }
          },
          error() {
            // 로딩 화면 닫기
            $('.popup-background:eq(1)').addClass('blind');
            $('#spinner-section').addClass('blind');

            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').text('비밀번호 변경에 실패하였습니다.');
          },
        });
      } else {
        $('.popup-background:eq(0)').removeClass('blind');
        $('#fail-alert-popup').removeClass('blind');
      }
    } else {
      if ($('#input-update-pw').val().trim().length == 0) {
        $('#input-update-pw').addClass('null-input-border');
      }
      if ($('#input-update-pw-re').val().trim().length == 0) {
        $('#input-update-pw-re').addClass('null-input-border');
      }
    }
  });
});
