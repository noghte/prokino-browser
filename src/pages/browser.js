import Layout from '../components/Layout';
import Search from '../components/search/Search'
import { useState } from 'react';

export default function Browser() {
        const showSearch = true;
        const showBrowse = false;    
        const showAdvanced = false;
        function isString(x) {
          return Object.prototype.toString.call(x) === "[object String]"
        }

        // function traverse(obj) {
        //   for (let prop in obj) {
        //     if (typeof obj[prop] === "object") {
        //       traverse(obj[prop])
        //     } else {
        //       if ( obj[prop].toLowerCase().includes(input.toLowerCase())) // && obj[prop].startsWith("prokino:")
        //       {
        //         console.log(obj);
        //         setResults(results => [...results, obj[prop]]);
        //       }
        //     }
        //   }
        // }
        // function doSearch(e)
        // {
        //   e.preventDefault();
        //   setResults([]);
        //   traverse(data, input);
        // }
        
 

        return(
            <Layout>
                <br />
                <br />
                <div className="container mbr-black">
              <div className="row justify-content-center">
                <div className="box-item col-md-4">
                    <div className="icon-block-top pb-4 align-center">
                      <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 17c-.13.004-.253.058-.344.15L.64 26.652c-.896.893-.776 2.134-.105 2.81.67.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.326-.328-.47-.826.102-1.397l9.517-9.503c.326-.318.084-.857-.363-.857zm8.45-14.93c-1.604.213-3.146.91-4.39 2.063-.49.453.21 1.17.68.734 2.18-2.02 5.392-2.445 8.022-1.06.58.332 1.053-.603.465-.885-1.5-.79-3.17-1.064-4.776-.852zM20 0c-5.517 0-10 4.483-10 10s4.483 10 10 10 10-4.483 10-10S25.517 0 20 0zm0 1c4.976 0 9 4.024 9 9s-4.024 9-9 9-9-4.024-9-9 4.024-9 9-9z"/></svg>
                    </div>
                <h4 className="box-item-title pb-3 mbr-fonts-style align-center display-5">Quick Search</h4>
                <p className="box-item-text mbr-fonts-style align-center display-7">Search into pre-defined collections of proteins, genes, and interactions. </p>
              </div>
              <div className="box-item col-md-4">
                  <div className="icon-block-top pb-4 align-center">
                    <svg height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M19.498 7c-.182 0-.35.1-.437.26l-8.987 15.988c-.328.58.542 1.072.87.492L19.93 7.75c.196-.332-.045-.75-.432-.75zm3.03 2c.112.006.22.05.304.125l6.994 5.996c.232.2.232.56 0 .76l-6.994 5.995c-.48.43-1.14-.352-.652-.757l6.554-5.618-6.554-5.618c-.368-.308-.132-.882.348-.882zM7.472 9c-.112.006-.22.05-.304.125L.174 15.12c-.232.2-.232.56 0 .76l6.994 5.995c.48.43 1.14-.352.652-.757L1.266 15.5 7.82 9.882C8.188 9.574 7.952 9 7.472 9z"/></svg>
                  </div>
                  <h4 className="box-item-title pb-3 mbr-fonts-style align-center display-5">Advanced Queries</h4>
                  <p className="box-item-text mbr-fonts-style align-center display-7">Build your own SPARQL queries based on examples, or from scratch.</p>
              </div>
              <div className="box-item col-md-4">
                <div className="icon-block-top pb-4 align-center">
                    
                <svg height="30" viewBox="0 0 30 30" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0C.678 0 0 .678 0 1.5v25c0 .822.678 1.5 1.5 1.5H3v.5c0 .822.678 1.5 1.5 1.5h2c.822 0 1.5-.678 1.5-1.5V28h14v.5c0 .822.678 1.5 1.5 1.5h2c.822 0 1.5-.678 1.5-1.5V28h1.5c.822 0 1.5-.678 1.5-1.5v-25c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v25c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-25c0-.286.214-.5.5-.5zM5 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM3.5 9c-.277 0-.5.223-.5.5s.223.5.5.5h23c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-23zM9 13c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM3.5 18c-.277 0-.5.223-.5.5s.223.5.5.5h23c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-23zM5 22c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm4 0c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-9 6h3v.5c0 .286-.214.5-.5.5h-2c-.286 0-.5-.214-.5-.5V28zm19 0h3v.5c0 .286-.214.5-.5.5h-2c-.286 0-.5-.214-.5-.5V28z"/></svg>
                </div>
                <h4 className="box-item-title pb-3 mbr-fonts-style align-center display-5">Browse</h4>
                <p className="box-item-text mbr-fonts-style align-center display-7">Locate kinase proteins and other information related to the proteins.</p>
            </div>
      </div>
      </div>

        {showSearch && <Search />}
        {/* /.row */}
      <br />


        </Layout>)
}