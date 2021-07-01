import uniqid from "uniqid";

const initialUserState = {
	personalInfo: {
		name: "",
		lastName: "",
		role: "",
		profile: "",
	},

	contactInfo: {
		email: "",
		phone: "",
		location: "",
		site: "",
	},

	workExperience: {
		id: uniqid(),
		position: "",
		company: "",
		location: "",
		from: "",
		to: "",
		description: "",
	},
	jobs: [],

	education: {
		id: uniqid(),
		degree: "",
		school: "",
		location: "",
		from: "",
		to: "",
	},
	schools: [],

	skill: {
		id: uniqid(),
		title: "",
	},
	skills: [],

	lenguage: {
		id: uniqid(),
		title: "",
	},
	lenguages: [],
};

export default initialUserState;