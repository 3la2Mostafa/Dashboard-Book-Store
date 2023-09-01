import React from "react";

function Footer() {
  
  return (
    <>
        <div className="container-fluid m-0 p-0 footer" >
            <div class="d-flex justify-content-center pt-1">
                <div class="container-fluid text-center" >
                    <h1>Alef Bookstore</h1>
                    <h5>&copy; 2023 All Rights Reserved</h5>
                </div>
            </div>
      
        <div className="text-center text-white social-div">
        {/* <!-- Grid container --> */}
        <div className="container" id="footer_social">
          {/* <!-- Section: Social media --> */}
            <section className="pb-3">
            {/* <!-- Facebook --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                  <i className="bi bi-facebook"></i >
                </a>

            {/* <!-- Twitter --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-twitter"></i >
              </a>

            {/* <!-- Google --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-google"></i >
              </a>

            {/* <!-- Instagram --> */}
              <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i className="bi bi-instagram"></i >
              </a>
            </section>
        </div>
      </div>
    </div>

    </>
  );
}

export default Footer;
