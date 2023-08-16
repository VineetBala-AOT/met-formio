declare const _default: ({
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    placeholder: string;
    tooltip: string;
    validate: {
        required: boolean;
    };
    editor?: undefined;
    as?: undefined;
    wysiwyg?: undefined;
    defaultValue?: undefined;
    hidden?: undefined;
    reorder?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    placeholder: string;
    tooltip: string;
    validate?: undefined;
    editor?: undefined;
    as?: undefined;
    wysiwyg?: undefined;
    defaultValue?: undefined;
    hidden?: undefined;
    reorder?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    placeholder: string;
    tooltip: string;
    editor: string;
    as: string;
    wysiwyg: {
        minLines: number;
        isUseWorkerDisabled: boolean;
    };
    validate?: undefined;
    defaultValue?: undefined;
    hidden?: undefined;
    reorder?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    customConditional(context: any): boolean;
    placeholder?: undefined;
    validate?: undefined;
    editor?: undefined;
    as?: undefined;
    wysiwyg?: undefined;
    defaultValue?: undefined;
    hidden?: undefined;
    reorder?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    defaultValue: boolean;
    placeholder?: undefined;
    validate?: undefined;
    editor?: undefined;
    as?: undefined;
    wysiwyg?: undefined;
    hidden?: undefined;
    reorder?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    defaultValue: boolean;
    label: string;
    hidden: boolean;
    placeholder?: undefined;
    tooltip?: undefined;
    validate?: undefined;
    editor?: undefined;
    as?: undefined;
    wysiwyg?: undefined;
    reorder?: undefined;
    components?: undefined;
} | {
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    customConditional(context: any): boolean;
    reorder: boolean;
    components: {
        type: string;
        key: string;
        label: string;
        input: boolean;
    }[];
    placeholder?: undefined;
    tooltip?: undefined;
    validate?: undefined;
    editor?: undefined;
    as?: undefined;
    wysiwyg?: undefined;
    defaultValue?: undefined;
    hidden?: undefined;
})[];
export default _default;
