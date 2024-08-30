
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';


// const Cutleryupdate = () => {
//     const [name, setName] = useState('');
//     const [title, setTitle] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState(null);
//     let formdata = new FormData()
//     let params = useParams();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/culterysingle/${params.id}`);
//                 const result = await response.json();
//                 setName(result.name);
//                 setTitle(result.title);
//                 setPrice(result.price);
//                 setImage(result.image);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
        
//         fetchData();
//     }, [params.id]);
   
   
//             const updateuser = async (e)=>{
//                 e.preventDefault()
               
//                 formdata.append('name' , name)
//                 formdata.append('price' , price)
//                 formdata.append('title' , title)
//                 formdata.append('image' , image)
//                 try {
//                     let result = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/culterysingle/${params.id}` , {
//         method: "put",
//         body :formdata
      
//       })
//       result = await result.json();
//       if(result){
       
//         alert("Product added sucessfully")
//         }
//         else{
//           alert("Error in connection")
//         }
                    
//                 } catch (error) {
                    
//                 }

//             }    

//     return (
//         <div className=''>
        
//             <form className='marr'>
//                 <div className="mb-3 maa">
//                     <label className="form-label mt-2">Item Name</label>
//                     <input type="text" className={`form-control form-control-lg `}  name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Item name' />
//                 </div>
//                 <div className="mb-3 maa">
//                     <label className="form-label">Title</label>
//                     <input type="text" className={`form-control form-control-lg `}  name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your Item title' />
//                 </div>
//                 <div className="mb-3 maa">
//                     <label className="form-label">Price</label>
//                     <input type="text" className={`form-control form-control-lg `}  name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter your Item Price' />
//                 </div>
//                 <div className="mb-3 maa">
//                     <label className="form-label">Image</label>
//                     <input type="text" className={`form-control form-control-lg `} name='Image' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter your Item image path or name' />
//                     <input type="file" className={`form-control form-control-lg `} name='Image'  onChange={(e)=>setImage(e.target.files[0])} placeholder='Enter your Item title' />
//                 </div>
//                 <button type="submit" onClick={updateuser} className="btn btn-success mss">Update Product</button>
//             </form>
//         </div>
//     );
// }

// export default Cutleryupdate;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StaticForm from '../../../../../FormPage1';
import "../../../admin.css";

const Cutleryupdate = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/culterysingle/${params.id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setName(result.name);
                setTitle(result.title);
                setPrice(result.price);
                setImage(result.image); // Make sure this is handled correctly
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params.id]);

    const handleNameChange = (e) => setName(e.target.value);
    const handleTitleChange = (model) => setTitle(model); // Ensure this updates the state
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
            let response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/culterysingle/${params.id}`, {
                method: "PUT",
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let result = await response.json();
            if (result) {
                alert("Product updated successfully");
                navigate("/listcultery");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("Error updating data:", error);
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
            buttonLabel="Update Product"
            listUrl="/listcultery" 

        />
    );
};

export default Cutleryupdate;