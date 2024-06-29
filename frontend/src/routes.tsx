import { LESSONS_ROUTE, LESSON_CARD_ROUTE } from "./utils/consts";
import Lessons from "./pages/Lessons";
import React from "react";
// import LessonCard from "./pages/LessonCard";

export const authRoutes: any[] = [
	{
		path: LESSONS_ROUTE,
		Component: <Lessons />,
	},
	// {
	// 	path: LESSON_CARD_ROUTE + ':id',
	// 	Component: <LessonCard />,
	// },
];

export const publicRoutes = [];