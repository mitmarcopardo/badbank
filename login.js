function Login(){
    const [showl, setShowl] = React.useState(false);
    const ctx = React.useContext(UserContext);
    console.log(ctx.value)

    function loggedIn(){
        setShowl(true);
    }

    return(
        <Bankform
            bgcolor="primary"
            txtcolor = ""
            header = "BadBank Login Page"
            title = "Welcome to BadBank"
            text = "You can use this bank"
            body = { ctx.value ? (
                (showl ? (
                <>
                <h2>Logged In!</h2>
                </>
                ) : (
                <>
                Email Address<br/>
                <input type="input" className="from-control" id="emai"
                placeholder="Enter email"/><br/>
                Password<br/>
                <input type="input" className="from-control" id="password"
                placeholder="Enter password"/>
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