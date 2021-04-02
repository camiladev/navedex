
const baseURL = 'https://navedex-api.herokuapp.com/v1'

function getUserAll(){
    return fetch(`${baseURL}/navers`, {
        method: 'GET',
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE2MTczMDI4NjZ9.UhDYFQoYTfrBVBaCOKKVKssEeC6NrJTD9isjaaCTTdA"
        }
    }).then( async (response) => {
        if(response.ok){
            const user = await response.json()
            
            console.log('User',user)

            return user;
        }
    }).catch( error => {
        console.log('Erro ao buscar dados dos usuários -> ', error)
    })
}



function getLogin(value){
    
    // "email": "testing-user@nave.rs",
    // "password": "nave1234"
  
    return fetch(`${baseURL}/users/login`, {
       
        method: 'POST',
        headers: {           
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            "email": value.email,
            "password": value.pass
        })
    })
    .then( async response => {
        var jsonData = await response.json();
        console.log('Autenticado', jsonData.token)

        return jsonData.token;
    })
    .catch( error => {
        console.log('Erro: ',error)
    })
}



export default{
    getUserAll,
    getLogin
}