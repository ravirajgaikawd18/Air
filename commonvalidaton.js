function Validate(){
    var isNameEmpty = CheckEmpty("NameBox", "ErrorForNameDiv", "Name is required");
    if(isNameEmpty == false){
        var isNameChar = CheckChar("NameBox", "ErrorForNameDiv", "Numbers not allowed")
        if(isNameChar == true){
            var expectedLength = 10;
            var isNameLengthOk = CheckLength("NameBox", "ErrorForNameDiv", "Min 10 chars required", expectedLength)
            // if(isNameLengthOk == true)
        }
    }
    var isAddressEmpty = CheckEmpty("AddressBox", "ErrorForAddressDiv", "Address is required");
    if(isAddressEmpty == false){
        var isAddressChar = CheckChar("AddressBox", "ErrorForAddressDiv", "Numbers not allowed")
        if(isAddressChar == true){
            var expectedLength = 20;
            var isAddressLengthOk = CheckLength("AddressBox", "ErrorForAddressDiv", "Min 20 chars required", expectedLength)
            // if(isAddressLengthOk == true)
        }
    }
    var isAgeEmpty = CheckEmpty("AgeBox", "ErrorForAgeDiv", "Age is required");
    if(isAgeEmpty == false){
        var isAgeNumber = CheckNumber("AgeBox", "ErrorForAgeDiv", "Only numbers allowed");
        if(isAgeNumber == true){
            var min = 1;
            var max = 100
            var isAgeLimitOk = CheckLimit("AgeBox", "ErrorForAgeDiv", 
                                            "Enter Age between 1 to 100", min, max);
            // if(isAgeLimitOk == true)
        }
    }
}
function CheckEmpty(id, ErrorDivId, ErrorMessage){
    // debugger;
    var isEmpty = true;
    var refToControl = document.getElementById(id);
    var refToErrorDiv = document.getElementById(ErrorDivId);

    if (refToControl.value == "") {
        isEmpty = true;
        refToErrorDiv.innerText = ErrorMessage;
    } else {
        isEmpty = false;
        refToErrorDiv.innerText = "";
    }
    return isEmpty;
}
function CheckChar(id, ErrorDivId, ErrorMessage){
    var isChar = false;
    var refToControl = document.getElementById(id);
    var refToErrorDiv = document.getElementById(ErrorDivId);
    isChar = isNaN(refToControl.value)
    if (isChar == true) {
        
        refToErrorDiv.innerText = "";
    } else {
        
        refToErrorDiv.innerText = ErrorMessage;
    }
    return isChar;
}
function CheckLength(id, ErrorDivId, ErrorMessage, expectedLength){
    var isLengthOk = false;
    var refToControl = document.getElementById(id);
    var refToErrorDiv = document.getElementById(ErrorDivId);
    var strLength = refToControl.value.length;
    if (strLength >= expectedLength) {
        isLengthOk = true;
        refToErrorDiv.innerText = "";
    } else {
        isLengthOk = false;
        refToErrorDiv.innerText = ErrorMessage;
    }
    return isLengthOk;
}
function CheckNumber(id, ErrorDivId, ErrorMessage){
    var isAgeNumber = false;
    var refToControl = document.getElementById(id);
    var refToErrorDiv = document.getElementById(ErrorDivId);
    var isAgeNotNumber = isNaN(refToControl.value);
    isAgeNumber = !isAgeNotNumber;
    if (isAgeNumber == true) {
        
        refToErrorDiv.innerText = "";
    } else {
        
        refToErrorDiv.innerText = ErrorMessage;
    }
    return isAgeNumber;
}
function CheckLimit(id, ErrorDivId, ErrorMessage, min, max){
    var isAgeLimitOk = false;
    var refToControl = document.getElementById(id);
    var refToErrorDiv = document.getElementById(ErrorDivId);
    if(refToControl.value >= min && refToControl.value <= max){
        refToErrorDiv.innerText = "";
        isAgeLimitOk = true;
    }
    else{
        refToErrorDiv.innerText = ErrorMessage;
        isAgeLimitOk = false;
    }
    return isAgeLimitOk;
}