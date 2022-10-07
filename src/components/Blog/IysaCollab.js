import React from 'react';
// import Blogrightsidebar from './Blogrightsidebar';
import ServiceData from '../Service/ServiceData';
const Bloglists =()=>{
    return(
        <section className="blog_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_sidebar_left">
                        <div className="blog_single mb_50">
                            <img className="img-fluid" src={require('../../img/blog-grid/isif2021.jpg')} alt=""/>
                            <div className="blog_content">
                                <div className="post_date">
                                    <h2>10 <span>March</span></h2>
                                </div>
                                <div className="entry_post_info">
                                    By: <a href=".#">Admin</a>
                                    <a href="https://github.com/redheet">Redheet</a>
                                </div>
                                <a href=".#">
                                    <h5 className="f_p f_size_20 f_500 t_color mb-30">IYSA collaboration with Indonesia International Institute for Life Sciences</h5>
                                </a>
                                <p className="f_400 mb-30">By looking at the development and knowledge of children
                                today about science, invention and innovation, especially in
                                the field of science, it requires us to know the extent of the
                                student’s insights, knowledge and abilities in applying their
                                knowledge of science.
                                Therefore, our Indonesian Young Scientist Association (IYSA)
                                Indonesia will hold an international-level Invention
                                competition called “International Science and Invention Fair
                                (ISIF)" as the right learning platform to nurture our young
                                talented inventors who are active, creative and innovative.
                                Indonesian Young Scientist Association (IYSA) is an
                                institution that moves on the development of the potential,
                                talents and creativity of the Indonesian students on
                                competition and non-scientific competition domestically or
                                abroad.</p>
                                <p className="f_400 mb_40">Therefore, IYSA stands as a form of our deep concern
                                provide opportunities for Indonesian students specifically, in
                                order to bring up potential and the skills needed and
                                soul-building competition in themselves. We do this to create
                                improvements in life. Because, we believe that every student
                                has potential which can be developed.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <Blogrightsidebar ServiceData={ServiceData}/>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default Bloglists;