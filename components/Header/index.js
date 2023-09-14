import './header.css';


export default function Header () {
    return (
        <header>
            <div className={'logo'}>
            <img src="/logo.svg" alt="logo" />
            </div>
            <nav>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Downloads</li>
                <li> Company 
                    <ul className='child'>
                        <li>Contact</li>
                        <li>About Us</li>
                    </ul>
                </li>
                <li>Support</li>
            </ul>
            </nav>
            <div className={'action'}>
            <ul>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
            </div>
        </header>
    )
}