import {Pagination, Row, Col} from "react-bootstrap"

export default function CustomPagination({ activePage, count, rowsPerPage, totalPages, setActivePage }) {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  
    return (
            <Row>
                <Col xs={12}>
                    <Pagination size="md" className="mx-auto w-50">
                        <div className='mx-auto'>
                            <Pagination.First onClick={() => setActivePage(1)} className="border border-1"/>
                            <Pagination.Prev onClick={() => setActivePage(activePage - 1)} className="border border-1"/>
                            {/* <Pagination.Ellipsis className="border border-1"/> */}
                            {[...Array(totalPages).keys()].map((page) => (
                                <Pagination.Item key={page+1} active={page+1 === activePage} onClick={()=>setActivePage(page+1)} className="bg-primary border border-1">{page+1}</Pagination.Item>
                            ))}
                            {/* <Pagination.Ellipsis className="border border-1"/> */}
                            <Pagination.Next onClick={() => setActivePage(activePage + 1)} className="border border-1"/>
                            <Pagination.Last onClick={() => setActivePage(totalPages)} className="border border-1"/>
                        </div>
                        
                    </Pagination>
                    <p>
                        Page {activePage} of {totalPages}
                    </p>
                    <p>
                        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
                    </p>
                </Col>
            </Row>
    )}

    //   <>
    //     <div className="pagination">
    //       <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
    //         ⏮️ First
    //       </button>
    //       <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
    //         ⬅️ Previous
    //       </button>
    //       <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
    //         Next ➡️
    //       </button>
    //       <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
    //         Last ⏭️
    //       </button>
    //     </div>
    //     <p>
    //       Page {activePage} of {totalPages}
    //     </p>
    //     <p>
    //       Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
    //     </p>
    //   </>