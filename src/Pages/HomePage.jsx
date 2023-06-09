import s from './style.module.css'
import { Link } from 'react-router-dom';
import {ReactComponent as Profile} from "../images/Profile.svg";

import LoginList from '../components/LoginList/LoginList';

function HomePage({users, title}) {
    document.title = `${title}`
    return (
        <>
            <div className={s.home}>
                <p>Это учебный проект, подготовленный с использованием материала, предоставляемого <Link to='https://fakestoreapi.com/'>https://fakestoreapi.com/</Link>. Спасибо им за это!!!</p>
                <p>Для продолжения работы авторизуйтесь, нажав на <Profile></Profile> в верхнем правом углу экрана</p>
                <p>API построены таким образом, что разработчики не предоставляют возможности изменять базу данных, пользуемся тем, что есть</p>
                <p>Формы регистрации и восстановления пароля реализованы без функционала, только выводят всплывающие подсказки в качестве результата взаимодействия с формой</p>
                <p>Вы можете использовать любое имя пользователя и пароль пользователя, доступные в пользовательском API, для получения токена. любые другие имена пользователей возвращают ошибку.</p>
                <p>Таблица с учетками грузится с сервера, поэтому всегда должны быть актуальные данные</p>
            </div>
            <div><LoginList users={users}></LoginList></div>
            
        </>
        
    )
}

export default HomePage;