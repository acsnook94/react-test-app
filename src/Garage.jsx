import Car from './Car.jsx';

export default function Garage(){
    return(
        <>
            <h1>Who lives in my garage???</h1>
            <Car brand="Chevy" model="Corvette" color="red" make={2016}/>
            <Car brand="Ford"/>
        </>
    );
}