export type LessonType = {
	id: number,
	price: number,
	subjectId: number,
	studentId: number,
	tutorId: number,
	date: string,
};

export type SubjectType = {
	id: number,
	color: string,
	name: string,
};

export type StudentType = {
	id: number,
	name: string,
	surname: string,
	tutorId: number,
	grade: number,
	email: string,
	birthDate: string
};