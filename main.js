const displayData = (content)=>{
    result.value += content
}

const ClearCalScreen = ()=>{
    result.value =""
}

const evaluateExp = ()=>{
    try{
        result.value = eval(result.value)

    }catch{
              result.value="Invalid Expression"
    }

}

const removeLastValue = ()=>{
    result.value = result.value.slice(0,-1)
}

onclick="displayData('(')"

