import React from "react";
import "./Contact.scss";
import { contactHeader, jobdeskOptions } from "../../data/contact";
import "../ScrollAnimation/Animations.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
export default function Contact() {
  return (
    <section className='contact-container' id='contact'>
      <div className='container desktop'>
        <div className='contact-header'>
          {contactHeader.map((data) => (
            <div key={data.id}>
              <ScrollAnimation
                showClass='fadeTop'
                content={<h3>{data.header}</h3>}
              />
              <ScrollAnimation
                showClass='fadeLeft'
                content={<h4>{data.description}</h4>}
              />{" "}
              <ScrollAnimation
                showClass='fadeBottom'
                content={
                  <img
                    src={require(`../../img/${data.image}`)}
                    alt={data.header}
                  />
                }
              />
            </div>
          ))}
        </div>

        <form className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>
              Your name <span>*</span>
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>
              Your email address <span>*</span>
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='Subject'>
              Subject <span>*</span>
            </label>
            <input
              type='text'
              name='Subject'
              placeholder='Enter a subject'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='jobdesk'>Jobdesk</label>
            <select name='jobdesk'>
              {jobdeskOptions.map((data) => (
                <option value={data.title} key={data.id}>
                  {data.title}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='cname'>Company name</label>
            <input
              type='text'
              name='cname'
              placeholder='Your company name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cname'>Message</label>
            <textarea
              type='text'
              name='cname'
              placeholder='We would love to hear from you! Send us a message.'
              maxLength='200'
              required
            />
          </div>
          <div className='form-group'>
            <button>Send Now</button>
          </div>
        </form>
      </div>
    </section>
  );
}
