
// Je définis une interface qui est la forme que prend le props passer au composant Greeting
interface Props {
    name: string
}

// Je précise donc que le paramètre de Greeting et de type Props
const Greeting = ({ name }: Props) => { 

    return <div>Hello, {name}!</div>;
};


export default Greeting;