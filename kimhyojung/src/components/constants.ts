interface Movie {
  name: string;
  imgSrc: string;
  imgAlt: string;
  movieURL: string;
  moviePrice: number;
}

interface Moviequery {
  moviename: undefined | string | string[];
  movieimg: undefined | string | string[];
}
const MOVIE_SEAT_ERRORMESSAGE: string = '잘못된 좌석 선택입니다';

export type { Movie, Moviequery };
export default MOVIE_SEAT_ERRORMESSAGE;
