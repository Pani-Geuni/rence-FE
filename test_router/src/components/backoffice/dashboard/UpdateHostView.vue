<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <div class="host-update" th:fragment="dashboard_content">
    <section class="board-contentWrap host-update">
      <div class="titleSection">
        <h1>호스트 정보 변경</h1>
      </div>
      <!-- END titleSection -->
      <div id="updateForm">
        <div class="host-update-form">
          <input type="hidden" id="backoffice_no" name="backoffice_no" v-model="backoffice_no" />
          <div class="inputWrap info">
            <p>사업체 태그</p>
            <div class="hashTag-area">
              <div class="hashTag-group">
                <input type="hidden" value="" name="backoffice_tag" id="real-input-tag" v-on:keydown.enter.prevent />
              </div>
              <input type="text" v-model="tagValue" id="backoffice_tag" placeholder="사업체의 태그를 입력해 주세요 (최대 10글자)"
                maxlength=10 @keyup.enter="createHashTag" @keyup.space="createHashTag" v-on:click.stop />
              <ul id="tag-list" v-if="margin_tag_list.length !== 0">
                <li class='tag-item' v-for="tag in margin_tag_list" :key="tag">{{ tag
                }}
                  <span @click="deleteTag" class='del-btn' :tag="tag" :idx="counter">x</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 공간 태그 -->
          <div class="inputWrap info">
            <p>사업체 소개</p>
            <div class="check_wrap">
              <textarea id="backoffice_info" name="backoffice_info" v-model="vo.backoffice_info"
                placeholder="공간 소개를 입력해 주세요"> </textarea>
              <div class="b_info_txt_length_wrap">
                <span class="b_info_txt_length">0</span>
                <span>&nbsp;/ 500</span>
              </div>
            </div>
          </div>

          <div class="inputWrap backoffice_type">
            <p>공간 타입</p>
            <div class="option-group-column">
              <div class="option-group-row"
                th:with="type = ${vo.backoffice_type}, isExist = ${vo.backoffice_type != null}">
                <div class="option-item">
                  <input type="checkbox" id="type_checkbox_desk" v-model="backoffice_type" class="checkbox"
                    name="backoffice_type" value="desk" readonly />
                  <label>데스크</label>
                </div>
                <!-- END option-item -->
                <div class="option-item">
                  <input type="checkbox" id="type_checkbox_meeting_room" class="checkbox" v-model="backoffice_type"
                    name="backoffice_type" value="meeting_room" readonly />
                  <label>회의실</label>
                </div>
                <!-- END option-item -->
                <div class="option-item">
                  <input type="checkbox" id="type_checkbox_office" class="checkbox" name="backoffice_type"
                    v-model="backoffice_type" value="office" readonly />
                  <label>오피스</label>
                </div>
                <!-- END option-item -->
              </div><!-- END option-group-row -->
            </div>
            <!-- END option-group-column -->
          </div>
          <!-- END inputWrap backoffice_type -->

          <div class="inputWrap option">
            <p>공간 옵션</p>
            <div class="option-group-column"
              th:with="tag = ${vo.backoffice_option}, isExist = ${vo.backoffice_option != null}">
              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="chair-desk" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="chair-desk" readonly /> <label>의자/테이블</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="internet-wifi" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="internet-wifi" /> <label>인터넷/Wi-Fi</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="restroom" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="restroom" />
                  <label>내부 화장실</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="no-smoking" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="no-smoking" />
                  <label>금연</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="smoking-room" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="smoking-room" /> <label>흡연실</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="terrace-rooftop" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="terrace-rooftop" /> <label>테라스/루프탑</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="tv-projector" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="tv-projector" /> <label>TV/프로젝터</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="whiteboard" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="whiteboard" />
                  <label>화이트보드</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="sound-microphone" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="sound-microphone" /> <label>음향/마이크</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="parking" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="parking" />
                  <label>주차</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="pc-laptop" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="pc-laptop" />
                  <label>PC/노트북</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="printer" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="printer" />
                  <label>복사/인쇄기</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="lounge" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="lounge" />
                  <label>공용 라운지</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="kitchen" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="kitchen" />
                  <label>공용 주방</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="water-purifier" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="water-purifier" /> <label>정수기</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="can-food" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="can-food" />
                  <label>음식물 반입 가능</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="can-drink" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="can-drink" />
                  <label>주류 반입 가능</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="air-conditioner" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="air-conditioner" /> <label>에어컨</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="fitting-room" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="fitting-room" /> <label>탈의실</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="shower" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="shower" />
                  <label>샤워시설</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="body-mirror" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="body-mirror" />
                  <label>전신거울</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="door-lock" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="door-lock" />
                  <label>도어락</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="outlet-multitap" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="outlet-multitap" /> <label>콘센트/멀티탭</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="personal-locker" class="checkbox" name="backoffice_option"
                    v-model="backoffice_option" value="personal-locker" /> <label>개인락커</label>
                </div>
              </div>
              <!-- END option-group row -->
              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="fax" class="checkbox" name="backoffice_option" v-model="backoffice_option"
                    value="fax" />
                  <label>팩스</label>
                </div>
              </div>
              <!-- END option-group row -->
            </div>
            <!-- END option-group column -->
          </div>
          <!-- END inputWrap option -->

          <div class="inputWrap facilities">
            <p>주변 시설</p>
            <div class="option-group-column"
              th:with="around = ${vo.backoffice_around} , isExist = ${vo.backoffice_around != null}">
              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="public-parking" class="checkbox" name="backoffice_around"
                    v-model="backoffice_around" value="public-parking" /> <label>공영주차장</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="paid-parking" class="checkbox" name="backoffice_around"
                    v-model="backoffice_around" value="paid-parking" /> <label>유료주차장</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="pharmacy" class="checkbox" name="backoffice_around"
                    v-model="backoffice_around" value="pharmacy" />
                  <label>약국</label>
                </div>
              </div>
              <!-- END option-group row -->

              <div class="option-group-row">
                <div class="option-item">
                  <input type="checkbox" id="hospital" class="checkbox" name="backoffice_around"
                    v-model="backoffice_around" value="hospital" />
                  <label>병원</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="convenience-store" class="checkbox" name="backoffice_around"
                    v-model="backoffice_around" value="convenience-store" /> <label>편의점</label>
                </div>

                <div class="option-item">
                  <input type="checkbox" id="cafe" class="checkbox" name="backoffice_around" v-model="backoffice_around"
                    value="cafe" />
                  <label>카페</label>
                </div>
              </div>
              <!-- END option-group row -->
            </div>
            <!-- END option-group column -->
          </div>
          <!-- END inputWrap facilities -->

          <div class="inputWrap time">
            <p>운영 시간</p>
            <div class="custom-table update">
              <div class="custom-table-heading update">
                <div class="table-head-cell update">
                  <p>요일</p>
                </div>
                <div class="table-head-cell update">
                  <p>오픈 시간</p>
                </div>
                <div class="table-head-cell update">
                  <p>마감 시간</p>
                </div>
                <div class="table-head-cell update">
                  <p>휴무일 체크</p>
                </div>
              </div>
              <!-- END custom table heading -->

              <div class="custom-table-body update">
                <div class="table-body-row update">
                  <div class="table-body-cell update">일</div>
                  <div class="table-body-cell update">
                    <input type="text" id="sun_stime" class="time-picker update" name="sun_stime"
                      th:value="${ovo.sun_stime}" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="sun_etime" class="time-picker update" name="sun_etime"
                      th:value="${ovo.sun_etime}" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="sun_dayoff" class="checkbox" name="sun_dayoff"
                      th:checked="${ovo.sun_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->

                <div class="table-body-row update">
                  <div class="table-body-cell update">월</div>
                  <div class="table-body-cell update">
                    <input type="text" id="mon_stime" class="time-picker update" name="mon_stime"
                      th:value="${ovo.mon_stime}" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="mon_etime" class="time-picker update" name="mon_etime"
                      th:value="${ovo.mon_etime}" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="mon_dayoff" class="checkbox" name="mon_dayoff"
                      th:checked="${ovo.mon_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->

                <div class="table-body-row update">
                  <div class="table-body-cell update">화</div>
                  <div class="table-body-cell update">
                    <input type="text" id="tue_stime" th:value="${ovo.tue_stime}" class="time-picker update"
                      name="tue_stime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="tue_etime" th:value="${ovo.tue_etime}" class="time-picker update"
                      name="tue_etime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="tue_dayoff" class="checkbox" name="tue_dayoff"
                      th:checked="${ovo.tue_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->

                <div class="table-body-row update">
                  <div class="table-body-cell update">수</div>
                  <div class="table-body-cell update">
                    <input type="text" id="wed_stime" th:value="${ovo.wed_stime}" class="time-picker update"
                      name="wed_stime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="wed_etime" th:value="${ovo.wed_etime}" class="time-picker update"
                      name="wed_etime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="wed_dayoff" class="checkbox" name="wed_dayoff"
                      th:checked="${ovo.wed_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->

                <div class="table-body-row update">
                  <div class="table-body-cell update">목</div>
                  <div class="table-body-cell update">
                    <input type="text" id="thu_stime" th:value="${ovo.thu_stime}" class="time-picker update"
                      name="thu_stime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="thu_etime" th:value="${ovo.thu_etime}" class="time-picker update"
                      name="thu_etime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="thu_dayoff" class="checkbox" name="thu_dayoff"
                      th:checked="${ovo.thu_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->

                <div class="table-body-row update">
                  <div class="table-body-cell update">금</div>
                  <div class="table-body-cell update">
                    <input type="text" id="fri_stime" th:value="${ovo.fri_stime}" class="time-picker update"
                      name="fri_stime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="fri_etime" th:value="${ovo.fri_etime}" class="time-picker update"
                      name="fri_etime" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="fri_dayoff" class="checkbox" name="fri_dayoff"
                      th:checked="${ovo.fri_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->

                <div class="table-body-row update">
                  <div class="table-body-cell update">토</div>
                  <div class="table-body-cell update">
                    <input type="text" id="sat_stime" th:value="${ovo.sat_stime}" class="time-picker update"
                      name="sat_stime" value="" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="text" id="sat_etime" th:value="${ovo.sat_etime}" class="time-picker update"
                      name="sat_etime" value="" readonly />
                  </div>
                  <div class="table-body-cell update">
                    <input type="checkbox" id="sat_dayoff" class="checkbox" name="sat_dayoff"
                      th:checked="${ovo.sat_dayoff}=='T'" value="T" />
                  </div>
                </div>
                <!-- END table body row -->
              </div>
              <!-- END custom table body -->
            </div>
            <!-- END custom table -->
          </div>
          <!-- END inputWrap time -->

          <div class="inputWrap">
            <p>공간 사진</p>

            <div class="filebox">
              <input class="upload-name" name="backoffice_image" th:value="${vo.backoffice_image}"
                placeholder="첨부파일(.jpg/.jpeg/.png)" />
              <label for="multipartFile_room">파일찾기</label>
              <input type="file" id="multipartFile_room" name="multipartFile_room" accept=".jpg, .jpeg, .png"
                multiple="multiple" />
            </div>
            <input type="file" id="multipartFile_host" name="multipartFile_host" style="display: none;" />
          </div>
          <!-- END inputWrap image -->

          <div class="submit">
            <input type="button" id="submit" class="submit-application" value="정보변경하기" />
            <input type="submit" id="real-submit" class="submit-application" value="정보변경하기" style="display:none;" />
          </div>
        </div>
      </div>
      <!-- END host-update-form -->
    </section>

  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/CSS/dash-board/dash-host-update.scss';
</style>

<script>
import $ from 'jquery';
import axios from 'axios';

export default {
  name: 'UpdateHostView',

  data() {
    return {
      backoffice_no: this.$cookies.get('backoffice_no'),

      vo: [],
      ovo: [],

      backoffice_type: [],
      backoffice_option: [],
      backoffice_around: [],

      tagValue: '',
      tag: {},
      counter: 0,
      margin_tag_list: [],
      backoffice_tag: '',
    };
  },

  methods: {
    getHostInfo() {
      console.log(this.backoffice_no);
      axios.get('http://localhost:8800/backoffice/dash/update_host', {
        params: {
          backoffice_no: this.backoffice_no,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.vo = res.data.vo;
          this.ovo = res.data.ovo;
          this.backoffice_tag = res.data.backoffice_tag;
          console.log('==== getHostInfo');
          console.log(this.backoffice_tag);
          console.log('=======');
          this.backoffice_type = res.data.vo.backoffice_type.split(',');
          this.backoffice_option = res.data.vo.backoffice_option.split(',');
          this.backoffice_around = res.data.vo.backoffice_around.split(',');

          let arr = [];
          if (this.backoffice_tag !== undefined) {
            arr = this.backoffice_tag.split(',');
          }

          this.margin_tag_list = arr;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < arr.length; i++) {
            this.tagValue = arr[i];

            this.addTag(this.tagValue);
            this.margin_tag_list = this.marginTag();
            this.tagValue = '';
          }

          if (arr[0] === '') {
            arr.pop();
          }
        });
    },

    addTag(value) {
      this.tag[this.counter] = value;
      this.counter += 1;
    },

    marginTag() {
      // this.margin_tag_list = [];

      return Object.values(this.tag).filter((word) => word !== '');
    },

    toStringTag(list) {
      this.backoffice_tag = '';

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < list.length; i++) {
        if (i !== (list.length - 1)) {
          this.backoffice_tag += (`${list[i]},`);
        } else {
          this.backoffice_tag += list[i];
        }
      }

      $('#real-input-tag').val(this.backoffice_tag);
    },

    createHashTag(e) {
      const targetTag = e.target.value;

      if ((targetTag !== '' || targetTag !== ' ') && targetTag.length !== 0) {
        const result = Object.values(this.tag).filter((word) => word === targetTag);

        // 해시태그 중복 확인
        if (result.length === 0 && this.margin_tag_list.length < 5) {
          this.addTag(targetTag.trim());
          this.margin_tag_list = this.marginTag();
          this.toStringTag(this.margin_tag_list);
          this.tagValue = '';
        } else if (this.margin_tag_list.length >= 5) {
          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('해시태그는 최대 5개 입니다.');
          this.tagValue = '';
        } else if (this.margin_tag_list.includes(targetTag)) {
          $('.popup-background:eq(1)').removeClass('blind');
          $('#common-alert-popup').removeClass('blind');
          $('.common-alert-txt').text('중복된 해시태그 입니다.');
          this.tagValue = '';
        }
      }
      e.preventDefault();
    },

    deleteTag(e) {
      // const index = e.target.getAttribute('idx');
      const index = e.target.getAttribute('tag');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.margin_tag_list.length; i++) {
        if (index === this.margin_tag_list[i]) {
          const key = Object.keys(this.tag).filter((key) => this.tag[key] === index)[0];
          delete this.tag[key];
        }
      }
      // console.log('index :', index);

      // this.tag.splice(index, 1);
      console.log(this.tag);
      // this.tag[index] = '';
      this.margin_tag_list = this.marginTag();
      this.toStringTag(this.margin_tag_list);
      // console.log(this.tag.indexOf(index));
    },
  },

  mounted() {
    this.$nextTick(() => {
      // this.originTagValue();
      this.getHostInfo();
    });
  },
};
</script>
