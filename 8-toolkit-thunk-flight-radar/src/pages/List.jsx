import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flightReducer);
  // slice'methodun kesmeye başlayacığı elemanın sırası
  const [startOffset, setStartOffset] = useState(0);

  // sayfa başına gösterlicek eleman sayısı
  const perPage = 10;

  // slice'methodun kesmeyi bitireceği elemanın sırası
  const endOffset = startOffset + perPage;

  // slice methodu ile başlangıç ve bitiş arasını kes
  const currentFlights = flights.slice(startOffset, endOffset);

  // yeni sayfa seçildiğince çalışır
  const handlePageClick = (event) => {
    // başlangıç state'ini güncelle
    setStartOffset(event.selected * perPage);
  };

  // toplam sayfa sayısını hesapla
  const total = Math.ceil(flights.length / perPage);

  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        className="pagination"
        activeClassName="active"
        breakLabel="..."
        nextLabel="ileri >"
        previousLabel="< geri"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={total}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
