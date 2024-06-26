var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import radioEditForm from 'formiojs/components/radio/Radio.form';
import EditData from './editForm/Component.edit.data';
import EditDisplay from './editForm/Component.edit.display';
import EditValidation from './editForm/Component.edit.validation';
import SimpleConditional from '../Common/Simple.edit.conditional';
export default function () {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return radioEditForm.apply(void 0, __spreadArray([[
            {
                key: 'data',
                ignore: true,
            },
            {
                key: 'api',
                ignore: true,
            },
            {
                key: 'layout',
                ignore: true,
            },
            {
                key: 'conditional',
                ignore: true,
            },
            {
                key: 'validation',
                ignore: true,
            },
            {
                key: 'logic',
                ignore: true,
            },
            { key: 'display', ignore: true },
            {
                label: 'Display',
                key: 'customDisplay',
                weight: 10,
                components: EditDisplay,
            },
            {
                label: 'Values',
                key: 'customData',
                weight: 20,
                components: EditData,
            },
            {
                label: 'Validation',
                key: 'customValidation',
                weight: 30,
                components: EditValidation,
            },
            {
                label: 'Conditional',
                key: 'customConditional',
                weight: 40,
                components: SimpleConditional,
            },
        ]], extend, false));
}
