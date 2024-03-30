import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar'
import dashedWave from '../../assets/contactus/dashed-wave.svg'
import wave from '../../assets/contactus/wave.svg'
import contactimg from '../../assets/contactus/img1.jpeg'
import emailjs from '@emailjs/browser';

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_44aydbo', 'template_vlze3xf', form.current, {
          publicKey: 'qtccHPQN3hT81SgUx',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  

    const handleDarkModeToggle = () => {
        document.body.classList.toggle("darkk");
    };

    useEffect(() => {
        const inputs = document.querySelectorAll(".contact-input");
        const toggleBtn = document.querySelector(".theme-toggle");

        inputs.forEach(ipt => {
            const handleFocus = () => {
                ipt.parentNode.classList.add("focus");
                ipt.parentNode.classList.add("not-empty");
            };

            const handleBlur = () => {
                ipt.parentNode.classList.remove("focus");
                if (ipt.value === "") {
                    ipt.parentNode.classList.remove("not-empty");
                }
            };

            ipt.addEventListener("focus", handleFocus);
            ipt.addEventListener("blur", handleBlur);

            return () => {
                ipt.removeEventListener("focus", handleFocus);
                ipt.removeEventListener("blur", handleBlur);
            };
        });
    }, [])
    return (
        <>
            <div className="background">
                <header className="contact-header">
                    <Navbar toggleDarkMode={handleDarkModeToggle} />
                    <main>
                        <section className="contact">
                            <div className="containerr">
                                <div className="left">
                                    <div className="form-wrapper">
                                        <div className="contact-heading">
                                            <h1 className='fs-1 font-bold'>Let's Contact Together<span>.</span></h1>
                                            <p className="text">reach us via: <a className='email' href="mailto:Rokayaanasr@gmail.com" >Mentalia@gmail.com</a></p>
                                        </div>

                                        <form ref={form} onSubmit={sendEmail} className="contact-form">

                                            <div className='input-wrap'>
                                                <input type="text" className="contact-input" autoComplete='off' name="user_name" required />
                                                <label htmlFor="firstName">first Name</label>
                                                <i class="icon fa-solid fa-id-card"></i>
                                            </div>

                                            <div className='input-wrap '>
                                                <input type="text" className="contact-input" autoComplete='off' name="lastName" required />
                                                <label htmlFor="firstName">last Name</label>
                                                <i class="icon fa-solid fa-id-card"></i>
                                            </div>

                                            <div className='input-wrap w-100'>
                                                <input type="email" className="contact-input" autoComplete='off' name="user_email" required />
                                                <label htmlFor="firstName">email</label>
                                                <i class="icon fa-solid fa-envelope"></i>
                                            </div>

                                            <div className='input-wrap w-100'>
                                                <textarea name="message" autoComplete='off' required className="contact-input" />
                                                <label htmlFor="firstName">Message</label>
                                                <i class="icon fa-solid fa-inbox"></i>
                                            </div>

                                            <div className="contact-buttons">
                                                <button className="btnn upload">
                                                    <span>
                                                        <i className='fa-solid fa-paperclip'></i> Add attachment
                                                    </span>
                                                    <input type="file" name='attachment' />
                                                </button>
                                                <input  type="submit" value="send" className='btnn' />
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="right">
                                    <div className="image-wrapper">
                                        <img src={contactimg} className="imgg" />
                                        <div className="wave-wrap">
                                            <svg className='wave' viewBox="0 0 783 1536" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="wave" d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z" />
                                            </svg>
                                        </div>
                                        <svg className='dashed-wave' viewBox="0 0 345 877" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path id="dashed-wave" d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1" />
                                        </svg>

                                    </div>

                                </div>
                            </div>
                        </section>
                    </main>
                </header>
            </div>

        </>
    )
}

export default ContactUs