export const BASE_ENDPOINT = 'https://apiquizzes.herokuapp.com';

// export const BASE_ENDPOINT = 'http://localhost:3000';

export const AUTH_ENDPOINT = BASE_ENDPOINT + '/auth';

export const ME_ENDPOINT = AUTH_ENDPOINT + '/me';

export const RESTORE_ENDPOINT = AUTH_ENDPOINT + '/restore';

export const LOGIN_ENDPOINT = AUTH_ENDPOINT + '/login';

export const LOGIN_ORG_ENDPOINT = AUTH_ENDPOINT + '/login/org';

export const SCHOOL_PREREGISTER_ENDPOINT = BASE_ENDPOINT + '/org';

export const SCHOOL_FINAL_REGISTER_ENDPOINT = AUTH_ENDPOINT + '/org/register';

export const USER_REGISTER_ENDPOINT = AUTH_ENDPOINT + '/register';

export const SCHOOL_ENDPOINT = BASE_ENDPOINT + '/org';

export const QUIZ_ENDPOINT = BASE_ENDPOINT + '/quiz';

export const COUNT_QUIZ_ENDPOINT = QUIZ_ENDPOINT + '/all/quizzes';

export const SUBJECT_ENDPOINT = BASE_ENDPOINT + '/subject';

export const USER_PROFILE_ENDPOINT = BASE_ENDPOINT + '/users';

export const SCHOOL_PROFILE_ENDPOINT = BASE_ENDPOINT + '/';

export const QUIZ_INFO_ENDPOINT = QUIZ_ENDPOINT + '/info';

export const QUESTIONS_ENDPOINT = BASE_ENDPOINT + '/questions';

export const ANSWERS_ENDPOINT = BASE_ENDPOINT + '/answers';

export const QUESTIONS_BULKUPDATE_ENDPOINT = QUIZ_ENDPOINT + '/bulkUpdate';

export const GET_USER_EMAIL_ENDPOINT = BASE_ENDPOINT + '/users/email/';

export const TEACHER_ENDPOINT = BASE_ENDPOINT + '/teachers/';

export const ENROLLS_ENDPOINT = BASE_ENDPOINT + '/roles/enrolled/';

export const TO_STUDENT = BASE_ENDPOINT + '/roles/student/';

export const TO_ENROLL = BASE_ENDPOINT + '/roles/enroll';

export const USER_ADD_FAVOURITES = BASE_ENDPOINT + '/roles/fan';

export const USER_QUIZ_FAVOURITES = BASE_ENDPOINT + '/roles/favorites/user';

export const USER_DELETE_FAVOURITES = BASE_ENDPOINT + '/roles';

export const USER_ENRROLLED_IN = BASE_ENDPOINT + '/quiz/enrolled/user';
