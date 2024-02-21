import './ChatList.css';
import Boosa from './images/Boosa-blue.svg';
import UserIcon from './images/User-card.svg';
import MessageIcon from './images/Message-icon.svg';
import BackIcon from './images/Back-icon-blue.svg';
import Avatar from './images/ChatList_avatar.png';

const ChatList = () => {
    return(
        <div className="ChatList-wrapper">
            <div className="Chat-wrapper_header">
                <div className="Chat-wrapper_header_container">
                    <div className="Chat-wrapper_header_container_menu">
                        <div className="Chat-wrapper_header_container_menu_logo">
                            <img src={Boosa} alt="Boosa" />
                        </div>
                        <div className="Chat-wrapper_header_container_menu_list">
                            <div className="Chat-wrapper_header_container_menu_list_userName">
                                Аслудин Амиров
                            </div>
                            <div className="Chat-wrapper_header_container_menu_list_icons">
                                <img src={UserIcon} alt="" />
                                <img src={MessageIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Chat-wrapper_header_container_backBtn">
                        <img src={BackIcon} alt="Back" />
                        <a href="#A" className="Chat-wrapper_header_container_backBtn_link">
                            Назад
                        </a>
                    </div>
                </div>
            </div>
            <div className="ChatList-wrapper_main">
                <div className="ChatList-wrapper_main_container">
                        <div className="ChatList-wrapper_main_container_columns">
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                            <div className="ChatList-wrapper_main_container_columns_item">
                                <img src={Avatar} alt="" />
                                <div className="ChatList-wrapper_main_container_columns_item_content">
                                    <div className="ChatList-wrapper_main_container_columns_item_content_name">
                                        Мухаммад
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_datePublication">
                                        11 октября 2023  17:00
                                    </div>
                                    <div className="ChatList-wrapper_main_container_columns_item_content_text">
                                        Здравствуйте, сможете взять мои документы
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default ChatList;