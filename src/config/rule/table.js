import {localeProps} from '../../utils';
import uniqueId from '@form-create/utils/lib/unique';

const label = '列表';
const name = 'table';

export default {
    icon: 'icon-form',
    label,
    name,
    mask: false,
    rule() {
        return {
            type: 'el-table',
            field: uniqueId(),
            style: {
                width: '100%',
            },
            fullWidth: true,
            children: [],
            column: [],
            menu: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {
                type: 'TableColumnOptions',
                title: '字段',
                field: 'formCreateColumn',
                props: {defaultValue: []}
            },
            {
                type: 'TableMenuOptions',
                title: '菜单',
                field: 'formCreateMenu',
                props: {defaultValue: []}
            },
            {type: 'input', field: ':columns', title: '字段列变量名'},
            {type: 'input', field: ':data', title: '绑定数据'},
            {type: 'input', field: ':page-data', title: '分页绑定数据'},
            {type: 'switch', field: 'adaptive', title: '是否自适应分辨率'},
            {type: 'input', field: 'save-key', title: '缓存配置名'},
            {type: 'input', field: 'height', title: '高度'},
            {type: 'input', field: 'max-height', title: '最大高度'},
            {type: 'switch', field: 'border', title: '是否自适应分辨率'},
            {type: 'switch', field: 'highlight-current-row', title: '是否要高亮当前行'},
        ]);
            
    }
};
