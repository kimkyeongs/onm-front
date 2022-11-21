<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto">
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
      :header-date-format="getHeaderTitleMonth">
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="menu = false">
        취소
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="$refs.menu.save(date)">
        확인
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      // date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10), menu: false
    }
  },
  methods: {
		getDay(date) {
		  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']
			let i = new Date(date).getDay(date);
			return daysOfWeek[i];
		},
		getMonth(date) {
			const monthName = [
        '01월', 
        '02월', 
        '03월', 
        '04월', 
        '05월', 
        '06월', 
        '07월', 
        '08월', 
        '09월', 
        '10월', 
        '11월', 
        '12월'
      ];
			let i = new Date(date).getMonth(date);
			return monthName[i];
		},
    getHeaderTitleMonth(date) {
      const year = new Date(date).getFullYear(date)
      return year + '.' + this.getMonth(date)
      },
	},
}
</script>

<style>

</style>