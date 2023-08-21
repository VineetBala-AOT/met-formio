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
})[];
export default _default;
