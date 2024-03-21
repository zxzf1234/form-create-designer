<template>
    <DragForm class="_fc-emit" :rule="rule" :option="option" :modelValue="formValue"
              @update:modelValue="onInput"></DragForm>
</template>

<script>
import {designerForm} from '../utils/form';
import {defineComponent} from 'vue';
import {deepCopy} from '@form-create/utils/lib/deepextend';
const componentEventGroup = {
    input : ['change','visible-change','remove-tag','clear', 'blur', 'focus'],
    cascader : ['change', 'expand-change', 'blur', 'focus', 'visible-change', 'remove-tag'],
    checkbox : ['change'],
    colorPicker : ['change', 'active-change', 'focus', 'blur'],
    datePicker : ['change', 'blur', 'focus', 'calendar-change', 'panel-change', 'visible-change'],
    inputNumber: ['change', 'blur', 'focus'],
    radio :['change'],
    rate : ['change'],
    select : ['change', 'visible-change', 'remove-tag', 'clear', 'blur', 'focus'],
    slider : ['change', 'input'],
    switch : ['change'],
    table : ['page-change', 'select', 'select-all','selection-change','cell-mouse-enter','cell-mouse-leave',
        'cell-click','cell-dblclick', 'cell-contextmenu', 'row-click','row-contextmenu','row-dblclick','header-click',
        'header-contextmenu','sort-change', 'filter-change', 'current-change','header-dragend','expand-change'],
    timePicker : ['change', 'blur', 'focus', 'visible-change'],
    transfer: ['change', 'left-check-change', 'right-check-change'],
    upload: [],
    button: ['click']
}

export default defineComponent({
    name: 'Event',
    inject: ['designer'],
    props: {
        modelValue: Array
    },
    components: {
        DragForm: designerForm.$form(),
    },
    watch: {},
    data() {
        const t = this.designer.setupState.t;
        const lenght = this.modelValue.length
        const componentName = this.modelValue[lenght - 1]
        let componentEventName = []
        if(componentName in componentEventGroup){
            componentEventName = componentEventGroup[componentName]
        }
        this.modelValue.splice(lenght-1, 1)
        const ruleOption = componentEventName.map(value => {
            return {
                label: value,
                value: value,
            }
        })
        let formData = {event: []}
        formData['event'] = this.modelValue.map(function(item) {
            return {eventName : item['eventName'], function : item['function']};
        })
        
        return {
            formValue: [],
            t,
            option: {
                form: {
                    labelPosition: 'top',
                    size: 'small',
                    labelWidth: '90px'
                },
                submitBtn: false,
                appendValue: true,
                formData: formData
            },
            rule: [
                {
                    type: 'group',
                    field: 'event',
                    props: {
                        expand: 1,
                        sortBtn: false,
                        rule: [
                            {
                                type: 'select',
                                title: t('emit.eventName'),
                                field: 'eventName',
                                value: '',
                                options:  ruleOption,
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
                                value: ''
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
            const {event} = deepCopy(formData);
            if (!event || !event.length) {
                return;
            }
            val = [...event];
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
