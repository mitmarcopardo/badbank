function Spa(){
    return(
        <>
        <HashRouter>
            <Navbar/>
            <UserContext.Provider value={
                {users:[{name:'marco', email:'mpardo@gmail.com', 
                password:'elsecreto', balance:'100'}]}
            }>
                <Route path="/" exact component={Home} />
                <Route path="/caccaount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
            </UserContext.Provider>
        </HashRouter>
        </>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)