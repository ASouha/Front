// const formEl = document.querySelector('.form');
// formEl.addEventListener('submit' , event => {
//     event.preventDefault();

//     const formData = new FormData(formEl); 
//     const data = new URLSearchParams(formData);

//     fetch('127.0.0.1:3000/updateMe',{
//         method : 'POST',
//         headers :{
//             'Content-Type' : 'multipart/form-data'
//         },
//         body: data
//     }).then(res => res.json)
// //     .then( data => console.log(data))
// //     .catch( error => console.error())
// // } ) 

// Assuming you have a form element with id="myForm"
const form = document.getElementById('myForm');

// Add an event listener for the form submission
form.addEventListener('submit', async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new FormData object from the form
    const formData = new FormData(form);

    try {
        const response = await fetch('127.0.0.1:3000/updateMe', {
            method: 'POST',
            body: formData // Pass the FormData object as the body
        });

        if (response.ok) {
            // Request was successful
            const data = await response.json(); // Assuming response is JSON
            console.log(data); // Do something with the response data
        } else {
            // Request failed
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});



