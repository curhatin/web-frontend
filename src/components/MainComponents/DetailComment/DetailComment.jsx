import React, { Component } from "react";

const DetailComment = porps => {
  return (
    <div>
      {" "}
      <div id="other-comment-box">
        <div id="comment-title">
          <a href="#">
            <h5>
              <strong>Makan bang</strong>
            </h5>
          </a>
        </div>
        <hr />
        <div id="comment-content">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, corrupti voluptate. Facere vel autem, sequi asperiores
            inventore facilis qui cum odit. Molestiae praesentium ipsam saepe
            tenetur fugiat dolorem! Magni, fugit?{" "}
          </p>
        </div>
      </div>
      <div id="button-wrapper">
        <div id="update-button">
          <button type="submit" className="btn-outline-success">
            Update
          </button>
        </div>
        <div id="update-button">
          <button type="submit" className="btn-outline-success">
            Delete
          </button>
        </div>
        <div id="update-button">
          <button type="submit" className="btn-outline-success">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComment;
