import styles from './Layout.module.css';
import {Fragment} from 'react';
import MainNavigation from './MainNavigation';
import { useHistory } from 'react-router-dom';

const Layout = (props) => {

    const history = useHistory();

    const backButton = () => {
        history.goBack();
    };

    return (
        <Fragment>
            <MainNavigation />
            <main className={styles.main}>
                {props.children}
                <button className='back-btn' onClick={backButton}>Back</button>
            </main>
        </Fragment>

    );
};
export default Layout;