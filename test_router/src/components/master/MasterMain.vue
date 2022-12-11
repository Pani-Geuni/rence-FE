<!-- eslint-disable max-len -->
<template>

  <div class="tableWrap">
    <section class="host-apply-list">
      <div class="custom-table">
        <div class="ct-header">
          <div class="ct-header-cell">신청 일자</div>
          <div class="ct-header-cell">상호명</div>
          <div class="ct-header-cell">사업자 이름</div>
          <div class="ct-header-cell">사업자 번호</div>
          <div class="ct-header-cell">사업체 이름</div>
          <div class="ct-header-cell">사업자 전화번호</div>
          <div class="ct-header-cell">사업자 이메일</div>
          <div class="ct-header-cell">수락/거절</div>
        </div>
        <!-- END ct-header -->

        <div class="ct-body">
          <div v-for="vo in vos" :key="vo" class="ct-body-row master" th:attr="idx=${vo.backoffice_no}">
            <div id="backoffice_no" class="ct-body-cell apply blind">{{ vo.backoffice_no }}</div>
            <div id="apply_date" class="ct-body-cell apply">{{ vo.apply_date }}</div>
            <div id="backoffice_name" class="ct-body-cell apply">{{ vo.backoffice_name }}</div>
            <div id="owner_name" class="ct-body-cell apply">{{ vo.owner_name }}</div>
            <div id="backoffice_id" class="ct-body-cell apply">{{ vo.backoffice_id }}</div>
            <div id="company_name" class="ct-body-cell apply">{{ vo.company_name }}</div>
            <div id="backoffice_tel" class="ct-body-cell apply">{{ vo.backoffice_tel }}</div>
            <div id="backoffice_email" class="ct-body-cell apply">{{ vo.backoffice_email }}</div>
            <div class="ct-body-cell">
              <div class="btn-group">
                <button id="btn-grant-host">수락</button>
                <button id="btn-refuse-host">거절</button>
              </div>
              <!-- END btn-group -->
            </div>
          </div>
          <!-- END ct-body-row -->
        </div>
        <!-- END ct-body -->
      </div>
      <!-- END custom-table -->
    </section>
  </div>

</template>

<style scoped>

</style>

<script>
import axios from 'axios';

export default {

  name: 'MainView',
  data() {
    return {
      // vos: []
      vos: [
        {
          backoffice_no: 'B1001',
          apply_date: '2022-12-10',
          backoffice_name: '테스트',
          owner_name: '테스터',
          backoffice_id: '1234567890',
          company_name: '테스트 이름',
          backoffice_tel: '010-1234-1234',
          backoffice_email: 'test@test.com',
        },
        {
          backoffice_no: 'B1002',
          apply_date: '2022-12-10',
          backoffice_name: '테스트2',
          owner_name: '테스터2',
          backoffice_id: '123456789022',
          company_name: '테스트 이름2',
          backoffice_tel: '010-1234-5678',
          backoffice_email: 'test@test.com22',
        },
      ],
    };
  },

  methods: {
    getSelectAllApplyList() {
      const url = 'localhost:8800/master/main';

      axios.get(url).then((res) => {
        console.log(res.data.vos);
        this.vos = res.data.vos;
      });
    },
  },
};

</script>
