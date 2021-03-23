import { Validate_URL, protocol, domain_name } from './Validate_URL'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}


const handleSubmit = async () => {

   const url = document.getElementById('article-url').value
    
    if (Validate_URL(url)) {

        const data = await post('http://localhost:8081/add-url', { url })

            .then((data) => {

            /* Present data response of MeanCloud API in my HTML*/

                document.getElementById('text').innerHTML = ` ${data.text}`;
                document.getElementById('agreement').innerHTML = `  ${data.agreement}`;
                document.getElementById('subjectivity').innerHTML = `   ${data.subjectivity}`;
                document.getElementById('confidence').innerHTML = `   ${data.confidence}`;
                document.getElementById('irony').innerHTML = ` ${data.irony}`;
                document.getElementById('score_tag').innerHTML = `  ${data.score_tag}`;
                
});
        alert('The URL is Valid :)');

    }
    else {
         

        if ((!(protocol.test(URL))) && (!(domain_name.test(URL)))) {
            alert("The URL is entirely wrong! it must look like (https://www.google.com/))");

        }
        else if (!(protocol.test(URL))) {
            alert("The URL missing https:// Protocol");
         
        }
        else if (!(domain_name.test(URL))) {
            alert("The URL missing Domain name");
         
        }
        else if (!(Port_path.test(URL))) {
            alert("The URL missing port or path");
         
        }
    }

}

export { handleSubmit }
export { post }
