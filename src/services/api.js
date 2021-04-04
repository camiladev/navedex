
const baseURL = 'https://navedex-api.herokuapp.com/v1'

function getUserAll(token){
    return fetch(`${baseURL}/navers`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    }).then( async (response) => {
        if(response.ok){
            const user = await response.json()

            return user;
        }
    }).catch( error => {
        console.log('Erro ao buscar dados dos usuários -> ', error)
    })
}

function viewNaver({token, id}){
    return fetch(`${baseURL}/navers/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    }).then( response => {
        if(response.ok){
            const naver = response.json()
            return naver
        }
    })
    .catch( error => {
        console.log('Usuário não localizado -> ', error)
    })
}

function createNaver({token, dadosNaver}){
    console.log(dadosNaver.idade,' - ', token)
    var idade = dadosNaver.idade
    idade = idade.split('-').reverse().join('/')
    var admission = dadosNaver.tempEmp
    admission = admission.split('-').reverse().join('/')
    var raw = JSON.stringify({
        "job_role": dadosNaver.cargo,
        "admission_date": admission,
        "birthdate": idade,
        "project": dadosNaver.project,
        "name": dadosNaver.name,
        "url": dadosNaver.url_foto
      });

    return fetch(`${baseURL}/navers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: raw,
    }).then( response => {
        if(response.ok){
            const naver = response.json()
            console.log('Usuário cadastrado ')
            return naver
        }
    })
    .catch( error => {
        console.log('Usuário não cadastrado -> ', error)
    })
}

function updateNaver({token, id}){
    var raw = JSON.stringify({
        "job_role": "Desenvolvedor",
        "admission_date": "19/08/2018",
        "birthdate": "12/04/1992",
        "project": "Project Backend Test",
        "name": "Christian Tavares",
        "url": "test-path/image-test.png"
      });

    return fetch(`${baseURL}/navers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: raw
    }).then( response => {
        if(response.ok){
            const naver = response.json()
            return naver
        }
    })
    .catch( error => {
        console.log('Usuário não atualizado -> ', error)
    })
}

function deletNaver({token, id}){
    
    return fetch(`${baseURL}/navers/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}` 
        },
        
    }).then( response => {
        if(response.ok){
            const naver = response.json()
            return naver
        }
    })
    .catch( error => {
        console.log('Usuário não deletado -> ', error)
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

        return jsonData.token;
    })
    .catch( error => {
        console.log('Erro: ',error)
    })
}



export default{
    getUserAll,
    viewNaver,
    createNaver,
    updateNaver,
    deletNaver,
    getLogin
}