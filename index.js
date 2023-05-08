function Spa(){
    return(
        <>
        <HashRouter>
            
            <UserContext.Provider value={
                {value: false,
                login: false,
                users:[],
                cuser: {},
                }
            }>
                <Navbar/>
                <Route path="/" exact component={Home} />
                <Route path="/caccaount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
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