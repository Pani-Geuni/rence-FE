/**
* @author 김예은
*/
$(() => {
  let cityObject = [];
  let city = [];
  let town = [];

  $('#before_userMenu').click(() => {
    $('#before_login>.custom-select-user').toggleClass('blind');
  });
  $('#after_userMenu').click(() => {
    $('#after_login>.custom-select-user').toggleClass('blind');
  });

  $('#go-login').click(() => {
    $('#before_login>.custom-select-user').addClass('blind');
    $('.popup-background:eq(0)').removeClass('blind');
    $('#login-section').removeClass('blind');
  });
  $('#go-join').click(() => {
    $('#before_login>.custom-select-user').addClass('blind');
    $('.popup-background:eq(0)').removeClass('blind');
    $('#join-section').removeClass('blind');
  });

  $('#go-myPage').click(() => {
    $('#after_login>.custom-select-user').addClass('blind');
    location.href = '/rence/go_my_page';
  });
  $('#go-logOut').click(() => {
    $('#after_login>.custom-select-user').addClass('blind');
    $('#logout-popup').removeClass('blind');
    $('.popup-background:eq(0)').removeClass('blind');
  });

  $('#go-backOffice').click(() => {
    window.open('/backoffice/landing');
  });

  // CUSTOM TYPE SELECT
  $('#type').click(() => {
    $('#custom-type-select').toggleClass('blind');
  });
  $('.type-select-list').click(function () {
    $('#type>span').text($(this).text());
    $('#type>span').attr('val', $(this).attr('val'));
    $('#custom-type-select').addClass('blind');
  });

  // CUSTOM LOCATION SELECT
  $('#location').click(() => {
    if (city.length == 0) {
      $.ajax({
        url: '/static/json/city.json',
        dataType: 'json',
        success(res) {
          cityObject = res.slice();

          city = cityObject.map((v) => {
            if (v.city != null) return v.city;
          }).slice();
          load_city(city);
        },
        error() {
        },
      });
    }

    if ($('#custom-location-select').hasClass('blind')) {
      $('#custom-location-select').removeClass('blind');
    } else {
      $('#custom-location-select').addClass('blind');
      $('#location-town').addClass('blind');
    }
  });
  $('#location-city').on('click', '.location-select-list', function () {
    $('#location-town').removeClass('blind');

    const idx = $(this).prop('idx');
    town = cityObject.filter((v) => {
      if (v.city == idx) return true;
    })[0].arr.slice();

    load_town(town);
  });
  $('#location-town').on('click', '.location-select-list', function () {
    const idx = $(this).prop('idx');

    $('#location_val').text(idx);
    $('#location_val').prop('idx', idx);

    $('#location-town').addClass('blind');
    $('#custom-location-select').addClass('blind');
  });

  /** ********************************** */
  /** ******* SEARCH-BAR SECTION******** */
  /** ********************************** */
  $('#input_searchBar').keydown((e) => {
    if (e.keyCode == 13) {
      before_search();
    }
  });
  $('.searchBar-btn').click(() => {
    before_search();
  });

  /** ****************************** */
  /** ******** 버튼 클릭 이벤트 ******** */
  /** ****************************** */
  // 공용 알러트 창닫기버튼
  $('#common-alert-btn').click(() => {
    $('.popup-background:eq(1)').addClass('blind');
    $('#common-alert-popup').addClass('blind');
  });

  /** ******************************* */
  /** *******FUNCTION SECTION******** */
  /** ******************************* */
  function load_city(city) {
    for (let i = 0; i < city.length; i++) {
      const sample = $('#location-city>.location-select-list.sample').clone();
      sample.removeClass('sample blind');
      sample.text(city[i]);
      sample.prop('idx', city[i]);

      $('#location-city').append(sample);
    }
  }
  function load_town(town) {
    const setting = $('#location-town>.location-select-list.sample').clone();
    $('#location-town').empty().append(setting);

    for (let i = 0; i < town.length; i++) {
      const sample = $('#location-town>.location-select-list.sample').clone();
      sample.removeClass('sample blind');
      sample.text(town[i]);
      sample.prop('idx', town[i]);

      $('#location-town').append(sample);
    }
  }
});
