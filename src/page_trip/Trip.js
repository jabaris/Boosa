import './Trip.css';
import Boosa from './images/Boosa.svg';
import Login from './images/Login.svg';
import Message from './images/Message.svg';
import BackIcon from './images/Back-icon.svg';
import Vector5 from './images/Vector 5.png';
import Vector6 from './images/Vector 6.png';
import Plane from './images/Plane.svg';
import Arrow from './images/Arrow.svg';
import Avatar from './images/Usercard.svg';
import Score from './images/Score.svg';
import BtnNext from './images/btnNext.svg';

const Trip = () => {
    return(
        <div className='Wrapper'>
            <div className='Wrapper-background'>
                <div className='Trip-container _container'>
                    <div className='Trip-header'>
                        <img src={Boosa} className='Logo-boosa' alt='Boosa'/>
                        <div className='Trip-icons'>
                            <p className='Login-btn'>Войти</p>
                            <img src={Message} className='Trip-message' alt='message'/>
                            <img src={Login} className='Trip-user' alt='User'/>
                        </div>
                    </div>
                    <div className='Back-btn'>
                        <img src={BackIcon} className='Back-icon' alt='Back'/>
                        <a href='#a' className='Back-link'>Назад</a>
                    </div>
                </div>

                <img src={Vector5} alt=''/>
                <img src={Vector6} alt=''/>
            </div>
            <div className='Trip-setting_container'>
                <div className='Trip-setting'>
                    <div className='Trip-setting_inner'>
                        <div className='City-fromWhere'>
                            <div className='City'>Махачкала</div>
                            <div className='Address'>ул. Параульская, д. 13</div>
                            <div className='Departure'>
                                <strong>Отбытие:</strong> 14 ноября, 14:30
                            </div>
                        </div>
                        <div className='Trip-what'>
                            <img src={Plane} className='Trip-plane-img' alt=''/>
                            <span className='Trip-plane_text'>Самолетом</span>
                            <img src={Arrow} className='Arrow-img' alt='' />
                        </div>
                        <div className='City-toWhere'>
                            <div className='City'>Москва</div>
                            <div className='Address'>ул Варшавская, 29к1</div>
                            <div className='Coming'>
                                <strong>Прибытие: </strong> 17 ноября, 17:30
                            </div>
                        </div>
                    </div>
                    <div className='Btn-take-package'>
                        <div className='Btn-take-package-text'>
                            Предложить посылку
                        </div>
                    </div>
                </div>
            </div>

            <div className='Trip-user-card-container'>
                <div className='Trip-user-card'>
                    <div className='User-profile'>
                        <img src={Avatar} className='User-avatar' alt=''/>
                        <div className='User-card-name'>
                            <p className='User-fullname'>Магомедгаджи Магомедов</p>
                            <img src={Score} className='Score' alt='Score'/>
                        </div>
                    </div>
                    <div className='Btn-next'>
                        <img src={BtnNext} alt=''/>
                    </div>
                </div>
            </div>
            <div className='User-card-btns'>
                <div className='Btn-send-message'>
                    <p className='Btn-send-message-inner'>
                        Отправить сообщение
                    </p>
                </div>
                <div className='Btn-send-numb'>
                    <p className='Btn-send-numb-inner'>
                        +7 (989) 448 - ** - **
                    </p>
                </div>
            </div>
            <div className='Trip-main-container'>
                <div className='Trip-main-inner'>
                    <div className='Trip-main-title'>
                        <h1 className='Title-text'>
                            Нужно срочно отправить небольшой багаж в Москву
                        </h1>
                    </div>
                    <div className='Trip-main-subtitle'>
                        <p className='Subtitle-text'>
                            Требуется доставка багажа в Москву. Вес - 20 кг, размеры - 60x40x30 см.
                            Багаж готов к отправке и требует надежной доставки в центр Москвы.
                            Оплата — 1000р. Просьба связаться для обсуждения деталей
                        </p>
                    </div>
                </div>
            </div>
            <div className='Footer'>
                <div className='Footer-container'>
                    ......
                </div>
            </div>
        </div>
    );
}

export default Trip;