import styles from './MainNavigation.module.css';
import {NavLink, Link} from 'react-router-dom';

const MainNavigation = () => {

    return (
        <header className={styles.header}>
            <Link className={styles.logo} to='/quotes'>Quote Bank</Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={styles.active}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' activeClassName={styles.active}>Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
};
export default MainNavigation;