import React, { useEffect, useState } from 'react';
import { LessonType, SubjectType, StudentType } from '../../../types';
import './_LessonItem.scss';

type Props = { 
    lesson: LessonType,
    subject: SubjectType | undefined,
    student: StudentType | undefined,
};

const LessonItem = (props: Props) => {
    const { lesson, subject, student } = props;

    const date: Date = new Date(lesson.date);
    const minutes: number = date.getMinutes();
    const time: string = date.getHours() + ':' + (minutes ? minutes : '00');

    const subjectColor: string = subject ? subject.color : 'gray';
    const subjectName: string = subject ? subject.name : '-';

    return (
        <div className='LessonItem'>
            <div className={'LessonItem__content ' + subjectColor }>
                <h3 className='LessonItem__content--subject'>
                    { subjectName }
                </h3>
                <h4 className='LessonItem__content--time'>
                    { time }
                </h4>
                <span className="LessonItem__content--price">
                    { lesson.price } &#x20bd;
                </span>
                { student ? 
                    <span className='LessonItem__content--student'>
                        { student.grade } класс
                        <br/>
                        { `${student.name} ${student.surname[0]}.` }
                    </span> : ''
                }
            </div>
        </div>
    );
};

export default LessonItem;
