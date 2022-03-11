<script setup lang="ts">
import { computed, onMounted, reactive, ref, nextTick, PropType } from "vue";
const props = defineProps({
  data: {
    type: Array as PropType<NavItem[]>,
    default: () => [
      {
        id: "nav1",
        icon: "",
        text: "默认导航栏",
        href: '#',
        isCurrent: false
      },
    ],
  },
});
function simpleClone(data: any){
    let copy:ComponentMap | null =  {} ||null; 
    if(Array.isArray(data) ){
      copy =  [];
    }else{
      copy =  {};
    }
    
    for(let k in data){
      const v = data[k];
      if(v == undefined){
        continue;
      }else if(typeof v === 'object'){
        copy[k] = simpleClone(v);
      }else if(Array.isArray(v)){
        copy[k] = new Array(...v);
      }else {
        copy[k] = v;
      }
    }
    return copy;
  }
const listData = reactive (
   simpleClone(props.data));

const navClickHandle = (e: MouseEvent, item : NavItem) => {
  // const list = document.querySelectorAll('.nav-list-item');
  // list.forEach(dom => {
  //   dom.classList.remove('active');
  // })
  // e?.currentTarget.classList.add('active');
  // const ts = {
  //   nav01: '8%',
  //   nav02: '28%',
  //   nav03: '48%',
  //   nav04: '68%',
  //   nav05: '88%',
  // }
  // document.querySelectorAll('.indicator')[0].style.left = ts[item.id];
  listData.forEach((sub: NavItem) => {
    sub.isCurrent = false;
  })
  item.isCurrent = true
}
</script>

<template>
  <ul class="cl-mobilenav" >
    <li v-for="item in listData" :key="item.id" :class="item.isCurrent?'active':''" @click="navClickHandle($event,item)" class="nav-list-item"> 
      <a :href="item.href">
        <span class="iconfont" :class="item.icon"></span>
        <span class="mobilenav-text">{{item.text}}</span>
      </a>
    </li>
    <div class="indicator"></div>
  </ul>
</template>

<script lang="ts">
export default {
  name: "mobileNav",
};
</script>
