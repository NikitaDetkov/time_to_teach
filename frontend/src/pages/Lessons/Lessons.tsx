import React, { Component, useEffect, useState } from 'react';
import LessonsService from '../../services/LessonsService';
import SubjectsService from '../../services/SubjectsService';
import StudentsService from '../../services/StudentsService';
import LessonItem from '../../components/UI/LessonItem/LessonItem';
import { SubjectType, LessonType, StudentType } from '../../types';
import './_Lessons.scss';
import AddLessonForm from '../../components/UI/AddLessonForm/AddLessonForm';

const Lessons = () => {
    const [lessonsList, setLessonsList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);
    const [studentsList, setStudentsList] = useState([]);

    useEffect(() => {
        setData();
    }, []);

    async function setData() {
        const promiseSubjects = SubjectsService.getAllSubjects();
        const promiseStudents = await StudentsService.getAllStudents();

        const newListSubjects = await promiseSubjects;
        const newListStudents = await promiseStudents;

        if (!newListStudents.length || !newListSubjects.length) return;
        setStudentsList(newListStudents);
        setSubjectsList(newListSubjects);

        const newListLessons = await LessonsService.getAllLessons();
        setLessonsList(newListLessons);
    }

    function getSubject(subjectId: number) {
        return subjectsList.find((subject: SubjectType) => subject.id === subjectId);
    }

    function getStudent(studentId: number) {
        return studentsList.find((student: StudentType) => student.id === studentId);
    }

    return (
        <div className='Lessons'>
            <h2>Lessons Page</h2>
            {
                subjectsList.length && 
                studentsList.length && 
                <AddLessonForm subjectsList={subjectsList} studentsList={studentsList}/>
            }
            {lessonsList.map((lesson: LessonType, key) => (
                <LessonItem 
                    key={key} 
                    lesson={lesson} 
                    subject={getSubject(lesson.subjectId)}
                    student={getStudent(lesson.studentId)}
                />
            ))}
        </div>
    );
};

export default Lessons;
