import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../Staticlist'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Listoffoods = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('http://srv577826.hstgr.cloud:8002/api/v1/data/fooduser');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://srv577826.hstgr.cloud:8002/api/v1/data/fooduserid/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit logic here, if needed
  };

  return (
    <StaticListComponent
      data={data}
      onDelete={handleDelete}
      onEdit={handleEdit}
      editUrlBase='/listfood'  // Set the base URL for editing
      addProductUrl='/foodform'  // Set the URL for adding a new product
    />
  );
};

export default Listoffoods;