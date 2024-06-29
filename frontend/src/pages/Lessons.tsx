import React, { Component, useEffect, useState } from 'react';
import LessonsService from '../services/LessonsService';
import SubjectsService from '../services/SubjectsService';
import LessonItem from '../components/UI/LessonItem/LessonItem';
import { SubjectType, LessonType } from '../types';

const Lessons = () => {
    const [lessonsList, setLessonsList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);

    useEffect(() => {
        setData();
    }, []);

    async function setData() {
        const newListSubjects = await SubjectsService.getAllSubjects();;

        if (!newListSubjects.length) return;

        setSubjectsList(newListSubjects);

        const newListLessons = await LessonsService.getAllLessons();
        setLessonsList(newListLessons);
    }

    function getSubject(subjectId: number) {
        return subjectsList.find((subject: SubjectType) => subject.id === subjectId);
    }

    return (
        <div>
            <h2>Lessons Page</h2>
            {lessonsList.map((lesson: LessonType, key) => (
                <LessonItem 
                    key={key} 
                    lesson={lesson} 
                    subject={getSubject(lesson.subjectId)!}
                />
            ))}
        </div>
    );
};

export default Lessons;
