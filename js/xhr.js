const xhr = new XMLHttpRequest();
// xhr.addEventListener('readystatechange', (e) => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status >= 200 && xhr.status <= 300) {
//         JSON.parse(xhr.responseText).forEach(element => {
//             console.log(element);
//         });
//     }
// });

xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status <= 300) {
        // JSON.parse(xhr.responseText).forEach(element => {
        //     console.log(element);
        // });
        console.log(e);
        console.log(JSON.parse(xhr.response));
    }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
xhr.setRequestHeader('Content-Type', 'text/json; charset=utf8')
xhr.send()



document.addEventListener('DOMContentLoaded', (e) => {})