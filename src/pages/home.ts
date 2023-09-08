import NavBar from "../components/navbar";

const data = {
    title: 'Home Page',
    content: 'Hello on Home Page'
  };
  
const renderHomePage = () => {
    const template = `
      <div class="page">
        ${NavBar}
        <h1>${data.title}</h1>
        <p>${data.content}</p>
      </div>
    `;
    document.getElementById('root')!.innerHTML = template;
};


export default renderHomePage;