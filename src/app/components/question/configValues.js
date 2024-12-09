export const configFile =
    [
        {
            lbl: "Question",
            tag: "textArea",
            name: "question",
            required: true,
            creteria:["Min5Char","Required"]
        },
        {
            lbl: "Option1",
            name: "opt1",
            tag: "input",
            type: "input", 
            required: true,
            creteria:["Required","EmailFormat"]
        },
        {
            lbl: "Option2",
            name: "opt2",
            tag: "input",
            type: "input",
            required: true,
            creteria:["Required"]
        },
        {
            lbl: "Option3",
            name: "opt3",
            tag: "input",
            type: "input",
            
        },
        {
            lbl: "Option4",
            name: "opt4",
            tag: "input",
            type: "input"
        },
        {
            lbl: "Type",
            name: "type",
            tag: "radio",
            type: "radio",
            radioFields: [
                { lbl: "Single", value: "single", name: "typeRadio" },
                { lbl: "Multiple", value: "multiple", name: "typeRadio" }
            ],
            required: false,
        },
        {
            lbl: "Answer",
            name: "type",
            tag: "select",
            options: [
                "A",
                "B",
                "C",
                "D",
            ],
            required: false,
        },

    ]

