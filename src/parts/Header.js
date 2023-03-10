import React from 'react'
import Brandicon from 'parts/IconText';
import Button from 'elements/Button';

export default function Header(props) {
  

    const getNavLinkClass = path => {

        return props.location .pathname === path ? "active" : "";
    }

    return (
    <header className='spacing-sm'>
        <div className='container'>
            <nav className='navbar navbar-expand-lg nabar-light'>
                <Brandicon />
            </nav>

            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav al-auto'>
                    <li className={`nav-item ${getNavLinkClass ("/home")}`}>
                        <Button className='nav-link' type='link' href='/'>
                            Home
                        </Button>
                    </li> 

                    <li className={`nav-item ${getNavLinkClass ("/browser-by")}`}>
                        <Button className='nav-link' type='link' href='/browser-by'>
                            Browser by
                        </Button>
                    </li> 

                    <li className={`nav-item ${getNavLinkClass ("/stories")}`}>
                        <Button className='nav-link' type='link' href='/stories'>
                            Stories
                        </Button>
                    </li> 

                    <li className={`nav-item ${getNavLinkClass ("/agent")}`}>
                        <Button className='nav-link' type='link' href='/agent'>
                            Agent
                        </Button>
                    </li>  
                </ul>

            </div>
        </div>
    </header>
  )
}
