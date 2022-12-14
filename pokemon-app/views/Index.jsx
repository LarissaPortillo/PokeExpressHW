
const React = require('react');

//adding inline CSS
const myStyle={
    border:'solid 1px',
    borderColor:'blue',
};

//capitalize first letter of name


class Index extends React.Component{
    render(){
        const {pokemon} = this.props;
        return(
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pokemon</title>
            </head>
            <body>
                <h1> See All the Pokemon!</h1>
                <div style={myStyle}> 
                <ul>
                    {pokemon.map((pokemon,i,a)=>{
                        let str=pokemon.name;
                        return(
                        <li><a href={`/pokemon/${i}`}>{str.charAt(0).toUpperCase()+str.slice(1)}</a></li>
                        );
                    })}
                </ul>

                </div>
                
            </body>
            </html>
        );
    }

}
module.exports=Index;