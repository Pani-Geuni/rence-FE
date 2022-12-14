<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <section class="bodyWrap">
    <div class="applyWrap">
      <div class="titleWrap">
        <h1>호스트 신청하기</h1>
      </div>

      <!-- <form action="insertOK" id="insertForm" method="POST" enctype="multipart/form-data"> -->
      <div id="insertForm">
        <div class="inputWrap">
          <p>사업자 이름</p>
          <input type="text" id="owner_name" name="owner_name" placeholder="사업자 이름을 입력하세요" v-on:keydown.enter.prevent />
        </div>
        <div class="inputWrap">
          <p>사업자 등록 번호</p>
          <div class="check_wrap">
            <input type="text" id="backoffice_id" name="backoffice_id" placeholder="사업자 등록 번호를 입력하세요 (- 포함)"
              @keyup="keypressBackofficeId" @keydown="keypressBackofficeId" />
            <span class="warning-text blind">형식에 맞지 않습니다.</span>
          </div>
        </div>
        <div class="inputWrap">
          <p>상호명</p>
          <input type="text" id="backoffice_name" name="backoffice_name" placeholder="상호명을 입력해 주세요" />
        </div>
        <div class="inputWrap">
          <p>사업체 명</p>
          <input type="text" id="company_name" name="company_name" placeholder="사업체 명을 입력해 주세요"
            v-on:keydown.enter.prevent />
        </div>
        <div class="inputWrap">
          <p>사업자 전화번호</p>
          <div class="check_wrap">
            <input type="tel" id="backoffice_tel" name="backoffice_tel" placeholder="사업자 전화번호를 입력해 주세요. (- 포함)"
              @keyup="keypressBackofficeTel" @keydown="keypressBackofficeTel" />
            <span class="warning-text blind">형식에 맞지 않습니다.</span>
          </div>
        </div>
        <div class="inputWrap email">
          <p>사업자 이메일</p>
          <div>
            <input type="email" id="backoffice_email" name="backoffice_email" placeholder="사업자 이메일을 입력해 주세요"
              v-on:keydown.enter.prevent />
            <input @click="sendMail" type="button" id="btn-certification" value="인증번호 발송">
          </div>
        </div>
        <div class="inputWrap email">
          <p>사업자 이메일 확인</p>
          <div>
            <input type="text" id="auth_code" name="auth_code" placeholder="인증 번호를 입력하세요" />
            <input type="button" id="btn-check-certification" value="인증번호 확인">
          </div>
        </div>
        <div class="inputWrap location">
          <p>사업장 위치</p>
          <div class="input-location">
            <div>
              <input type="text" v-model="zipcode" id="zipcode" name="zipcode" placeholder="우편번호" readonly />
              <input id="find-zipcode" @click="execDaumPostcode" type="button" value="우편번호 찾기" />
            </div>

            <input type="text" v-model="roadname_address" id="roadname_address" name="roadname_address"
              placeholder="도로명주소" readonly /> <br />
            <input type="text" v-model="number_address" id="number_address" name="number_address" placeholder="지번주소"
              readonly /> <br />
            <input type="text" v-model="detail_address" id="detail_address" name="detail_address" placeholder="상세주소"
              v-on:keydown.enter.prevent />
          </div>
          <!-- END input-location -->
        </div>
        <!-- END inputWrap location  -->

        <div class="inputWrap">
          <p>사업체 태그</p>
          <div class="hashTag_area">
            <div class="hashTag-group">
              <input type="hidden" value="" name="backoffice_tag" id="real-input-tag" v-on:keydown.enter.prevent />
            </div>
            <input type="text" id="backoffice_tag" placeholder="사업체의 태그를 입력해 주세요 (최대 10글자)" maxlength=10
              v-on:keydown.enter.prevent />
            <ul id="tag-list">
            </ul>
          </div>
        </div>

        <div class="inputWrap info">
          <p>사업체 소개</p>
          <div class="check_wrap">
            <textarea id="backoffice_info" name="backoffice_info" placeholder="공간 소개를 입력해 주세요"></textarea>
            <div class="b_info_txt_length_wrap">
              <span class="b_info_txt_length">0</span>
              <span>&nbsp;/ 500</span>
            </div>
          </div>
        </div>

        <div class="inputWrap backoffice_type">
          <p>공간 타입</p>
          <div class="option-group-column">
            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="type_checkbox_desk" class="checkbox" v-model="backoffice_type" value="desk"
                  readonly />
                <label>데스크</label>
              </div>
              <!-- END option-item -->
              <div class="option-item">
                <input type="checkbox" id="type_checkbox_meeting_room" class="checkbox" v-model="backoffice_type"
                  value="meeting_room" readonly />
                <label>회의실</label>
              </div>
              <!-- END option-item -->
              <div class="option-item">
                <input type="checkbox" id="type_checkbox_office" class="checkbox" v-model="backoffice_type"
                  value="office" readonly />
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
          <div class="option-group-column">
            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="chair-desk" class="checkbox" v-model="backoffice_option" value="chair-desk"
                  readonly /> <label>의자/테이블</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="internet-wifi" class="checkbox" v-model="backoffice_option"
                  value="internet-wifi" /> <label>인터넷/Wi-Fi</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="restroom" class="checkbox" v-model="backoffice_option" value="restroom" />
                <label>내부 화장실</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="no-smoking" class="checkbox" v-model="backoffice_option"
                  value="no-smoking" />
                <label>금연</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="smoking-room" class="checkbox" v-model="backoffice_option"
                  value="smoking-room" /> <label>흡연실</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="terrace-rooftop" class="checkbox" v-model="backoffice_option"
                  value="terrace-rooftop" /> <label>테라스/루프탑</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="tv-projector" class="checkbox" v-model="backoffice_option"
                  value="tv-projector" /> <label>TV/프로젝터</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="whiteboard" class="checkbox" v-model="backoffice_option"
                  value="whiteboard" />
                <label>화이트보드</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="sound-microphone" class="checkbox" v-model="backoffice_option"
                  value="sound-microphone" /> <label>음향/마이크</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="parking" class="checkbox" v-model="backoffice_option" value="parking" />
                <label>주차</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="pc-laptop" class="checkbox" v-model="backoffice_option" value="pc-laptop" />
                <label>PC/노트북</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="printer" class="checkbox" v-model="backoffice_option" value="printer" />
                <label>복사/인쇄기</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="lounge" class="checkbox" v-model="backoffice_option" value="lounge" />
                <label>공용 라운지</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="kitchen" class="checkbox" v-model="backoffice_option" value="kitchen" />
                <label>공용 주방</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="water-purifier" class="checkbox" v-model="backoffice_option"
                  value="water-purifier" /> <label>정수기</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="can-food" class="checkbox" v-model="backoffice_option" value="can-food" />
                <label>음식물 반입 가능</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="can-drink" class="checkbox" v-model="backoffice_option" value="can-drink" />
                <label>주류 반입 가능</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="air-conditioner" class="checkbox" v-model="backoffice_option"
                  value="air-conditioner" /> <label>에어컨</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="fitting-room" class="checkbox" v-model="backoffice_option"
                  value="fitting-room" /> <label>탈의실</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="shower" class="checkbox" v-model="backoffice_option" value="shower" />
                <label>샤워시설</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="body-mirror" class="checkbox" v-model="backoffice_option"
                  value="body-mirror" />
                <label>전신거울</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="door-lock" class="checkbox" v-model="backoffice_option" value="door-lock" />
                <label>도어락</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="outlet-multitap" class="checkbox" v-model="backoffice_option"
                  value="outlet-multitap" /> <label>콘센트/멀티탭</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="personal-locker" class="checkbox" v-model="backoffice_option"
                  value="personal-locker" /> <label>개인락커</label>
              </div>
            </div>
            <!-- END option-group row -->
            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="fax" class="checkbox" v-model="backoffice_option" value="fax" />
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
          <div class="option-group-column">
            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="public-parking" class="checkbox" v-model="backoffice_around"
                  value="public-parking" /> <label>공영주차장</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="paid-parking" class="checkbox" v-model="backoffice_around"
                  value="paid-parking" /> <label>유료주차장</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="pharmacy" class="checkbox" v-model="backoffice_around" value="pharmacy" />
                <label>약국</label>
              </div>
            </div>
            <!-- END option-group row -->

            <div class="option-group-row">
              <div class="option-item">
                <input type="checkbox" id="hospital" class="checkbox" v-model="backoffice_around" value="hospital" />
                <label>병원</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="convenience-store" class="checkbox" v-model="backoffice_around"
                  value="convenience-store" /> <label>편의점</label>
              </div>

              <div class="option-item">
                <input type="checkbox" id="cafe" class="checkbox" v-model="backoffice_around" value="cafe" />
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

          <div class="custom-table">
            <div class="custom-table-heading">
              <div class="table-head-cell">
                <p>요일</p>
              </div>
              <div class="table-head-cell">
                <p>오픈 시간</p>
              </div>
              <div class="table-head-cell">
                <p>마감 시간</p>
              </div>
              <div class="table-head-cell">
                <p>휴무일 체크</p>
              </div>
            </div>
            <!-- END custom table heading -->

            <div class="custom-table-body">
              <div class="table-body-row">
                <div class="table-body-cell">일</div>
                <div class="table-body-cell">
                  <!-- <input type="text" id="sun_stime" class="time-picker" name="sun_stime" readonly /> -->
                  <Datepicker v-model="sunStime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="sun_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <!-- <input type="text" id="sun_etime" class="time-picker" name="sun_etime" readonly /> -->
                  <Datepicker v-model="sunEtime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="sun_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="sun_dayoff" class="checkbox" name="sun_dayoff" v-model="sun_dayoff"
                    true-value="T" false-value="F" />
                </div>
              </div>
              <!-- END table body row -->

              <div class="table-body-row">
                <div class="table-body-cell">월</div>
                <div class="table-body-cell">
                  <!-- <input type="text" id="mon_stime" class="time-picker" name="mon_stime" readonly /> -->
                  <Datepicker v-model="monStime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="mon_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <Datepicker v-model="monEtime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="mon_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="mon_dayoff" class="checkbox" name="mon_dayoff" v-model="mon_dayoff"
                    true-value="T" false-value="F" />
                </div>
              </div>
              <!-- END table body row -->

              <div class="table-body-row">
                <div class="table-body-cell">화</div>
                <div class="table-body-cell">
                  <Datepicker v-model="tueStime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="tue_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <Datepicker v-model="tueEtime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="tue_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="tue_dayoff" class="checkbox" name="tue_dayoff" v-model="tue_dayoff"
                    true-value="T" false-value="F" />
                </div>
              </div>
              <!-- END table body row -->

              <div class="table-body-row">
                <div class="table-body-cell">수</div>
                <div class="table-body-cell">
                  <Datepicker v-model="wedStime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="wed_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <Datepicker v-model="wedEtime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="wed_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="wed_dayoff" class="checkbox" name="wed_dayoff" v-model="wed_dayoff"
                    true-value="T" false-value="F" />
                </div>
              </div>
              <!-- END table body row -->

              <div class="table-body-row">
                <div class="table-body-cell">목</div>
                <div class="table-body-cell">
                  <Datepicker v-model="thuStime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="thu_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <Datepicker v-model="thuEtime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="thu_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="thu_dayoff" class="checkbox" name="thu_dayoff" v-model="thu_dayoff"
                    true-value="T" false-value="F" />
                </div>
              </div>
              <!-- END table body row -->

              <div class="table-body-row">
                <div class="table-body-cell">금</div>
                <div class="table-body-cell">
                  <Datepicker v-model="friStime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="fri_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <Datepicker v-model="friEtime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="fri_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="fri_dayoff" class="checkbox" name="fri_dayoff" v-model="fri_dayoff"
                    true-value="T" false-value="F" />
                </div>
              </div>
              <!-- END table body row -->

              <div class="table-body-row">
                <div class="table-body-cell">토</div>
                <div class="table-body-cell">
                  <Datepicker v-model="satStime" id="sat_stime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="sat_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <Datepicker v-model="satEtime" id="sat_etime" time-picker :start-time="startTime" mode-height="160"
                    minutes-increment="60" minutes-grid-increment="60" placeholder="09:00"
                    :disabled="sat_dayoff === 'T'"></Datepicker>
                </div>
                <div class="table-body-cell">
                  <input type="checkbox" id="sat_dayoff" class="checkbox" name="sat_dayoff" v-model="sat_dayoff"
                    true-value="T" false-value="F" @change="disableTimepicker" />
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
            <input class="upload-name" value="" placeholder="첨부파일(.jpg/.jpeg/.png/.jfif)" />
            <label for="multipartFile_room">파일찾기</label>
            <input type="file" id="multipartFile_room" @change="uploadImage" name="multipartFile_room"
              accept=".jpg, .jpeg, .png, .jfif" multiple="multiple" />
          </div>
          <input type="file" id="multipartFile_host" name="multipartFile_host" style="display: none;" />
        </div>
        <!-- END inputWrap image -->

        <div class="submit">
          <input @click="submit" type="button" id="submit" class="submit-application" value="호스트 신청하기">
          <input type="submit" id="real-submit" class="submit-application" value="호스트 신청하기" style="display:none;">
        </div>
      </div>
      <!-- </form> -->
    </div>
    <!-- END applyWrap -->
  </section>
  <!-- END bodyWrap -->
</template>

<style lang="scss" scoped>
@import '@/assets/CSS/backoffice/host-insert.scss';
@import '@/assets/CSS/backoffice/custom-timepicker.css';

.mx-input-wrapper {
  width: 100px;
}
</style>

<script>
import $ from 'jquery';
import '@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss';
import { ref } from 'vue';
import '@/assets/JS/backoffice/host_insert';
import axios from 'axios';

export default {
  name: 'InsertView',

  setup() {
    const time = ref();
    const startTime = ref({
      hours: 9,
      minutes: 0,
    });

    const sunStime = ref();
    const sunEtime = ref();
    const monStime = ref();
    const monEtime = ref();
    const tueStime = ref();
    const tueEtime = ref();
    const wedStime = ref();
    const wedEtime = ref();
    const thuStime = ref();
    const thuEtime = ref();
    const friStime = ref();
    const friEtime = ref();
    const satStime = ref();
    const satEtime = ref();

    return {
      time,
      startTime,
      sunStime,
      sunEtime,
      monStime,
      monEtime,
      tueStime,
      tueEtime,
      wedStime,
      wedEtime,
      thuStime,
      thuEtime,
      friStime,
      friEtime,
      satStime,
      satEtime,
    };
  },

  data() {
    return {
      backoffice_id: '',
      backoffice_email: $('#backoffice_email').val(),
      mail_flag: true,
      backoffice_type: [],
      backoffice_option: [],
      backoffice_around: [],

      zipcode: '',
      roadname: '',
      roadname_address: '',
      number_address: '',
      detail_address: '',

      sun_dayoff: 'F',
      mon_dayoff: 'F',
      tue_dayoff: 'F',
      wed_dayoff: 'F',
      thu_dayoff: 'F',
      fri_dayoff: 'F',
      sat_dayoff: 'F',

      img_name: '',
    };
  },

  methods: {

    // 사업자 번호 형식 체크
    keypressBackofficeId() {
      /* 사업자등록번호 */
      const regExp = /^([0-9]{3})-?([0-9]{2})-?([0-9]{5})$/;
      if (!regExp.test($('#backoffice_id').val().trim())) {
        $('.warning-text:eq(0)').removeClass('blind');
      } else {
        $('.warning-text:eq(0)').addClass('blind');
      }
    },

    // 전화번호 형식 확인
    keypressBackofficeTel() {
      /* 유전 전화 + 휴대폰 번호 */
      const telExp = /^(0[2-8][0-5]?|01[01346-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;

      /* 대표전화번호 1588 등 */
      const telExp2 = /^(1544|1566|1577|1588|1644|1688)-?([0-9]{4})$/;

      if (!telExp.test($('#backoffice_tel').val().trim()) && !telExp2.test($('#backoffice_tel').val().trim())) {
        $('.warning-text:eq(1)').removeClass('blind');
      } else {
        $('.warning-text:eq(1)').addClass('blind');
      }
    },

    // 이메일 확인
    sendMail() {
      if (!$('#btn-certification').prop('check')) {
        if ($('#backoffice_email').val().trim().length > 0) {
          const email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

          if (email.test($('#backoffice_email').val().trim())) {
            if (this.mail_flag) {
              // 로딩 화면
              $('.popup-background:eq(1)').removeClass('blind');
              $('#spinner-section').removeClass('blind');
              this.mail_flag = false;

              console.log($('#backoffice_email').val().trim(), this.mail_flag);

              const params = new URLSearchParams();
              params.append('backoffice_email', 'lifebook0809@gmail.com');

              axios.get('http://localhost:8800/backoffice/auth', params)
                .then((res) => {
                  this.mail_flag = true;
                  console.log('success');

                  // 로딩 화면 닫기
                  $('.popup-background:eq(1)').addClass('blind');
                  $('#spinner-section').addClass('blind');

                  // 이메일 중복 성공
                  if (res.data.result === '1') {
                    $('#btn-certification').prop('check', true);
                    this.timer();
                    $('#backoffice_email').attr('readonly', true);
                    $('#backoffice_email').addClass('readOnly');

                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').html('이메일로 인증번호를 발송하였습니다.<br> 2분 내로 인증번호 인증을 완료해주세요.<br> 2분 초과 시 이메일 재인증이 필요합니다!');
                  } else if (res.data.result === '3') {
                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').html('해당 이메일은 인증번호 발송 후<br> 2분이 되지 않았습니다.<br> 잠시만 기다려주세요!');
                  } else {
                    $('.popup-background:eq(1)').removeClass('blind');
                    $('#common-alert-popup').removeClass('blind');
                    $('.common-alert-txt').text('이미 존재하는 이메일입니다.');
                  }
                })
                .catch(() => {
                  this.mail_flag = true;

                  // 로딩 화면 닫기
                  $('.popup-background:eq(1)').addClass('blind');
                  $('#spinner-section').addClass('blind');

                  $('.popup-background:eq(1)').removeClass('blind');
                  $('#common-alert-popup').removeClass('blind');
                  $('.common-alert-txt').text('오류 발생으로 인해 처리에 실패하였습니다.');
                });
            }
          }
        } else {
          $('#backoffice_email').addClass('null-input-border');
        }
      }
    },

    timer(check) {
      let minute = 1;
      let seconds = 60;

      if (check === 'true') {
        clearInterval(this.time);
        $('#btn-certification').val('인증 완료');
        return;
      }

      this.time = setInterval(() => {
        seconds -= 1;

        // eslint-disable-next-line no-useless-concat
        if (seconds <= 9) $('#btn-certification').val(`0${minute} : ` + `0${seconds}`);
        else $('#btn-certification').val(`0${minute} : ${seconds}`);

        if (seconds === 0) {
          if (minute !== 0) {
            minute = 1 - minute;
            seconds = 60;
          } else {
            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').html('이메일 인증 시간을 초과했습니다.<br>다시 시도해주세요.');

            $('#btn-certification').prop('check', false);
            $('#btn-certification').val('이메일 입력');
            $('#backoffice_email').val('');
            $('#backoffice_email').attr('readonly', false);
            $('#backoffice_email').removeClass('readOnly');

            $('#btn-check-certification').prop('check', false);
            $('#btn-check-certification').val('인증번호 확인');
            $('#auth_code').val('');
            $('#auth_code').attr('readonly', false);
            $('#auth_code').removeClass('readOnly');

            clearInterval(this.time);
          }
        }
      }, 1000);
    },

    clickSunDayoff(event) {
      console.log(event.target.value);
      if (this.sun_dayoff === false) {
        console.log('1 :', this.sun_dayoff);
        this.sun_dayoff = true;
        console.log('2 :', this.sun_dayoff);
      } else {
        this.sun_dayoff = false;
      }

      console.log(this.sun_dayoff);
    },

    disableTimepicker(event) {
      console.log(event.target.checked);
      const { checked } = event.target;

      if (checked === true) {
        $('#sat_stime').attr('disabled', true);
        $('#sat_etime').find('.dp__pointer').attr('disabled', true);
      }
    },

    // ************
    // DAUM ZIPCODE
    // ************
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          const roadAddr = data.roadAddress; // 도로명 주소 변수
          const auto_roadAddr = data.autoRoadAddress; // 도로명 주소 변수
          let extraRoadAddr = ''; // 참고 항목 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraRoadAddr += (extraRoadAddr !== '' ? `, ${data.buildingName}` : data.buildingName);
          }

          console.log(roadAddr);

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          $('#zipcode').val(data.zonecode);

          if (roadAddr.length > 0) { $('#roadname_address').val(roadAddr); } else { $('#roadname_address').val(auto_roadAddr); }

          $('#number_address').val(data.jibunAddress);
        },
      }).open();
    },

    // **************
    // TAG
    // **************

    // 운영 시간 formatter
    timeFormatter: (time) => {
      if (time === undefined) {
        return '09:00';
      }

      let h = time.hours;
      const m = time.minutes;

      let t = '';
      if (h < 10) {
        h = `0${h}`;
      }

      t = `${h}:${m}0`;

      return t;
    },

    // 사진 업로드
    uploadImage() {
      this.img_name = '';
      const { length } = $('#multipartFile_room').get(0).files;

      if (length < 11) {
        for (let i = 0; i < length; i++) {
          const { type } = $('#multipartFile_room').get(0).files[i];
          if (type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png') {
            this.img_name += $('#multipartFile_room').get(0).files[i].name;
            if (i !== length - 1) {
              this.img_name += ' / ';
            }
          } else {
            // file 선택 값 초기화를 위한 코드 (타입을 바꿨다 돌아옴)
            $('#multipartFile_room').attr('type', 'radio');
            $('#multipartFile_room').attr('type', 'file');

            $('.popup-background:eq(1)').removeClass('blind');
            $('#common-alert-popup').removeClass('blind');
            $('.common-alert-txt').text('jpg, jpeg, png 확장자만 선택가능합니다.');
          }
        }

        $('.upload-name').val(this.img_name);
      } else {
        // file 선택 값 초기화를 위한 코드 (타입을 바꿨다 돌아옴)
        $('#multipartFile_room').attr('type', 'radio');
        $('#multipartFile_room').attr('type', 'file');

        $('.popup-background:eq(1)').removeClass('blind');
        $('#common-alert-popup').removeClass('blind');
        $('.common-alert-txt').text('최대 10개의 이미지 선택이 가능합니다.');
      }
    },

    // ******************
    // 신청
    // ******************
    submit() {
      const sun_stime = this.timeFormatter(this.sunStime);
      const sun_etime = this.timeFormatter(this.sunEtime);
      const mon_stime = this.timeFormatter(this.monStime);
      const mon_etime = this.timeFormatter(this.monEtime);
      const tue_stime = this.timeFormatter(this.tueStime);
      const tue_etime = this.timeFormatter(this.tueEtime);
      const wed_stime = this.timeFormatter(this.wedStime);
      const wed_etime = this.timeFormatter(this.wedEtime);
      const thu_stime = this.timeFormatter(this.thuStime);
      const thu_etime = this.timeFormatter(this.thuEtime);
      const fri_stime = this.timeFormatter(this.friStime);
      const fri_etime = this.timeFormatter(this.friEtime);
      const sat_stime = this.timeFormatter(this.satStime);
      const sat_etime = this.timeFormatter(this.satEtime);

      console.log(sun_stime, sun_etime, this.sun_dayoff);
      console.log(mon_stime, mon_etime, this.mon_dayoff);
      console.log(tue_stime, tue_etime, this.tue_dayoff);
      console.log(wed_stime, wed_etime, this.wed_dayoff);
      console.log(thu_stime, thu_etime, this.thu_dayoff);
      console.log(fri_stime, fri_etime, this.fri_dayoff);
      console.log(sat_stime, sat_etime, this.sat_dayoff);

      console.log(this.backoffice_type);
      console.log(this.backoffice_option);
      console.log(this.backoffice_around);

      console.log(this.img_name);
    },
  },
};
</script>
