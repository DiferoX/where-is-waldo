import '../styles/Sidebar.css'

function Sidebar() 
{
  return (
    <div className="sidebarContent">
      <div>
        <h4>Waldo</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/waldo.png`)}
          alt={`waldo avatar`}
        />
      </div>
      <div>
        <h4>Odlaw</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/odlaw.png`)}
          alt={`odlaw avatar`}
        />
      </div>
      <div>
        <h4>Wizard</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/wizard.png`)}
          alt={`wizard avatar`}
        />
      </div>
      <div>
        <h4>Wenda</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/wenda.png`)}
          alt={`wenda avatar`}
        />
      </div>
      <div>
        <h4>Woof</h4>
        <img 
          className='sidebarContentImg' 
          src={require(`../images/dog.png`)}
          alt={`dog avatar`}
        />
      </div>
    </div>
  );
}

export default Sidebar;
