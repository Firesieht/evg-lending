import React, {useState} from 'react';
import "./MainTemplate.css";
import image from "./images/Arrow.svg"
import icon from "./images/krasota.svg"
import school from "./images/school.svg"
import student from "./images/student.svg"
import teacher from "./images/teacher.svg"
import slide from "./images/slide.svg"
import clock from "./images/clock.svg"
import cloud from "./images/cloud.svg"
import support from "./images/suppurt.svg"
import classics from "./images/живая классика.svg"
import chem from "./images/chemToDay.svg"
import un from "./images/undegraund.svg"
import email from "./images/email.svg"
import tel from "./images/tel.svg"
import geo from "./images/geo.svg"
import vk from "./images/vk.svg"
import logo from "./images/logo.svg"



export const MainTemplate : React.FC = () =>{
    let vh = true
    if (document.documentElement.clientWidth < 700){
        vh = false 
    }else{
        vh = true 

    }

    let [visibleHeader, setVisibleHeader] = useState(vh)

    let avatars = [
        "Главная",
        "Описание",
        "Клиенты",
        "Функционал",
        "Партнеры",
        "Контакты",
    ]
    
    const simages = [
        <button id = "1" className="header-btn" onClick={(e:any)=>onClick(e)}><div id = "1" className="cards">Главная</div></button>,
        <button id = "2" className="header-btn" onClick={(e:any)=>onClick(e)}><div id = "2" className="cards">Описание</div></button>,
        <button id = "3" className="header-btn" onClick={(e:any)=>onClick(e)}><div id = "3" className="cards">Клиенты</div></button>,
        <button id = "4" className="header-btn" onClick={(e:any)=>onClick(e)}><div id = "4" className="cards">Функционал</div></button>,
        <button id = "5" className="header-btn" onClick={(e:any)=>onClick(e)}><div id = "5" className="cards">Партнеры</div></button>,
        <button id = "6" className="header-btn" onClick={(e:any)=>onClick(e)}><div id = "6" className="cards">Контакты</div></button>,
    ]
    let [buttons, setButtons] = useState(simages)
    
    function onLogoClick(){
        setVisibleHeader(true)
    }

    function onClick(e:any){
        if (document.documentElement.clientWidth < 700){
            setVisibleHeader(false)
        }

        const el = document.getElementById(e.target.id+"block");
        if (el != null && e.target.id === 1){
            el.scrollIntoView({block:"center",  behavior:"smooth"});
            console.log(el)
        }else if (el != null){
            el.scrollIntoView({block: "center",  behavior:"smooth"});
            console.log(el)
        }
        
        else{
            console.log("error")
        }
        setButtons(simages.map((el:any) =>{
            return e.target.id === el.props.id? <button id = {e.target.id} className="header-btn" onClick={(e:any)=>onClick(e)}><div className="cards colorized" id={e.target.id}>{avatars[Number(e.target.id)-1]}</div></button> : el
        }))
    }

    return(
        <div className="main">
            <div className="header">
                <div style={visibleHeader? {}: {display:"none"}}>{buttons}</div>
                
                <img src={logo} alt=" " className="logo" style={visibleHeader? {display:"none"}: {}} onClick={()=>onLogoClick()}></img>

            </div>
            <div className="template-body">
                <div className="main-screen" >
                    <div>
                        <p className="main-p" id="1block" >
                            <span className="text h1 m-h">EvgenApp</span> <br></br><br></br><br></br> 
                            <span className="text h2 m-txt">образовательная экосистема для учителей, помогающая автоматизировать процесс обучения</span>
                        </p>
                        <div className="adress">
                            <div className="text main-bottom">Консультация</div>
                            <button className="btn text"  onClick={()=>{
                            const el = document.getElementById("6block");

                            if (el != null){
                                el.scrollIntoView({block: "center",  behavior:"smooth"});
                                console.log(el)
                            }   
                        }}>написать</button>
                        </div>
                        <img src={image} alt=" " className="arrow" onClick={()=>{
                            const el = document.getElementById("2block");

                            if (el != null){
                                el.scrollIntoView({block: "center",  behavior:"smooth"});
                                console.log(el)
                            }   
                        }}></img>
                    </div>
                    <img src={icon} alt=" " className="icon"></img>
                </div>
                <div className="about" id="2block">
                    <p className="text about-p m-txt"> 
                        <span className="text h1-about m-h">О нас</span>
                        <br></br>
                        <br></br>
                        EvgenApp - образовательная экосистема для учителей, которая призвана улучшить ситуацию на рынке российского образования, посредством  внедрения новой системы тестов на рынок.
                    </p>
                    <div className="сlients" id="3block">
                        <h1 className="text h1-about m-h" style={{textAlign:"center"}}>Кому мы помогаем?</h1>
                        <div className="clients-wrapper">
                            <div>
                                <img src={teacher} alt=" " className="media-img"></img>
                                <div className="text clients m-txt">Учителя</div>
                            </div>
                            <div>
                                <img src={school} alt=" " className="media-img"></img>
                                <div className="text clients m-txt">Школы</div>
                            </div>
                            <div>
                                <img src={student} alt=" " className="media-img"></img>
                                <div className="text clients m-txt" >Ученики</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img alt=" " src={slide} width="100%"></img>
                <div className="question">
                    <h1 className="text question-h1 m-h">Какие вопросы мы решаем</h1>
                    <div className="question-wrapper">
                        <div className="text questions m-txt">Подготовка учеников к государственным экзаменам</div>
                        <div className="text questions m-txt">Уменьшение трат времени учителей</div>
                        <div className="text questions m-txt">Цифровизация образования</div>
                    </div>
                </div>
                <div className="demo" id="4block">
                    <h1 className="text demo-h1 m-h">Демо-ролик</h1>
                    <iframe className="iframe" src="https://www.youtube.com/embed/5egcmZXunH8" title="Заглушка" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="features">
                    <h1 className="text question-h1 m-h">Наши преимущества</h1>
                    <div className="clients-wrapper">
                            <div className="mini-avatar-wrap">
                                <img src={clock} alt=" " className="media-img"></img>
                                <div className="text questions features-t m-txt">Внедрение системы в сжатые сроки</div>
                            </div>
                            <div className="mini-avatar-wrap">
                                <img src={support} alt=" "className="media-img"></img>
                                <div className="text questions features-t m-txt">Техническая поддержка и обслуживание</div>
                            </div>
                            <div className="mini-avatar-wrap">
                                <img src={cloud} alt=" " className="media-img"></img>
                                <div className="text questions features-t m-txt" >Сотрудничество с клиентами удаленно</div>
                            </div>
                    </div>
                </div>
                <div className="partners" id="5block">
                    <h1 className="text demo-h1 m-h">Наши партнеры</h1>
                    <div className="clients-wrapper">
                        <div className="mini-avatar-wrap">
                            <a title="сайт Живой классики" href="https://youngreaders.ru/" rel="noreferrer" target="_blank"><img src={classics} alt=" " className="media-img"></img></a>
                            <div className="text questions features-t m-txt">Живая классика</div>
                        </div>
                        <div className="mini-avatar-wrap">
                        <a title="группа ВК ChemToday" href="https://vk.com/chemtoday" rel="noreferrer" target="_blank"><img src={chem} alt=" " className="media-img"></img></a>
                            <div className="text questions features-t m-txt">ChemToday</div>
                        </div>
                        <div className="mini-avatar-wrap">
                            <a  title="группа ВК Underground | Robotics" href="https://vk.com/underground_robotics" rel="noreferrer" target="_blank"><img src={un} alt=" " className="media-img"></img></a>
                            <div className="text questions features-t m-txt">Underground Robotics</div>
                        </div>
                    </div>
                </div>
                <img alt=" " src={slide} width="100%" className="rot"></img>
                <div className="contacts">
                    <div className="text h1-about m-h" style={{marginTop:"50px"}} id="6block">Контакты</div>
                    <div className="contacts-wrapper">
                        <div className="mini-cont-wrap">
                            <img src={tel} alt=" " height="100" width="100"></img>
                            <div className="text cnt m-txt">Тел. <a className="link" href="tel:+7 (911) 224-70-08">+7 (911) 224-70-08</a></div>
                        </div>
                        <div className="mini-cont-wrap">
                            <img src={email} alt=" " height="100" width="100"></img>
                            <div className="text cnt m-txt"><a className="link" href="mailto:support@evgenapp.ru">support@evgenapp.ru</a></div>
                        </div>
                        <div className="mini-cont-wrap">
                            <img src={geo} alt=" " height="100" width="100"></img>
                            <div className="text cnt m-txt"><a className="link" rel="noreferrer" target="_blank" href="https://goo.gl/maps/cea8yHcFYCNMYBv38">г. Санкт-Петербург, лыжный пер., д. 4, к. 2</a></div>
                        </div>
                    </div>
                    <a className="vk" href="https://vk.com/evgenapp" rel="noreferrer" target="_blank">
                        <img src={vk} alt=" " height="38" width="65"></img>
                        <div className="text vk-t m-vk">Наша группа ВКонтакте</div>
                    </a>
                </div>
            </div>
        </div>
    );
}