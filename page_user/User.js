import './User.css';

import UserPhone from './images/User-phone.svg';
import UserDtRegistr from './images/Data-registration.svg';
import UserTravels from './images/User-travels.svg';
import AppendFeedbackIcon from './images/Append-feetback-icon.svg';
import ClientFeedbackAvatar from './images/Client-feedback-avatar.svg';
import RatingStar from './images/Rating-star.svg';
import ClientFeedbackAvatar2 from './images/User-avatar2.png';
import ClientFeedbackAvatar3 from './images/User-avatar3.png';
import RateIcon from './images/Rate-icon.svg';
import UserAvatar from './images/User-avatar.png';

const User = () => {
    return (
        <div className='User-card_box'>
            <div className='User-card'>
                <div className='User-card-container'>
                    <div className='User-card-inner'>
                        <div className='User-card-avatar'>
                            <img src={UserAvatar} alt='' />
                        </div>
                        <div className='User-card-fullname'>
                            <p className='Fullname-text'>Магомедгаджи Алиасхабов</p>
                        </div>
                        <div className='User-card-rate'>
                            <div className='rate-icon'>
                                <img src={RateIcon} alt='' />
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
                    </div>
                </div>
            </div>
            <div className='Main'>
                <div className='Main-container'>
                    <div className='Main-inner'>
                        <div className='General-inf-about-user'>
                            <div className='General-inf-about-user-inner'>
                                <div className='General-inf'>
                                    <p> Общая информация</p>
                                </div>
                                <div className='Other-inf-about-user'>
                                    <div className='Other-inf-about-user-row'>
                                        <img src={UserPhone} alt='' />
                                        <p className='_green'> Номер подтвержден</p>
                                    </div>
                                    <div className='Other-inf-about-user-row'>
                                        <img src={UserDtRegistr} alt='' />
                                        <p> Дата регистрации: Январь, 2018</p>
                                    </div>
                                    <div className='Other-inf-about-user-row'>
                                        <img src={UserTravels} alt='' />
                                        <p> 20 Поездок</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='User-page-feedbacks'>
                            <div className='Feedbacks-container'>
                                <div className='Feedbacks-header'>
                                    <div className='Feedbacks-header-row'>
                                        <div className='Feedback-text'>
                                            <p>Отзывы</p>
                                            <div className='Feedback-degree'>
                                                <p>12 отзывов</p>
                                            </div>
                                        </div>
                                        <div className='Append-feedback'>
                                            <div className='Leave-feedback-icon'>
                                                <img src={AppendFeedbackIcon} alt='' />
                                            </div>
                                            <p> Оставить отзыв</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='Client-feedbacks'>
                                    <div className='Client-feedbacks-column'>
                                        <div className='Client-feedback-item'>
                                            <img className='Feedback-item-left-side' src={ClientFeedbackAvatar} alt='' />
                                            <div className='Feedback-item-right-side'>
                                                <p className='Client-nickname'>
                                                    Мухаммад
                                                </p>
                                                <div className='Feedback-rating-and-date'>
                                                    <div className='Feedback-stars'>
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                    </div>
                                                    <p className='Date-publication'>
                                                        11 октября 2023
                                                    </p>
                                                </div>
                                                <div className='Client-feedback-text'>
                                                    Оказался очень ответственным и внимательным к моей просьбе,
                                                    и все мои документы были доставлены в целости и сохранности.
                                                    Благодаря его помощи,
                                                    я смог решить свои дела вовремя и без лишних хлопот.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Client-feedback-item'>
                                            <img className='Feedback-item-left-side' src={ClientFeedbackAvatar2} alt='' />
                                            <div className='Feedback-item-right-side'>
                                                <p className='Client-nickname'>
                                                    Сабир
                                                </p>
                                                <div className='Feedback-rating-and-date'>
                                                    <div className='Feedback-stars'>
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                    </div>
                                                    <p className='Date-publication'>
                                                        11 октября 2023
                                                    </p>
                                                </div>
                                                <div className='Client-feedback-text'>
                                                    Был очень отзывчивым и согласился взять мои документы с собой в самолете.
                                                    Хотя он немного опоздал с доставкой из-за задержки рейса,
                                                    все мои документы были доставлены в целости и сохранности.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Client-feedback-item'>
                                            <img className='Feedback-item-left-side' src={ClientFeedbackAvatar3} alt='' />
                                            <div className='Feedback-item-right-side'>
                                                <p className='Client-nickname'>
                                                    Ахмед
                                                </p>
                                                <div className='Feedback-rating-and-date'>
                                                    <div className='Feedback-stars'>
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                    </div>
                                                    <p className='Date-publication'>
                                                        11 октября 2023
                                                    </p>
                                                </div>
                                                <div className='Client-feedback-text'>
                                                    Оказался очень ответственным и внимательным к моей просьбе,
                                                    и все мои документы были доставлены в целости и сохранности.
                                                    Благодаря его помощи,
                                                    я смог решить свои дела вовремя и без лишних хлопот.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Client-feedback-item'>
                                            <img className='Feedback-item-left-side' src={ClientFeedbackAvatar} alt='' />
                                            <div className='Feedback-item-right-side'>
                                                <p className='Client-nickname'>
                                                    Мухаммад
                                                </p>
                                                <div className='Feedback-rating-and-date'>
                                                    <div className='Feedback-stars'>
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                    </div>
                                                    <p className='Date-publication'>
                                                        11 октября 2023
                                                    </p>
                                                </div>
                                                <div className='Client-feedback-text'>
                                                    Оказался очень ответственным и внимательным к моей просьбе,
                                                    и все мои документы были доставлены в целости и сохранности.
                                                    Благодаря его помощи,
                                                    я смог решить свои дела вовремя и без лишних хлопот.
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Client-feedback-item'>
                                            <img className='Feedback-item-left-side' src={ClientFeedbackAvatar} alt='' />
                                            <div className='Feedback-item-right-side'>
                                                <p className='Client-nickname'>
                                                    Мухаммад
                                                </p>
                                                <div className='Feedback-rating-and-date'>
                                                    <div className='Feedback-stars'>
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                        <img src={RatingStar} alt='Stars' />
                                                    </div>
                                                    <p className='Date-publication'>
                                                        11 октября 2023
                                                    </p>
                                                </div>
                                                <div className='Client-feedback-text'>
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
            </div>
        </div>
    );
}

export default User;