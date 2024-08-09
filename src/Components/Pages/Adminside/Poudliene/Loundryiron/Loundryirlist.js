import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../../Staticlist'; // Adjust the path as needed


const Loundryirlist = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('http://srv577826.hstgr.cloud:8002/api/v1/data/londryironuser');
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
      await fetch(`http://srv577826.hstgr.cloud:8002/api/v1/data/londryironuserid/${id}`, {
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
      editUrlBase='/listloundryiron'  // Set the base URL for editing
      addProductUrl='/loundryironform'  // Set the URL for adding a new product
    />
  );
};

export default Loundryirlist;