import './Chat.css';
import Boosa from './images/Boosa-blue.svg';
import UserIcon from './images/User-card.svg';
import MessageIcon from './images/Message-icon.svg';
import BackIcon from './images/Back-icon-blue.svg';
import UserAvatar from './images/User-avatar.png';
import PasteIcon from './images/PasteIcon.svg';
import SendBtn from './images/SendIcon.svg';
import SendBtnMobile from '../Images/Chat_page_sendBtn-blue.svg';

const Chat = () => {
    return (
        <div className="Chat-wrapper">
            <div className="Chat-wrapper_header_container_personalCard_container_inner">
                <img src={UserAvatar} alt='Avatar' />
                <div className="Chat-wrapper_header_container_personalCard_container_inner_fullName">
                    Магомедгаджи Алиасхабов
                </div>
                <div className="Chat-wrapper_header_container_personalCard_container_inner_chatWhithHim">
                    Чат с пользователем
                </div>
                <div className="Chat-wrapper_header_container_personalCard_container_inner_phone">
                    <p>+7 (989) 448 - ** - **</p>
                </div>
            </div>
            <div className="Chat-wrapper_main">
                <div className="Chat-wrapper_main_container">
                    <div className="Chat-wrapper_main_container_dialogBox">
                        <div className="Chat-wrapper_main_container_dialogBox_inner">
                            <div className="Chat-wrapper_main_container_dialogBox_inner_sendMessage">
                                <div>17:00</div>
                                <div className='Chat-wrapper_main_container_dialogBox_inner_sendMessage_text'>
                                    <p>Здравствуйте, сможете взять мои документы?</p>
                                </div>
                            </div>
                            <div className="Chat-wrapper_main_container_dialogBox_inner_getMessage">
                                <div className="Chat-wrapper_main_container_dialogBox_inner_getMessage_text">
                                    <p>Здравствуйте</p>
                                </div>
                                <div>17:03</div>
                            </div>
                            <div className="Chat-wrapper_main_container_dialogBox_inner_getMessage Last-getMessage">
                                <div className="Chat-wrapper_main_container_dialogBox_inner_getMessage_text">
                                    <p>Да конечно</p>
                                </div>
                                <div>17:03</div>
                            </div>
                            <div className="Chat-wrapper_main_container_dialogBox_inner_sendMessage Last-sendMessage">
                                <div>17:00</div>
                                <div className='Chat-wrapper_main_container_dialogBox_inner_sendMessage_text'>
                                    <p>Отлично 👍</p>
                                </div>
                            </div>
                            <div className="Chat-wrapper_main_container_dialogBox_inner_areaInput">
                                <div className="Chat-wrapper_main_container_dialogBox_inner_areaInput_paste">
                                    <img src={PasteIcon} alt="Paste" />
                                </div>
                                <form action="#">
                                    <input type="text" name="chat" id="chat" className='Chat-wrapper_main_container_dialogBox_inner_areaInput_input' placeholder='Введите сообщение' required />
                                    <button type="submit" className='Chat-wrapper_main_container_dialogBox_inner_areaInput_btn'><img src={SendBtn} alt="Send" /> <img src={SendBtnMobile}  className='SendBtnMobile' alt="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chat;