
const React = require('react');

//adding inline CSS
const myStyle={
    color:'#ffffff',
    backgroundColor:'#000000'
};

class Index extends React.Component{
    render(){
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

                </div>
                
            </body>
            </html>
        );
    }

}
module.exports=Index;