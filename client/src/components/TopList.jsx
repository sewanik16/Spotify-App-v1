import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function TopList(){

    const [song,setSong] = useState([])
    const [artist,setArtist] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:5000/song/").then((response) =>{
            // console.log(response.data)
            setSong(response.data)
        }).catch((error) => console.log("errrr",error))

        axios.get("http://localhost:5000/artist/").then((response) =>{
            // console.log(response.data)
            setArtist(response.data)
        }).catch((error) => console.log("errrr",error))
    },[])


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
                            {
                                song.map((data)=>{
                                    return(
                                        <tr>
                                            <td>{data.artwork}</td>
                                            <td>{data.song}</td>
                                            <td>{data.dateofrelease}</td>
                                            <td>{data.artists}</td>
                                            <td>{data.rate}</td>
                                        </tr>
                                    )
                                })
                            }
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
                                    <th>Artists</th>
                                    <th>Date Of Birth</th>
                                    <th>Songs</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                artist.map((data)=>{
                                    return(
                                        <tr>
                                            <td>{data.artist}</td>
                                            <td>{data.dob}</td>
                                            <td>{data.songs}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TopList;