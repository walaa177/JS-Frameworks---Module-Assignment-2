import Heading from "../Heading";
import { API } from "../constans/api";
import { useState, useEffect } from "react";
import HomeItem from "./HomeItem";
import { Container } from "react-bootstrap";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setItems(json);
        } else {
          setError("An error");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <Container>
      <div className="items ">
        <div className="text-center heading-home">
          <Heading title="Items" />
        </div>
        <div className="row">
          {items.map(function (item) {
            const { flight_number, details, mission_name } = item;

            return (
              <HomeItem
                key={flight_number}
                flight_number={flight_number}
                details={details}
                mission_name={mission_name}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
export default Home;
