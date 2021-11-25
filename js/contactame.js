const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#correo')

$form.addEventListener('submit', handleSubmit)


function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('nombre'))
    $buttonMailto.setAttribute('href',`mailto:dannamazo16@gmail.com?subject=${form.get('nombre')} ${form.get('email')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}