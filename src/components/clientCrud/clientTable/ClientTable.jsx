import Client from "../client/Client";

const ClientTable = () => {
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Klientas</th>
          <th>Keisti</th>
          <th>Salinti</th>
        </tr>
      </thead>
      <tbody>
        <Client/>
      </tbody>
    </table>
  );
};
export default ClientTable;
