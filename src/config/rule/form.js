import {localeProps} from '../../utils';

const label = '表单';
const name = 'form';

export default {
    icon: 'icon-form',
    label,
    name,
    mask: false,
    inside: true,
    drag: true,
    dragBtn: false,
    rule() {
        return {
            type: 'el-form',
            style: {
                width: '100%',
            },
            class: 'el-form--inline',
            fullWidth: true,
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'input',
            field: 'labelWidth',
            title: '标签长度',
            
        },
        {
            type: 'switch',
            field: 'inline',
            title: '行内表单模式',
            value: true
        },
        {
            type: 'input',
            field: ':model',
            title: '表单数据对象',
            value: ''
        },]);
    }
};
