import { handleSubmit } from './js/formHandler'

import './styles/_resets.scss'
import './styles/_base.scss'
import './styles/_footer.scss'
import './styles/_form.scss'
import './styles/_header.scss'


window.addEventListener('DOMContentLoaded', () => {

    //Submit event Listener
    document.getElementById('form').addEventListener("submit", function (e) {
        e.preventDefault(); 
        handleSubmit();
    })
})

export { handleSubmit }

