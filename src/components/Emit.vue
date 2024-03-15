<template>
    <DragForm class="_fc-emit" :rule="rule" :option="option" :modelValue="formValue"
              @update:modelValue="onInput"></DragForm>
</template>

<script>
import {designerForm} from '../utils/form';
import {defineComponent} from 'vue';
import {deepCopy} from '@form-create/utils/lib/deepextend';

export default defineComponent({
    name: 'Emit',
    inject: ['designer'],
    props: {
        modelValue: Array,
        effect: String
    },
    components: {
        DragForm: designerForm.$form(),
    },
    watch: {},
    data() {
        const t = this.designer.setupState.t;
        
        return {
            formValue: {},
            t,
            option: {
                form: {
                    labelPosition: 'top',
                    size: 'small',
                    labelWidth: '90px'
                },
                submitBtn: false,
                appendValue: true,
                formData: {},
                effect:this.effect
            },
            rule: [
                {
                    type: 'group',
                    field: 'emit',
                    props: {
                        expand: 1,
                        sortBtn: false,
                        rule: [
                            {
                                type: 'select',
                                title: t('emit.eventName'),
                                field: 'eventName',
                                value: 'change',
                                options:  
                                    
                                this.modelValue.map(value => {
                                    return {
                                        label: value,
                                        value: value,
                                    }
                                })
                                ,
                                props: {
                                    'filterable': true,
                                    'allow-create':true,
                                    'default-first-option':true
                                }
                            },
                            
                            {
                                type: 'input',
                                title: t('emit.function'),
                                field: 'function',
                                value: '',
                                children: []
                            }
                        ]
                    },
                    value: []
                },
            ]
        };
    },
    methods: {
        onInput: function (formData) {
            let val = [];
            const {emit} = deepCopy(formData);
            if (!emit || !emit.length) {
                return;
            }
            val = [...emit];
            this.$emit('update:modelValue', val);
        },
    }
});
</script>

<style>
._fc-emit .form-create .el-form-item {
    margin-bottom: 22px !important;
}

._fc-emit .append-msg {
    cursor: pointer;
}

._fc-emit .el-input-group__append {
    padding: 0 10px;
}
</style>
