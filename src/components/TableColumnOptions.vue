<template>
    <div class="_fc_table_opt">
        <el-table
            :data="modelValue"
            border
            size="small"
            style="width: 100%">
          
            <el-table-column label="label">
                <template #default="scope">
                    <el-input size="small" :modelValue="scope.row.label || ''"
                                @Update:modelValue="(n)=>(scope.row.label = n, onInput(scope.row))"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="value">
                <template #default="scope">
                    <el-input size="small" :modelValue="scope.row.value || ''"
                                @Update:modelValue="(n)=>(scope.row.value = n, onInput(scope.row))"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="slot">
                <template #default="scope">
                    <el-checkbox size="small" :modelValue="scope.row.slot || ''"
                                @Update:modelValue="(n)=>(scope.row.slot = n, onInput(scope.row))"></el-checkbox>
                </template>
            </el-table-column>
            <el-table-column min-width="50" align="center" fixed="right" :label="t('tableOptions.handle')">

                <template #default="scope">
                    <i class="fc-icon icon-delete" @click="del(scope.$index)"></i>
                </template>
            </el-table-column>
        </el-table>
        <el-button link type="primary" @click="add">
            <i class="fc-icon icon-add"></i> {{ t('tableOptions.add') }}
        </el-button>
    </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'TableColumnOptions',
    inheritAttrs: false,
    props: {
        modelValue: [Object, Array, String]
    },
    inject: ['designer'],
    data() {
        return {
           
            t: this.designer.setupState.t,
        };
    },
    created() {
        window.console.log(this.modelValue)
        if (!Array.isArray(this.modelValue)) {
            this.$emit('input', []);
        }
    },
    methods: {
        onInput(item) {
            if (item.label !== undefined && item.value !== undefined) {
                this.input();
            }
        },
        input() {
            this.$emit('update:modelValue', this.modelValue);
        },
        add() {
            
            this.modelValue.push({label: '', value:'', slot: false});
        },
        del(idx) {
            this.modelValue.splice(idx, 1);
            this.input(this.modelValue);
        }
    }
});
</script>

<style scoped>
._fc_table_opt {
    width: 100%;
}
</style>
