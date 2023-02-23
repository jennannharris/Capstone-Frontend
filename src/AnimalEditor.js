import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AnimalEditor = () => {
	// #4 Set up three state variables so we can store what the user types into the form
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [age, setAge] = useState("");
    const [describedAs, setDescribedAs] = useState("");
	// #5 Set up navigateTo so when the form is submitted, we have access to the router
	const navigateTo = useNavigate();

	useEffect(() => {
		const checkAuth = async () => {
			// A14: Check auth status according to the backend
			const response = await fetch(`http://localhost:3001/authStatus`, {
				//A15: Make sure to include the credentials info the got set using /login
				credentials: "include",
			});
			const data = await response.json();
			if (data.loggedIn) {
				//do nothing, they're allowed on this page
			} else {
				alert("Not authorized.");
				navigateTo("/");
			}
		};
		checkAuth();
	}, []);

	// #7C Form has been submitted, run this function
	const addAnimal = async (event) => {
		// #8 Prevent the form from refreshing in the browser (default action)
		event.preventDefault();

		//#9 Construct an object with four keys & values, the first three are extracting the values
		// in state and the last key/value pair is storing the current date & time into a key called
		//"timestamp"
		const animalContent = {
			name, //shorthand of title: title (ie the key is "title" and the value from state is also called title)
			type,
			age,
            describedAs,
		};

		const serverResponse = await fetch(`http://localhost:3001/newAnimal`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(animalContent),
			credentials: "include",
		});

		//#18 Use the navigate function from step #5 to navigate us back to the homepage using the router
		navigateTo("/");
	};

	const logoutClicked = async () => {
		await fetch("http://localhost:3001/logout", {
			credentials: "include",
		});
		navigateTo("/");
	};

	return (
		<div className="container">
			<h1>Animal Editor</h1>
			<span
				style={{
					textDecoration: "underline",
					color: "blue",
				}}
				onClick={logoutClicked}
			>
				Logout
			</span>
			{/* 7B Form is submitted, time to head to our JS function */}
			<form onSubmit={addAnimal}>
				<label>Name: </label>
				<input
					type="text"
					name="name"
					className="form-control"
					id="name"
					// #6A When the user types into the input text field, update what letters they press into the state
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}
				/>
				<label>Type: </label>
				<input
					type="text"
					name="type"
					className="form-control"
					// #6B When the user types into the input text field, update what letters they press into the state
					value={type}
					onChange={(event) => {
						setType(event.target.value);
					}}
				/>
				<label>Age: </label>
				<textarea
					name="age"
					className="form-control"
					// #6C When the user types into the input text field, update what letters they press into the state
					value={age}
					onChange={(event) => {
						setAge(event.target.value);
					}}
				></textarea>
				{/* #7A Form is submitted */}
				<button type="submit" className="btn btn-primary">
					Post
				</button>
			</form>
		</div>
	);
};

export default AnimalEditor;
