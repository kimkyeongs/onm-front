<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        class="date-picker"
        readonly
        label="날짜/선택"
        solo
        v-bind="attrs"
        v-on="on"></v-text-field>
    </template>
    <v-date-picker
      v-model="date"      
      no-title
      :weekday-format="getDay"
      :month-format="getMonth"
      :title-date-format="getMonth"
      :header-date-format="getHeaderTitleMonth"
      scrollable>
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="modal = false">
        취소
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.dialog.save(date)">
        확인
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
  methods: {
			getDay(date) {
				const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
				let i = new Date(date).getDay(date);
				return daysOfWeek[i];
			},
			getMonth(date) {
				const monthName = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
				let i = new Date(date).getMonth(date);
				return monthName[i];
			}
		},
}
</script>

<style>

</style>