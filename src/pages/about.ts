const data = {
    title: 'About',
    content: 'Hello on About'
  };
  
const renderAboutPage = () => {
    const template = `
      <div class="page">
        <h1>${data.title}</h1>
        <p>${data.content}</p>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    `;
    document.getElementById('root')!.innerHTML = template;
};
  
export default renderAboutPage;
