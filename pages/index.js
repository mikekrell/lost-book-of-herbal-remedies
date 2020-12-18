import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Link } from 'react-scroll';

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>The Lost Book of Herbal Remedies | Cure your Ailments Naturally.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Treating diseases and staying healthy can be expensive. This is true especially if the illness is serious. However, many people are not aware that diseases and illnesses can be treated with herbs and medicinal ingredients. If you want to naturally treat diseases and stay healthy, The Lost Book of Herbal Remedies can be the answer to your problem."></meta>
        <meta property="og:title" content="The Lost Book of Herbal Remedies | Cure your Ailments Naturally" key="title" />
        <meta property="og:description" content="Treating diseases and staying healthy can be expensive. This is true especially if the illness is serious. However, many people are not aware that diseases and illnesses can be treated with herbs and medicinal ingredients. If you want to naturally treat diseases and stay healthy, The Lost Book of Herbal Remedies can be the answer to your problem." key="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navigation}>
        <div>
            <div className={styles.navhead}>Lost Book of Herbal Remedies</div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.header_image}>
            <img width="443" height="420" src='1608154908.png' alt="3D Book" />
          </div>
          <div className={styles.header_cta}>
            <h2 className={styles.header_h2}>Discover The Forgotten Power of Plants TODAY ONLY: <span style={{ color: 'red' }}>$37</span></h2>
            <Link className={styles.cta} to="watchvideocta" smooth={true}><div style={{ fontWeight: 'bold', fontSize: '.75em', width: '280px', backgroundColor: "#f59e0b"}}>CLICK HERE TO GET IT NOW! </div></Link>
            <p className={styles.disclaimer}>*Disclaimer: Individual results may vary. The information on this website has not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. </p>
        </div>

      </div>
      <div className={styles.section1}>
          <h1 className={styles.section1_h1} >The Lost Book of Herbal Remedies Review</h1>
          <p dir="ltr">Treating diseases and staying healthy can be expensive. This is true especially if the illness is serious. However, many people are not aware that diseases and illnesses can be treated with herbs and medicinal ingredients. If you want to naturally treat diseases and stay healthy, <strong>The Lost Book of Herbal Remedies</strong> can be the answer to your problem. It is a program that claims to teach users on how to fight diseases and be healthy by relying on nature. If you want to discover more about this program, read <em>The Lost Book of Herbal Remedies</em> review.</p>

          <div className={styles.section2}>
            <div className="h-24 w-1/2 m-5">
              <img src="review2.png" height="103" width="324" alt="image 1"></img>
            </div>
            <div className="h-24 w-1/2 m-5">
              <img src="review3.png" height="103" width="324" alt="image 2"></img>
            </div>
          </div>
      </div>

        <div style={{width: '100%'}}>
        <div className={styles.section3}>
            <div className={styles.sectio3_text}>
              <h1 className={styles.sectio3_h1}>The Lost Book of Herbal Remedies Overview</h1>
              <p dir="ltr">It is a comprehensive, revolutionary digital guide that is equipped with details and information about the benefits and importance of medicinal plants. It teaches you on how to start growing your medicinal herbs and plants around your backyard. It serves as your guide on how to secure water, food, shelter and medicine for your family in times of crisis.</p>
              <p dir="ltr">With the methods and techniques you’ll learn from the program, you won’t need to rely on antibiotics and medications to stop bleeding, reduce inflammation, lower cholesterol levels and fight other diseases.</p>
            </div>
            <div className={styles.sectio3_text}>
              <h1 className={styles.sectio3_h1}>Who Created The Lost Book of Herbal Remedies Program?</h1>
            <p dir="ltr">This digital book is the brainchild of Dr. Claude Davis and Nicole Apelian. He explains that there are specific forest weeds and backyard weeds that are highly efficient in treating chronic diseases. He even emphasizes that some of these weeds are mostly ignored by people. In this guide, he explains what specific wild plants and weeds that have the ability to provide a long list of health benefits to everyone. You can get information from the book and use it to treat various illnesses and stay healthy.</p>
            </div>
        </div>
        <div name="watchvideocta" className={styles.section4}>
            <Link className={styles.cta} to="video" smooth={true}><div className={styles.cta_text}>CLICK HERE TO WATCH THE VIDEO</div>
            </Link>
        </div>
        <div className={styles.section8}>
            <img style={{
              marginBottom: "30px", width: "100%",
              height: "auto" }} width="937" height="492" alt="the medicinal plants hiding in your back yard" src="The_Medicinal_Plants_Hiding_in_Your_Backyard_for_Every_US_State.jpg"/>
            <div className={styles.para}>
                  <h1 className={styles.sectio3_h1}>How Does The Lost Book of Herbal Remedies Work?</h1>
                  <p dir="ltr">The program is comprehensive enough to give you the details and information you need to get started. It works by guiding you in every step of the way, specifically on how to use herbs and plants for treating diseases.</p>
                  <p dir="ltr">The book will explain to you the benefits of using natural ingredients, those that can be found in nature. It will show you how to start your own herbal garden at home. In fact, it comes with detailed guide on how you can grow medicinal plants. It also includes a list of anti-inflammatory plants for faster healing of wounds and pain. At the same time, this eBook highlights the benefits of growing plants that have antiviral properties.</p>
            </div>
            <div className={styles.para}>
                  <h1 className={styles.sectio3_h1}>What You Will Find Inside The Lost Book of Herbal Remedies?</h1>
                  <p>When you purchase the program, it will open your mind to a lot of helpful information and methods on how to stay away from diseases and be healthy. Here are some of the things you will learn from the guide:</p>
                  <ul className="m-2">
                    <li className="m-2">1. How to use medicinal plants and herbs with step by step procedure</li>
                    <li className="m-2">2. Specific herbs to use on how to treat wheezing, asthma, common cold and more</li>
                    <li className="m-2">3. How to stay healthy despite of many surrounding illnesses</li>
                    <li className="m-2">4. A list of plants and herbs for preventing various types of health problems</li>
                    <li className="m-2">5. List of spices for treating viral or parasitic problems</li>
                  </ul>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className={styles.section3} style={{ backgroundColor: "beige", flexDirection: 'column' }}>
              <h1 className={styles.sectio3_h1}>What Are The PROS of Using The Program?</h1>
              <p dir="ltr" className={styles.mb_5}><strong>1. It is easy to use and understand –</strong> One of the primary goals of this program is to help common people on how to take advantage of herbs and medicinal plants. This is why the whole guide is explained in simple, easy steps. The methods come in detailed format. You don’t need to be a medical expert in order to use and understand the guide. It is not necessary to have prior knowledge about the different herbs and plants. The program will show you where to start and how to begin.</p>
              <p dir="ltr" className={styles.mb_5}><strong>2. Helps save lives –</strong> This is one of the good things about using this comprehensive guide. With the information and tips you will learn from it, you’ll be able to save the lives of your loved ones and the people around you. For instance, if you travel to a remote area with your loves and suddenly one of them suffers from a certain infection, this program can help you treat them with the available plants and weeds you can find.</p>
              <p dir="ltr" className={styles.mb_5}><strong>3. It saves you money –</strong> Chronic diseases and illnesses can cost you a lot of money. The treatments and medications to these diseases are expensive. The good thing about the program is that it won’t cost you an arm and a leg. In fact, using herbs and medicinal plants is cheap and practical.</p>
              <p dir="ltr" className={styles.mb_5}><strong>4. It does not have side effects –</strong> Treatments and medications are not just expensive, they are also dangerous to health. But with this revolutionary program, you will learn how to naturally treat diseases and keep your body healthy. This means that you don’t have to worry about any unnecessary side effects. This digital guide promotes all-natural way of treating diseases and illnesses.</p>
              <p dir="ltr" className={styles.mb_5}><strong>5. It works for men and women –</strong> The program is not gender-specific, which means it can be taken advantage by both genders. Regardless of your gender, you can purchase the guide and use it.</p>
            </div>
            <div className={styles.section3} style={{ backgroundColor: "white", flexDirection: 'column' }}>
              <h1 className={styles.sectio3_h1}>CONS of Using The Program?</h1>
              <p className={styles.mb_5}><strong>1. It is available online –</strong> If you decide to buy the program, you can only purchase it online. You need to have an internet connections in order to access and download the program.</p>
              <p className={styles.mb_5}><strong>2. It requires patience and dedication –</strong> Do not expect the program to give you instant results. It does not offer overnight success. This means that you have to be patient and dedicated in going through the whole guide and understand every significant topic.</p>
            </div>
            <div className={styles.section5} name="video">
              <h1 className={styles.section5_h1}>A Final Thoughts on The Book of Herbal Remedies</h1>
              <iframe style={{width: '100%', height: 'auto'}} title="Power of Plants Vimeo" src="https://player.vimeo.com/video/471422053" width="590" height="361" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
              <p className={styles.section5_p}>Overall, this comprehensive program is beneficial and a practical guide for everyone. It is for those who are looking for a more affordable way of treating diseases and staying healthy. In this guide, you will learn some of the best survival methods and techniques. You will begin to appreciate the health benefits of herbs and other medicinal plants. This revolutionary eBook can serve as your survival kit even in the hardest times. And also, it comes with a money back guarantee offer, you can request for a refund in case you are not satisfied with the program. It has been tried by many and so far, it has been gaining positive reviews.</p>
            </div>

            <h1 className={styles.section6_h1}>Get The Lost Book of Herbal Remedies Today Only $37!</h1>
            <div className={styles.productListing}>
              <div className={styles.productImage}>
                <a alt="offer 1" href="https://bookofrem.pay.clickbank.net/?cbitems=1&cbfid=34535&vtid=control&tkn=dHJraWQuNmEwZWRhZTItNmY3YS00NmEyLTlmMDgtYWVmNTM4MTJhMzNlfHNwbGl0Lnx0di58dC58Y3AufGNwdC58Y3AxLnxjcDIufGNwMy58Y3A0LnxjcDUufHByYy58Y3QufGN0MS58Y3QyLnx0ZzEufHRnMi58dGczLnx0ZzQufHRnNS58bGlkLnxtLnxoYXNoLjQxYzFiNDY0Nzc4ZTUzNDQ1M2UzOTRiMTNmMjUzY2N&REF=6a0edae2-6f7a-46a2-9f08-aef53812a33e">
                <img width="210" height="369" src="buy_d_new.png" alt="offer 1"></img>
                </a>
              </div>
              <div className={styles.productImage}>
                <a alt="offer 2" href="https://bookofrem.pay.clickbank.net/?cbitems=11&cbfid=34535&vtid=control&tkn=dHJraWQuNmEwZWRhZTItNmY3YS00NmEyLTlmMDgtYWVmNTM4MTJhMzNlfHNwbGl0Lnx0di58dC58Y3AufGNwdC58Y3AxLnxjcDIufGNwMy58Y3A0LnxjcDUufHByYy58Y3QufGN0MS58Y3QyLnx0ZzEufHRnMi58dGczLnx0ZzQufHRnNS58bGlkLnxtLnxoYXNoLjQxYzFiNDY0Nzc4ZTUzNDQ1M2UzOTRiMTNmMjUzY2N&REF=6a0edae2-6f7a-46a2-9f08-aef53812a33e"><img width="210" height="369" src="buy_dp_new.png" alt="offer 2"></img></a>
              </div>
              <div className={styles.productImage}>
                <a alt="offer 3" href="https://bookofrem.pay.clickbank.net/?cbitems=11&cbfid=34535&vtid=control&tkn=dHJraWQuNmEwZWRhZTItNmY3YS00NmEyLTlmMDgtYWVmNTM4MTJhMzNlfHNwbGl0Lnx0di58dC58Y3AufGNwdC58Y3AxLnxjcDIufGNwMy58Y3A0LnxjcDUufHByYy58Y3QufGN0MS58Y3QyLnx0ZzEufHRnMi58dGczLnx0ZzQufHRnNS58bGlkLnxtLnxoYXNoLjQxYzFiNDY0Nzc4ZTUzNDQ1M2UzOTRiMTNmMjUzY2N&REF=6a0edae2-6f7a-46a2-9f08-aef53812a33e" ><img src="buy_p_new.png" width="210" height="369" alt="offer 3"></img></a>
              </div>
            </div>
          </div>
        </div>
        <img width="324" height="103" src='verify.jpg' alt="trust badges" />
      </main>
    </div>
  )
}
