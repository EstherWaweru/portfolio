import './Topbar.scss';
import {Person,Mail} from '@material-ui/icons';

function Topbar(){
    return(
        <div className = "topbar">
            <div className = "wrapper">
                <div className = "left">
                    <a href="#skills" className = "logo">KarehTech</a>
                    <div className = "itemContainer">
                        <Person className = "icon"/>
                        <span> +254 711 111 111</span>
                    </div>
                    <div className = "itemContainer">
                        <Mail className = "icon"/>
                        <span> karehtech@gmail.com</span>
                    </div>
                </div>
                
                <div className = "right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Topbar;