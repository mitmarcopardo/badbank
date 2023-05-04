function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout( () => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function handleCreate(){
        console.log(name, email, password);
        if (!validate(name,         'name'))        return;
        if (!validate(email,        'email'))       return;
        if (!validate(password,     'password'))    return;
        ctx.users.push({name, email, password, balance:100});
        setShow(false);
        ctx.value = true;
    }

    return(
        <Card 
            bgcolor = "primary"
            header = "Create Account"
            status = {status}
            body = { show ? (
                <>
                Name<br/>
                <input type="input" className="from-control" id="name"
                placeholder="Enter name" value={name} onChange={ e => setName(e.currentTarget.value)} /><br/>
                Email Address<br/>
                <input type="input" className="from-control" id="emai"
                placeholder="Enter email" value={email} onChange={ e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="input" className="from-control" id="password"
                placeholder="Enter email" value={password} onChange={ e => setPassword(e.currentTarget.value)} /><p/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
            ) : (
                <>
                <h5>Sucess</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    );
}