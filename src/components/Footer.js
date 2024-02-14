export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className="footer">
            &copy; BDS {year}
        </div>
    )
}