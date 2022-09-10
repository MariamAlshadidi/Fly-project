const SeatMap = (props) => {
  const seatsNo = 28;
  const parts = ["A", "B", "C", "D", "E", "F", "G"];
  let arr = [];
  //let j = 0
  for (let j of parts) {
    for (let i = 1; i <= seatsNo / 7; i++) {
      arr.push({ row: j, number: i });
    }
  }
  console.log(arr);
  return (
    <div>
      <h5 className="my-3">Please Choose Your Seat</h5>
      {arr.map((e) => (
        <>
          {e.number == 4 ? (
            <>
              {e.row + e.number != props.seat && (
                <button
                  onClick={props.onClick}
                  name="seat"
                  value={e.row + e.number}
                  style={{ width: "50px" }}
                  className="btn btn-light border"
                >
                  {e.row}
                  {e.number}
                </button>
              )}
              {e.row + e.number == props.seat && (
                <button
                  onClick={props.onClick}
                  name="seat"
                  value={e.row + e.number}
                  style={{ width: "50px" }}
                  className="btn btn-light border"
                >
                  {e.row}
                  {e.number}
                </button>
              )}
              <div></div>
            </>
          ) : (
            <>
              {e.row + e.number == props.seat && e.number == 2 && (
                <button
                  onClick={props.onClick}
                  name="seat"
                  value={e.row + e.number}
                  style={{ width: "50px" }}
                  className="me-4 btn btn-warning border"
                >
                  {e.row}
                  {e.number}
                </button>
              )}
              {e.row + e.number != props.seat && e.number == 2 && (
                <button
                  onClick={props.onClick}
                  name="seat"
                  value={e.row + e.number}
                  style={{ width: "50px" }}
                  className="me-4 btn btn-light border"
                >
                  {e.row}
                  {e.number}
                </button>
              )}

              {e.row + e.number == props.seat && e.number != 2 && (
                <button
                  onClick={props.onClick}
                  name="seat"
                  value={e.row + e.number}
                  style={{ width: "50px" }}
                  className="btn btn-warning border"
                >
                  {e.row}
                  {e.number}
                </button>
              )}
              {e.row + e.number != props.seat && e.number != 2 && (
                <button
                  onClick={props.onClick}
                  name="seat"
                  value={e.row + e.number}
                  style={{ width: "50px" }}
                  className="btn btn-light border"
                >
                  {e.row}
                  {e.number}
                </button>
              )}
            </>
          )}
        </>
      ))}
    </div>
  );
};
export default SeatMap;
