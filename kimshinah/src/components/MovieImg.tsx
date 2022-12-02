interface Props {
  myNum: number;
}
const MovieImg = ({ myNum }: Props) => {
  return (
    <div>
      <div>{myNum}</div>
    </div>
  );
};
export default MovieImg;
