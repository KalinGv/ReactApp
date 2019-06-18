import React from "react";
import ReactDOM from 'react-dom';
import AppName from "../src/components/common/AppName";
import { shallow } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CounterBtn from "../src/components/CounterBtn";
import renderer from "react-test-renderer";
import CounterList from "../src/components/CounterList";
import Square from "../src/components/Square";
import Board from "../src/components/Board";
import Game from "../src/components/Game";

configure({ adapter: new Adapter() });

it("renders successfuly", () => {
    const div = document.createElement("div")
    ReactDOM.render(<AppName /> , div)
});

describe ("Testing component with enziime", () => {
    it("The text should say - React App", ()=>{
        const wrapper = shallow(<AppName /> )
        const text = wrapper.find('h1').text()
        expect(text).toEqual("React App")
    });
});

describe ("Testing interaction", () => {
    it("Should count when the button is clicked", () =>{
        const wrapper = shallow(<CounterBtn />)
        const btn = wrapper.find("button.increase")
        btn.simulate("click")
        const text = wrapper.find("p").text()
        expect(text).toEqual("Current count: 1")
    }); 
});

describe ("Decreasing the count", () => {
    it("Should count when the button is clicked", () =>{
        const wrapper = shallow(<CounterBtn />)
        const btn = wrapper.find("button.decrease")
        btn.simulate("click")
        const text = wrapper.find("p").text()
        expect(text).toEqual("Current count: -1");
    }); 
});


describe ("Testing CounterList componet individualy", () => {
    it ("Should render 1 Counter by defoult", () => {
        const wrapper = shallow(<CounterList />)
        const counters = wrapper.find("CounterBtn")
        expect(counters.length).toEqual(1)
    });
    
    it ("Should add another Counter when the btn is clicked", () => {
        const wrapper = shallow(<CounterList />)
        const btn = wrapper.find('button')
        btn.simulate("click")
        const counters = wrapper.find("CounterBtn")
        expect(counters.length).toEqual(2)

    });
});

//Tic tac toe

describe ("Giving value to squares", () => {
    it ("Make a cross in the first square", () => {
        const squares = ["X", null, null, null, null, null, null, null, null]
        expect(squares[0]).toEqual("X")
    });

});

