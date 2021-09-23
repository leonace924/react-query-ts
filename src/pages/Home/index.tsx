import React from "react";
import { useQuery } from "react-query";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Loading from "../../components/Loading";
import { fetchUsers } from "../../services/api";

const HomePage: React.FC = () => {
  const { isLoading, error, data, refetch, isFetching } = useQuery(
    "users",
    fetchUsers
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Title>Grade Arc Tech Assessment</Title>

      <Button onClick={() => refetch()}>Refresh the data</Button>

      <div>
        <h3>User Profiles</h3>
        {isFetching ? <Loading isUpdate /> : data && <Table data={data} />}
      </div>
    </div>
  );
};

export default HomePage;
