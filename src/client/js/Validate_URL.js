
/*
 *  URI validation function using Regular Expression with
 *  Helpful alert for the User when wrong URL is entered
 *  
 */

function Validate_URL(URL) {


    var protocol = new RegExp('^(https:\\/\\/?)');
   
    var domain_name = new RegExp('((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
                                            '((\\d{1,3}\\.){3}\\d{1,3}))' );

    var Port_path = new RegExp(
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i'); 

    if ( (!(protocol.test(URL))) && (!(domain_name.test(URL))) )
    {
        alert("The URL is entirely wrong! it must look like (https://www.google.com/))");
        return false;

    }
    else if ( !(protocol.test(URL)) ) {
        alert("The URL missing https:// Protocol");
        return false;
    }
    else if ( !(domain_name.test(URL)) ) {
        alert("The URL missing Domain name");
        return false;
    }
    else if ( !(Port_path.test(URL)) ) {
        alert("The URL missing port or path");
        return false;
    }

    return true;

}


export { Validate_URL }