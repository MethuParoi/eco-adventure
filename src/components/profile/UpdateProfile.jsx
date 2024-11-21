// import { useState, useRef, useContext, useEffect } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const UpdateProfile = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const pageTitle = "eco-adventure | Update Profile";
//     document.title = pageTitle;
//   }, [location]);

//   const { user, updateUserProfile } = useContext(AuthContext);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   //use navigate to redirect to home page
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUserProfile(formData.email, formData.password);
//       setFormData({ email: "", password: "" }); // Reset form data
//       emailRef.current.value = "";
//       passwordRef.current.value = "";
//       navigate("/profile");
//       toast.success("User profile updated successfully!");
//     } catch (error) {
//       toast.error(error.message);
//       console.error("Error updating:", error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700">
//           Update Profile
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               ref={emailRef}
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="photo"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Photo-URL
//             </label>
//             <input
//               type="text"
//               name="photo"
//               id="photo"
//               ref={passwordRef}
//               value={formData.password}
//               onChange={handleChange}
//               required
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-lg font-medium text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Update Profile
//           </button>
//         </form>
//         <div className="flex flex-col gap-y-3 items-center justify-center">
//           <Link to="/" className="text-blue-500 hover:underline">
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "eco-adventure | Update Profile";
    document.title = pageTitle;
  }, [location]);

  const { user, updateUserProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: "", photo: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData.name, formData.photo);
      setFormData({ name: "", photo: "" }); // Reset form data
      navigate("/profile");
      toast.success("User profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
      console.error("Error updating:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-600"
            >
              Photo-URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              value={formData.photo}
              onChange={handleChange}
              required
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Update Profile
          </button>
        </form>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
