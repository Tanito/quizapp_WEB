import { createSelector } from '@reduxjs/toolkit';

//General or Global selectors
export const notificationSelector = (state) => state.notifications.list;

//Auth and User selectors
export const userSelector = (state) => state.auth.user;
export const authStatusSelector = (state) => state.auth.status;
export const tokenSelector = (state) => state.auth.token;
export const restoreSessionSelector = (state) => state.auth.restore;

//Quiz selectors
export const QuizSchoolSelector = (state) => state.QuizInfo.QuizSchool;
export const QuizSchoolStatusSelector = (state) => state.QuizInfo.status;

//Catalogue Selectors
export const catalogueStatusSelector = (state) => state.catalogue.status;
export const allCatalogueEntitiesSelector = (state) => state.catalogue.entities;
export const allCatalogueResultSelector = (state) => state.catalogue.result;
export const quizzesSelector = (state) => state.catalogue.entities.quizzes;
export const quizTagsSelector = (state) => state.catalogue.entities.quizTags;
export const reviewsSelector = (state) => state.catalogue.entities.reviews;
export const schoolsSelector = (state) => state.catalogue.entities.schools;
export const subjectsSelector = (state) => state.catalogue.entities.subjects;

//Quiz Detail Selectors
export const selectQuizDetailById = createSelector(
  [
    quizzesSelector,
    quizTagsSelector,
    reviewsSelector,
    schoolsSelector,
    subjectsSelector,
    (_, id) => id,
  ],
  (quizzes, tags, reviews, schools, subjects, id) => {
    let quizDetail = quizzes.filter((quiz) => quiz.id === id);
    // quizDetail.schoolId =

    return quizDetail;
  }
);

//Profile selectors
export const UserProfileSelector = (state) => state.Profile.data;
export const UserProfileStatusSelector = (state) => state.Profile.status;

//School selectors
export const SchoolQuizListSelector = (state) => state.School.SchoolQuizList.QuizList
export const SchoolQuizListStatusSelector = (state) => state.School.status

export const SchoolSubjectDetailSelector = (state) => state.School.SchoolSubjectList.SubjectDetail
export const SchoolSubjectListSelector = (state) => state.School.SchoolSubjectList.SubjectList
export const SchoolSubjectListStatusSelector = (state) => state.School.status
