function Login(){
    const ctx = React.useContext(UserContext);
    const [showl, setShowl] = React.useState(ctx.login);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [status, setStatus] = React.useState('');

    function loggedIn(){
        if (!validateField(email,        'email'))       return;
        if (!validateField(password,     'password'))    return;

        Search(email,password);

    }

    function loggedOut(){
        setShowl(false);
        ctx.login = false;
        ctx.hst = [];
    }

    function validateField(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout( () => setStatus(''),3000);
            return false;
        }
        return true;
    }

    function Search(email, password){
        if (ctx.users.some( (user) => user.email === email ) === true){

           if (ctx.users.filter( (user) => user.email === email ).some( (user) => user.password === password ) === true){
                setShowl(true);
                ctx.login = true;
                ctx.cuser = ctx.users.filter( (user) => user.email === email );
                console.log("obj:" , ctx.cuser);
                console.log("ctx:" , ctx);
                console.log("Balance:" , ctx.users[0].balance);
           }else{
                setStatus('Error: password incorrect, try again');
                setTimeout( () => setStatus(''),3000);
            return false;
           }
        }else{
            setStatus('Error: user doesnt exist');
            setTimeout( () => setStatus(''),3000);
            return false;
        }


    }

    return(
        <Bankform
            bgcolor="primary"
            label = "Login"
            header = "BadBank Login Page"
            status = {status}
            title = {showl || ctx.login ? (<>Welcome to BadBank <br/>Mr. {ctx.cuser.map( x => x.name)}</>) : (<>Welcome to BadBank</>)}
            text = "You can use this bank"
            body = { ctx.value ? (
                (showl || ctx.login ? (
                <>
                <h2>Logged In!</h2>
                <button type="button" className="btn btn-light" onClick={loggedOut}>Log Out</button>
                </>
                ) : (
                <>
                Email Address<br/>
                <input type="input" className="from-control" id="email"
                placeholder="Enter email" value={email} onChange={ e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="input" className="from-control" id="password"
                placeholder="Enter Password" value={password} onChange={ e => setPassword(e.currentTarget.value)} /><p/>
                <p/><button type="submit" className="btn btn-light" onClick={loggedIn}>Loggin</button>
                </>))
            ) : (
                <>
                <h3>Create an Account to start!</h3>
                </>
            ) }
        />
    );
}