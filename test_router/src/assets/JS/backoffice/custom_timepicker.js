/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-array-constructor */
/* eslint-disable camelcase */
/**
 * @author 전판근
 */

import $ from 'jquery';

// ******************
// 호스트 신청에 필요한 JS
// ******************

$(() => {
  // TIME PICKER
  $('.time-picker').timepicker({
    timeFormat: 'HH:mm',
    interval: 60,
    defaultTime: '09',
    dynamic: false,
    dropdown: true,
    scrollbar: true,
  });

  // multi checkbox
  const chk_option_arr = new Array();
  $('#submit-application').click(() => {
    $('input[name=option]:checked').each(() => {
      chk_option_arr.push($(this).val());
    });

    alert(chk_option_arr);
    $('#options').val(chk_option_arr);

    const nearby_option_arr = new Array();
    $('input[name=nearby-option]:checked').each(() => {
      nearby_option_arr.push($(this).val());
    });

    alert(nearby_option_arr);
    $('#nearby-options').val(nearby_option_arr);
  });
});
