import React, { Component } from 'react';
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import pdfConverter from 'jspdf';
import $ from 'jquery'; 

class HomeView extends React.Component {
  constructor(props){
    super(props);
    this.pdfToHTML=this.pdfToHTML.bind(this);
  }

  pdfToHTML = () => {
    console.log('clicked');
    var pdf = new pdfConverter('p', 'pt', 'letter');
    var source = $('#HTMLtoPDF')[0];
    debugger
    var specialElementHandlers = {
      '#bypassme': function(element, renderer) {
        return true
      }
    };

    var margins = {
      top: 50,
      left: 60,
      width: 545
    };

    pdf.fromHTML (
      source // HTML string or DOM elem ref.
      , margins.left // x coord
      , margins.top // y coord
      , {
          'width': margins.width // max width of content on PDF
          , 'elementHandlers': specialElementHandlers
        },
      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        // this allow the insertion of new lines after html
        pdf.save('html2pdf.pdf');
      }
    )
  }

  render() {
    return (
      <div>
        <div id="HTMLtoPDF">
          <div>
            <img src={DuckImage} />
          </div>
          <center>
            <h2>HTML to PDF</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing </p>
          </center>
        </div>
        <button onClick={this.pdfToHTML}>Download PDF</button>
      </div>
    );
  } 
}

export default HomeView
