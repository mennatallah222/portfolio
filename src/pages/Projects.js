import ProjectCard from '../components/ProjectCard';
import img from '../assets/images/no-image.webp';
import img1 from '../assets/images/chat1.PNG';
import noimg from '../assets/images/no-image.webp';
import { Box } from '@mui/material';

export default function Projects(){
    return <Box   sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', p: 4, mt:4}}>

        <ProjectCard isLtoR={true}
                     name="Chat Website"
                     description="I created a real-time chat application using ASP.NET Core and SignalR and group chat functionality.
                                  Users can create and join chat rooms, with instant message delivery and real-time updates. 
                                  Notifications for new messages keep users engaged and informed. 
                                  This project highlights my skills in modern web technologies and interactive experiences."
                    skills={"ASP .Net Core, MongoDB, SignalR, Javascript Library"}
                    img={img}
                    href=""
        />
        <ProjectCard isLtoR={false}
                     name="BookHub"
                     description="Developed ASP .Net Web APIs demonstrating Clean Architecture principles 
 Implemented user, order, customer, product, cart and books management. 
 Leveraged SQL Server and AutoMapper for DTO mapping and Pagination for performance optimization. 
 Implemented CQRS and MediatR, authentication and authorization using JWT and Localization in Arabic language.
                     "
                     skills=""
                    img={img1}
                    href="https://github.com/mennatallah222/BookHub-API"
        />
        <ProjectCard isLtoR={true} name="TrelloAPI"
                     description="Implemented the backend logic for Trello app using Java EE. 
                                  Allowing users to create boards, lists and cards to organize their tasks. Users can collaborate with other team members, assign
                                  tasks and track progress. 
                                  It includes REST APIs, messaging for real-time updates and authorization and authentication."
                    skills=""
                    img={img}

        />
        <ProjectCard name="Ecommerce website"
                     description="Created an e-commerce platform with intuitive navigation, user registration, and role-based authorization. Implemented 
CRUD operations. 
                                  Utilized MSSQL Database demonstrating my understanding of database, C#, LINQ, EF, and ASP.NET Core MVC."
                    skills=""
                    img={img}
        />
        <ProjectCard isLtoR={true} name="Othello-Game"
        description="Developed an AI-powered Othello game in Python using Pygame. 
                     Implemented classic game mechanics, including move detection and AI player with alpha-beta pruning. 
                     Designed a user-friendly interface with board layout and multiple difficulty levels."
                     skills=""
                     img={img}             
        />

        <ProjectCard name="Train Booking Windows Form using C#"
                description="Developed a web application for train seat booking and trip management, featuring user authentication and an admin 
                             dashboard for managing trips and seats. 
                             Utilized SQL Server for database management and designed a user-friendly interface. 
                             Implemented Crystal Reports to create customizable reports "
                    skills=""
                    img={noimg}                     
        />

    </Box>
}