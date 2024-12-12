import './styles.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'

export default function dashboard() {
    return (
        <>
            <div className='side'>
                <Sidebar />
            </div>

            <Topbar />

        </>
    )
}
