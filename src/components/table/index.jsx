import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const Table = ({ ...props }) => {
  return (
    <>
      <BootstrapTable
        striped
        keyField={props?.id}
        data={props?.data}
        columns={props?.columns}
      />
    </>
  );
};

export default Table;
