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
            <el-table-column label="响应函数">
                <template #default="scope">
                    <el-input size="small" :modelValue="scope.row.function || ''"
                                @Update:modelValue="(n)=>(scope.row.function = n, onInput(scope.row))"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="权限">
                <template #default="scope">
                    <el-input size="small" :modelValue="scope.row.hasPermi || ''"
                                @Update:modelValue="(n)=>(scope.row.hasPermi = n, onInput(scope.row))"></el-input>
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
    name: 'TableMenuOptions',
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
            this.modelValue.push({label: '', function:'', hasPermi: ''});
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
