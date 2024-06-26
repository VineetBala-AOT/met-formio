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
        type: 'number',
        input: true,
        key: 'rows',
        label: 'Rows',
        weight: 210,
        tooltip: 'This allows control over how many rows are visible in the text area.',
        placeholder: 'Enter the amount of rows',
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
        weight: 1350,
        type: 'checkbox',
        input: true,
        key: 'spellcheck',
        defaultValue: true,
        label: 'Allow Spellcheck',
        hidden: true,
    },
    {
        type: 'checkbox',
        input: true,
        key: 'autoExpand',
        label: 'Auto Expand',
        tooltip:
            'This will make the Text Area auto expand its height as the user is typing into the area so the entire content remains visible.',
        weight: 415,
    },
];
