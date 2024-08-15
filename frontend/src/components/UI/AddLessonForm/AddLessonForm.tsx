import React, { useEffect, useState } from 'react';
import { LessonType, SubjectType, StudentType, SelectItem } from '../../../types';
import './_AddLessonForm.scss';
import UserSelect from '../UserSelect/UserSelect';
import UserInput from '../UserInput/UserInput';
import UserCheckbox from '../UserCheckbox/UserCheckbox';
import UserButton from '../UserButton/UserButton';

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

    const initialLesson = {
        is_profile: false,
        price: 0,
        subjectId: subjectsSelectList[0].id,
        studentId: studentsSelectList[0].id
    };

    const [lesson, setLesson] = useState(initialLesson); 

    function handleSubjectsSelect(subjectId: string) {
        setLesson({
            ...lesson, 
            subjectId: Number(subjectId)
        });
    }

    function handleStudentsSelect(studentId: string) {
        setLesson({
            ...lesson, 
            studentId: Number(studentId)
        });
    }

    function handlePriceInput(price: string) {
        const newPrice = Number(price);

        if (isNaN(newPrice)) return;

        setLesson({
            ...lesson, 
            price: newPrice 
        });
    }

    function handleIsProfileCheckbox(isProfile: boolean) {
        setLesson({
            ...lesson, 
            is_profile: isProfile 
        });
    }
    
    function handleSaveLesson() {
        console.log(lesson);
    }

    return (
        <form className='AddLessonForm' onSubmit={(e) => e.preventDefault()}>
            <span className='AddLessonForm__header'>Добавить урок</span>
            
            <div className='AddLessonForm__main'>
                <div className='AddLessonForm__subject'>
                    <div className='AddLessonForm__subject--select'>
                        <label>Выбрать предмет</label>
                        { subjectsSelectList.length  
                            ? <UserSelect 
                                selectList={subjectsSelectList} 
                                selected={lesson.subjectId} 
                                onSelect={handleSubjectsSelect}
                            />
                        : '' }
                    </div>
                    <div className='AddLessonForm__subject--profile'>
                        <UserCheckbox value={lesson.is_profile} onChange={handleIsProfileCheckbox}/>
                        <label>Профильный уровень</label>
                    </div>
                </div>

                <div className='AddLessonForm__student'>
                    <label>Выбрать ученика</label>
                    { studentsSelectList.length  
                        ? <UserSelect 
                            selectList={studentsSelectList}
                            selected={lesson.studentId} 
                            onSelect={handleStudentsSelect}
                        />
                    : '' }
                </div>

                <div className='AddLessonForm__price'>
                    <label>Стоимость урока</label>
                    <UserInput value={String(lesson.price)} onChange={handlePriceInput}/>
                </div>

                <div className='AddLessonForm__buttons'>
                    <UserButton onClick={handleSaveLesson} styleButton="save">Сохранить</UserButton>
                    <UserButton onClick={handleSaveLesson} styleButton="danger">Отменить</UserButton>
                    <UserButton onClick={handleSaveLesson}>Отменить</UserButton>
                </div>
            </div>
        </form>
    );
}

export default AddLessonForm;