const CustomTable = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h3>Table</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">{data[0]["Month"] ?? ""}</th>
            <th scope="col">{data[0]["Work Efficiency"] ?? ""}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            //   let arr = [];
            if (idx > 0) {
              return (
                <tr key={row["Month"]}>
                  <td>{row["Month"] ?? ""}</td>
                  <td>{row["Work Efficiency"] ?? ""}</td>
                </tr>
              );
            }
            //   return;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
