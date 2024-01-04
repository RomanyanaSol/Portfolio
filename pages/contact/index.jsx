import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import s from './style.module.css';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const MyForm = () => {
  const [state, handleSubmit] = useForm('xpzvabyz');

  if (state.succeeded) {
    return <div>thank you for writing to me!</div>;
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={s.form}
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
    >

      <div className={s.upperInputs}>
        <label htmlFor='name' className={s.label}></label>
        <input type="text" name='name' id='name' placeholder='Name' className={s.input} />
        <ValidationError
          prefix='Name'
          field='name'
          errors={state.errors}
        />
        <label htmlFor="email" className={s.label}></label>
        <input type="text" name='email' id='email' placeholder='Email' className={s.input} />
        <ValidationError
          prefix='Email'
          field='email'
          errors={state.errors}
        />
      </div>

      <label htmlFor='subject' className={s.label}></label>
      <input type="text" name="subject" id="subject" placeholder='Subject' className={s.input} />
      <ValidationError
        prefix="Subject"
        field="subject"
        errors={state.errors}
      />

      <label htmlFor="message" className={s.label}></label>
      <textarea name="message" id="message" placeholder='Message' className={s.textArea}></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <div className={s.group}>
        <button type='submit' className={s.btn}>
          <span className={s.span}>Let us talk</span>
          <BsArrowRight className={s.icon} />
        </button>
      </div>

      {state.submitting && <div>Sending...</div>}

    </motion.form>
  )

}

const Contact = () => {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <div className={s.main}>
          <motion.h2
            className={s.h2}
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Let us <span className={s.accent}>connect.</span>
          </motion.h2>
          <MyForm />
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Contact;


