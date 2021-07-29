import "./Menu.scss";

function Menu({open,setOpen}){
    return(
        <div className = {"menu " + (open && "active" )}>
            <ul>
                <li>
                    <a href="#about">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}
export default Menu;