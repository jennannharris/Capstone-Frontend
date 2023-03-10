import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Post = () => {
	
	const params = useParams();
	const navigateTo = useNavigate();
	const [post, setPost] = useState();

  useEffect(() => {
		console.log(params);
		const makeAPICall = async () => {
			const postResponse = await fetch(
				`http://localhost:3001/post/${params.id}`
			);
			const postData = await postResponse.json();
			setPost(postData.post);
		};
		makeAPICall();
	}, [params.id]);


  if (!post) {
		return (
			<div>
				{/* #34B Show a message that the post does not exist (or hasn't been loaded yet)*/}
				<h1>Post does not exist or is loading...</h1>
			</div>
		);
	}

  const deleteClicked = async () => {
		const deleteResponse = await fetch(
			`http://localhost:3001/post/${params.id}`,
			{
				method: "DELETE",
			}
		);
		navigateTo("/");
	};

  return (
  <div>
  {/* #43 Make the post content stored in state show up using the keys that were set from #9 */}
  <h1>{post.animalInformation}</h1>
  <h3>{post.animal}</h3>
  <p>{post.name}</p>
  <p>{post.age}</p>
  <p>{post.breed}</p> 
  <p>{post.description}</p>
  <p>{post.suggestedFee}</p>
  <p>{post.briefMedicalHistory}</p>
  <p>{post.myStory}</p>
  <p>{post.apply}</p>
  link to.../Application


  <div>
    <span
      style={{
        color: "red",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={deleteClicked}
    >
      Delete
    </span>
  </div>
</div>
);
};

export default Post;







// const Post = () => {
//   return (
//     <div className="container-fluid">
//       <div className="row" id="row">
//         <div className="ViewerInfo text-center" id="heading">
//           Animal Information
//         </div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">Animal:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">Name:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">Breed:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">Age:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">Description:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">Suggested Fee:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-3">Brief Medical History:</div>
//       </div>

//       <div className="row" id="text">
//         <div className="col-1">My Story:</div>
//       </div>
//       <div className="row" id="text">
//         <div className="col-1">
//           Apply!
//           <input type="submit" id="submit" />
//           {/* <Link to="/application" /> */}
//         </div>
//       </div>
//       <div className="row" id="text">
//         <div className="col-1">
//           Connect with the Owner
//           <input type="submit" id="submit" />
//           {/* link to email */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;