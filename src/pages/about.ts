import NavBar from "../components/navbar";

const data = {
    title: 'About',
    content: 'Hello on About'
  };
  
const renderAboutPage = () => {
    const template = `
      <div class="page">
        ${NavBar}
        <h1>${data.title}</h1>
        <p>${data.content}</p>
      </div>
    `;
    document.getElementById('root')!.innerHTML = template;
};
  
export default renderAboutPage;
