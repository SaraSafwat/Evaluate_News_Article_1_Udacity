
import { Validate_URL } from '../js/Validate_URL'


var url_valid = "https://jamesclear.com/2019-annual-review" ; 
var url_notValid = "jamesclear.com" ;


describe('Test check url functionality', () => {
    test('Testing the checkUrl function Definition', () => {
        var result = Validate_URL(url_valid);
        expect(result).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        var result = Validate_URL(url_notValid);
        expect(result).toBe(false);
    })

    test('Testing the checkUrl function return true for valid url', () => {

        var result = Validate_URL(url_valid);
        expect(result).toBe(true);
    })
})
