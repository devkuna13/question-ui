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
            creteria:["Required"]
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
            required: true,
            creteria:["Required"]
            
        },
        {
            lbl: "Option4",
            name: "opt4",
            tag: "input",
            type: "input",  
            required: true,
            creteria:["Required"]
        },
        // {
        //     lbl: "Type",
        //     name: "type",   
        //     tag: "radio",
        //     type: "radio",
        //     radioFields: [
        //         { lbl: "Single", value: "single", name: "type" },
        //         { lbl: "Multiple", value: "multiple", name: "type" }
        //     ],
        //     required: false,
        // },
        // {
        //     lbl: "Answer",
        //     name: "ans",
        //     tag: "select",
        //     options: [
        //         "A",
        //         "B",
        //         "C",
        //         "D",
        //     ],
        //     required: false,
        // },

    ]

