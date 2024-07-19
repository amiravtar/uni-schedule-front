import { cloneDeep, uniqueId } from 'lodash';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ILabel {
	id: string;
	color: string;
	title: string;
}

export interface IEvent {
	id: string;
	title: string;
	allDay: boolean;
	start: string;
	end: string;
	extendedProps: {
		desc: string;
		label: string;
	};
}

export interface IProfessorDay {
	day: number;
	startTime: string;
	endTime: string;
}

export interface IProfessor {
	id: string;
	name: string;
	preferDays: Array<number>;
	days: Array<IProfessorDay>;
}

export interface ICourse {
	id: string;
	name: string;
	unit: number;
	semester: number;
	professors: Array<IProfessor['id']>;
}

interface ICalendarStore {
	labels: ILabel[];
	events: IEvent[];
	selectedLabels: Array<string>;
	toggleSelectedLabels: (labelId: string) => void;

	professors: Array<IProfessor>;
	courses: Array<ICourse>;

	addProfessor: (professor: Omit<IProfessor, 'id'>) => void;
	editProfessor: (professorId: IProfessor['id'], data: Partial<IProfessor>) => void;
	deleteProfessor: (professorId: IProfessor['id']) => void;

	addCourse: (course: Omit<ICourse, 'id'>) => void;
	editCourse: (courseId: ICourse['id'], data: Partial<ICourse>) => void;
	deleteCourse: (courseId: ICourse['id']) => void;
}

export const useCalendarStore = create<ICalendarStore>()(
	devtools(
		persist(
			(set) => ({
				labels: [],
				events: [],
				selectedLabels: [],
				toggleSelectedLabels: () => {},

				professors: [],
				courses: [
					{
						id: uniqueId(),
						name: 'test1',
						unit: 2,
						semester: 1,
						professors: ['123']
					}
				],

				addProfessor: (professor) =>
					set((state) => ({ professors: [...state.professors, { id: uniqueId(), ...professor }] })),
				editProfessor: (professorId, data) =>
					set((state) => {
						const copy = cloneDeep(state.professors);
						const foundIndex = copy.findIndex((p) => p.id === professorId);

						if (foundIndex !== -1) {
							copy[foundIndex] = {
								...copy[foundIndex],
								...data
							};
						}

						return {
							professors: copy
						};
					}),
				deleteProfessor: (professorId) =>
					set((state) => ({ professors: state.professors.filter((p) => p.id !== professorId) })),

				addCourse: (course) => set((state) => ({ courses: [...state.courses, { id: uniqueId(), ...course }] })),
				editCourse: (courseId, data) =>
					set((state) => {
						const copy = cloneDeep(state.courses);
						const foundIndex = copy.findIndex((p) => p.id === courseId);

						if (foundIndex !== -1) {
							copy[foundIndex] = {
								...copy[foundIndex],
								...data
							};
						}

						return {
							courses: copy
						};
					}),
				deleteCourse: (courseId) =>
					set((state) => ({ courses: state.courses.filter((p) => p.id !== courseId) }))
			}),
			{ name: 'CalendarStore' }
		)
	)
);
