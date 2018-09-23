import React, {Component} from 'react';
import './css/App.css';
import ImgCard from "./components/ImgCard";
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';
import img12 from './img/img12.jpg';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

var img1Style = {
    backgroundImage: `url(${img1})`
};

var img2Style = {
    backgroundImage: `url(${img2})`
};
var img3Style = {
    backgroundImage: `url(${img3})`
};
var img4Style = {
    backgroundImage: `url(${img4})`
};
var img5Style = {
    backgroundImage: `url(${img5})`
};
var img6Style = {
    backgroundImage: `url(${img6})`
};
var img7Style = {
    backgroundImage: `url(${img7})`
};
var img8Style = {
    backgroundImage: `url(${img8})`
};
var img9Style = {
    backgroundImage: `url(${img9})`
};
var img10Style = {
    backgroundImage: `url(${img10})`
};
var img11Style = {
    backgroundImage: `url(${img11})`
};
var img12Style = {
    backgroundImage: `url(${img12})`
};

var styleArray = [
    {id: 1, img: img1Style, clicked: false},
    {id: 2, img: img2Style, clicked: false},
    {id: 3, img: img3Style, clicked: false},
    {id: 4, img: img4Style, clicked: false},
    {id: 5, img: img5Style, clicked: false},
    {id: 6, img: img6Style, clicked: false},
    {id: 7, img: img7Style, clicked: false},
    {id: 8, img: img8Style, clicked: false},
    {id: 9, img: img9Style, clicked: false},
    {id: 10, img: img10Style, clicked: false},
    {id: 11, img: img11Style, clicked: false},
    {id: 12, img: img12Style, clicked: false},
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


class App extends Component {

    state = {
        styleArray,
        currentScore: 0,
        topScore: 0,
        rightWrong: "",
        clicked: [],
    };

    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({clicked: this.state.clicked.concat(id)});
        } else {
            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            rightWrong: ""
        });
        if (newScore >= this.state.topScore) {
            this.setState({topScore: newScore});
        }
        else if (newScore === 12) {
            this.setState({rightWrong: "You win!"});
        }
        this.handleShuffle();
    };

    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            rightWrong: "Glaven!",
            clicked: []
        });
        this.handleShuffle();
    };

    handleShuffle = () => {
        let shuffledArray = shuffleArray(styleArray);
        this.setState({styleArray: shuffledArray});
    };

    render() {
        return (

            <div className="App">

                <NavBar
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    rightWrong={this.state.rightWrong}
                />
                <Header/>

                <main className="container">
                    {this.state.styleArray.map(styleImage => (
                        <ImgCard
                            key={styleImage.id}
                            handleClick={this.handleClick}
                            handleIncrement={this.handleIncrement}
                            handleReset={this.handleReset}
                            handleShuffle={this.handleShuffle}
                            id={styleImage.id}
                            image={styleImage.img}
                        />
                    ))}
                </main>

                <Footer/>
            </div>
        );
    }
}


export default App;
