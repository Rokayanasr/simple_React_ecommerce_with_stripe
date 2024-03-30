import React from 'react'
import style from './landing.module.css'
import Img from '../assets/man.png-Photoroom.png'
import Img2 from '../assets/calendar-Photoroom.png-Photoroom.png'
import Img3 from '../assets/running-training_342744-394.jpg'
import Img4 from '../assets/calendar-laptop_1163-2588.jpg'
import Img5 from '../assets/plate_1150-24770.jpg'
import Navbar from './Navbar'
import { Link } from "react-router-dom"
function Landing() {
  return (
    <>

      <section className={style.sec1}>
        <Navbar />
        <div className={style.container}>
          <div className={style.sec1left}>
            <h1 className={style.sec1lefth1}>
              Changing
              <br />
              your
              <span className={style.sec1lefth1span}> Eating</span>
              <br />
              habits
            </h1>
            <p className={style.sec1leftp}>
              Always take care of your health starting <br />
              from the food menu that you consume every day
            </p>
            <div className={style.sec1leftbtn}>
              <button className={style.sec1leftbtn1}>
                <Link to="/meals" className={style.link}>
                  Explore menu
                </Link>
              </button>
            </div>
          </div>
          <div className="sec-1-right">
            <div className={style.sec1rightborder}>
            </div>
            <img src={Img} alt="" className={style.sec1rightborderimg} />
          </div>
        </div>
      </section>
      <section className={style.sec2}>
        <div className={style.sec2left}>
          <div className={style.sec2lefti}>
            <i className="fa-solid fa-leaf" />
          </div>
          <h3 className={style.sec2lefth3}>emerson</h3>
        </div>
        <div className={style.sec2right}>
          <div className={style.sec2rigthi}>
            <i className="fa-regular fa-heart" />
          </div>
          <h3 className={style.sec2righth3}>HERBALIFE</h3>
        </div>
      </section>
      <section className={style.sec3}>
        <div className={style.sec3top}>
          <h3 className={style.sec3h3}>Our Best Programs</h3>
        </div>
        <div className={style.container}>
          <div className={style.sec3bottom}>
            <div className={style.sec3bottomcontcard}>
              <div className={style.sec3bottomcontcardi}>
                <i className="fa-solid fa-bowl-food" />
              </div>
              <h4 className={style.sec3bottomcontcardh4}>Healthy Meals</h4>
              <p className={style.sec3bottomcontcardp}>
                Learn how to become <br />a meal-planning pre
              </p>
            </div>
            <div className={style.sec3bottomcontcard}>
              <div className={style.sec3bottomcontcardi}>
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h4 className={style.sec3bottomcontcardh4}>Healthy Lifes</h4>
              <p className={style.sec3bottomcontcardp}>
                Your life is your choice <br />
                make yourself healthier
              </p>
            </div>
            <div className={style.sec3bottomcontcard}>
              <div className={style.sec3bottomcontcardi}>
                <i className="fa-solid fa-utensils" />
              </div>
              <h4 className={style.sec3bottomcontcardh4}>Healthy Eating</h4>
              <p className={style.sec3bottomcontcardp}>
                Eat healthy with our <br />
                export and inspiration tips
              </p>
            </div>
            <div className={style.sec3bottomcontcard}>
              <div className={style.sec3bottomcontcardi}>
                <i className="fa-regular fa-calendar" />
              </div>
              <h4 className={style.sec3bottomcontcardh4}>Healthy Routine</h4>
              <p className={style.sec3bottomcontcardp}>
                Enjoy a healthy routine <br />
                that reflects on your life
              </p>
            </div>
            <div className={style.sec3bottomcontcard_}>
              <div className={style.sec3bottomcontcardi_}>
                <i className="fa-regular fa-calendar" />
              </div>
              <h4 className={style.sec3bottomcontcardh4_}>Healthy Routine</h4>
              <p className={style.sec3bottomcontcardp_}>
                Enjoy a healthy routine <br />
                that reflects on your life
              </p>
            </div>
            <div className={style.sec3bottomcontcard_}>
              <div className={style.sec3bottomcontcardi_}>
                <i className="fa-solid fa-utensils" />
              </div>
              <h4 className={style.sec3bottomcontcardh4_}>Healthy Eating</h4>
              <p className={style.sec3bottomcontcardp_}>
                Eat healthy with our <br />
                export and inspiration tips
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.sec4}>
        <div className={style.container}>
          <div
            className={style.sec4left}
            data-aos="fade-up-right"
            data-aos-duration={3000}
          >
            <img src={Img2} className={style.sec4leftimg} alt="" />
          </div>
          <div
            className={style.sec4right}
            data-aos="fade-up-left"
            data-aos-duration={3000}
          >
            <h2 className={style.sec4righth2}>
              Create Your Own Schedule With <br />
             the Power Of AI <br />
              <button className={style.sec4btn}>
                <Link to="/stepper"  className={style.link2}>
                  Try Now
                </Link>
              </button>
            </h2>
          </div>
        </div>
      </section>
      <section className={style.sec3}>
        <div className={style.container}>
          <div className={style.sec3bottom} data-aos="fade-up" data-aos-duration={3000}>
            <div className={style.flag}>
              <h3 className={style.starth3}>
                Get Started with <span className={style.starth3span}>Healthy</span>
              </h3>
              <p className={style.startp}>
                discover tips &amp; news for your health from AI <br />
                and get the best experience by getting started
              </p>
              <button className={style.startbtn}>
                <Link to="/register"  className={style.link}>
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.cards} ${style.container}`}>
        <div className={style.cardcont}>
          <div className={style.card} data-aos="fade-up-right" data-aos-duration={3000}>
            <div className={style.cardimage3}>
              <img src={Img3} alt="" className={style.cardimage3img} />
            </div>
            <div className={style.det}>
              <p className={style.detp}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut atque
                saepe unde nihil mollitia veritatis ipsum, amet{" "}
              </p>
            </div>
          </div>
          <div className={style.card} data-aos="fade-up" data-aos-duration={3000}>
            <div className={style.cardimage2}>
              <img src={Img4} alt="" className={style.cardimage2img} />
            </div>
            <div className={style.det}>
              <p className={style.detp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                repudiandae quibusdam velit modi accusamus iusto,
              </p>
            </div>
          </div>
          <div className={style.card} data-aos="fade-up-left" data-aos-duration={3000}>
            <div className={style.cardimage1}>
              <img src={Img5} alt="" className={style.cardimage1img} />
            </div>
            <div className={style.det}>
              <p className={style.detp}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                totam eum ad consequatur quos aspernatur dolores{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.sec6}>
        <div className={style.secfooter}>
          <div className={`${style.up} ${style.container}`}>
            <div className={style.secfooterleft}>
              <h4 className={style.secfooterlefth4}>Healty</h4>
              <p className={style.secfooterleftp}>
                We have a mission to <br />
                make people around the <br />
                world better throught a <br />
                healthy life style
              </p>
            </div>
            <div className={style.secfooterright}>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>About</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp}>News &amp; Blog</p>
              </div>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>Support</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp} >News &amp; Blog</p>
              </div>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>Movment</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp}>News &amp; Blog</p>
              </div>
              <div className={style.secfooterrightdivs}>
                <h4 className={style.secfooterrightdivsh4}>Company</h4>
                <p className={style.secfooterrightdivsp}>About us</p>
                <p className={style.secfooterrightdivsp}>features</p>
                <p className={style.secfooterrightdivsp}>News &amp; Blog</p>
              </div>
            </div>
          </div>
          <div className={style.last}>
            <div className={style.small}>
              <small>@2024.Healty All rights reserved</small>
            </div>
            <div className={style.policy}>
              <small>
                Terms &amp; Arguments <span> </span>
                Privacy Policy
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing