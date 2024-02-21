import './Personal.css';
import Boosa from './images/Boosa-blue.svg';
import PersonalIcon from './images/Personal-icon.svg';
import MessageIcon from './images/Message-icon.svg';
import BackIcon from './images/Back-icon-blue.svg';
import RateIcon from './images/Rate-icon.svg';
import PersonalAvatar from './images/Personal-avatar.png';
import PersonalExit from './images/Exit.svg';
import CheckSuccess from './images/Check-circle.svg';
import Warning from './images/Warning-circle.svg';
import Pencil from './images/Pensil.svg';
import Email from './images/Email.svg';
import Phone from './images/Phone.svg';
import TravelImg from './images/Travel_img.png';
import TravelIcon from './images/Travel_icon.svg';
import CarImg from './images/car_img.png';
import CarIcon from './images/car_icon.svg';
import Arrow from './images/arrow.svg';
import PlaneIcon from './images/Plane_icon.svg';
import CheckBox from './images/CheckBox.svg';
import ClientFeedbackAvatar from './images/Client-feedback-avatar.svg';
import RatingStar from './images/Rating-star.svg';
import ClientFeedbackAvatar2 from './images/User-avatar2.png';
import ClientFeedbackAvatar3 from './images/User-avatar3.png';
 
const Personal = () => {
    return(
        <div className='Wrapper'>
            <div className='Header'>
                <div className='Header-background'>
                    <div className='Header-container'>
                        <div className='Header-row'>
                            <div className='Header-logo'>
                                <img src={Boosa} alt=''/>
                            </div>
                            <div className='Header-right-part'>
                                <p className='Header-user-name'>
                                    Аслудин Амиров
                                </p>
                                <div className='Right-part-icons'>
                                    <img src={PersonalIcon} className='User-icon' alt=''/>
                                    <img src={MessageIcon} className='Message-icon' alt=''/>
                                </div>
                            </div>
                        </div>
                        <div className='Back-btn'>
                            <img src={BackIcon} className='Back-icon' alt='Back'/>
                            <a href='#a' className='Back-link'>Назад</a>
                        </div>
                        <div className='Personal-card'>
                            <div className='Personal-card-container'>
                                <div className='Personal-card-inner'>
                                    <div className='Personal-card-avatar'>
                                        <img src={PersonalAvatar} alt=''/>
                                        <div className='Personal-card_avatar_pencil'>
                                            <img src={Pencil} alt="" />
                                        </div>
                                    </div>
                                    <div className='Personal-card-fullname'>
                                        <p className='Fullname-text'>Аслудин Амиров</p>
                                    </div>
                                    <div className='Personal-card-rate'>
                                        <div className='rate-icon'>
                                            <img src={RateIcon} alt=''/>
                                        </div>
                                        <div className='rate'>
                                            <p className='rate-text'>
                                                4.5 / 5
                                            </p>
                                        </div>
                                    </div>
                                    <div className='Feetbacks'>
                                        <p className='Feetbacks-text'>
                                            12 отзывов
                                        </p>
                                    </div>
                                    <div className='Personal-card_back'>
                                        <a href='#a' className='Personal-card_back_btn'>
                                            Выход
                                        </a>
                                        <img src={PersonalExit} className='Personal-card_back_icon' alt=''/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Main'>
                <div className='Main-container'>
                    <div className='Main-container_inner'>
                        <div className='Main-container_inner_contactInformation'>
                            <div className='Main-container_inner_contactInformation_inner'>
                                <div className='Main-container_inner_contactInformation_inner_title'>
                                    Контактная информация
                                </div>
                                <div className='Main-container_inner_contactInformation_inner_data'>
                                    <div className='Main-container_inner_contactInformation_inner_data_email'>
                                        <img src={CheckSuccess} alt=''/>
                                        <div className='Main-container_inner_contactInformation_inner_data_email_row'>
                                            <img src={Email} alt=""/>
                                            <p>magomedgaji@mail.ru</p>
                                            <img src={Pencil} alt="" />
                                        </div>
                                    </div>
                                    <div className='Main-container_inner_contactInformation_inner_data_phone'>
                                        <img src={Warning} alt=''/>
                                        <div className='Main-container_inner_contactInformation_inner_data_phone_row'>
                                            <img src={Phone} alt=""/>
                                            <p> <span className='First-number'>+7 </span>(989) 213-12-32</p>
                                            <img src={Pencil} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Main-container_inner_travelHistory'>
                            <div className='Main-container_inner_travelHistory_inner'>
                                <div className="Main-container_inner_travelHistory_inner_title">
                                    <p>История поездок</p>
                                    <div className="Main-container_inner_travelHistory_inner_title_degree">
                                        <p>15 отзывов</p>
                                    </div>
                                </div>
                                <div className="Main-container_inner_travelHistory_inner_column">
                                    <div className="Main-container_inner_travelHistory_inner_column_item">
                                        <img src={TravelImg} alt="" className="Main-container_inner_travelHistory_inner_column_item_img" />
                                        <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere">
                                            <p>Махачкала</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere_time">
                                                Отбытие: 14 ноября, 14:30
                                            </div>
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_whatWay">
                                            <img src={TravelIcon} alt="" />
                                            <p>Поездом</p>
                                            <img src={Arrow} alt="" />
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere">
                                            <p>Москва</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere_time">
                                                Прибытие: 17 ноября, 17:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_travelHistory_inner_column_item">
                                        <img src={CarImg} alt="" className="Main-container_inner_travelHistory_inner_column_item_img" />
                                        <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere">
                                            <p>Махачкала</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere_time">
                                                Отбытие: 14 ноября, 14:30
                                            </div>
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_whatWay">
                                            <img src={CarIcon} alt="" />
                                            <p>На авто</p>
                                            <img src={Arrow} alt="" />
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere">
                                            <p>Москва</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere_time">
                                                Прибытие: 17 ноября, 17:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_travelHistory_inner_column_item">
                                        <img src={TravelImg} alt="" className="Main-container_inner_travelHistory_inner_column_item_img" />
                                        <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere">
                                            <p>Махачкала</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere_time">
                                                Отбытие: 14 ноября, 14:30
                                            </div>
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_whatWay">
                                            <img src={TravelIcon} alt="" />
                                            <p>Поездом</p>
                                            <img src={Arrow} alt="" />
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere">
                                            <p>Москва</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere_time">
                                                Прибытие: 17 ноября, 17:30
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_travelHistory_inner_column_item">
                                        <img src={CarImg} alt="" className="Main-container_inner_travelHistory_inner_column_item_img" />
                                        <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere">
                                            <p>Махачкала</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_fromWhere_time">
                                                Отбытие: 14 ноября, 14:30
                                            </div>
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_whatWay">
                                            <img src={CarIcon} alt="" />
                                            <p>На авто</p>
                                            <img src={Arrow} alt="" />
                                        </div>
                                        <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere">
                                            <p>Москва</p>
                                            <div className="Main-container_inner_travelHistory_inner_column_item_ToWhere_time">
                                                Прибытие: 17 ноября, 17:30
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Main-container_inner_sendingHistory">
                            <div className="Main-container_inner_sendingHistory_inner">
                                <div className="Main-container_inner_sendingHistory_inner_title">
                                    <p>История отправок</p>
                                    <div className="Main-container_inner_sendingHistory_inner_title_degree">
                                        <p>1 отправка</p>
                                    </div>
                                </div>
                                <div className="Main-container_inner_sendingHistory_inner_column">
                                    <div className="Main-container_inner_sendingHistory_inner_column_item">
                                        <div className="Main-container_inner_sendingHistory_inner_column_item_title">
                                            Нужно срочно отправить документы в формате А4
                                        </div>
                                        <div className="Main-container_inner_sendingHistory_inner_column_item_termsOfSending">
                                            <div className="Main-container_inner_sendingHistory_inner_column_item_termsOfSending_cityFromWhere">
                                                Махачкала
                                            </div>
                                            <img src={TravelIcon} alt="" />
                                            <p>Поездом,</p>
                                            <img src={PlaneIcon} alt="" />
                                            <p>Самолетом</p>
                                            <img src={Arrow} alt="" />
                                            <div className="Main-container_inner_sendingHistory_inner_column_item_termsOfSending_cityToWhere">
                                                Москва
                                            </div>
                                            <div className="Main-container_inner_sendingHistory_inner_column_item_termsOfSending_time">
                                                с: 17 ноября - до: 30 ноября
                                            </div>
                                        </div>
                                        <div className="Main-container_inner_sendingHistory_inner_column_item_terms">
                                            <div className="Main-container_inner_sendingHistory_inner_column_item_terms_item">
                                                <img src={CheckBox} alt="" />
                                                <p>Встретят в городе отправки</p>
                                            </div>
                                            <div className="Main-container_inner_sendingHistory_inner_column_item_terms_item">
                                                <img src={CheckBox} alt="" />
                                                <p>Доставят до вашего дома</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Main-container_inner_feedbacks">
                            <div className="Main-container_inner_feedbacks_inner">
                                <div className="Main-container_inner_feedbacks_inner_title">
                                    <p>Отзывы</p>
                                    <div className="Main-container_inner_feedbacks_inner_title_digree">
                                        12 отзывов
                                    </div>
                                </div>
                                <div className="Main-container_inner_feedbacks_inner_column">
                                    <div className="Main-container_inner_feedbacks_inner_column_item">
                                        <img src={ClientFeedbackAvatar} alt="" className="Main-container_inner_feedbacks_inner_column_item_avatar" />
                                        <div className="Main-container_inner_feedbacks_inner_column_item_content">
                                            <p className="Main-container_inner_feedbacks_inner_column_item_content_nickname">
                                                Мухаммад
                                            </p>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate">
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_stars">
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                </div>
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_datePublication">
                                                    11 октября  2023
                                                </div>
                                            </div>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_text">
                                                Оказался очень ответственным и внимательным к моей просьбе,
                                                и все мои документы были доставлены в целости и сохранности.
                                                Благодаря его помощи,
                                                я смог решить свои дела вовремя и без лишних хлопот.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_feedbacks_inner_column_item">
                                        <img src={ClientFeedbackAvatar2} alt="" className="Main-container_inner_feedbacks_inner_column_item_avatar" />
                                        <div className="Main-container_inner_feedbacks_inner_column_item_content">
                                            <p className="Main-container_inner_feedbacks_inner_column_item_content_nickname">
                                                Сабир
                                            </p>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate">
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_stars">
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    
                                                </div>
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_datePublication">
                                                    11 октября  2023
                                                </div>
                                            </div>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_text">
                                                Оказался очень ответственным и внимательным к моей просьбе,
                                                и все мои документы были доставлены в целости и сохранности.
                                                Благодаря его помощи,
                                                я смог решить свои дела вовремя и без лишних хлопот.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_feedbacks_inner_column_item">
                                        <img src={ClientFeedbackAvatar3} alt="" className="Main-container_inner_feedbacks_inner_column_item_avatar" />
                                        <div className="Main-container_inner_feedbacks_inner_column_item_content">
                                            <p className="Main-container_inner_feedbacks_inner_column_item_content_nickname">
                                                Ахмад
                                            </p>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate">
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_stars">
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    
                                                    
                                                </div>
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_datePublication">
                                                    11 октября  2023
                                                </div>
                                            </div>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_text">
                                                Оказался очень ответственным и внимательным к моей просьбе,
                                                и все мои документы были доставлены в целости и сохранности.
                                                Благодаря его помощи,
                                                я смог решить свои дела вовремя и без лишних хлопот.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_feedbacks_inner_column_item">
                                        <img src={ClientFeedbackAvatar2} alt="" className="Main-container_inner_feedbacks_inner_column_item_avatar" />
                                        <div className="Main-container_inner_feedbacks_inner_column_item_content">
                                            <p className="Main-container_inner_feedbacks_inner_column_item_content_nickname">
                                                Дауд
                                            </p>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate">
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_stars">
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    
                                                </div>
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_datePublication">
                                                    11 октября  2023
                                                </div>
                                            </div>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_text">
                                                Оказался очень ответственным и внимательным к моей просьбе,
                                                и все мои документы были доставлены в целости и сохранности.
                                                Благодаря его помощи,
                                                я смог решить свои дела вовремя и без лишних хлопот.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Main-container_inner_feedbacks_inner_column_item">
                                        <img src={ClientFeedbackAvatar} alt="" className="Main-container_inner_feedbacks_inner_column_item_avatar" />
                                        <div className="Main-container_inner_feedbacks_inner_column_item_content">
                                            <p className="Main-container_inner_feedbacks_inner_column_item_content_nickname">
                                                Аскар
                                            </p>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate">
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_stars">
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    <img src={RatingStar} alt="" />
                                                    
                                                </div>
                                                <div className="Main-container_inner_feedbacks_inner_column_item_content_starsAndDate_datePublication">
                                                    11 октября  2023
                                                </div>
                                            </div>
                                            <div className="Main-container_inner_feedbacks_inner_column_item_content_text">
                                                Оказался очень ответственным и внимательным к моей просьбе,
                                                и все мои документы были доставлены в целости и сохранности.
                                                Благодаря его помощи,
                                                я смог решить свои дела вовремя и без лишних хлопот.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <div className="Footer-container">
                    .................
                </div>
            </div>
        </div>
    );
}

export default Personal;