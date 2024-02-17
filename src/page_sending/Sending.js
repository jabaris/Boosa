import './Sending.css';
import Boosa from './images/Boosa.svg';
import Login from './images/Login.svg';
import Message from './images/Message.svg';
import BackIcon from './images/Back-icon.svg';
import Vector5 from './images/Vector 5.png';
import Vector6 from './images/Vector 6.png';
import Train1 from './images/Train1.svg';
import Plane from './images/Plane.svg';
import Arrow from './images/Arrow.svg';
import Check from './images/Check.svg';
import Avatar from './images/Usercard.svg';
import Score from './images/Score.svg';
import BtnNext from './images/btnNext.svg';
import LargeImg from './images/Large-img.png';
import Img1 from './images/img1.png';
import Img2 from './images/img2.png';
import Img3 from './images/img3.png';


const Sending = () => { 
    return(
        <div className='Wrapper'>
            <div className='Wrapper-background'>
                <div className='Sending-container _container'>
                    <div className='Sending-header'>
                        <img src={Boosa} className='Logo-boosa' alt='Boosa'/>
                        <div className='Sending-icons'>
                            <p className='Login-btn'>Войти</p>
                            <img src={Message} className='Sending-message' alt='message'/>
                            <img src={Login} className='Sending-user' alt='User'/>
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
            <div className='Sending-setting_container'>
                <div className='Sending-setting'>
                    <div className='Sending-prize'>
                        <p className='Prize-text'>Вознаграждение</p>
                        <p className='Prize-cost'>1000₽</p>
                    </div>
                    <div className='Sending-setting_inner'>
                        <div className='City-fromWhere'>
                            <div className='City'>Махачкала</div>
                            <div className='Address'>ул. Параульская, д. 13</div>
                        </div>
                        <div className='Sending-what'>
                            <img src={Train1} className='Sending-train-img' alt=''/>
                            <span className='Sending-train_text'>Поездом,</span>
                            <img src={Plane} className='Sending-plane-img' alt=''/>
                            <span className='Sending-plane_text'>Самолетом</span>
                            <img src={Arrow} className='Arrow-img' alt='' />
                        </div>
                        <div className='City-toWhere'>
                            <div className='City'>Москва</div>
                            <div className='Address'>ул Варшавская, 29к1</div>
                        </div>
                    </div>
                    <div className='Sending-time'>
                        <div className='TimeSending-left'>с: 17 ноября —</div>
                        <div className='TimeSending-right'>до: 30 ноября</div>
                    </div>
                    <div className='Sending-terms'>
                        <div className='Btn-terms-left'>
                            <img src={Check} alt='Check'/>
                            <p className='Terms-text'>Встретят в городе отправки</p>
                        </div>
                        <div className='Btn-terms-right'>
                            <img src={Check} alt='Check'/>
                            <p className='Terms-text'>Доставят до вашего дома</p>
                        </div>
                    </div>
                    <div className='Btn-take-package'>
                        <div className='Btn-take-package-text'>
                            Взять посылку
                        </div>
                    </div>
                </div>
            </div>

            <div className='Sending-user-card-container'>
                <div className='Sending-user-card'>
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

            <div className='Main-content'>
                <div className='Main-content-container'>
                    <div className='Main-content-inner'>
                        <div className='Large-img'>
                            <img src={LargeImg} alt=''/>
                        </div>
                        <div className='Main-content-right'>
                            <div className='content-right-text'>
                                <h1 className='text-title'>
                                    Нужно срочно отправить небольшой багаж в Москву
                                </h1>
                                <p className='text-subtitle'>
                                    Требуется доставка багажа в Москву. Вес - 20 кг, размеры - 60x40x30 см.
                                    Багаж готов к отправке и требует надежной доставки в центр Москвы.
                                    Оплата — 1000р. Просьба связаться для обсуждения деталей
                                </p>
                            </div>
                            <div className='Content-img-row'>
                                <ul className='List-img'>
                                    <li className='Content-list-item'>
                                        <img src={Img1} alt=''/>  
                                    </li>
                                    <li className='Content-list-item'>
                                        <img src={Img2} alt=''/>  
                                    </li>
                                    <li className='Content-list-item'>
                                        <img src={Img3} alt=''/>  
                                    </li>
                                    <li className='Content-list-item'>
                                        <img src={Img1} alt=''/>  
                                    </li>
                                    <li className='Content-list-item'>
                                        <img src={Img2} alt=''/>  
                                    </li>
                                    <li className='Content-list-item'>
                                        <img src={Img3} alt=''/>  
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Footer'>
                <div className='Fotter-container'>
                    ......
                </div>
            </div>
        </div>
        
        
    );
}

export default Sending