let par = document.getElementById("age");
let date = new Date();
const myName = 'Deepak Singh';
const age = date.getFullYear() - 2000;
const occupation = 'working';
const role = 'SDE';
const company = 'Jio Platforms Limited';
const degree = 'B. Tech. Hons. in CSE';
const college = 'IIT Bhilai';
// console.log(year);
par.innerHTML = `Hi! I am <b>${myName}</b>. I am ${age} years old.` 
            + `<br>I am ${occupation} as <b>${role}</b> at <b>${company}</b>.`
            + `<br>I have done my <b>${degree}</b> from <b>${college}</b>.`;

let exp = document.getElementById("brief-exp");
const thesisProject = 'Unsupervised Data Augmentation for Deep Fakes Detection';
const internship2 = 'CNN based Deep Learning malware classifier and a Disassembler';
const intern2role = 'Summer Intern';
const intern2comp = 'Max Secure Softwares';
const internship1 = 'Mobile Security';
const intern1role = 'Summer Research Intern';
const intern1comp = 'IIT Roorkee';
exp.innerHTML = `I am working as a SDE in Jio Health Hub. My responsibilities include developing microservices to enable scalable backend<br>`
	+ `pipelines to ensure high availablity and consistency. I work with technologies like Python, FastAPI, NoSQL DB and Apache Kafka.<br>`
            + `My ${degree} thesis project was <b>${thesisProject}</b>.`
            + `<br>I worked on <b>${internship2}</b> as ${intern2role} at ${intern2comp}.`
            + `<br>I worked on <b>${internship1}</b> as ${intern1role} at ${intern1comp}.`
