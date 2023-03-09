import React, { useEffect, useState } from 'react'
import selected from '../../assets/images/select.svg'
import QuestionSubmitStyles from './QuestionSubmitWrapper.module.scss'

export const QuestionSubmitWrapper = (props: any) => {
  console.log(props)
  const [completeQuestion, setCompleteQuestion] = useState(0);
  useEffect(() => {
    setCompleteQuestion(props.question.filter((item: any) => item.selectedAnswer !== "").length)
  }, [props.question])

  return (
    <div>
      <div className={QuestionSubmitStyles.container_image}>
        <img className={QuestionSubmitStyles.image_style} src={selected} alt="selected" />
      </div>
      <div className={QuestionSubmitStyles.text_container}>
        <h2>You have Successfully submitted the Assessment</h2>
      </div>
      <div className={QuestionSubmitStyles.text_container}>
        <b> QUESTION ASKED :</b> {props.question.length}
      </div>
      <div className={QuestionSubmitStyles.text_container}>
        <b> QUESTION ANSWERED :</b> {completeQuestion}
      </div>
      <div className={QuestionSubmitStyles.text_container}>
        <b> CORRECT ANSWERED :</b> {
          props.question.filter((item: any) => item.selectedAnswer === item.correctAnswer).length
        }
      </div>

      <div className={QuestionSubmitStyles.text_container}>
        <b> YOUR SCORE : </b>{(props.question.filter((item: any) => item.selectedAnswer === item.correctAnswer).length * 100) / props.question.length}
      </div>
    </div>
  )
}
