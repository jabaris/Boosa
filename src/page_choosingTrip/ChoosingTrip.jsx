import './ChoosingTrip.css';
import Arrow from './images/arrow.svg';
import TravelImg from './images/Travel_img.png';
import TravelIcon from './images/Travel_icon.svg';
import CarImg from './images/car_img.png';
import CarIcon from './images/car_icon.svg';
import CreateTrip from './images/Plus.svg';

const ChoosingTrip = () => {
    return(
        <div className="ChoosingTrip-wrapper">
            <div className="ChoosingTrip-wrapper_container">
                <div className="ChoosingTrip-wrapper_container_content">
                    <div className="ChoosingTrip-wrapper_container_content_title">
                        Выберите поездку
                    </div>
                    <form action="">
                        <div className="ChoosingTrip-wrapper_container_content_item">
                            <div className="ChoosingTrip-wrapper_container_content_item_inner">
                                <img src={TravelImg} alt="" className='ChoosingTrip-wrapper_container_content_item_inner_TravelImg'/>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_fromWhere">
                                    <p>Махачкала</p>
                                    <div className="ChoosingTrip-wrapper_container_content_item_inner_fromWhere_time">
                                        Отбытие: 14 ноября, 14:30
                                    </div>
                                </div>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_whatWay">
                                    <img src={TravelIcon} alt="" />
                                    <p>Поездом</p>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_ToWhere">
                                    <p>Москва</p>
                                    <div className="ChoosingTrip-wrapper_container_content_item_inner_ToWhere_time">
                                        Прибытие: 17 ноября, 17:30
                                    </div>
                                </div>
                            </div>
                            <input type="radio" name='ChoosingTrip-wrapper_container_content_item_checkbox' className='ChoosingTrip-wrapper_container_content_item_checkbox' />
                        </div>
                        <div className="ChoosingTrip-wrapper_container_content_item">
                            <div className="ChoosingTrip-wrapper_container_content_item_inner">
                                <img src={CarImg} alt="" className='ChoosingTrip-wrapper_container_content_item_inner_TravelImg'/>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_fromWhere">
                                    <p>Махачкала</p>
                                    <div className="ChoosingTrip-wrapper_container_content_item_inner_fromWhere_time">
                                        Отбытие: 14 ноября, 14:30
                                    </div>
                                </div>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_whatWay">
                                    <img src={CarIcon} alt="" />
                                    <p>Машиной</p>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_ToWhere">
                                    <p>Москва</p>
                                    <div className="ChoosingTrip-wrapper_container_content_item_inner_ToWhere_time">
                                        Прибытие: 17 ноября, 17:30
                                    </div>
                                </div>
                            </div>
                            <input type="radio" name='ChoosingTrip-wrapper_container_content_item_checkbox' className='ChoosingTrip-wrapper_container_content_item_checkbox' />
                        </div>
                        <div className="ChoosingTrip-wrapper_container_content_item">
                            <div className="ChoosingTrip-wrapper_container_content_item_inner">
                                <img src={TravelImg} alt="" className='ChoosingTrip-wrapper_container_content_item_inner_TravelImg'/>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_fromWhere">
                                    <p>Махачкала</p>
                                    <div className="ChoosingTrip-wrapper_container_content_item_inner_fromWhere_time">
                                        Отбытие: 14 ноября, 14:30
                                    </div>
                                </div>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_whatWay">
                                    <img src={TravelIcon} alt="" />
                                    <p>Поездом</p>
                                    <img src={Arrow} alt="" />
                                </div>
                                <div className="ChoosingTrip-wrapper_container_content_item_inner_ToWhere">
                                    <p>Москва</p>
                                    <div className="ChoosingTrip-wrapper_container_content_item_inner_ToWhere_time">
                                        Прибытие: 17 ноября, 17:30
                                    </div>
                                </div>
                            </div>
                            <input type="radio" name='ChoosingTrip-wrapper_container_content_item_checkbox' className='ChoosingTrip-wrapper_container_content_item_checkbox' />
                        </div>
                        <a href="#A" className='ChoosingTrip-wrapper_container_content_createTrip'>
                            <img src={CreateTrip} alt="Plus" />
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

export default ChoosingTrip;