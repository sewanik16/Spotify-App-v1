import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import axios from "axios";

function AddSongs() {
  let navigate = useNavigate()
  let [data,setData] = useState({})
  let [art,setArt] = useState({})
  const [allArt,setAllArt] = useState([])

  let handleInput=(e)=>{
    setData({...data, [e.target.name]:e.target.value});
  }
  let handleInputartist=(e)=>{
    setArt({...art, [e.target.name]:e.target.value});
  }
  
let addSong=(e)=>{
    e.preventDefault();
    axios({url:"http://localhost:5000/song/add",
    method:"POST",  
    headers:{ "Content-Type": "application/json" },
    data: JSON.stringify(data)
  }).then(() =>{
    navigate("/")
      // console.log("success ")
  }).catch((error) => console.log("errrr",error))
    // console.log(data);
}

let addArtist=(e)=>{

  
  // console.log(art)
  e.preventDefault();
  axios({url:"http://localhost:5000/artist/add",
  method:"POST",  
  headers:{ "Content-Type": "application/json" },
  data: JSON.stringify(art)
}).then(() =>{
     document.getElementById('closebutton').click()
     axios.get("http://localhost:5000/song/all").then((response) =>{
      setAllArt(response.data[0].name)
  }).catch((error) => console.log("errrr",error))

}).catch((error) => console.log("errrr",error))
  



}

let base64Path;
const handleFile =async (e) =>{
  base64Path = await fileTobase64(e.target.files[0]) 
  setData({...data,artwork:base64Path})
}
const fileTobase64 = (file) =>{
  return new Promise((resolve, reject)=>{
    const reader = new FileReader(file)
    reader.readAsDataURL(file)
    reader.onload = ()=>{
      resolve(reader.result)
    }
    reader.onerror = (err)=>{
      reject(err)
    }
  })
}

useEffect(()=>{
  axios.get("http://localhost:5000/song/all").then((response) =>{
    // console.log(response.data[0].name)
    setAllArt(response.data[0].name)
}).catch((error) => console.log("errrr",error))
},[])

  return (
    <>
     {/* <pre>{JSON.stringify(allArt)}</pre> */}
      <div className="container">
        <div className="row my-3">
          <h2>Add New Song</h2>
          <form className="form-group" onSubmit={addSong}>  
          <div className="col-md-6">
            
              <input
                type="text"
                className="form-control my-2"
                placeholder="Add a new song"
                name="songs" onChange={handleInput} required
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Add a release date"
                name="dateofrelease" onChange={handleInput} required
              />
              <input type="file" className="form-control my-2" name="artwork" onChange={handleFile} required/>
              <div className="row">
                <div className="col-md-8">
                  <select className="form-control my-2" name="artists" onChange={handleInput} required>
                    <option disabled selected value="">Select Artists</option>
                   
                    {
                      allArt.map((artist,index) => (
                        <option key={index} value={artist}>{artist}</option>
                      ))
                    }
                    {/* <option value="amir">Amir</option>
                    <option value="akshay">Akshay</option> */}
                  </select>
                </div>
                <div className="col-md-4 my-2 ">
                  <Link
                    to="/addartist"
                    className="btn btn-secondary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-plus"></i> Add New Artist
                  </Link>
                </div>
              </div>
            
          </div>
          <div className="row my-3">
            <div className="col-md-6">
              <button className="btn btn-secondary w-25">Cancel</button>
              <button type="submit" className="btn btn-primary ms-3 w-25">Save</button>
            </div>
          </div>
          </form>
        </div>
      </div>
  
  {/* modal----------- */}
      <div className="modal" id="exampleModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Artist</h5>
              <button
                type="button"
                className="btn-close"
                id="closebutton"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={addArtist}>
            <div className="modal-body">
              <div className="row my-3">
              
                <div className="col">
                  
                    <div className="form-group row my-2">
                      <label className="col-md-4 col-form-label">
                        Artist Name
                      </label>
                      <div className="col-md-8">
                        <input required type="text" className="form-control" name="artist" onChange={handleInputartist}/>
                      </div>
                    </div>

                    <div className="form-group row my-2">
                      <label className="col-md-4 col-form-label">
                        Date of Birth
                      </label>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-12">
                            <input required type="date" className="form-control" name="dob" onChange={handleInputartist}/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row my-2">
                      <label className="col-md-4 col-form-label">Bio</label>
                      <div className="col-md-8">
                        <textarea required className="form-control" rows="3" name="bio" onChange={handleInputartist}/>
                      </div>
                    </div>
                 
                </div>
               
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit"  className="btn btn-primary">
                Done
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddSongs;
