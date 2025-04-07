import { Outlet } from 'react-router-dom'
import { Menu } from './Components/Menu'
import { Footer } from './Components/Footer'

export const Layout = () => {
    return (
        <>
            <Menu/>
            <main>
                <Outlet/> {  }
            </main>
            <Footer/>
        </>
    );
}