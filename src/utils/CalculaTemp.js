

export default function CalculaTemp(value){    
    var dta = value.split('T')  
    var dtaAtual = new Date()
    var dtaPass = new Date(dta[0])

    var diff = Math.abs(dtaAtual.getTime() - dtaPass.getTime())

    var temp = Math.floor( diff / (1000*60*60*24*365))

    if( temp === 0){
        temp = Math.floor( diff / (1000*60*60*24*30))
        
        if(temp === 0){
            temp = Math.floor( diff / (1000*60*60*24))
            
            return `${temp} dias`
        }else{
            return `${temp} meses`
        }
    }else{

        return `${temp} anos`
    }

}