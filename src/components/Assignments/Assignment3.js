import React, { useState, useEffect } from "react";
import background from "../../images/assignment3_bg.png";
import Symbl from "../../images/SymblAI_White.svg";
import Github from "../../images/GitHubExternship.png"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import SymblNavigation from "../HomePage/SymblNavigation";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PreLoader from "../HomePage/PreLoader"

const Assignment3 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        myJson.sort(function (a, b) {
          return a.id - b.id;
        });
        setData(myJson);
      })
      .catch((err) => console.log(err));
  };

  const useStyles = makeStyles({
    toolbar: {
      fontSize:"20px",
      "& > p": {
        fontSize: "20px",
      },
    }
  });

  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  return (
    data.length ? 
    (
      <div
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
          <div>
          <SymblNavigation image1 = {Symbl} image2={Github} width1={140} width2={50} assignment={"Assignment 3"}/>
            <TableContainer
              sx={{
                marginTop:5
              }}
            >
              <Table
                sx={{ minWidth: 650, width: "60%", margin: "auto"}}
                style={{
                  background: "#000000bb",
                  borderRadius: "10px",
                  zIndex: "1",
                  backdropFilter:"blur(10px)",
                  border: "3px solid #C63D95",
                  backgroundClip:"border-box",
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration:"none",
                  color:"black",
                }}
                size='medium'
                aria-label='a dense table'
              >
                <TableHead>
                  <TableRow style={{borderBottom: "3px solid #0175FE"}}>
                    <TableCell style={{borderRight: "3px solid #0175FE", width:"8%"}}>
                      <Typography style={{ color: "#C63D95", fontSize:"30px"}} variant='h2'>
                        ID
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography style={{ color: " #0175FE", fontSize:"30px"}} variant='h2'>
                        TITLE
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component='th' scope='row' hover={true} style={{
                            borderRight: "3px solid #0175FE", 
                            width:"8%",
                          }}>
                          <Typography
                            style={{ color: " #fff", fontWeight: "400", fontSize:"20px", textTransform:"Capitalize"}}
                            variant='overline'
                          >
                            {row.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            style={{ color: " #fff", fontWeight: "400", fontSize:"20px", textTransform:"Capitalize" }}
                            variant='overline'
                          >
                            {row.title}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6}></TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <TablePagination
                classes={{
                  toolbar: classes.toolbar,
                }}
                sx ={{
                  "& .MuiSvgIcon-root" : {
                    color:"white"
                  }
                }}
                style={{ width: "70%", color: "#fff"}}
                rowsPerPageOptions={[5, 7, 10]}
                component='div'
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
            
          </div>
      </div>   
    ) : <PreLoader/>
  );
};

export default Assignment3;
