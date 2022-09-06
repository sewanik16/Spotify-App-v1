import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

function TopList({filterSong}){

    const [song,setSong] = useState([])
    const [artist,setArtist] = useState([])
    const [allArt,setAllArt] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [itemPerPage] = useState(5)
    const [FilterData,setFilterData] = useState([])
    const [rate,setRate] = useState(3)

    useEffect(()=>{
        if(filterSong.length>0){
            setFilterData(filterSong)
        }else{
            setFilterData(song)
        }
        // console.log("my",filterSong)
    },[filterSong])


    useEffect(()=>{
        axios.get("http://localhost:5000/song/").then((response) =>{
            console.log(response.data)
            setSong(response.data)
            setFilterData(response.data)
        }).catch((error) => console.log("errrr",error))

        axios.get("http://localhost:5000/artist").then((response) =>{
            // console.log(response.data)
            setArtist(response.data)
        }).catch((error) => console.log("errrr",error))

        axios.get("http://localhost:5000/song/all").then((response) =>{
        // console.log(response.data[0].name)
        setAllArt(response.data[0].songs)
        
    }).catch((error) => console.log("errrr",error))

    },[])

    let indexOfLastItem = currentPage * itemPerPage;
    let indexOfFirstItem = indexOfLastItem - itemPerPage;
    let currentItemSongs = FilterData.slice(indexOfFirstItem,indexOfLastItem)
    let pageNumbers=[]
    for(let i=1;i<=Math.ceil(song.length/itemPerPage);i++){
        pageNumbers.push(i)
    }

     function handleDelete(id){
        axios.delete(`http://localhost:5000/song/delete/${id}`).then((res)=>{
            axios.get("http://localhost:5000/song/").then((response) =>{
            console.log(response.data)
            setSong(response.data)
            setFilterData(response.data)
        }).catch((error) => console.log("errrr",error))
        })
     }

    // let handleRate = ()=>{

    //     // song.map((d,i)=>{
    //     //     if(i == index){
    //         if(rate!="fa-regular fa-star")
    //         setRate("fa-regular fa-star")
    //         else
    //         setRate("fa fa-star")
    //     //     }
    //     // })
        
    // }

    return(
        <>
        {/* <pre>{allArt}</pre> */}
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
                        <table className="table table-striped table-bordered table-hover text-center ">
                            <thead className="bg-warning">
                                <tr>
                                    <th>Artwork</th>
                                    <th>Song</th>
                                    <th>Date of Release</th>
                                    <th>Artists</th>
                                    <th>Rate</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody >
                            {
                                currentItemSongs.map((data,index)=>{
                                    return(
                                        <tr key={index}  className="m-2">
                                            <td style={{width:"200px",height:"100px"}}>
                                            <img src={data.artwork} className="w-100" alt=""/>
                                            </td>
                                            <td className="py-5">{data.songs}</td>
                                            <td className="py-5">{data.dateofrelease}</td>
                                            <td className="py-5">{data.artists}</td>
                                            <td className="py-5">
                                            {
                                               [1,1,1,1,1].map((v,i)=>(
                                                i<rate?<i className="fa fa-star" onClick={()=>setRate(rate-1)}/>:
                                                <i className="fa-regular fa-star" onClick={()=>setRate(rate+1)}/>
                                               )) 
                                            }
                                            </td>
                                            <td className="py-5">
                                               <span onClick={()=>{handleDelete(data._id)}} 
                                               style={{cursor: 'pointer'}}> ❌</span>
                                               &nbsp;&nbsp;&nbsp;
                                               <span style={{cursor: 'pointer'}}>🖊️</span>
                                            </td>
                                        </tr>  
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        <ul className="pagination">
                                {
                                    pageNumbers.map((number)=>(
                                        <li key={number} className="page-item">
                                        <a onClick={()=>{setCurrentPage(number)}} href="#" className="page-link">
                                            {number}
                                            </a>
                                        </li>
                                    ))
                                }
                        </ul>
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
                                artist.map((data,i)=>{
                                    return(
                                        <tr>
                                            <td>{data.artist}</td>
                                            <td>{data.dob}</td>
                                            {   allArt[i]==undefined ?<td>Raja Hindustani</td>
                                                : <td>{allArt[i]}</td>

                                            }
                                            
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