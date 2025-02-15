// Auth
import { apiClient as api } from 'app/services/apiClient';
import { ApiUrls as urls } from 'app/services/apiUrls';
import {
	IAuthLogin,
	IAuthRegister,
	ICreateClassroom,
	ICreateCourse,
	ICreateMajor,
	ICreateProfessor,
	IReqId,
	IRequestToSolve,
	IUpdateClassroom,
	IUpdateCourse,
	IUpdateMajor,
	IUpdateProfessor
} from 'app/services/requestTypes';
import {
	IAuthLoginResponse,
	IClassroom,
	ICourse,
	IMajor,
	IProfessor,
	ISolverResult,
	ISolverResultItem
} from 'app/services/responseTypes';

// Auth
export const PostAuthLogin = (body: IAuthLogin) => api.post<IAuthLoginResponse>(urls.auth.login, body);
export const PostAuthRegister = (body: IAuthRegister) => api.post(urls.auth.register, body);

// solver
export const GetSolverResults = () => api.get<ISolverResult[]>(urls.solver.list);
export const GetSolverResultById = ({ id }: IReqId) =>
	api.get<ISolverResultItem>(urls.solver.getById, { urlParams: { id } });
export const PostSolve = (data: IRequestToSolve) => api.post(urls.solver.solve, data);
export const DeleteSolverResult = ({ id }: IReqId) => api.delete(urls.solver.delete, { urlParams: { id } });

// majors
export const GetMajors = () => api.get<IMajor[]>(urls.majors.list);
export const PostCreateMajor = (data: ICreateMajor) => api.post(urls.majors.create, data);
export const PutUpdateMajor = ({ id, ...params }: IUpdateMajor) =>
	api.put(
		urls.majors.update,
		{},
		{
			params,
			urlParams: {
				id
			}
		}
	);
export const DeleteMajor = ({ id }: IReqId) => api.delete(urls.majors.delete, { urlParams: { id } });

// classrooms
export const GetClassrooms = () => api.get<IClassroom[]>(urls.classrooms.list);
export const PostCreateClassroom = (data: ICreateClassroom) => api.post(urls.classrooms.create, data);
export const PutUpdateClassroom = ({ id, ...body }: IUpdateClassroom) =>
	api.put(urls.classrooms.update, body, {
		urlParams: {
			id
		}
	});
export const DeleteClassroom = ({ id }: IReqId) => api.delete(urls.classrooms.delete, { urlParams: { id } });

// professors
export const GetProfessors = () => api.get<IProfessor[]>(urls.professors.list);
export const PostCreateProfessor = (data: ICreateProfessor) => api.post(urls.professors.create, data);
export const PutUpdateProfessor = ({ id, ...body }: IUpdateProfessor) =>
	api.put(urls.professors.update, body, {
		urlParams: {
			id
		}
	});
export const DeleteProfessor = ({ id }: IReqId) => api.delete(urls.professors.delete, { urlParams: { id } });

// courses
export const GetCourses = () => api.get<ICourse[]>(urls.courses.list);
export const PostCreateCourse = (data: ICreateCourse) => api.post(urls.courses.create, data);
export const PutUpdateCourse = ({ id, ...body }: IUpdateCourse) =>
	api.put(urls.courses.update, body, {
		urlParams: {
			id
		}
	});
export const DeleteCourse = ({ id }: IReqId) => api.delete(urls.courses.delete, { urlParams: { id } });
