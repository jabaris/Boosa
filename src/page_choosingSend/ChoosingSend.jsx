import './ChoosingSend.css';
import Arrow from './images/arrow.svg';
import TravelIcon from './images/Travel_icon.svg';
import PlaneIcon from './images/Plane_icon.svg';
import TermsDone from './images/TermsDone.svg';
import CreateSend from './images/Plus.svg';

const ChoosingSend = () => {
    return(
        <div className="ChoosingSend-wrapper">
            <div className="ChoosingSend-wrapper_container">
                <div className="ChoosingSend-wrapper_container_content">
                    <div className="ChoosingSend-wrapper_container_content_title">
                        Выберите отправку
                    </div>
                    <form action="">
                        <div className="ChoosingSend-wrapper_container_content_item">
                            <div className="ChoosingSend-wrapper_container_content_item_inner">
                                <h1 className="ChoosingSend-wrapper_container_content_item_inner_title">Нужно срочно отправить документы в формате А4</h1>
                                <div className="ChoosingSend-wrapper_container_content_item_inner_fromWhere">
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_city'>Махачкала</p>
                                    <img src={TravelIcon} alt="" />
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_train'>Поездом,</p>
                                    <img src={PlaneIcon} alt="" />
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_plane'>Самолетом</p>
                                    <img src={Arrow} alt="" />
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_city'>Москва</p>
                                    <div className="ChoosingSend-wrapper_container_content_item_inner_ToWhere_time">
                                        Прибытие: 17 ноября, 17:30
                                    </div>
                                </div>
                                <div className="ChoosingSend-wrapper_container_content_item_inner_terms">
                                    <div className="ChoosingSend-wrapper_container_content_item_inner_terms_items">
                                        <img src={TermsDone} alt="" />
                                        <p>Встретят в городе отправки</p>
                                    </div>
                                    <div className="ChoosingSend-wrapper_container_content_item_inner_terms_items">
                                        <img src={TermsDone} alt="" />
                                        <p>Доставят до вашего дома</p>
                                    </div>
                                </div>
                            </div>
                            <input type="radio" name='ChoosingSend-wrapper_container_content_item_radio' className='ChoosingTrip-wrapper_container_content_item_radio' />
                        </div>
                        <div className="ChoosingSend-wrapper_container_content_item">
                            <div className="ChoosingSend-wrapper_container_content_item_inner">
                                <h1 className="ChoosingSend-wrapper_container_content_item_inner_title">Нужно срочно отправить документы в формате А4</h1>
                                <div className="ChoosingSend-wrapper_container_content_item_inner_fromWhere">
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_city'>Махачкала</p>
                                    <img src={TravelIcon} alt="" />
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_train'>Поездом,</p>
                                    <img src={PlaneIcon} alt="" />
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_plane'>Самолетом</p>
                                    <img src={Arrow} alt="" />
                                    <p className='ChoosingSend-wrapper_container_content_item_inner_fromWhere_city'>Москва</p>
                                    <div className="ChoosingSend-wrapper_container_content_item_inner_ToWhere_time">
                                        Прибытие: 17 ноября, 17:30
                                    </div>
                                </div>
                                <div className="ChoosingSend-wrapper_container_content_item_inner_terms">
                                    <div className="ChoosingSend-wrapper_container_content_item_inner_terms_items">
                                        <img src={TermsDone} alt="" />
                                        <p>Встретят в городе отправки</p>
                                    </div>
                                    <div className="ChoosingSend-wrapper_container_content_item_inner_terms_items">
                                        <img src={TermsDone} alt="" />
                                        <p>Доставят до вашего дома</p>
                                    </div>
                                </div>
                            </div>
                            <input type="radio" name='ChoosingSend-wrapper_container_content_item_radio' className='ChoosingTrip-wrapper_container_content_item_radio' />
                        </div>
                        <a href="#A" className='ChoosingTrip-wrapper_container_content_createTrip'>
                            <img src={CreateSend} alt="Plus" />
                            Создать поездку
                        </a>
                        <div className="ChoosingTrip-wrapper_container_content_submitBtn">
                            <button type="submit">Предложить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChoosingSend;