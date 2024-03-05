import {localeProps} from '../../utils';

const label = '内容块';
const name = 'ContentWrap';

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
            type: 'el-card',
            style: {
                width: '100%',
            },
            fullWidth: true,
            children: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', []);
    }
};
