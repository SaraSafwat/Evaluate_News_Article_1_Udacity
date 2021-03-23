/*
 *  URI validation function using Regular Expression with
 *  Helpful alert for the User when wrong URL is entered
 *  
 */
var protocol;
var domain_name;
var Port_path;

function Validate_URL(URL) {

    protocol = new RegExp('^(https:\\/\\/?)');
   
    var domain_name = new RegExp('((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
                                            '((\\d{1,3}\\.){3}\\d{1,3}))' );

    var Port_path = new RegExp(
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i'); 

    if ((!(protocol.test(URL))) || (!(domain_name.test(URL))) || (!(Port_path.test(URL)) )  )
    {
        return false;

    }
    
    return true;

}


export { Validate_URL }
export { protocol }
export { domain_name }
export { Port_path }