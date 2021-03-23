// To solving "ReferenceError: regeneratorRuntime is not defined"
import "babel-polyfill"

import { handleSubmit } from '../js/formHandler'
import { post } from '../js/formHandler'

describe('Client Test', () => {
    test('Testing the handle submit Definition', () => {

        expect(handleSubmit).toBeDefined();

    })

    test('Testing the post Definition', () => {
        expect(post).toBeDefined();
    })
    
})
