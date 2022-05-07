<script setup lang="ts">
import { onMounted, PropType, reactive, watch } from 'vue'
import NoDataTip from './NoDataTip.vue';
    const props = defineProps({
        searchText:{
            type: String || Number,
            default: ''
        },
        menuData: {
            type: Array as PropType<MENUITEM[]>,
            default: () => [
                { 
                    id: 'menu1',
                    value: 1,
                    label: '选项一' 
                }
            ]
        }
         
    }) 
    const srearchDataList: MENUITEM[] = reactive<MENUITEM[]>([]);
    const emit = defineEmits(['change']);
    const setItemValue = (item: MENUITEM)=> {
        // console.log(item);
        emit('change', item);
    }
    const filterData = (data: string)=> {
        srearchDataList.length = 0;
        props.menuData.forEach(item => {
            if(item.label.toLowerCase().includes(data.toLowerCase())){
                srearchDataList.push(item)
            }
        })
    }
    onMounted(()=> {
        srearchDataList.length = 0;
        props.menuData.forEach(item => {
            srearchDataList.push(item)
        })
    })
    watch(()=>props.searchText, (value:string) => {
        filterData(value)
    })
</script>

<template>
    <div class="cl-selector-menu">
        <template v-if="srearchDataList.length > 0">
            <div class="cl-selector-menu-item" v-for="item of srearchDataList" :key="item.id" @click="setItemValue(item)">
                {{item.label}}
            </div>
        </template>
         <NoDataTip v-else />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
   name: 'selectorMenu'
});

</script>
