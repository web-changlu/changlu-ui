<script setup lang="ts">
import { onMounted, PropType, reactive, watch } from 'vue'
import NoDataTip from './NoDataTip.vue';
    const props = defineProps({
        searchText:{
            type: String || Number,
            default: ''
        },
        menuData: {
            type: Array as PropType<MenuItem[]>,
            default: () => [
                { 
                    id: 1,
                    value: 1,
                    label: '选项一' 
                }
            ]
        }
         
    }) 
    const srearchDataList: MenuItem[] = reactive<MenuItem[]>([]);
    const emit = defineEmits(['get-select-item']);
    const setItemValue = (item: MenuItem)=> {
        // console.log(item);
        emit('get-select-item', item);
    }
    const filterData = (data)=> {
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
    watch(()=>props.searchText, (value:string|number) => {
        filterData(value)
    })
</script>

<template>
    <div class="menu">
        <template v-if="srearchDataList.length > 0">
            <div class="menu-item" v-for="item of srearchDataList" :key="item.id" @click="setItemValue(item)">
                {{item.label}}
            </div>
        </template>
         <NoDataTip v-else />
    </div>
</template>

<script lang="ts">

export default {
   name: 'selectorMenu'
}

</script>

<style lang="scss" scoped>

.menu{
    display: none;
    position: absolute;
    left: 0;
    top: 35px;
    width: 100%;
    background-color: $main-background-color;
    box-shadow: 0 0 10px #ddd;
    cursor: pointer;
    border-radius: $inline-radius;
    .menu-item{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        padding: 5px 0;
        margin: 3px 0;
        @include transition(background-color .2s linear);
        &:hover{
            background-color: $selected-background-color;
        }
    }
}

</style>