// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange(e){
        console.log("Entering password...");
    }

    return(
        <input type="password" onChange={handleChange}
        placeholder="enter password here"/>
    )
}

export default PasswordInput;