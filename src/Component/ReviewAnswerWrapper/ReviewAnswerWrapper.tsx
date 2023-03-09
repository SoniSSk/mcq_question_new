import React, { useState } from 'react'
import ReviewAnswerStyle from './ReviewAnswerWrapper.module.scss'
import selected from '../../assets/images/select.svg'
import unselected from '../../assets/images/unselect.svg'
import { QuestionSubmitWrapper } from '../QuestionWrapper/QuestionSubmitWrapper'

export const ReviewAnswerWrapper = () => {
    const [questionNumber, setQuestionNumber] = useState<any>(0);
    const [submitAnswers, setSubmitAnswers] = useState(false);
    const [question, setQuestion] = useState(
        [
            {
                id: 1,
                "question": "____ among the following is the highest peak of Eastern Ghats ?",
                "option": [
                    "Kailash",
                    "Kanchenjunga",
                    "Nanda Devi",
                    "Kedarnath"
                ],
                "selectedAnswer": "",
                "correctAnswer": "Kanchenjunga",
                "visited": true
            },
            {
                id: 2,
                "question": "Ladakh is located between _____ ?",
                "option": [
                    "Himalayas and Karakoram",
                    "Himalayas and Pamir",
                    "Himalayas ",
                    "Pamir"
                ],
                "selectedAnswer": "",
                "correctAnswer": "Himalayas and Karakoram",
                "visited": false
            },
            {
                id: 3,
                "question": "The highest peak of the world is _____ ?",
                "option": [
                    "Kanchenjunga",
                    "K2",
                    "Mount Everest",
                    "Kailash"
                ],
                "selectedAnswer": "",
                "correctAnswer": "Mount Everest",
                "visited": false
            }

        ]
    );
    console.log(question)

    const handleClick = () => {
       
    }


    return (
        <div className={ReviewAnswerStyle.main_container}>
            <div className={ReviewAnswerStyle.style}>
                <div className={ReviewAnswerStyle.container1}>
                    <div className={
                        ReviewAnswerStyle.heading_text_review_answer
                    }>Review Answer Here </div>
                    <div>
                        {
                            question.filter((item: any) => item.visited === true).map((item, index) => {
                                return (
                                    <div className={
                                        ReviewAnswerStyle.options
                                    }
                                        key={index}>
                                        <div>
                                            <b> #{index}:</b>  {item.selectedAnswer}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={ReviewAnswerStyle.container2}>
                    {
                        !submitAnswers ?
                            <>
                                <div className={ReviewAnswerStyle.heading_attempt_question}>
                                    {
                                        (questionNumber + 1) > 1 ?
                                            <div><button className={ReviewAnswerStyle.prev_next_button}
                                                onClick={() => {
                                                    (questionNumber + 1) > 1 &&
                                                        setQuestionNumber(questionNumber - 1)
                                                }}>
                                                Prev
                                            </button> </div>
                                            : <div>
                                                <button className={ReviewAnswerStyle.prev_next_button_none}>
                                                    Prev
                                                </button>
                                            </div>
                                    }
                                    <div className={ReviewAnswerStyle.heading_text}> Attempt Question Here</div>
                                    {
                                        questionNumber !== question.length - 1 ?
                                            <div>
                                                <button className={ReviewAnswerStyle.prev_next_button}
                                                    onClick={() => {
                                                        return  (questionNumber < (question.length - 1)) && (
                                                            setQuestionNumber(questionNumber + 1),
                                                            setQuestion(
                                                                () => {
                                                                    return question.map((item1) => {
                                                                        if (item1.id === question[questionNumber+1].id) {
                                                                            item1.visited = true
                                                                        }
                                                                        return item1
                                                                    })
                                                                }
                                                            )
                                                        )
                                                    }}>
                                                    Next
                                                </button>
                                            </div>
                                            : <div>
                                                <button className={ReviewAnswerStyle.prev_next_button_none}>
                                                    Prev
                                                </button>
                                            </div>
                                    }

                                </div>
                                <div>
                                    <div className={ReviewAnswerStyle.question}>
                                        <div>Question #{question[questionNumber].id}:</div>
                                        <div>{question[questionNumber].question}</div>
                                    </div>
                                    <div className={
                                        ReviewAnswerStyle.options_container
                                    }>
                                        {
                                            question[questionNumber].option.map((item, index) => {
                                                return (
                                                    <div key={index} className={ReviewAnswerStyle.option_inside}>
                                                        <div >
                                                            <img
                                                                className={ReviewAnswerStyle.radio_button_style}
                                                                onClick={() =>
                                                                    setQuestion(
                                                                        () => {
                                                                            return question.map((item1) => {
                                                                                if (item1.id === question[questionNumber].id) {
                                                                                    item1.selectedAnswer = item
                                                                                }
                                                                                return item1
                                                                            })
                                                                        }
                                                                    )
                                                                }
                                                                src={
                                                                    question[questionNumber].selectedAnswer === item ? selected : unselected
                                                                }
                                                                alt="selected"
                                                            />
                                                        </div>
                                                        <label>{item}</label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    questionNumber === question.length - 1 &&
                                    <div className={ReviewAnswerStyle.button_container}>
                                        <button onClick={() => {
                                            setSubmitAnswers(true)
                                        }} className={ReviewAnswerStyle.submit_button}>Submit</button>
                                    </div>
                                }
                            </>
                            :
                            <QuestionSubmitWrapper question={question} />
                    }



                </div>
            </div>
        </div>
    )
}
