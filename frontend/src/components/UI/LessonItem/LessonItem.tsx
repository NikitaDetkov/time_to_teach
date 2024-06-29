import React, { useEffect, useState } from 'react';
import { LessonType, SubjectType } from '../../../types';
import './LessonItem.scss';

type Props = { 
    lesson: LessonType,
    subject: SubjectType,
};

const LessonItem = (props: Props) => {
    const lesson = props.lesson;
    const subject = props.subject;

    return (
        <div className={'LessonItem'}>
            <h3 className="LessonItem__header">{lesson.price}</h3>
            {lesson.id}
            {subject.name}
        </div>
    );
};

export default LessonItem;
