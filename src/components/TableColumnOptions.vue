<template>
    <div class="_fc_table_opt">
        <el-table
            :data="columnValue"
            border
            size="small"
            style="width: 100%">
          
            <el-table-column label="label">
                <template #default="scope">
                    <el-input size="small" :modelValue="scope.row.label || ''"
                                @Update:modelValue="(n)=>(scope.row.label = n, onInput(scope.row))"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="prop">
                <template #default="scope">
                    <el-input size="small" :modelValue="scope.row.prop || ''"
                                @Update:modelValue="(n)=>(scope.row.prop = n, onInput(scope.row))"></el-input>
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
            columnValue : this.modelValue === undefined? [] : this.modelValue
        };
    },
    created() {
        if (!Array.isArray(this.columnValue)) {
            this.$emit('input', []);
        }
    },
    methods: {
        onInput(item) {
            if (item.label !== undefined && item.prop !== undefined) {
                this.input();
            }
        },
        input() {
            this.$emit('update:modelValue', this.columnValue);
        },
        add() {
            
            this.columnValue.push({label: '', prop:'', slot: false});
        },
        del(idx) {
            this.columnValue.splice(idx, 1);
            this.input(this.columnValue);
        }
    }
});
</script>

<style scoped>
._fc_table_opt {
    width: 100%;
}
</style>
