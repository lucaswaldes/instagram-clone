

import like from '../../icons/like.svg'
import home from '../../icons/home.svg'
import direct from '../../icons/direct.svg'
import publish from '../../icons/publish.svg'
import explore from '../../icons/explore.svg'
import './Header.css'


function Header(){
  return(
  <div className='nav'>
   <div className='navbox'>
    <img  src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'  className='logo' alt='teste'/>
    <input type='text' className='search'  placeholder='Pesquisar'></input>
    <ul className='list'>
    <li className='iconList'><a href='https://youtube.com.br'><img src={home} alt='home button' className='icon'/></a></li>
    <li className='iconList'><a href='https://hyperscripts.com.br'><img src={direct} alt='direct button' className='icon'/></a></li>
    <li className='iconList'><a href='https://hyperscripts.com.br'><img src={publish} alt='publish button' className='icon'/></a></li>
    <li className='iconList'><a href='https://hyperscripts.com.br'><img src={explore} alt='publish button' className='icon'/></a></li>
    <li className='iconList'><a href='https://google.com.br' ><img src={like} alt='like button' className='icon'/></a></li>
    <li className='iconList'><a href='https://google.com.br' ><img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFhEWFxYRFRUYHSggGBolHhUVITEtJSkrLi4uFx81ODMsNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJYAlgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QAMxABAAIBAQQFCwQDAAAAAAAAAAECAwUEESExEiJBUWEGEzJCcXKBkbHB0SNSoeFTkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3oAAAAAAAAAAAAAAAAAAAAAAAAAAPbZ9lyZZ6lZnvnlEfEHiLfFodp9O8R4VjpPWdCr/AJLf6wCjFrm0TJHoWrfw9GVblxWpO69ZrPdIPgAAAAAAAAAAAAHXpmy+eyRE+jXrW9ncDp0vTPObsmTfFOyvKbf0vqVisRFYiIjlEcITEbt0RwiOEQkAAB5bRgpkr0bxEx/MeMPUBl9R2G2C3fSfRt9p8XG1+0Ya5KTS3KY+U97KZ8U472pbnWd39g8wAAAAAAAAAGh0HFuxTftvaflHD8s81OlR+hj9k/WQdYAAAAACh8oMW69L/urMT7Y/6vlT5RR1Mfvz9AUIAAAAAAAAADSaJk6WCI/ZNqz89/3ZtZaHtPQyTSfRycI8LdgNCAAACRAApfKLJxx0960/SPuurTERMzwiOMz3Qym37R53La/Zyr7scgc4AAAAAAAAAAANDpWoxkiKXndkjhEz68flZsxsem5cu6d3Qr+632hotnxTSsVtebzHrW3bweoACEuTUNlvlrurkmnfXd1be3tBWavqMX34sc9X1rR63hHgqXvtWyZMU7r13R2WjjWfi8AAAAAAAAAAATWJmYiImZnhERzmV9p2kxTdfLEWvzivOtfzL60jT/NxGS8deY4RPqx+VmCEiASIASISD5vSLRMWiJiecTG+FDqWlTTffHvmnOa85r+YaBAMYLTWNP8ANz5ykdSZ60R6s/hVgAAAAAALLRdj85fp2jq0+U2V0RvavYcHmsdadsRvt427QdAAAAAAAAAAPnJSLRNbRviY3THgym27POLJak8udZ769ktaq9d2fpY4yRzpPH3ZBnwAAAAAdmkYennp3V68/Dl/O5p1L5O4+OS/u1j6z9l2CBICBICBICEgCBIA+MlItW1Z5WiYn4vsBjb0mszWedZmJ+D5dmr4+jnv4zFvnDjAAAABoPJ+P0rT35J+kLQAAAAAAAAAAAAAZ7X4/WrPfjj6yrAAAB//2Q==' alt='like button' className='icon photo'/></a></li>    

    </ul>
    </div>
  </div>
  )}

  export default Header;