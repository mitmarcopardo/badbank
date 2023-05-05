function Deposit(){
    const ctx = React.useContext(UserContext);
    const [amount, setAmount] = React.useState('');
    const [status, setStatus] = React.useState('');

    //setAmount(ctx.cuser.map( x => x.balance));

    function Update(){
        if (!validateField(amount, 'deposit'))       return;
        if (!validateFieldupper(amount, 'deposit'))       return;
    }

    function validateField(field, label){
        if (!field){
            setStatus('Error: ' + label + ' is empty');
            setTimeout( () => setStatus(''),3000);
            return false;
        }
        return true;
    }
    
    function validateFieldupper(field){
        if (field > 0){
            ctx.cuser[0].balance = ctx.cuser[0].balance + amount;
            console.log(ctx.cuser[0].balance)
            setStatus('Depsit done!');
            setAmount('')
            setTimeout( () => setStatus(''),2000);
            return true;}
        if (field == 0){
            setStatus('Error: an amount of 0 cant be deposit');
            setTimeout( () => setStatus(''),3000);
            return false;}
        if (field < 0){
            setStatus('Error: an amount lower than 0 cant be deposit');
            setTimeout( () => setStatus(''),3000);
            return false;}
    }

    return(
        <Transactions
            bgcolor="info"
            label = "Deposit"
            header = "BadBank Deposit Page"
            status = {status}
            title = "Account Details"
            text = "You can use this bank"
            body = { ctx.value ? (
                (ctx.login ? (
                <>
                Balance ${ctx.cuser.map( x => x.balance)}<br/>
                <p/>Ammount to deposit<br/>
                $ <input type="input" className="from-control" id="deposit"
                placeholder="Enter amount" value={amount} onChange={ e => setAmount(parseFloat(e.currentTarget.value))} /><p/>
                <p/><button type="button" className="btn btn-light" onClick={Update}>Deposit</button>
                </>
                ) : (
                <>
                <h2>Log in to get access</h2>
                </>))
            ) : (
                <>
                <h3>Create an Account to start!</h3>
                </>
            ) }
        />
    );
}