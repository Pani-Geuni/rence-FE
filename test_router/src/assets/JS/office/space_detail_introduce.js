/**
 * @author 김예은, 전판근
 */
$(() => {
  /** *** ************** **** */
  /** *** DATEPICKER부분 **** */
  /** *** ************** **** */
  $('.time-input').datetimepicker({
    dateFormat: 'yy/mm/dd',
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    minDate: new Date(),
    // .toLocaleDateString().replaceAll(". ", "/"),

    // timepicker 설정
    timeFormat: 'HH:mm:ss',
    controlType: 'select',
    oneLine: true,
  });

  /** *** *** ******* **** */
  /** *** 고정된 부분 **** */
  /** *** *** ******* **** */

  /** * 예약 타입 셀렉트 클릭 시 -> 커스텀 셀렉트 SHOW ** */
  $('.type-border').click(() => {
    if ($('.custom-select-type').hasClass('blind')) {
      $('.custom-select-type').removeClass('blind');
      $('.type-border').addClass('open-select');
    } else {
      $('.custom-select-type').addClass('blind');
      $('.type-border').removeClass('open-select');
    }
  });

  const check_reserve_time = [];
  const pick_time_list = [];

  $('#go_reserve').click(() => {
    const user_no = $.cookie('user_no');
    const backoffice_no = location.href.split('backoffice_no=')[1].split('&')[0];
    const room_no = $('#type-choice-value').attr('room_no');
    const reserve_date = $('.time-input:eq(0)').val().trim();
    let room_type = $('#type-choice-value').attr('room_type').trim();

    if (pick_time_list.length == 0) {
      $('.fixed-popup').removeClass('blind');
      $('.using-time-fail-txt:eq(0)').html(
        '시간을 선택해 주세요.<br><br> 표시가 안 된 시간은 예약이 불가합니다.',
      );

      $('#check_available').removeClass('blind');
      $('#go_reserve').addClass('blind');
    }

    if (pick_time_list[0] > pick_time_list[1]) {
      [pick_time_list[0], pick_time_list[1]] = [pick_time_list[1], pick_time_list[0]];
    }

    if (pick_time_list.length == 1) {
      pick_time_list.push(pick_time_list[0] + 1);
    } else {
      pick_time_list[1] += 1;
    }

    const reserve_stime = `${reserve_date} ${pick_time_list[0]}:00:00`;
    const reserve_etime = `${reserve_date} ${pick_time_list[1]}:00:00`;

    if (room_type == '데스크') {
      room_type = 'desk';
    } else if (room_type == '4인 미팅룸') {
      room_type = 'meeting_04';
    } else if (room_type == '6인 미팅룸') {
      room_type = 'meeting_06';
    } else if (room_type == '10인 미팅룸') {
      room_type = 'meeting_10';
    }

    // 로딩 화면
    $('.popup-background:eq(1)').removeClass('blind');
    $('#spinner-section').removeClass('blind');

    $.ajax({
      url: '/office/reserve',
      type: 'GET',
      dataType: 'json',
      data: {
        user_no,
        backoffice_no,
        room_no,
        reserve_stime,
        reserve_etime,
        room_type: room_type.trim(),
      },

      success(res) {
        // 로딩 화면 닫기
        $('.popup-background:eq(1)').addClass('blind');
        $('#spinner-section').addClass('blind');

        if (res.result == '1') {
          location.href = `/office/payment?reserve_no=${res.reserve_no}`;
        }
      },
      error() {
        // 로딩 화면 닫기
        $('.popup-background:eq(1)').addClass('blind');
        $('#spinner-section').addClass('blind');
      },
    });
  });

  /** *** *** ******* **** */
  /** *** 고정 안 된 부분 *** */
  /** *** *** ******* **** */

  /** *** ************** **** */
  /** *** QUESTION POPUP **** */
  /** *** ************** **** */

  let question_flag = true;
  $('#question-createBtn').click(() => {
    if ($('#question-select-choice').attr('choice') == 'true' && $('#question-write').val().trim().length > 0) {
      if (question_flag) {
        question_flag = false;

        // 로딩 화면
        $('.popup-background:eq(1)').removeClass('blind');
        $('#spinner-section').removeClass('blind');

        let is_secret = '';
        $('#toggle').prop('checked') ? is_secret = 'T' : is_secret = 'F';

        $.ajax({
          url: '/office/insert_question',
          type: 'GET',
          dataType: 'json',
          data: {
            user_no: $.cookie('user_no'),
            backoffice_no: location.href.split('backoffice_no=')[1].split('&')[0],
            room_no: $('#question-select-choice').attr('choice_idx'),
            comment_content: $('#question-write').val().trim(),
            is_secret,
          },
          success(res) {
            question_flag = true;

            // 로딩 화면 닫기
            $('.popup-background:eq(1)').addClass('blind');
            $('#spinner-section').addClass('blind');

            if (res.result == 1) {
              $('.qna-length').text('0');
              $('#question-write').val('');

              $('.question-popup-select-val-wrap:eq(0)').removeClass('null-input-border');
              $('#question-write').removeClass('null-input-border');

              $('#question-select-choice').text('타입을 선택해 주세요');
              $('#question-select-choice').attr('choice_idx', '');
              $('#question-select-choice').attr('choice', '');

              $('.question-popup-select-val-wrap:eq(0)').removeClass('open-select');
              $('.question-popup-select:eq(0)').addClass('blind');
              $('#question-popup').addClass('blind');

              $('#toggle').prop('checked', false);

              $('.popup-background:eq(1)').removeClass('blind');
              $('#common-alert-popup').removeClass('blind');
              $('.common-alert-txt').text('성공적으로 문의가 등록되었습니다.');
              $('#common-alert-btn').attr('is_reload', true);
            } else {
              $('.popup-background:eq(1)').removeClass('blind');
              $('#common-alert-popup').removeClass('blind');
              $('.common-alert-txt').text('비밀번호가 일치하지않습니다.');
            }
          },
          error() {
            question_flag = true;

            // 로딩 화면 닫기
            $('.popup-background:eq(1)').addClass('blind');
            $('#spinner-section').addClass('blind');

            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
          },
        });
      }
    } else {
      if ($('#question-write').val().trim().length == 0) {
        $('#question-write').addClass('null-input-border');
      }
      if ($('#question-select-choice').attr('choice') != 'true') {
        $('.question-popup-select-val-wrap:eq(0)').addClass('null-input-border');
      }
    }
  });

  /** *********************************************** */
  /** **************** PAGING SECTION *************** */
  /** *********************************************** */

  // 문의 탭 - 다음 페이지 리스트로 이동
  $('.question-paging').on('click', '.next-page-btn', () => {
    const start = Number($($('.question-paging').find('.paging-box.paging-num')[0]).text()) + 5;
    let last = Number($($('.question-paging').find('.paging-box.paging-num')[4]).text()) + 5;
    const totalPageCnt = Number($('#totalPageCnt').val());

    if ($('.question-paging').find('.before-page-btn').hasClass('hide')) {
      $('.question-paging').find('.before-page-btn').removeClass('hide');
    }

    if (last >= totalPageCnt) {
      last = totalPageCnt;
      $('.question-paging').find('.next-page-btn').addClass('hide');
    }

    const sample = $('.question-paging').find('.paging-num-wrap>.paging-box.paging-num:eq(0)').clone();
    $('.question-paging').find('.paging-num-wrap').empty();

    for (let i = start; i <= last; i++) {
      const sample_span = sample.clone();

      sample_span.text(i);
      sample_span.attr('idx', i);
      sample_span.removeClass('choice');
      sample_span.addClass('un-choice');

      $('.question-paging').find('.paging-num-wrap').append(sample_span);
    }
  });

  // 문의 탭 - 이전 페이지 리스트로 이동
  $('.question-paging').on('click', '.before-page-btn', () => {
    const start = Number($($('.question-paging').find('.paging-box.paging-num')[0]).text()) - 5;
    let last = Number($('.question-paging').find('.paging-box.paging-num:last').text()) - 5;

    if (last % 5 != 0) {
      last += 5 - (last % 5);
    }

    if ($('.question-paging').find('.next-page-btn').hasClass('hide')) {
      $('.question-paging').find('.next-page-btn').removeClass('hide');
    }

    if (start == 1) {
      $('.question-paging').find('.before-page-btn').addClass('hide');
    }

    const sample = $($('.question-paging').find('.paging-box.paging-num')[0]).clone();
    $('.question-paging').find('.paging-num-wrap').empty();

    for (let i = start; i <= last; i++) {
      const sample_span = sample.clone();

      sample_span.text(i);
      sample_span.attr('idx', i);
      sample_span.removeClass('choice');
      sample_span.addClass('un-choice');

      $('.question-paging').find('.paging-num-wrap').append(sample_span);
    }
  });

  // 후기 탭 - 다음 페이지 리스트로 이동
  $('.review-paging').on('click', '.next-page-btn', () => {
    const start = Number($($('.review-paging').find('.paging-box.paging-num')[0]).text()) + 5;
    let last = Number($($('.review-paging').find('.paging-box.paging-num')[4]).text()) + 5;
    const totalPageCnt = Number($('#totalPageCnt2').val());

    if ($('.review-paging').find('.before-page-btn').hasClass('hide')) {
      $('.review-paging').find('.before-page-btn').removeClass('hide');
    }

    if (last >= totalPageCnt) {
      last = totalPageCnt;
      $('.review-paging').find('.next-page-btn').addClass('hide');
    }

    const sample = $('.review-paging').find('.paging-num-wrap>.paging-box.paging-num:eq(0)').clone();
    $('.review-paging').find('.paging-num-wrap').empty();

    for (let i = start; i <= last; i++) {
      const sample_span = sample.clone();

      sample_span.text(i);
      sample_span.attr('idx', i);
      sample_span.removeClass('choice');
      sample_span.addClass('un-choice');

      $('.review-paging').find('.paging-num-wrap').append(sample_span);
    }
  });

  // 후기 탭 - 이전 페이지 리스트로 이동
  $('.review-paging').on('click', '.before-page-btn', () => {
    const start = Number($($('.review-paging').find('.paging-box.paging-num')[0]).text()) - 5;
    let last = Number($('.review-paging').find('.paging-box.paging-num:last').text()) - 5;

    if (last % 5 != 0) {
      last += 5 - (last % 5);
    }

    if ($('.review-paging').find('.next-page-btn').hasClass('hide')) {
      $('.review-paging').find('.next-page-btn').removeClass('hide');
    }

    if (start == 1) {
      $('.review-paging').find('.before-page-btn').addClass('hide');
    }

    const sample = $('.review-paging').find('.paging-num-wrap>.paging-box.paging-num:eq(0)').clone();
    $('.review-paging').find('.paging-num-wrap').empty();

    for (let i = start; i <= last; i++) {
      const sample_span = sample.clone();

      sample_span.text(i);
      sample_span.attr('idx', i);
      sample_span.removeClass('choice');
      sample_span.addClass('un-choice');

      $('.review-paging').find('.paging-num-wrap').append(sample_span);
    }
  });
});
