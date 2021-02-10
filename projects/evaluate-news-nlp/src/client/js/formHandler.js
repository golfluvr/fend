function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=63755&units=imperial&appid=3475ccd1b0289b8be618718233445fb0')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.main.temp
    })
}

export { handleSubmit }
