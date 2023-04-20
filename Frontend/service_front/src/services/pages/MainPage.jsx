import {Link} from "react-router-dom";
import Cookies from "universal-cookie";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser, selectUserStatus} from "../../redux/slices/user";
import {useEffect} from "react";

function MainPage() {
    const dispatch = useDispatch()

    const cookies = new Cookies()

    const token = cookies.get('token')

    const userStatus = useSelector(selectUserStatus)

    useEffect(() => {
        if (userStatus === 'idle' && token) {
            dispatch(fetchUser(token))
        }
    }, [userStatus, token])

    return (
        <div className="my-container text-center">
            <h1 className="p-0 mt-4 mb-1">Играй в 12/10.</h1>
            <h5 className="p-0 mb-4">Идеальное место для уничтожения времени!</h5>
            <Link className="btn my-btn mb-5" to="/game">ИГРАТЬ!!!</Link>
            <img src="mpi.jpg" style={{width: "90%"}} alt=""/>
            <h1>Почему наша игра?</h1>
            <div className="d-flex justify-content-between">
                <div className="info-banner-item">
                    <img src="github.svg" width="80%" alt=""/>
                    <h2>Заголовок</h2>
                    <h3>Текст</h3>
                </div>
                <div className="info-banner-item">
                    <img src="github.svg" width="80%" alt=""/>
                    <h2>Заголовок</h2>
                    <h3>Текст</h3>
                </div>
                <div className="info-banner-item">
                    <img src="github.svg" width="80%" alt=""/>
                    <h2>Заголовок</h2>
                    <h3>Текст</h3>
                </div>
            </div>
        </div>
    )
}

export default MainPage