interface IMovie {
  poster: string;
  title: string;
  introduce: string;
}

const movie: IMovie[] = [
  { poster: "../Avatar.jpg", title: "아바타2", introduce: "흥행이 예상되는 영화" },
  { poster: "../Endgame.jpg", title: "엔드게임", introduce: "마블" },
  { poster: "../noWayHome.jpg", title: "노웨이홈", introduce: "스파이더맨" },
  { poster: "../TheNightOwl.jpg", title: "올빼미", introduce: "요즘 뜬 스릴러" },
  { poster: "../Twilight.jpg", title: "트와일라잇", introduce: "뱀파이어와 인간의 만남" },
];

function List() {
  return (
    <div>
      <h1>영화관</h1>

      {movie.map((each,index) => {
        return (
          <div key={index}>
            <img src={each.poster} alt="포스터사진"/> 
            <span>제목:{each.title}</span>
            <span>소개:{each.introduce}</span>
          </div>
        );
      })}
    </div>
  );
}

export default List;

