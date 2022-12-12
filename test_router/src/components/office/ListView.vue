<!-- eslint-disable prefer-destructuring -->
<!-- eslint-disable no-const-assign -->
<!-- eslint-disable prefer-destructuring -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->

<template>
  <!-- NULL SECTION -->
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

  <!-- NOT NULL SECTION -->
  <section class="listPage-section blind">
    <div class="sort-wrap">
      <div class="sort" @click="sort_select">
        <span class="choice-sort-text" v-if="condition === 'date'">최신순</span>
        <span class="choice-sort-text" v-if="condition === 'rating'">별점순</span>
        <span class="choice-sort-text" v-if="condition === 'cheap'">가격 낮은순</span>
        <span class="choice-sort-text" v-if="condition === 'expensive'">가격 높은순</span>
        <img src="@/assets/IMG/list/dropdown.svg" alt="sort-dropdown-img" class="sort-dropdown-img" id="sort-dropdown-img" />
      </div>
      <div class="sort-select-box-wrap blind">
        <ul class="sort-select-box">
          <li condition="date" class="sort-select-list" @click="sort($event.target)">최신순</li>
          <li condition="rating" class="sort-select-list" @click="sort($event.target)">별점순</li>
          <li condition="cheap" class="sort-select-list" @click="sort($event.target)">가격 낮은순</li>
          <li condition="expensive" class="sort-select-list" @click="sort($event.target)">가격 높은순</li>
        </ul>
      </div>
    </div>

    <div class="listPage-wrap" @scroll="list_paging($event.target)">
      <input type="hidden" v-bind:maxCnt="maxCnt" v-bind:nowCnt="nowCnt" id="maxCnt" />
      <div class="list-box-wrap">
          <!-- START LIST BOX -->
          <div class="list-box" @click="go_space_detail_page($event.target)" v-for="obj in list" v-bind:key="obj" v-bind:idx="obj.backoffice_no" >
            <section>
              <img v-bind:src="obj.backoffice_image" alt="default-space-img" class="list-thumbnail" />
            </section>
            <section class="list-box-info">
              <ul>
                <li class="box-info-c-name">{{obj.company_name}}</li>
                <li class="box-location-wrap">
                  <img src="@/assets/IMG/office/location-icon.svg" alt="location-icon" class="location-icon">
                  <span class="box-info-location">{{obj.roadname_address}}</span>
                </li>
                <li class="box-tag-wrap">
                  <span class="box-tag">{{obj.backoffice_tag}}</span>
                </li>
                <li class="box-price-rating-wrap">
                  <div class="box-room-min-price-wrap">
                    <span class="box-room-min-price">최소 {{obj.min_room_price}}</span>
                    <span class="price-unit" v-if="obj.backoffice_type  == 'office'">원/개월</span>
                    <span class="price-unit" v-if="obj.backoffice_type  != 'office'">원/시간</span>
                  </div>
                  <div class="box-room-rating">
                    <img src="@/assets/IMG/common/star.svg" alt="box-star" class="box-star" />
                    <span class="rating-num">{{obj.avg_rating}}</span>
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <!-- END LIST BOX -->
      </div>
    </div>
  </section>
</template>

<style>
  @import '@/assets/CSS/office/list-page.scss';
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
      maxCnt: '',
      nowCnt: '',
      condition: '',
      scroll_flag: true,
    };
  },
  mounted() {
    if (this.$route.params.call.includes('list_page')) {
      this.url = `http://localhost:8800/office/list_page?${this.$route.params.call.split('?')[1]}`;
    } else if (this.$route.params.call.includes('search_list')) {
      this.url = `http://localhost:8800/common/search_list?${decodeURI(window.location.href).split('?')[1]}`;
    }
    console.log(this.url);

    // axios.get(this.url)
    //   .then((res) => {
    //     this.list = res.list;
    //     this.maxCnt = res.maxCnt;
    //     this.nowCnt = res.nowCnt;
    //     this.condition = res.condition;

    //     if (this.list.length !== 0) {
    //       $('.list-page-wrap').addClass('blind');
    //       $('.listPage-section').removeClass('blind');
    //     }
    //   })
    //   .catch(() => {
    //     $('.popup-background:eq(1)').removeClass('blind');
    //     $('#common-alert-popup').removeClass('blind');
    //     $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
    //   });
  },
  methods: {
    // 정렬 셀렉트 클릭 시 커스텀 셀렉트 SHOW
    sort_select() {
      $('.sort-select-box-wrap').toggleClass('blind');
    },
    // 정렬 조건 클릭 시 데이터 요청
    sort(param) {
      const type = '';
      const url = '';
      const URL = '';

      if (window.location.href.includes('list_page')) {
        type = decodeURI(window.location.href).split('?type=')[1].split('&')[0];
        URL = `http://localhost:8800/office/list_page?type=${type}&condition=${$(param).attr('condition')}&page=1`;
      } else {
        url = decodeURI(window.location.href).split('&condition=')[0].split('list/')[1];
        URL = `${url}&condition=${$(this).attr('condition')}&page=1`;
      }

      // 로딩 화면
      $('.popup-background:eq(1)').removeClass('blind');
      $('#spinner-section').removeClass('blind');

      axios.get(URL)
        .then((res) => {
          // 로딩 화면 닫기
          $('.popup-background:eq(1)').addClass('blind');
          $('#spinner-section').addClass('blind');

          this.list = res.list;
          this.maxCnt = res.maxCnt;
          this.nowCnt = res.nowCnt;
          this.condition = res.condition;

          if (this.list.length !== 0) {
            $('.list-page-wrap').addClass('blind');
            $('.listPage-section').removeClass('blind');
          }
        })
        .catch(() => {
          // 로딩 화면 닫기
          $('.popup-background:eq(1)').addClass('blind');
          $('#spinner-section').addClass('blind');

          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
        });
    },
    list_paging(param) {
      if (Math.ceil($(param).scrollTop() + $(param).innerHeight()) >= $(param).prop('scrollHeight')) {
        if ($('.list-box').length < Number($('#maxCnt').attr('maxCnt')) && this.scroll_flag) {
          // 로딩 화면
          $('.popup-background:eq(1)').removeClass('blind');
          $('#spinner-section').removeClass('blind');

          if (window.location.href.includes('list_page')) {
            const type = window.location.href.split('type=')[1].split('&')[0];
            const condition = window.location.href.split('condition=')[1].split('&')[0];
            const page = $('#maxCnt').attr('nowCnt');

            this.scroll_flag = false;

            axios.get(`http://localhost:8800/office/list_paging&type=${type}&page=${Number(page) + 1}&condition=${condition}`)
              .then((res) => {
                this.scroll_flag = true;

                // 로딩 화면 닫기
                $('.popup-background:eq(1)').addClass('blind');
                $('#spinner-section').addClass('blind');

                const now = $('#maxCnt').attr('nowCnt');
                $('#maxCnt').attr('nowCnt', Number(now) + 1);

                for (let i = 0; i < res.cnt; i++) {
                  const box = $($('.list-box')[0]).clone();
                  box.attr('idx', res.list[i].backoffice_no);
                  box.find('.list-thumbnail').attr('src', res.list[i].backoffice_image);
                  box.find('.box-info-c-name').text(res.list[i].company_name);
                  box.find('.box-info-location').text(res.list[i].roadname_address);
                  box.find('.box-tag').text(res.list[i].backoffice_tag);
                  box.find('.box-room-min-price').text(`최소 ${res.list[i].min_room_price}`);
                  box.find('.rating-num').text(res.list[i].avg_rating);

                  $('.list-box-wrap').append(box);
                }
              })
              .catch(() => {
                this.scroll_flag = true;

                // 로딩 화면 닫기
                $('.popup-background:eq(1)').addClass('blind');
                $('#spinner-section').addClass('blind');
              });
          } else {
            const type = window.location.href.split('type=')[1].split('&')[0];
            const location = window.location.href.split('location=')[1].split('&')[0];
            const searchWord = window.location.href.split('searchWord=')[1].split('&')[0];
            const condition = window.location.href.split('condition=')[1].split('&')[0];
            const page = $('#maxCnt').attr('nowCnt');

            this.scroll_flag = false;

            axios.get('http://localhost:8800/office/search_list_paging', {
              params: {
                type,
                location,
                searchWord,
                page: Number(page) + 1,
                condition,
              },
            }).then((res) => {
              this.scroll_flag = true;

              // 로딩 화면 닫기
              $('.popup-background:eq(1)').addClass('blind');
              $('#spinner-section').addClass('blind');

              const now = $('#maxCnt').attr('nowCnt');
              $('#maxCnt').attr('nowCnt', Number(now) + 1);

              for (let i = 0; i < res.cnt; i++) {
                const box = $($('.list-box')[0]).clone();
                box.attr('idx', res.list[i].backoffice_no);
                box.find('.list-thumbnail').attr('src', res.list[i].backoffice_image);
                box.find('.box-info-c-name').text(res.list[i].company_name);
                box.find('.box-info-location').text(res.list[i].roadname_address);
                box.find('.box-tag').text(res.list[i].backoffice_tag);
                box.find('.box-room-min-price').text(`최소 ${res.list[i].min_room_price}`);
                box.find('.rating-num').text(res.list[i].avg_rating);

                $('.list-box-wrap').append(box);
              }
            }).catch(() => {
              this.scroll_flag = true;

              // 로딩 화면 닫기
              $('.popup-background:eq(1)').addClass('blind');
              $('#spinner-section').addClass('blind');
            });
          }
        }
      }
    },
    go_space_detail_page(param) {
      const backofficeNo = $(param).attr('idx');
      const type = decodeURI(window.location.href).split('?type=')[1].split('&')[0];

      if (type !== 'office') { window.open(`/office/space_introduce?backoffice_no=${backofficeNo}&introduce_menu=info`); }
      // 오피스용 공간 소개 페이지로 이동
      else { window.open(`/office/space_introduce_office?backoffice_no=${backofficeNo}&introduce_menu=info`); }
    },
  },
};
</script>
