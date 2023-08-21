export default [
    {
        weight: 0,
        type: 'textfield',
        input: true,
        key: 'label',
        label: 'Label',
        placeholder: 'Pre-populate label with “Enter the first 3 letters/digit of your postal code.',
        tooltip: 'Write your label in this section. You can preview the label on the right in the “Preview” section. ',
        validate: {
            required: true,
        },
    },
    {
        weight: 100,
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
        weight: 200,
        type: 'textarea',
        input: true,
        key: 'tooltip',
        label: 'Tooltip',
        placeholder: 'To add a tooltip to this field, enter text here.',
        tooltip: 'Add a tooltip to your label.',
        editor: 'ace',
        as: 'html',
        wysiwyg: {
            minLines: 3,
            isUseWorkerDisabled: true,
        },
    },

    {
        weight: 300,
        type: 'textfield',
        input: true,
        key: 'inputMask',
        label: 'Input Mask',
        tooltip:
            "An input mask helps the user with input by ensuring a predefined format.<br><br>9: numeric<br>a: alphabetical - small<br>A: alphabetical - capital or small<br>*: alphanumeric<br><br>Example telephone mask: (999) 999-9999<br>Example full postal code mask: A9A-9A9<br><br>See the <a target='_blank' href='https://github.com/RobinHerbots/jquery.inputmask'>jquery.inputmask documentation</a> for more information.</a>",
    },
];
