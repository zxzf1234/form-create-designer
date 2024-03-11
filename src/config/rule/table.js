import {localeProps,makeTableColumnRule} from '../../utils';

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
            style: {
                width: '100%',
            },
            fullWidth: true,
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [makeTableColumnRule(t, 'options')]);
    }
};
