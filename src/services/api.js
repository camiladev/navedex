
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
        return error
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
        alert('Usuário não localizado!')
        return error
    })
}

function createNaver({token, dadosNaver}){
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
        alert('Usuário não cadastrado!')
        return error
    })
}

function updateNaver({token, dadosNaver}){
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

    return fetch(`${baseURL}/navers/${dadosNaver.id}`, {
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
        alert('Usuário não atualizado!')
        return error
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
        alert('Usuário não deletado!')

        return error
    })
}



function getLogin(value){
  
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
        console.log(response.status)
        if(response.status === 200){

            if(response.ok){
                var jsonData = await response.json();
        
                return jsonData.token;
            }
        }else{

            return response.status
        }
    })
    .catch( error => {
        console.log('Erro: ',error)
        alert('Acesso não autorizado!')
        return error
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