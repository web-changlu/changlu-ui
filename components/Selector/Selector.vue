<script setup lang="ts">
import { PropType, ref } from 'vue'
import selectorInput from './input.vue'
import selectorMenu from './Menu.vue'

const props = defineProps({
        placeholder:{
            type: String,
            required: false,
            default: '请选择选项'
        },
        dataMenu: {
            type: Array as PropType<MenuItem[]>,
            required: true,
            default: () => [
                { 
                    id: 1,
                    value: 1,
                    label: '选项一' 
                }
            ]
        }
    });
    const vFocus = {
        mounted(el: HTMLElement) {
            // 获取input，并调用其focus()方法
            // el.querySelector('input').focus()
            // console.log(el);
            const cLabel = <HTMLElement>el.querySelector('label'),
                cInput = <HTMLInputElement>el.querySelector('.input'),
                cSpan = <HTMLSpanElement>el.querySelector('span'),
                cMenu = <HTMLElement>el.querySelector('.menu');

            cInput.addEventListener('focus', ()=>{
                cLabel.style.display = 'none';
                cSpan.className = 'iconfont icon-iconsearch-copy';
                cMenu.style.display = 'block';
                // if(cInput.value.trim().length === 0){
                //     setTimeout(() => {
                //         cMenu.style.display = 'block';
                //     }, 200);
                // }
                
            }, false)

            cInput.addEventListener('blur', ()=> { 
                cSpan.className = 'iconfont icon-down';
                setTimeout(() => {
                    if(cInput.value.trim().length === 0){
                        cLabel.style.display = 'block';
                    }
                    cMenu.style.display = 'none';
                }, 200);
            }, false)
        },
    }
    let inputValue = ref<string>(''), searchValue =  ref<string>('');
    // let inputValue:string = '', searchValue:string = '';
    const emit = defineEmits(['selected-item']);
    const setSelectItem = (item: MenuItem) =>{
        // console.log(item);
        inputValue.value = item.label;
        emit('selected-item', item)
    }
    const setSearchValue = (e: HTMLInputElement)=> {
        searchValue.value = e.value;
    }
    
</script>

<template>
    <div class="selector" v-focus="'focus'">
        <selectorInput :placeholder="placeholder" :text="inputValue"  @searchMenu="setSearchValue" />
        <selectorMenu :menu-data="dataMenu" :searchText="searchValue" @getSelectItem="setSelectItem" />
    </div>
</template>

<script lang="ts">

export default {
   name: 'ClSelector'
}

</script>

<style lang="scss" scoped>
.selector{
    position: relative;
    max-width: 600px;
}
</style>