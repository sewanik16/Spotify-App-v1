import { Link } from "react-router-dom";

function AddSongs() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <h2>Add New Song</h2>
          <div className="col-md-6">
            <form className="form-group">
              <input
                type="text"
                className="form-control my-2"
                placeholder="Add a new song"
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Add a release date"
              />
              <input type="file" className="form-control my-2" />
              <div className="row">
                <div className="col-md-8">
                  <select className="form-control my-2">
                    <option>Select Artists</option>
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
            </form>
          </div>
          <div className="row my-3">
            <div className="col-md-6">
              <button className="btn btn-secondary w-25">Cancel</button>
              <button className="btn btn-primary ms-3 w-25">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal" id="exampleModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add Artist</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row my-3">
                <div className="col">
                  <form>
                    <div className="form-group row my-2">
                      <label className="col-md-4 col-form-label">
                        Artist Name
                      </label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="form-group row my-2">
                      <label className="col-md-4 col-form-label">
                        Date of Birth
                      </label>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-10">
                            <input type="text" className="form-control" />
                          </div>
                          <div className="col-md-2">
                            <i className="fa fa-calendar fs-2"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row my-2">
                      <label className="col-md-4 col-form-label">Bio</label>
                      <div className="col-md-8">
                        <textarea className="form-control" rows="3" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddSongs;
