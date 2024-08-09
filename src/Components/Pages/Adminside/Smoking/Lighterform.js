
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import StaticForm from '../../../FormPage1';
// const Lighterform = () => {
//   const [data, setData] = useState({
//         name: '',
//         title: '',
//         price: '',
//         image: null
//     });
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 let response = await fetch("http://srv577826.hstgr.cloud:8002/api/v1/auth/ligproducts");
//                 let result = await response.json();
//                 setData({
//                     name: result.name,
//                     title: result.title,
//                     price: result.price,
//                     image: null
//                 });
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleNameChange = (e) => {
//         setData({ ...data, name: e.target.value });
//     };

//     const handlePriceChange = (e) => {
//         setData({ ...data, price: e.target.value });
//     };

//     const handleDescriptionChange = (model) => {
//         setData({ ...data, title: model });
//     };

//     const handleFileChange = (e) => {
//         setData({ ...data, image: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         let formData = new FormData();
//         formData.append('name', data.name);
//         formData.append('title', data.title);
//         formData.append('price', data.price);
//         formData.append('image', data.image);

//         if (!data.name || !data.title || !data.price || !data.image) {
//             alert("Please fill all fields");
//             return;
//         }

//         try {
//             let response = await fetch("http://srv577826.hstgr.cloud:8002/api/v1/auth/ligproducts", {
//                 method: "POST",
//                 body: formData
//             });
//             let result = await response.json();
//             if (response.ok) {
//                 navigate("/listsmokigess");
//                 alert("Product added successfully");
//             } else {
//                 alert("Error in connection");
//             }
//         } catch (error) {
//             console.error("ERROR IN DB", error);
//             alert("Error in connection");
//         }
//     };

//     return (
//         <StaticForm
//             name={data.name}
//             title={data.title}
//             price={data.price}
//             onNameChange={handleNameChange}
//             onPriceChange={handlePriceChange}
//             onDescriptionChange={handleDescriptionChange}
//             onFileChange={handleFileChange}
//             onSubmit={handleSubmit}
//             listUrl="/listlighter" 
//             buttonLabel="Add Product"
//         />
//     );
// };

// export default Lighterform


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaticForm from '../../../FormPage1';
const Lighterform = () => {
  const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
const navigate = useNavigate();
    const handleNameChange = (e) => setName(e.target.value);
    const handleTitleChange = (model) => setTitle(model);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleFileChange = (e) => setImage(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            let response = await fetch('http://srv577826.hstgr.cloud:8002/api/v1/auth/ligproducts', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Network response was not ok');

            let result = await response.json();
            if (result) {
                alert('Product added successfully');
                navigate('/listlighter')
               
            } else {
                alert('Error in connection');
            }
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <StaticForm
            name={name}
            title={title}
            price={price}
            onNameChange={handleNameChange}
            onTitleChange={handleTitleChange}
            onPriceChange={handlePriceChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
            buttonLabel="Add Product"
            listUrl="/listlighter" 
        />
    );
};

export default Lighterform