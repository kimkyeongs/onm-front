<template>
  <div class="allMenu-wrap">
    <ul>
      <li
        v-for="menu in allMenuLists"
        :key="menu.idx">
        <dl>
          <dt>{{ menu.menuTitle }}</dt>
          <dd>
            <template
              v-if="menu.children">
              <div class="depth2">
                <ul>
                  <li
                    v-for="menu in menu.children"
                    :key="menu.idx">
                    <a href="#">{{ menu.menuTitle }}</a>
                    <template
                      v-if="menu.child">  
                      <div class="depth3">
                        <ul>
                          <li
                            v-for="(menu, idx) in menu.child"
                            :key="menu.idx"
                            :class="{'selected': isActive === idx }">
                            <a href="#">{{ menu }}</a>
                          </li>
                        </ul>
                      </div>
                    </template>
                  </li>
                </ul>
              </div>
            </template> 
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import AllMenu from '@/assets/js/allMenu'

export default {
  props: {
  },
  data() {
    return {
      isActive: 4,
      allMenuLists: AllMenu,
    }
  }
}
</script>

<style scoped>
.allMenu-wrap{
  border: 1px solid #d4dde0;
  background-color: #fff;
}
.allMenu-wrap > ul{
  display: flex;
}
.allMenu-wrap > ul > li{
  width: 12.5%;
  border-left: 1px solid #dcdcdc;
}
.allMenu-wrap > ul > li:first-child{
  border-left: none;
}
.allMenu-wrap > ul > li > dl > dt{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  height: 40px;
  background-color: #f47725;
}
.allMenu-wrap > ul > li .depth2{
  font-size: 14px;
  margin-top: 5px;
  /* padding: 5px 10px 20px 20px; */
}
.allMenu-wrap > ul > li .depth2 > ul > li{
   /* padding: 0 10px 0 20px; */
   text-indent: 20px;
}
.allMenu-wrap > ul > li .depth2 > ul > li > a{
  font-weight: 400;
  color: #333;
}
.allMenu-wrap > ul > li .depth2 > ul > li + li,
.allMenu-wrap > ul > li .depth3 > ul > li{
  margin-top: 10px;
}
.allMenu-wrap > ul > li .depth3{
  /* padding-left: 10px; */
  text-indent: 30px;
}
.allMenu-wrap > ul > li .depth3 > ul > li > a{
  font-weight: 300;
  color: #777;
  letter-spacing: -.8px;
}
.allMenu-wrap > ul > li .depth3 > ul > li.selected > a{
  display: block;
  color: #fff;
  background-color: #f47725;
}
</style>