import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { animateScroll as scroll } from 'react-scroll'

import "tailwindcss/tailwind.css";

export default function Home() {

  const scrollToVideoButton = () => {
    scroll.scrollTo(1400, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50
    });
  }

  const scrollToVideo = () => {
    scroll.scrollTo(3400, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 50
    });
  }

  return (
    <div style={{width: '980px'}} className="flex flex-col justify-center m-auto">
      <Head>
        <title>The Lost Book of Herbal Remedies | Cure your Ailments Naturally.</title>
        <link rel="icon" href="/favicon.ico" />
        <React.Fragment>
        <script dangerouslySetInnerHTML={{ __html:
                  `!function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp ? n.qp.apply(n, arguments) : n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
        qp('init', 'd7fb88564e0f42f1808758e30bc1dfa8');
        qp('track', 'ViewContent');` }}/>
        <noscript><img height="1" width="1" style="display:none" src="https://q.quora.com/_/ad/d7fb88564e0f42f1808758e30bc1dfa8/pixel?tag=ViewContent&noscript=1" /></noscript>
        </React.Fragment>
      </Head>

      <nav className="w-full flex items-center justify-between mt-2 mb-2">
        <div className="h-8">
            <h1 className="text-lg font-bold">Lost Book of Herbal Remedies</h1>
        </div>
        <div className="flex text-sm">
          <div className={styles.item}>ABOUT</div>
          <div className={styles.item}>DISCLAIMER</div>
          <div className={styles.item}>PRIVACY POLICY</div>
          <div className={styles.item}>TERMS OF SERVICE</div>
        </div>
      </nav>

      <main className="flex flex-col items-center bg-white shadow-xl">
        <div className="flex w-full h-180 mt-10 bg-gray-100 " >
          <div className="flex flex-col w-1/2 items-center mr-12" style={{ height: '50vh' }} >
            <h2 style={{fontSize: '24px'}} className="text-xl font-bold mt-20 m-5 text-center">Discover The Forgotten Power of Plants TODAY ONLY: <span style={{ color: 'red' }}>$37</span></h2>
            <div className="w-70 h-12 border-yellow-600 border-2 rounded-full mt-4 bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center text-white pl-10 pr-10 shadow-lg cursor-pointer" onClick={scrollToVideoButton}><h3 className="text-xl font-bold">CLICK HERE TO GET IT NOW! >> </h3></div>
            <p className="text-xs text-gray-600 p-12">*Disclaimer: Individual results may vary. The information on this website has not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. </p>
        </div>
          <div style={{ height: '50vh' }} className="w-1/2 flex items-center justify-center">
            <img style={{ height: '420px'}} src='1608154908.png' />
          </div>
      </div>
      <div className="flex flex-col m-10 mt-20" >
          <h1 className="text-xl font-bold mb-5">The Lost Book of Herbal Remedies Review</h1>
          <p dir="ltr">Treating diseases and staying healthy can be expensive. This is true especially if the illness is serious. However, many people are not aware that diseases and illnesses can be treated with herbs and medicinal ingredients. If you want to naturally treat diseases and stay healthy, <strong>The Lost Book of Herbal Remedies</strong> can be the answer to your problem. It is a program that claims to teach users on how to fight diseases and be healthy by relying on nature. If you want to discover more about this program, read <em>The Lost Book of Herbal Remedies</em> review.</p>

          <div className="w-full flex mt-5 mb-20">
            <div className="h-24 w-1/2 m-5">
              <img src="review2.png" height="100"></img>
              <p className="text-xs text-bold ml-1 mt-1">Wow, this book has 2-4 color pictures for every plant, with in depth identification notes. easy to use. lots of remedies, tinctures, syrups, ointments, poultices, etc. Also, at the end the book has an index with all the conditions you can think of… and the pages where you’ll find the remedies and plants for your particular needs </p>
            </div>
            <div className="h-24 w-1/2 m-5">
              <img src="review3.png"></img>
              <p className="text-xs text-bold ml-1 mt-1">I've had extensive involvement in healthcare and the unfortunate corruption of conventional medicine and this book is a valuable resource for anyone who wishes to research more options for health remedies that may provide the elusive answer to a stubborn ailment. Plus, being able to grow the plants suggested in this work will enhance the beauty of any landscape! </p>
            </div>
          </div>

      </div>

        <div>
        <div className="m-10 flex ">
            <div className="w-1/2 p-4">
              <h1 className="text-xl font-bold mb-5">The Lost Book of Herbal Remedies Overview</h1>
              <p dir="ltr">It is a comprehensive, revolutionary digital guide that is equipped with details and information about the benefits and importance of medicinal plants. It teaches you on how to start growing your medicinal herbs and plants around your backyard. It serves as your guide on how to secure water, food, shelter and medicine for your family in times of crisis.</p>
              <p dir="ltr">With the methods and techniques you’ll learn from the program, you won’t need to rely on antibiotics and medications to stop bleeding, reduce inflammation, lower cholesterol levels and fight other diseases.</p>
            </div>
            <div className="w-1/2 p-4">
              <h1 className="text-xl font-bold mb-5">Who Created The Lost Book of Herbal Remedies Program?</h1>
            <p dir="ltr">This digital book is the brainchild of Dr. Claude Davis and Nicole Apelian. He explains that there are specific forest weeds and backyard weeds that are highly efficient in treating chronic diseases. He even emphasizes that some of these weeds are mostly ignored by people. In this guide, he explains what specific wild plants and weeds that have the ability to provide a long list of health benefits to everyone. You can get information from the book and use it to treat various illnesses and stay healthy.</p>
            </div>
        </div>
        <div className="pt-5 pb-5 bg-green-700 p-3 items-center flex h-24 items-center justify-center">
          <h1 className="text-white text-xl mr-5">"You need to see this, AMAZING!"</h1>
            <div className="w-70 h-12 border-yellow-600 border-2 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center text-white pl-10 pr-10 shadow-lg cursor-pointer" onClick={scrollToVideo}><h3 className="text-xl font-bold">CLICK HERE TO WATCH THE VIDEO</h3>
          </div>
        </div>
        <div className="m-10 flex flex-col">
        <img src="The_Medicinal_Plants_Hiding_in_Your_Backyard_for_Every_US_State.png" className="rounded-12 mb-10"/>
        <h1 className="text-xl font-bold mb-5">How Does The Lost Book of Herbal Remedies Work?</h1>
        <p dir="ltr">The program is comprehensive enough to give you the details and information you need to get started. It works by guiding you in every step of the way, specifically on how to use herbs and plants for treating diseases.</p>
        <p dir="ltr">The book will explain to you the benefits of using natural ingredients, those that can be found in nature. It will show you how to start your own herbal garden at home. In fact, it comes with detailed guide on how you can grow medicinal plants. It also includes a list of anti-inflammatory plants for faster healing of wounds and pain. At the same time, this eBook highlights the benefits of growing plants that have antiviral properties.</p>
        </div>
        <div className="m-10 flex flex-col">
            <h1 className="text-xl font-bold mb-5">What You Will Find Inside The Lost Book of Herbal Remedies?</h1>
            <p>When you purchase the program, it will open your mind to a lot of helpful information and methods on how to stay away from diseases and be healthy. Here are some of the things you will learn from the guide:</p>
            <ul class="m-2">
              <li class="m-2">1. How to use medicinal plants and herbs with step by step procedure</li>
              <li class="m-2">2. Specific herbs to use on how to treat wheezing, asthma, common cold and more</li>
              <li class="m-2">3. How to stay healthy despite of many surrounding illnesses</li>
              <li class="m-2">4. A list of plants and herbs for preventing various types of health problems</li>
              <li class="m-2">5. sList of spices for treating viral or parasitic problems</li>
            </ul>
        </div>
          <div className="m-10 flex flex-col">
            <div>
              <h1 className="text-xl font-bold mb-5">What Are The PROS of Using The Program?</h1>
              <p dir="ltr" className="text-sm mb-5"><strong>1. It is easy to use and understand –</strong> One of the primary goals of this program is to help common people on how to take advantage of herbs and medicinal plants. This is why the whole guide is explained in simple, easy steps. The methods come in detailed format. You don’t need to be a medical expert in order to use and understand the guide. It is not necessary to have prior knowledge about the different herbs and plants. The program will show you where to start and how to begin.</p>
              <p dir="ltr" className="text-sm mb-5"><strong>2. Helps save lives –</strong> This is one of the good things about using this comprehensive guide. With the information and tips you will learn from it, you’ll be able to save the lives of your loved ones and the people around you. For instance, if you travel to a remote area with your loves and suddenly one of them suffers from a certain infection, this program can help you treat them with the available plants and weeds you can find.</p>
              <p dir="ltr" className="text-sm mb-5"><strong>3. It saves you money –</strong> Chronic diseases and illnesses can cost you a lot of money. The treatments and medications to these diseases are expensive. The good thing about the program is that it won’t cost you an arm and a leg. In fact, using herbs and medicinal plants is cheap and practical.</p>
              <p dir="ltr" className="text-sm mb-5"><strong>4. It does not have side effects –</strong> Treatments and medications are not just expensive, they are also dangerous to health. But with this revolutionary program, you will learn how to naturally treat diseases and keep your body healthy. This means that you don’t have to worry about any unnecessary side effects. This digital guide promotes all-natural way of treating diseases and illnesses.</p>
              <p dir="ltr" className="text-sm mb-5"><strong>5. It works for men and women –</strong> The program is not gender-specific, which means it can be taken advantage by both genders. Regardless of your gender, you can purchase the guide and use it.</p>
            </div>
            <div className="mt-10">
              <h1 className="text-xl font-bold mb-5">CONS of Using The Program?</h1>
              <p className="text-sm mb-5"><strong>1. It is available online –</strong> If you decide to buy the program, you can only purchase it online. You need to have an internet connections in order to access and download the program.</p>
              <p className="text-sm mb-5"><strong>2. It requires patience and dedication –</strong> Do not expect the program to give you instant results. It does not offer overnight success. This means that you have to be patient and dedicated in going through the whole guide and understand every significant topic.</p>
            </div>
            <div className="mt-10 bg-green-500 p-3 items-center flex flex-col mb-8">
              <h1 className="text-xl text-white font-bold mb-5 text-gray-800 mt-5">A Final Thoughts on The Book of Herbal Remedies</h1>
              <iframe src="https://player.vimeo.com/video/471422053" width="640" height="361" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
              <p><a href="https://vimeo.com/471422053">The Forgotten Power of Plants with Nicole Apelian</a> from <a href="https://vimeo.com/user124582185">Joao Murillo</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
              <p className="text-sm mb-5 p-2 leading-8 text-gray-800">Overall, this comprehensive program is beneficial and a practical guide for everyone. It is for those who are looking for a more affordable way of treating diseases and staying healthy. In this guide, you will learn some of the best survival methods and techniques. You will begin to appreciate the health benefits of herbs and other medicinal plants. This revolutionary eBook can serve as your survival kit even in the hardest times. And also, it comes with a money back guarantee offer, you can request for a refund in case you are not satisfied with the program. It has been tried by many and so far, it has been gaining positive reviews.</p>
            </div>

            <h1 style={{fontSize: "28px"}} className="text-xl font-bold mb-5 text-red-500 text-center mt-5">Get The Lost Book of Herbal Remedies Today Only $37!</h1>
            <div className="mt-5 p-3 items-center flex mb-8 justify-between">
              <div className="w-1/3 flex justify-center">
                <a href="https://bookofrem.pay.clickbank.net/?cbitems=1&cbfid=34535&vtid=control&tkn=dHJraWQuNmEwZWRhZTItNmY3YS00NmEyLTlmMDgtYWVmNTM4MTJhMzNlfHNwbGl0Lnx0di58dC58Y3AufGNwdC58Y3AxLnxjcDIufGNwMy58Y3A0LnxjcDUufHByYy58Y3QufGN0MS58Y3QyLnx0ZzEufHRnMi58dGczLnx0ZzQufHRnNS58bGlkLnxtLnxoYXNoLjQxYzFiNDY0Nzc4ZTUzNDQ1M2UzOTRiMTNmMjUzY2N&REF=6a0edae2-6f7a-46a2-9f08-aef53812a33e">
                <img src="buy_d_new.png"></img>
                </a>
              </div>
              <div className="w-1/3 flex justify-center">
                <a href="https://bookofrem.pay.clickbank.net/?cbitems=11&cbfid=34535&vtid=control&tkn=dHJraWQuNmEwZWRhZTItNmY3YS00NmEyLTlmMDgtYWVmNTM4MTJhMzNlfHNwbGl0Lnx0di58dC58Y3AufGNwdC58Y3AxLnxjcDIufGNwMy58Y3A0LnxjcDUufHByYy58Y3QufGN0MS58Y3QyLnx0ZzEufHRnMi58dGczLnx0ZzQufHRnNS58bGlkLnxtLnxoYXNoLjQxYzFiNDY0Nzc4ZTUzNDQ1M2UzOTRiMTNmMjUzY2N&REF=6a0edae2-6f7a-46a2-9f08-aef53812a33e"><img src="buy_dp_new.png"></img></a>
              </div>
              <div className="w-1/3 flex justify-center">
                <a href="https://bookofrem.pay.clickbank.net/?cbitems=11&cbfid=34535&vtid=control&tkn=dHJraWQuNmEwZWRhZTItNmY3YS00NmEyLTlmMDgtYWVmNTM4MTJhMzNlfHNwbGl0Lnx0di58dC58Y3AufGNwdC58Y3AxLnxjcDIufGNwMy58Y3A0LnxjcDUufHByYy58Y3QufGN0MS58Y3QyLnx0ZzEufHRnMi58dGczLnx0ZzQufHRnNS58bGlkLnxtLnxoYXNoLjQxYzFiNDY0Nzc4ZTUzNDQ1M2UzOTRiMTNmMjUzY2N&REF=6a0edae2-6f7a-46a2-9f08-aef53812a33e" ><img src="buy_p_new.png"></img></a>
              </div>
            </div>
          </div>
        </div>
        <img src='verify.jpg' />
      </main>

      <footer className={styles.footer}>
        <h3>Lost Book of Herbal Remedies</h3>
      </footer>
    </div>
  )
}
