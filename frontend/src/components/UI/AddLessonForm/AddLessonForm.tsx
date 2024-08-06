import React, { useEffect, useState } from 'react';
import { LessonType, SubjectType, StudentType, SelectItem } from '../../../types';
import './_AddLessonForm.scss';
import UserSelect from '../UserSelect/UserSelect';

type Props = {
    subjectsList: Array<SubjectType>;
    studentsList: Array<StudentType>;
};

const AddLessonForm = ({subjectsList, studentsList}: Props) => {
    const subjectsSelectList: Array<SelectItem> = subjectsList
        .map(item => ({ id: item.id, option: item.name }));

    const studentsSelectList: Array<SelectItem> = studentsList
        .map(item => ({ 
            id: item.id, 
            option: item.surname + ' ' + item.name[0] + '.' 
        }));

    return (
        <form className='AddLessonForm' onSubmit={(e) => e.preventDefault()}>
            <h3 className='AddLessonForm__header'>Добавить урок</h3>
            
            <div className='AddLessonForm__main'>
                <div className='AddLessonForm__main--subject'>
                    { subjectsSelectList.length  
                        ? <UserSelect selectList={subjectsSelectList} label="Выбрать предмет"/>
                    : '' }
                </div> 
                <div className='AddLessonForm__main--student'>
                    { studentsSelectList.length  
                        ? <UserSelect selectList={studentsSelectList} label="Выбрать ученика"/>
                    : '' }
                </div> 
            </div>
        </form>
    );
}

export default AddLessonForm;