import { Link } from "react-router-dom";


function TopList(){
    return(
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Top 10 Songs</h3>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/addsong" className="btn btn-primary ">
                        <i className="fa fa-plus"></i>
                         {" "}Add New Song
                        </Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <table className="table table-striped table-bordered table-hover text-center">
                            <thead className="bg-warning">
                                <tr>
                                    <th>Artwork</th>
                                    <th>Song</th>
                                    <th>Date of Release</th>
                                    <th>Artists</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>Nikhil</td>
                                        <td>Mast Magan</td>
                                        <td>Dec 2022</td>
                                        <td>nikhil.rathod</td>
                                        <td>4.3</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Top 10 Artists</h3>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                        <table className="table table-striped table-bordered table-hover text-center">
                            <thead className="bg-warning">
                                <tr>
                                    <th>Artwork</th>
                                    <th>Song</th>
                                    <th>Date of Release</th>
                                    <th>Artists</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>Nikhil</td>
                                        <td>Mast Magan</td>
                                        <td>Dec 2022</td>
                                        <td>nikhil.rathod</td>
                                        <td>4.3</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopList;