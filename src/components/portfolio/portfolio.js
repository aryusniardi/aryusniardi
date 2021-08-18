import React from 'react'
import {
    PortfolioContainer, 
    ItemContainer, 
    PortfolioItem, 
    ItemContainerTools, 
    PortfolioImage, 
    PortfolioName, 
    Item,
} from './portfolio.elements'
import { Header, Container } from '../elements'

const Portfolio = () => {
    const item = [
        {
            nama: 'Netflix interface clone using React.JS',
            description: 'I learn to use react and trying to cloning Netflix interface using React.JS',
            tools: [
                {nama: 'React.js'}, 
                {nama: 'SCSS'}, 
                {nama: 'Axios'}
            ],
            image: process.env.PUBLIC_URL + '/img/1.png',
            source: 'https://github.com/aryusniardi/movie-app-react'
        },
        {
            nama: 'Revelry',
            description: 'Last Project from Web Programing lecture on campus, creating e-commerce system using PHP framework CodeIgniter',
            tools: [
                {nama: 'HTML'}, 
                {nama: 'CSS'}, 
                {nama: 'Bootstrap'},
                {nama: 'PHP'},
                {nama: 'MySQL'}
            ],
            image: process.env.PUBLIC_URL + '/img/2.png',
            source: 'https://github.com/aryusniardi/UAS---Web_Programing'
        },
        {
            nama: 'Kedai Fesyen',
            description: 'Last Project from Web Technology 2.0 lecture on campus, creating e-commerce system using PHP framework Laravel and Vue.JS',
            tools: [
                {nama: 'Laravel'}, 
                {nama: 'Vuetify'}, 
                {nama: 'SCSS'}, 
                {nama: 'Vue.js'},
                {nama: 'MySQL'},
            ],
            image: process.env.PUBLIC_URL + '/img/3.png',
            source: 'https://github.com/aryusniardi/kedai_fesyen_app'
        },
        {
            nama: 'Todo App',
            description: 'Creating todo app using react and material-ui component for front-end, and using Firebase for backend and deploy, using Firestore database',
            tools: [
                {nama: 'React.js'}, 
                {nama: 'SCSS'}, 
                {nama: 'Firebase'}, 
                {nama: 'Firestore'},
            ],
            image: process.env.PUBLIC_URL + '/img/4.png',
            source: 'https://todo-app-react-d58a2.web.app/'
        },
    ]

    return (
        <PortfolioContainer>
            <Header>Portfolio</Header>
            <Container>
                <ItemContainer>
                    {item.map(i => (
                        <React.Fragment>
                            <PortfolioItem key={i.nama}>
                                <PortfolioName>{i.nama}</PortfolioName>
                                <PortfolioImage onClick={''} background={i.image} alt={i.image} />
                                <ItemContainerTools>
                                    {i.tools.map(index => (
                                        <Item>{index.nama}</Item>
                                    ))}
                                </ItemContainerTools>
                            </PortfolioItem>
                        </React.Fragment>
                    ))}
                </ItemContainer>

                {/* <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-content">
                        <div class="close-modal" data-dismiss="modal">
                            <div class="lr">
                                <div class="rl">
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-lg-offset-2">
                                    <div class="modal-body">
                                        <h2>Project Name</h2>
                                        <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                        <img class="img-responsive" src="https://unsplash.imgix.net/uploads%2F1411419068566071cef10%2F7562527b?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=240c45655f09c546232a6f106688e502" alt="" />
                                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                        <p>
                                            <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
                                        <ul class="list-inline">
                                            <li>Date: July 2014</li>
                                            <li>Client: Round Icons</li>
                                            <li>Category: Graphic Design</li>
                                        </ul>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Container>
        </PortfolioContainer>
    )
}

export default Portfolio