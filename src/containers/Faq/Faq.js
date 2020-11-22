import React from "react";
import './Faq.scss'

const Faq = () => {

  return (
    <div className='Faq wrapper'>
      <fieldset className='Faq__faq'>
        <legend>Часто задаваемые вопросы</legend>
        <p className='Faq__question'>Здесь частозадаваемый вопрос?</p>
        <p className='Faq__answer'>
          Здесь частоотвечаемый ответ
        </p>

      </fieldset>
    </div>
  )
}

export default Faq