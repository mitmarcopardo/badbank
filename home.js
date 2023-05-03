function Home(){
    return(
        <Card
            bgcolor="primary"
            txtcolor = ""
            header = "BadBank Landing Page"
            title = "Welcome to BadBank"
            text = "You can use this bank"
            body = {(<img src="bank.png" className="img-fluid"
            alt="Responsive Image" />)}
        />
    );
}