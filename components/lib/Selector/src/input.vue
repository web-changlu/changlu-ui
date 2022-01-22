<script setup lang="ts">
import { getCurrentInstance , ref} from 'vue';
    const instance = getCurrentInstance();
    const props = defineProps({
        placeholder:{
            type: String,
            required: false,
            default: '请选择'
        },
        text: {
            type: String,
            default:''
        }
    });
    const emit = defineEmits(['search-menu']);
    const search = (e: Event)=> {
        emit('search-menu', e.target)
    }
    
    // const _input = instance.refs.searchInput;
    const setValue = (e: FocusEvent, vText: string)=> {
        if((instance?.refs.searchInput as HTMLInputElement).value.length > 0){
            (instance?.refs.searchInput as HTMLInputElement).value = vText
        }
    }
</script>

<template>
    <div class="cl-selector-input">
        <label >{{placeholder}}</label>
        <input type="text" name="" id="" class="input" :value="text" @input="search"
        @focus="search"
        @blur="setValue($event, text)"
        ref="searchInput"
        />
        <span class="iconfont icon-down"></span>
    </div>
</template>

<script lang="ts">
export default {
   name: 'selectorInput'
}

</script>
