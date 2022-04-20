

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
const gradeLastFilm = prompt("На сколько оцените его?", "");
const secondLastFilm = prompt("Один из последних просмотренных фильмов?", "");
const secondGradeLastFilm = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = gradeLastFilm;
personalMovieDB.movies[secondLastFilm] = secondGradeLastFilm;

console.log(personalMovieDB);
