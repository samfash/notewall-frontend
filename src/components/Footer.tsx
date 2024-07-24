function Footer(){
    let year = new Date().getFullYear()

    return <footer  className="footer"><p>
        Copyright©️{year}
    </p></footer>
}
export default Footer