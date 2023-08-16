export default [
    {
        weight: 0,
        type: 'textfield',
        input: true,
        key: 'label',
        label: 'Question/Label',
        placeholder: '',
        tooltip:
            'Write your question or label in this section. <br>You can preview the question/label on the right in the “Preview” section. ',
        validate: {
            required: true,
        },
    },
    {
        weight: 100,
        type: 'textfield',
        input: true,
        key: 'placeholder',
        label: 'Placeholder',
        placeholder: 'Placeholder',
        tooltip:
            'The placeholder is a short hint intended to aid the user with data entry. This text will be displayed in the input field to provide more details on what is expected. For example: for the question/label “Your Birthdate”, the placeholder could be DD/MM/YYYY. <br>You can preview the placeholder on the right in the “Preview” section. ',
    },
    {
        weight: 200,
        type: 'textarea',
        input: true,
        key: 'description',
        label: 'Description',
        placeholder: 'Description for this field.',
        tooltip:
            'The description is text that will appear below the input field. You can use this text to add details. For example: “Please do not add any personal information.” <br>You can preview the tooltip on the right in the “Preview” section. ',
        editor: 'ace',
        as: 'html',
        wysiwyg: {
            minLines: 3,
            isUseWorkerDisabled: true,
        },
    },
    {
        weight: 300,
        type: 'textarea',
        input: true,
        key: 'tooltip',
        label: 'Tooltip',
        placeholder: 'To add a tooltip to this field, enter text here.',
        tooltip: 'Add a tooltip to your question/label.',
        editor: 'ace',
        as: 'html',
        wysiwyg: {
            minLines: 3,
            isUseWorkerDisabled: true,
        },
    },
    {
        weight: 410,
        type: 'textfield',
        input: true,
        key: 'inputMask',
        label: 'Input Mask',
        tooltip:
            'An input mask helps the user with input by ensuring a predefined format. <br>9: numeric <br>a: alphabetical<br>*: alphanumeric<br>For example: for the question/label “Postal Code”, the input mask could be: A9A 9A9 ',
        customConditional(context) {
            return !context.data.allowMultipleMasks;
        },
    },
    {
        weight: 413,
        type: 'checkbox',
        input: true,
        key: 'allowMultipleMasks',
        label: 'Allow Multiple Masks',
        tooltip:
            'Allows the user to enter data in two or more different formats. For example: the question/label “Postal Code/Zip” could have the input masks of: A9A 9A9 and 99999 ',
        defaultValue: true,
    },
    {
        weight: 1350,
        type: 'checkbox',
        input: true,
        key: 'spellcheck',
        defaultValue: true,
        label: 'Allow Spellcheck',
        hidden: true,
    },
    {
        weight: 417,
        type: 'datagrid',
        input: true,
        key: 'inputMasks',
        label: 'Input Masks',
        customConditional(context) {
            return context.data.allowMultipleMasks === true;
        },
        reorder: true,
        components: [
            {
                type: 'textfield',
                key: 'label',
                label: 'Label',
                input: true,
            },
            {
                type: 'textfield',
                key: 'mask',
                label: 'Mask',
                input: true,
            },
        ],
    },
];
