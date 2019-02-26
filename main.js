const textAreaDOM = document.querySelector("#text-field");
const btn = document.querySelector('.btn');

const getInput  = () => {
	 const input = textAreaDOM.value;
	 return input;
};

const apiUrl = () => {
	const location = getInput();
	const apiBase = "api.openweathermap.org"
	const apiKey = "f2eb2ff683817cb841314307603da93c"
	const url = `http://${apiBase}/data/2.5/weather?q=${location}&APPID=${apiKey}`
	return url;
};

const dataRecv = (data) => {
	const value = Object.values(data);
	const degree = value[4].deg;
	const msg = `Feels like ${degree} °C in ${getInput()}`;
	document.querySelector('#output').innerHTML = msg;
	
}


const fetchData = () => {
	const uurl = apiUrl()
	fetch(uurl).then( response => response.json() ).then( data => dataRecv(data));
};


btn.addEventListener("click", fetchData);