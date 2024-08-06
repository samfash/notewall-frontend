function Footer(){
    let year = new Date().getFullYear()

    return <footer  className="footer">
        <p>
        Copyright©️{year} Fashrock Web, Inc.
        </p>
    </footer>
}
export default Footer