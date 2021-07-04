import uniqid from "uniqid";

const mockupState = {
	personalInfo: {
		name: "John",
		lastName: "Doe",
		role: "Software Developer",
		profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},

	contactInfo: {
		email: "john.doe@gmail.com",
		phone: "+123 123 456 789",
		location: "Amsterdam, NL",
		site: "linkedin.com/johnDoe",
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
	jobs: [
      {
        id: uniqid(),
        position: "Junior FrontEnd Developer",
        company: "Booking.com",
        location: "Amsterdam, NL",
        from: "2017-08",
        to: "2019-04",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: uniqid(),
        position: "FrontEnd Developer",
        company: "Amazon",
        location: "Amsterdam, NL",
        from: "2019-05",
        to: "Today",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],

	education: {
		id: uniqid(),
		degree: "",
		school: "",
		location: "",
		from: "",
		to: "",
	},
	schools: [
    {
      id: uniqid(),
      degree: "Bachelor of Science",
      school: "New York University",
      location: "New York City, USA",
      from: "2011-08",
      to: "2015-08",
    },
    {
      id: uniqid(),
      degree: "Coding Bootcamp",
      school: "Ironhack",
      location: "Berlin, DE",
      from: "2016-06",
      to: "2017-06",
    },
  ],

	skill: {
		id: uniqid(),
		title: "",
	},
	skills: [
    {
      id: uniqid(),
      title: "HTML",
    },
    {
      id: uniqid(),
      title: "Sass",
    },
    {
      id: uniqid(),
      title: "Jest",
    },
    {
      id: uniqid(),
      title: "React.JS",
    },
    {
      id: uniqid(),
      title: "Node.JS",
    },
  ],
};

export default mockupState;