<template>
  <div>
    <h3 class="subTitle">Test</h3>
    <div class="table" style="margin-left: 50px; margin-right: 50px;">
      <table>
        <caption class="sr-only">dlfjld</caption>
        <colgroup></colgroup>
        <tbody>
          <tr>
            <th scope="row" class="required">
              <span>타이틀</span>
            </th>
            <td>
              <input type="text" class="form-control" placeholder="충전소ID를 입력해 주세요.">
            </td>
            <th scope="row">
              <span>타이틀</span>
            </th>
            <td>
              <v-select
              :items="items"
              class="selectBox"
              label="전체"
              dense
              solo />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button @click="clickBtn">시작</button>
    <p ref="pEl">dfdfdsf</p>

    <!-- CheckBox -->
    <check-box-test
      :checkbox="checkboxLists"
      @checkboxToggle="toggleCheckbox"/>
    <!--// CheckBox -->

    <!-- RadioBox -->
    <radio-box 
      :radiobox="radioboxLists" />
    <!--// RadioBox -->
    <div>
      <p>isRead-- {{ isRead }}</p>
      <div>
        <p>
          <input type="text" value="value" class="form-control a" readonly>
          <button class="btn btn-default readOnly" @click="btnTest">Click</button>
        </p>
        <p>
          <input type="text" value="value" class="form-control n" readonly>
          <button class="btn btn-default readOnly" @click="btnTest">Click</button>
        </p>
        <p>
          <input type="text" value="value" class="form-control c" readonly>
          <button class="btn btn-default readOnly" @click="btnTest">Click</button>
        </p>
      </div>
    </div>
    <!-- Grid -->
    <h2>Basic DataGrid</h2>
    <!-- <div>
      <DataGrid :data="data" style="height:250px">
          <GridColumn field="itemid" title="Item ID"></GridColumn>
          <GridColumn field="name" title="Name"></GridColumn>
          <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
          <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
          <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
          <GridColumn field="status" title="Status" align="center"></GridColumn>
      </DataGrid>
    </div> -->
    <!-- Grid -->
    {{currentCheckbox}}
  </div>
</template>

<script>
import CheckBoxTest from '@/components/CheckBoxTest'
import RadioBox from '@/components/RadioBoxTest'

export default {
  components: {
    CheckBoxTest,
    RadioBox
  },
  data () {
    return {
      currentCheckbox: 1,
      active: true,
      checkboxLists:[
        {label: 'checkbox-1'},
        {label: 'checkbox-2'},
        {label: 'checkbox-3'}
      ],
      radioboxLists:[
        {label: 'radiobox-1'},
        {label: 'radiobox-2'},
        {label: 'radiobox-3'}
      ],
      isRead: true
      // data: [ ],

    }
  },
  methods: {
    toggleCheckbox ({id, checked}) {
      const index = this.checkboxLists.findIndex( checkbox => {
        return checkbox.id === id
      })
      // console.log(idx);
      this.checkboxLists[index].checked = checked
    },
    clickBtn () {
      // this.$refs.pEl.classList.toggle("vue")
      this.$refs.pEl.innerText = "vue"
      // this.active = !this.active
    },
    btnTest(e) {
      e.target.previousSibling.readOnly = false
      // this.isRead = !this.isRead
      e.target.closest().readOnly = false
    }
  },


//  toggleCheckbox({id,checked}){
//       const index = this.todos.findIndex(todo=>{
//         return todo.id === id;
//       });
//       this.todos[index].checked = checked;
//     },


  // created() {
  //   this.data = [
  //       {"code":"FI-SW-01","name":"Koi","unitcost":10.00,"status":"P","listprice":36.50,"attr":"Large","itemid":"EST-1"},
  //       {"code":"K9-DL-01","name":"Dalmation","unitcost":12.00,"status":"P","listprice":18.50,"attr":"Spotted Adult Female","itemid":"EST-10"},
  //       {"code":"RP-SN-01","name":"Rattlesnake","unitcost":12.00,"status":"P","listprice":38.50,"attr":"Venomless","itemid":"EST-11"},
  //       {"code":"RP-SN-01","name":"Rattlesnake","unitcost":12.00,"status":"P","listprice":26.50,"attr":"Rattleless","itemid":"EST-12"},
  //       {"code":"RP-LI-02","name":"Iguana","unitcost":12.00,"status":"P","listprice":35.50,"attr":"Green Adult","itemid":"EST-13"},
  //       {"code":"FL-DSH-01","name":"Manx","unitcost":12.00,"status":"P","listprice":158.50,"attr":"Tailless","itemid":"EST-14"},
  //       {"code":"FL-DSH-01","name":"Manx","unitcost":12.00,"status":"P","listprice":83.50,"attr":"With tail","itemid":"EST-15"},
  //       {"code":"FL-DLH-02","name":"Persian","unitcost":12.00,"status":"P","listprice":23.50,"attr":"Adult Female","itemid":"EST-16"},
  //       {"code":"FL-DLH-02","name":"Persian","unitcost":12.00,"status":"P","listprice":89.50,"attr":"Adult Male","itemid":"EST-17"},
  //       {"code":"AV-CB-01","name":"Amazon Parrot","unitcost":92.00,"status":"P","listprice":63.50,"attr":"Adult Male","itemid":"EST-18"}
  //   ];
  // },

  mounted () {
  }
}
</script>
