import './Suggestions.css'
// import storieframe from '../../imgs/profile_picture.jpeg'

function Suggestions({profile_picture,username,description}){
  return(
    <div className='suggestions_container'>
     <div className='suggestions_header'>
       <div className='teste'>
       <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFhEWFxYRFRUYHSggGBolHhUVITEtJSkrLi4uFx81ODMsNygtLi0BCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJYAlgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QAMxABAAIBAQQFCwQDAAAAAAAAAAECAwUEESExEiJBUWEGEzJCcXKBkbHB0SNSoeFTkvH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3oAAAAAAAAAAAAAAAAAAAAAAAAAAPbZ9lyZZ6lZnvnlEfEHiLfFodp9O8R4VjpPWdCr/AJLf6wCjFrm0TJHoWrfw9GVblxWpO69ZrPdIPgAAAAAAAAAAAAHXpmy+eyRE+jXrW9ncDp0vTPObsmTfFOyvKbf0vqVisRFYiIjlEcITEbt0RwiOEQkAAB5bRgpkr0bxEx/MeMPUBl9R2G2C3fSfRt9p8XG1+0Ya5KTS3KY+U97KZ8U472pbnWd39g8wAAAAAAAAAGh0HFuxTftvaflHD8s81OlR+hj9k/WQdYAAAAACh8oMW69L/urMT7Y/6vlT5RR1Mfvz9AUIAAAAAAAAADSaJk6WCI/ZNqz89/3ZtZaHtPQyTSfRycI8LdgNCAAACRAApfKLJxx0960/SPuurTERMzwiOMz3Qym37R53La/Zyr7scgc4AAAAAAAAAAANDpWoxkiKXndkjhEz68flZsxsem5cu6d3Qr+632hotnxTSsVtebzHrW3bweoACEuTUNlvlrurkmnfXd1be3tBWavqMX34sc9X1rR63hHgqXvtWyZMU7r13R2WjjWfi8AAAAAAAAAAATWJmYiImZnhERzmV9p2kxTdfLEWvzivOtfzL60jT/NxGS8deY4RPqx+VmCEiASIASISD5vSLRMWiJiecTG+FDqWlTTffHvmnOa85r+YaBAMYLTWNP8ANz5ykdSZ60R6s/hVgAAAAAALLRdj85fp2jq0+U2V0RvavYcHmsdadsRvt427QdAAAAAAAAAAPnJSLRNbRviY3THgym27POLJak8udZ769ktaq9d2fpY4yRzpPH3ZBnwAAAAAdmkYennp3V68/Dl/O5p1L5O4+OS/u1j6z9l2CBICBICBICEgCBIA+MlItW1Z5WiYn4vsBjb0mszWedZmJ+D5dmr4+jnv4zFvnDjAAAABoPJ+P0rT35J+kLQAAAAAAAAAAAAAZ7X4/WrPfjj6yrAAAB//2Q==' alt='tetse'/>
       <p className='username_'>lucaswaldes</p>
       </div>
       <p className='mudar'>Mudar</p>
     </div>
      <div className='suggestions-content'>
       <div className='left-suggestions'>
         <p> <span className='grey'><b>Sugestões para você</b></span> </p>
        
          <ul className='suggestions-ul'>
            <li ><img src={profile_picture[0]} alt='tetse'/>  <p >{username[0]}</p> </li>
            <li className='suggestions-li'>{description[0]}</li>
            <li ><img src={profile_picture[1]} alt='tetse'/>  <p >{username[1]}</p></li>
            <li className='suggestions-li'>{description[1]}</li>
            <li ><img src={profile_picture[2]} alt='tetse'/>  <p >{username[2]}</p></li>
            <li className='suggestions-li'>{description[0]}</li>
            <li ><img src={profile_picture[3]} alt='tetse'/>  <p >{username[3]}</p></li>
            <li className='suggestions-li'>{description[1]}</li>
          </ul>
         </div>  
         <ul className='right-suggestions'>
           <li>Ver tudo</li>
           <span>  <li>  Seguir </li>  </span>
           <span>  <li>  Seguir </li>  </span>
           <span>  <li>  Seguir </li>  </span>
           <span>  <li>  Seguir </li>  </span>
          
           </ul>       
        </div>
        <div className='suggestions-footer'>
          <p><a href='#'>Sobre</a> - <a href='#'>Ajuda</a> - <a href='#'>Imprensa</a> - <a href='#'>API</a> - <a href='#'>Carreiras</a> - <a href='#'>Privacidade</a> - <a href='#'>Termos</a> - <a href='#'>Localização</a> - <a href='#'>Idioma</a></p>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
     </div>
    )}
  
    export default Suggestions;