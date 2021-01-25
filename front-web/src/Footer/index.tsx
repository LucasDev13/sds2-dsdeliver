import './styles.css';
import { ReactComponent as YouTube } from './youtube.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as Instagram } from './instagram.svg';


function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/devSuperior" target="_new">
                    <YouTube/>
                </a>
                <a href="​https://www.linkedin.com/in/pontes-lucas" target="_new">
                    <LinkedIn/>
                </a>
                <a href="https://www.instagram.com/lucaspontes92/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;