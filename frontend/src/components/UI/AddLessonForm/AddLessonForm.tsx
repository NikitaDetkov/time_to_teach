import React, { useEffect, useState } from 'react';
import { LessonType, SubjectType, StudentType, SelectItem } from '../../../types';
import './_AddLessonForm.scss';
import UserSelect from '../UserSelect/UserSelect';
import UserInput from '../UserInput/UserInput';

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
                    <label>Выбрать предмет</label>
                    { subjectsSelectList.length  
                        ? <UserSelect selectList={subjectsSelectList} />
                    : '' }
                    <label>Профильный уровень</label>
                    {/* <UserInput /> */}
                </div>

                <div className='AddLessonForm__main--student'>
                    <label>Выбрать ученика</label>
                    { studentsSelectList.length  
                        ? <UserSelect selectList={studentsSelectList} />
                    : '' }
                </div>

                <div className='AddLessonForm__main--price'>
                    <label>Стоимость урока</label>
                    <UserInput placeholder="&#8381; за час"/>
                </div>
            </div>
        </form>
    );
}

export default AddLessonForm;