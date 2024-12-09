const validationCriteria = {
    Min5Char: {
        regx: /.{5,}/,
        errorMsg: `should contain min 5 characters.`
    },
    Exact10Digit: {
        regx: /^[0-9]{10}$/,
        errorMsg: `Exactly 10 digits`
    },
    OnlyAlpha: {
        regx: /^[a-zA-Z]+$/,
        errorMsg: `alphabates only.`
    },
    EmailFormat: {
        regx: /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,5}\.[a-z]{2-3}$/,
        errorMsg: "invalid email format."
    },
    OnlyDigits: {
        regx: /^[0-9]+$/,
        errorMsg: "digits only",
    },
    SpecialCharacterNotAllowed: {
        regx: /^[a-zA-Z0-9]+$/,
        errorMsg: "special character not allowed"
    },
    spaceNotAllowed: {
        regx: /^\S*$/,
        errorMsg: "spaces not allowed"
    },
    Required: {
        regx: /./,
        errorMsg: "please enter some value"
    },

}

export const fnInputValidation = (inputObject) => {
    inputObject.errorMsg = "";
    const { creteria, value } = inputObject
    if(creteria===undefined) return;
    for (let i=0; i < creteria.length || 0; i++) {
        const { regx, errorMsg } = validationCriteria[creteria[i]]

        if (!regx.test(value || "")) {
            inputObject.errorMsg = errorMsg;
            break;
        }
    }
    //  inputObject;
}