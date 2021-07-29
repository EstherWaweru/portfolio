import "./Menu.scss";

function Menu({open,setOpen}){
    return(
        <div className = {"menu " + (open && "active" )}>
            <ul>
                <li onClick = {() => setOpen(false)}>
                    <a href="#about">Home</a>
                </li>
                <li onClick = {() => setOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick = {() => setOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick = {() => setOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick = {() => setOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick = {() => setOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}
export default Menu;