import {localeProps} from '../../utils';

const label = '表单';
const name = 'form';

export default {
    icon: 'icon-form',
    label,
    name,
    mask: false,
    rule() {
        return {
            type: 'el-form',
            style: 'height:400px;',
            fullWidth: true,
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [{
            type: 'select',
            field: 'type',
            title: '风格类型',
            options: [{
                label: 'card',
                value: 'card'
            }, {label: 'border-card', value: 'border-card'}]
        }, {type: 'switch', field: 'closable', title: '标签是否可关闭'}, {
            type: 'select',
            field: 'tabPosition',
            title: '选项卡所在位置',
            options: [{label: 'top', value: 'top'}, {label: 'right', value: 'right'}, {
                label: 'left',
                value: 'left'   
            }]
        }, {type: 'switch', field: 'stretch', title: '标签的宽度是否自撑开'}]);
    }
};
