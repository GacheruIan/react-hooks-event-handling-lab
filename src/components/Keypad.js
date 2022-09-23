9// Code Keypad Component Here

function Keypad (){
    function click(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={click}/>
        </div>
    )
}

export default Keypad;