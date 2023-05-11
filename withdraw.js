function Withdraw(){
    const ctx = React.useContext(UserContext);
    const [amount, setAmount] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [state, setState] = React.useState(false);


    function Update(){
        if (!validateField(amount, 'deposit'))       return;
        if (validateFieldupper(amount, 'deposit'))       return;
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

            if (field > 0 && field <= ctx.cuser[0].balance){
                ctx.cuser[0].balance = ctx.cuser[0].balance - amount;
                console.log(ctx.cuser[0].balance)
                setStatus('Money whitdrawn!');
                ctx.hst.push(`Whitdraw: -${amount}`);
                console.log(ctx.hst);
                setAmount('')
                setTimeout( () => setStatus(''),2000);
                return true;
            }else if (field > ctx.cuser[0].balance){
                setStatus('Error: amount to be whitdrawn can be higher than current balance');
                setTimeout( () => setStatus(''),3000);
                return false;
            }else if (field == 0){
                setStatus('Error: an amount of 0 cant be whitdrawn');
                setTimeout( () => setStatus(''),3000);
                return false;
            }else if (field < 0){
                setStatus('Error: an amount lower than 0 cant be whitdrawn');
                setTimeout( () => setStatus(''),3000);
                return false;}
    }

    return(
        <Transactions
            bgcolor="warning"
            label = "Whidrawn"
            header = "BadBank Whidrawal Page"
            status = {status }
            title = "Account Details"
            text = "You can use this bank"
            body = { ctx.value ? (
                (ctx.login ? (
                <>
                Balance ${ctx.cuser[0].balance}<br/>
                <p/>Ammount to deposit<br/>
                $ <input type="input" className="from-control" id="whidraw"
                placeholder="Enter amount" value={amount} onChange={ e => setAmount(parseFloat(e.currentTarget.value))} /><p/>
                <p/><button type="button" disabled={ (ctx.cuser[0].balance == 0) ? true : false } className='btn btn-light btn-block ' onClick={Update}>Withdraw</button>
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