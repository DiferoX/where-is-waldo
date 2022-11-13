import '../styles/Sidebar.css'
import { FaCheckCircle } from 'react-icons/fa';

function Sidebar(props) 
{
  const clickHandler = (e) =>
  {
    let icon = e.target.parentNode.lastChild;
    let avatar = e.target.parentNode.firstChild.textContent;
    props.cursorHandler(avatar, icon);
    // icon.classList.add("active");
    // console.log(e.target.parentNode.firstChild.textContent);
  }

  return (
    <div className="sidebarContent">
      <div>
        <h4>Waldo</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/waldo.png`)}
          alt={`waldo avatar`}
          onClick={clickHandler}
        />
        <FaCheckCircle className='iconCheck' />
      </div>
      <div>
        <h4>Odlaw</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/odlaw.png`)}
          alt={`odlaw avatar`}
          onClick={clickHandler}
        />
        <FaCheckCircle className='iconCheck' />
      </div>
      <div>
        <h4>Wizard</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/wizard.png`)}
          alt={`wizard avatar`}
          onClick={clickHandler}
        />
        <FaCheckCircle className='iconCheck' />
      </div>
      <div>
        <h4>Wenda</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/wenda.png`)}
          alt={`wenda avatar`}
          onClick={clickHandler}
        />
        <FaCheckCircle className='iconCheck' />
      </div>
      {/* <div>
        <h4>Woof</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/dog.png`)}
          alt={`woof avatar`}
        />
        <FaCheckCircle className='iconCheck' />
      </div> */}
    </div>
  );
}

export default Sidebar;
