import React, { useState, useEffect } from "react";
import Home from "./components/HomePage/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Assignment3 from "./components/Assignments/Assignment3";
import Assignment2 from "./components/Assignments/Assignment2";
import AssignmentList from "./components/Assignments/AssignmentList";
import styled from "styled-components";
import "./App.module.css";
import PreLoader from "./components/HomePage/PreLoader";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-shadow: none;
`;
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            maxHeight: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <PreLoader/>
        </div>
      ) : (
        <Router>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
              <Route path='/view_assignments' element={<AssignmentList />} />
            </Routes>
            <Routes>
              <Route path='/view_assignments/2' element={<Assignment2 />} />
            </Routes>
            <Routes>
              <Route path='/view_assignments/3' element={<Assignment3 />} />
            </Routes>
          </Container>
        </Router>
      )}
    </div>
  );
}

export default App;
