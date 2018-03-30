


function ValidationObject() {

    const STATE_NOT_DEFINED = "You need to define a state in your component.";
    const STATE_DOES_NOT_HAVE_EXPECTED_VALUE = "Y";
    const VALIDATION_NOT_INITIALIZED = "Y"

    let componentStateReference = null;

    let templateForValidation =  {
        value: '',
        isValid: '',
        elementName: '',
        expectedValue: '',
        styleToApplyWhenError: {},
        customValidationMethod: ()=>{},
    };

    this.initializeValidation = function(component) {

        let componentState = component.state;
        componentStateReference = componentState;
        
        if (!componentState) {
            console.log(STATE_NOT_DEFINED);
            return;
        }

        for (var validationAttribute in templateForValidation) {
            for (var stateAttribute in componentState) {
                //If the state attribute is not an object, assume no validation is required
                if (typeof componentState[stateAttribute] !== 'object' || componentState[stateAttribute] === null) {
                    continue;
                }

                else if (!componentState[stateAttribute].hasOwnProperty(validationAttribute)) {
                    componentState[stateAttribute][validationAttribute] = templateForValidation[validationAttribute];
                }
            }
        };
    }

    this.validateSingleInput = function (attributeName, updatedValue) {

    }
}

/* Validation Rules
    A component must have a state declared in it's constructor
    The values of a component state must be an object with at least the following attributes in order to be validated
        *Expected Value
        *customValidationMethod
    
    If the values do not contain any of these validation on these elements will be skipped. May change this in future.
*/


let Validation = new ValidationObject();
export default Validation;