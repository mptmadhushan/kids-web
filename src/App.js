import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { Col, Input, Row, Button, Modal } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const [resp, setResp] = useState("");

  const showModal = () => {
    const values = {
      text: value,
    };
    axios
      .post("http://127.0.0.1:8000/api", values)
      .then((res) => {
        console.log(res.data);
        setResp(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <div style={{ backgroundColor: "#FDDE63" }}>
        <img src={logo} style={{ height: "5vh" }} alt="logo" />
        <p style={{ color: "white", fontSize: "2vh" }}>KidsApp</p>
      </div>
      <div className="bg-image">
        <Row justify="space-around">
          <Col span={12}>
            <div className="bg-card"></div>
          </Col>
          <Col span={16}>
            <h2 style={{ marginTop: "5vh", color: "white", fontSize: "4vh" }}>
              asd quis pariatur minim officia laborum deserunt officia. Et enim
              occaecat sunt esse elit sit ad. Anim aute nostrud cillum aute
            </h2>
            <Input placeholder="Basic usage" />
            <Button
              style={{ marginTop: "3vh" }}
              type="primary"
              onClick={showModal}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <Modal
          title="Result"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {resp.isSensitiveData ? (
            <div>
              <p>Email:{resp.emails}</p>
              <p>Name:{resp.names}</p>
              <p>Phone Number:{resp.phone_number}</p>
            </div>
          ) : (
            <div>
              <p>Not Sensitive</p>
            </div>
          )}
        </Modal>
      </div>

      {/* <div className="bg-image">
        <h2 style={{ color: "white", fontSize: "5vh" }}>How it's Work</h2>
        <Row justify="space-between">
          <Col span={6}>
            <div className="bg-card2"></div>
          </Col>{" "}
          <Col span={6}>
            <div className="bg-card2"></div>
          </Col>{" "}
          <Col span={6}>
            <div className="bg-card2"></div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
}

export default App;
