const data = {
    title: 'Home Page',
    content: 'Hello on Home Page'
  };
  
  const renderHomePage = () => {
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


  export default renderHomePage;