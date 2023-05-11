function AllData(){
    const ctx = React.useContext(UserContext);

    

    return(
        <Transactions
            bgcolor="primary"
            label = "Data"
            header = "BadBank Data Page"
            title = "Account Details"
            text = "BadBank Account Details"
            body = { ctx.value ? (
                (ctx.login ? (
                <>
                Name: {ctx.cuser.map( x => x.name)}<br/>
                Email: {ctx.cuser.map( x => x.email)}<br/>
                Password: {ctx.cuser.map( x => x.password)}<br/>
                Balance ${ctx.cuser.map( x => x.balance)}<br/>
                Movements: {ctx.hst.map( (x) =><li key={x}>{ x }</li> )}<br/>
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