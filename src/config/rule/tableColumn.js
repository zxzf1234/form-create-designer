import {localeProps} from '../../utils';

const label = '列表字段';
const name = 'tableColumn';

export default {
    icon: 'icon-form',
    label,
    name,
    mask: false,
    rule() {
        return {
            type: 'el-table-column',
           
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', []);
    }
};
