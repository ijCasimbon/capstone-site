import axios from "axios"
import React, { useEffect, useState } from "react"
import * as ReactBootStrap from 'react-bootstrap'

/*function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Top 10 scores</h1>
            <p>
              put top 10 here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} */
/*function LeaderBoard() {
  const [posts, setPosts] = useState({blogs: []})

  useEffect(() => {
    const fetchPostList = async () => {
      const {data} = await axios("https://jsonplaceholder.typicode.com/posts")
      setPosts({blogs: data})
      console.log(data)
    }
    fetchPostList()
    }, [setPosts])
  return (
    <div className="leaderBoard">
      <div class="container">
        <div class="align-items-center">
          <h1 class="font-weight-light">Top 10 scores</h1>
          {/*<div class="col-lg-5"> 
            <h1 class="font-weight-light">Top 10 scores</h1>
            <p>
              put top 10 here
            </p>
          </div> }
        </div>
        <div className="card-body">
          <table className="table table-borderless">
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <tbody>
              <tr>
                <td className="border-0"> place(1st,2nd..)</td>
                <td className="border-0"> username</td>
                <td className="border-0"> score</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
} */
function LeaderBoard() {
  const [posts, setPosts] = useState({ blogs: [] })

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("https://jsonplaceholder.typicode.com/posts")
      setPosts({ blogs: data })
      console.log(data)
    }
    fetchPostList()
  }, [setPosts])
  return (
    <div className="leaderBoard">
       <div class="align-items-center my-5">
       <h1 class="font-weight-light">Top 10 scores</h1>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Place</th>
            <th>UserName</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Intero99</td>
            <td>99</td>
          </tr>
          <tr>
            <td>2</td>
            <td>impishperth</td>
            <td>95</td>
          </tr>
          <tr>
            <td>3</td>
            <td>incisivelincoln</td>
            <td>94</td>
          </tr>
          <tr>
            <td>4</td>
            <td>trenchcoatpeterborough</td>
            <td>90</td>
          </tr>
          <tr>
            <td>5</td>
            <td>tailsurrey</td>
            <td>88</td>
          </tr>
          <tr>
            <td>6</td>
            <td>discoursemadison</td>
            <td>85</td>
          </tr>
          <tr>
            <td>7</td>
            <td>historyalabama</td>
            <td>83</td>
          </tr>
          <tr>
            <td>8</td>
            <td>sunflowersalisbury</td>
            <td>82</td>
          </tr>
          <tr>
            <td>9</td>
            <td>criticallouisiana</td>
            <td>81</td>
          </tr>
          <tr>
            <td>10</td>
            <td>homesvancouver</td>
            <td>80</td>
          </tr>
        </tbody>
      </ReactBootStrap.Table>
      </div>
    </div>
  );
}
export default LeaderBoard;
