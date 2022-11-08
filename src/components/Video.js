import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const video = () => {
  return (
    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="AFTER EVENT 2022"
          TitleP="INTERNATIONAL SCIENCE AND INVENTION FAIR 2022

          International Science and Invention Fair or known as ISIF is the biggest event organized by IYSA. In this year IYSA hold again this event for the 4th time and we holding it by hybrid online and offline in Bali, at Ganesha University of Education, Bali.
          
          As the first and biggest event held by IYSA, ISIF has a special place for young researchers. This is proven by the number of participants we got at this event. In 2022 we have 507 participants from 32 countries. 
          
          Several countries participating in ISIF include Indonesia, Bangladesh, Lebanon, Malaysia, Thailand, Bulgaria, India, Puerto Rico, South Korea, Philippines, Iran, United Arab Emirates, Turkey, Egypt, Columbia, Belarusia, Romania, Brazil, Algeria, Saudi Arabia, Paraguay, Mexico, Nigeria, Nepal, Hong Kong, Serbia, Vietnam, Italy, Bolivia, Macau, China, Singapore, Kazakhstan, and 9 countries (Indonesia, Malaysia, Vietnam, Paraguay,Bangladesh,Mexico, Columbia,  Romania, and Iran)  participated face to face (offline) in ISIF Bali this year.
          
          ISIF 2022 has been held for 5 days from the opening ceremony and booth set-up on November 1, 2022, online and offline judging session on November 2, 2022, inventors talk and webinar with Mr. Made Windu Antara Kesiman, S.T., M.SC., PH.D, awarding ceremony on November 4, 2022, and excursion on the last day on November 5, 2022. 
          
          We visited several places in Bali such as Ulun Danu Beratan Temple, Secret Garden Bedugul, the Krisna Gift and Souvenir Center and the last destinastion, dinner and watched Kecak and Fire Dance in Jimbaran Beach.
          
          There are so many awards that we have given in this event such as :
          Gold Medal
          Silver Medal
          Bronze Medal
          IYSA Special Award
          MIICA Special Award
          Doja Srekja Macedonia Special Award
          MYSO Special Award
          SMET Grup Singapore Special Award
          Bach Khoa Maths and Science Club Special Award
          IARC Special Award
          IARC Semi Grand Award
          MIICA Semi Grand Award
          IYSA Semi Grand Award
          IYSA Grand Prize
          UNDIKSHA Grand Award
          IYSA Grand Award
          
          Thank you to all teams who have participated in ISIF 2022 and congratulations to all winners. 
          
          Keep innovating and developing yourself because the future is still waiting for you. See you in ISIF 2023!"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="video_content">
          <div className="video_info">
            <div className="ovarlay_color"></div>
            <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=OLkXTJuKpOs">
              <i className="arrow_triangle-right"></i>
            </a>
            <h2>ISIF</h2>
          </div>
          <img className="video_leaf" src={require('../img/new/leaf.png')} alt="" />
          <img className="cup" src={require('../img/new/cup.png')} alt="" />
        </div>
      </div>
    </section>
  );
};

export default video;
