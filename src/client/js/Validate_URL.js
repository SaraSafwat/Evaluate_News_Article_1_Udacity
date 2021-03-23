/*
 *  URI validation function using Regular Expression with
 *  Helpful alert for the User when wrong URL is entered
 *  
 */
var protocol_check;
var domain_name_check;
var Port_path_check;

function Validate_URL(URL) {

    

   var protocol = new RegExp('^(https:\\/\\/?)');

    protocol_check = protocol.test(URL);

    var domain_name = new RegExp('((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
                                            '((\\d{1,3}\\.){3}\\d{1,3}))' );

    domain_name_check = protocol.test(URL);

     var Port_path = new RegExp(
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i'); 

    Port_path_check = protocol.test(URL);

    if ((!protocol_check) || (!domain_name_check) || (!Port_path_check) )  
    {
        
        return false;
    }
    
    return true;

}


export { Validate_URL }
export { protocol_check }
export { domain_name_check }
export { Port_path_check }

