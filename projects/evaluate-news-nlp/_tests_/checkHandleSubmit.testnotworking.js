import {handleSubmit } from "../src/client/js/formHandler";

beforeEach(() => {
    fetch.resetMocks();
});

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

     //test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher

           test('Return value for POST action', () => {
            fetch.mockResponseOnce(JSON.stringify([{ response: 'agreement: AGREEMENT' }]));
            const onResponse = jest.fn();
            const onError = jest.fn();
          
            return handleSubmit.response()
              .then(onResponse)
              .catch(onError)
              .finally(() => {
                expect(onResponse).toHaveBeenCalled();
                expect(onError).not.toHaveBeenCalled();
          
                expect(onResponse.mock.calls[0][0][0]).toEqual({ response: 'agreement: AGREEMENT' });
              });
          });

            // set HTML Elements
            document.body.innerHTML = `
            <input id = "name">
            <div id="score_tag"></div>
            <div id="agreement"></div>
            <div id="subjectivity"></div>
            <div id="confidence"></div>
            <div id="irony"></div>`;

            //set url to check
            document.getElementById('name').innerHTML = "https://google.com;";

            
            //expect(handleSubmit(results)).toContain('agreement');
});

    //test("Testing nameChecker for Sulu", () => {
    //    expect(handleSubmit('Sulu')).toBeUndefined();
    //})
//});