import React from 'react'

const Projects = () => {
  return (
    <div className='container animate mb-5'>
      <h1 className='mt-5'>My Projects</h1>
      <section>
        <h3 className='mt-5'>Tripbook</h3>
        <h6>A travel journal focused on server-side code</h6>
        <p className='mt-3'>
          This full-stack web application allows users to login, log and save
          information related to travel plans. I created this app while planning
          a year-long trip around the world. To make thinks clearer and ensure
          that the right information was added for each country, I created an
          app which requires specific information about each country the user
          plans to travel to. Each country's information is stored in an easy to
          navigate dashboard for future reference.
        </p>
        <div className='mt-2'>
          <a href='https://node-tripbook-app.herokuapp.com/'>
            <i className='fas fa-external-link-square-alt'></i>
            <span>Live Link</span>
          </a>
        </div>
        <div className='mt-2'>
          <a href='https://github.com/devLevi/node-tripbook-app'>
            <i className='fab fa-github'></i>
            <span>Github</span>
          </a>
        </div>
      </section>
      <section>
        <h3 className='mt-5'>Discover App</h3>
        <h6>Capstone project for demonstrating API integration skills</h6>
        <p className='mt-3'>
          This front-end web application uses Tastedive and Walmart APIs and
          allows the user to find similar books, movies and music. Results are
          returned and the user can select the item for purcahse on
          www.walmart.com.
        </p>
        <div className='mt-2'>
          <a href='https://github.com/devLevi/Discover-App'>
            <i className='fas fa-external-link-square-alt'></i>
            <span>Live Link</span>
          </a>
        </div>
        <div className='mt-2'>
          <a href='https://devlevi.github.io/Discover-App/'>
            <i className='fab fa-github'></i>
            <span>Github</span>
          </a>
        </div>
      </section>
      <section className='mb-5'>
        <h3 className='mt-5'>Design and Other Experience</h3>
        <h6>Other work from graphic design to office management</h6>
        <p className='mt-3'>
          Over the last two years I have overseen the development of multiple
          websites, assisted with app design for top selling item Mila Finder®
          and generated marketing material for a database of over 6000 leads and
          customers. I've been managing a sales team on the road at conventions,
          in the office and remotely while performing market research and
          heading up social media marketing campaigns. Here are a few projects I
          helped complete:
        </p>
        <div className='mt-2'>
          <a href='https://www.milafinder.com'>
            <i className='fas fa-globe'></i>
            <span>Mila Finder Website</span>
          </a>
        </div>
        <div className='mt-2'>
          <a href='https://www.milawholesale.com'>
            <i className='fas fa-globe'></i>
            <span>Mila Wholesale Website</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Projects
