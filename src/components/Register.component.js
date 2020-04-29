import React, { Component } from "react";


 class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
  }
}
    // fname: "",
    // lname: "",
    // email: "",
    // password: "",
    // cpassword: "",
    // address: "",
    // pincode: "",
    // contact: "",
    // file: "",
    // skills: "",
    // experience: ""

    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
   
      
      // if(!fields["fname"]){
      //    formIsValid = false;
      //    errors["fname"] = "This field cannot be empty";
      // }

      // if(!fields["lname"]){
      //     formIsValid = false;
      //     errors["lname"] = "This field cannot be empty";
      //  }
   
      if(typeof fields["fname"] !== "undefined"){
         if(!fields["fname"].match(/^[a-zA-Z]*$/)){
            formIsValid = false;
            errors["fname"] = "Only letters allowed";
         }        
      }
      if(typeof fields["lname"] !== "undefined"){
          if(!fields["lname"].match(/^[a-zA-Z]*$/)){
             formIsValid = false;
             errors["lname"] = "Only letters allowed";
          }        
       }

      // if(!fields["address"]){
      //    formIsValid = false;
      //    errors["address"] = "This field cannot be empty";
      // }
   
      // if(typeof fields["address"] !== "undefined"){
      //    if(!fields["address"].match(/\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/)){
      //       formIsValid = false;
      //       errors["address"] = "Only letters allowed";
      //    }     
      // }
  
      // if (!fields["mobileno"]) {
      //    formIsValid = false;
      //    errors["mobileno"] = "Please enter Contact Number";
      //  }
   
       if (typeof fields["mobileno"] !== "undefined") {
         if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
           formIsValid = false;
           errors["mobileno"] = "Please enter a valid Contact Number ";
         }
       }
    
      //  if (!fields["pincode"]) {
      //    formIsValid = false;
      //    errors["pincode"] = "Please enter your pincode.";
      //  }
   
       if (typeof fields["pincode"] !== "undefined") {
         if (!fields["pincode"].match(/^[0-9]{6}$/)) {
           formIsValid = false;
           errors["pincode"] = "Please enter a valid pincode";
         }
       }
       
      //  if (!fields["years"]) {
      //    formIsValid = false;
      //    errors["years"] = "Please enter Years of Experience.";
      //  }
   
      //  if (typeof fields["years"] !== "undefined") {
      //    if (!fields["years"].match(/^[0-9]*$/)) {
      //      formIsValid = false;
      //      errors["years"] = "Please enter a positive number. ";
      //    }
      //  }
     
   
      // if(!fields["email"]){
      //    formIsValid = false;
      //    errors["email"] = "This field cannot be empty";
      // }
   
    //   if(typeof fields["email"] !== "undefined"){
    //      let lastAtPos = fields["email"].lastIndexOf('@');
    //      let lastDotPos = fields["email"].lastIndexOf('.');
   
    //      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
    //         formIsValid = false;
    //         errors["email"] = "Email is not valid";
    //       }
    //  }
   
    //  if (!fields["file"]) {
    //    formIsValid = false;
    //    errors["file"] = "Please upload your Id Proof";
    //  }
   

   
    //password
    // if (!fields["password"]) {
    //   formIsValid = false;
    //   errors["password"] = "Please enter your password.";
    // }
   
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Please enter a secure and strong password.";
      }
    }
   //confirm password
  //  if (!fields["cpassword"]) {
  //     formIsValid = false;
  //     errors["cpassword"] = "Please enter your password.";
  //   }
   
    if (typeof fields["cpassword"] !== "undefined") {
      if (!fields["cpassword"].match(this.state.fields["password"]) ){
        formIsValid = false;
        errors["cpassword"] = "Entered password does not match.";
      }
    }

    if (typeof fields["file"] !== "defined") {
      //  var ext = fields["file"].substring(fields["file"].lastIndexOf('.') + 1);
  //  if(ext !== "pdf" || ext !== "txt" || ext !== "JPEG" || ext !== "jpeg" || ext !== "jpg" || ext !== "JPG" || ext !== "doc")
  var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.txt|\.pdf|\.JPEG|\.JPG|\.doc|\.docx)$/i;
    if(!allowedExtensions.exec(filePath)) 
  {
     
         formIsValid = false;
         errors["file"] = "Please upload a valid file(.txt, .jpeg, .jpg, .JPG, .doc)";
       }
     }

     this.setState({errors: errors});
     return formIsValid;
   }
   
   contactSubmit(e){
      e.preventDefault();
   
      if(this.handleValidation()){
         alert("Form submitted");
      }else{
         alert("Form has errors.")
      }
   
   }
   goBack() {
     window.history.back();
   }
   handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
   }
   changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };
   
  onChange = e => {
  
    switch (e.target.name) {
      case 'selectedFile':
      	if(e.target.files.length > 0) {
        
        	this.setState({ fileName: e.target.files[0].name });
        }
      break;
      default:
        this.setState({ [e.target.name]: e.target.value });
     }
  };
    render() {
      const { fileName } = this.state;
      let file = null;
   
      file = fileName 
         ? ( <span>{fileName}</span>) 
    : ( <span></span> );
        return (

<div className="Counselor">
    
<div class="Siderow">
  <div class="Sidecolumn">
    <div className="CInfo">
    <h6><b><i>KidsFuture provides One-on-One Parent and Child
      <br></br> Counselling to Unlock the Kid's Potential at an Early Stage...!</i></b></h6>
    <ul>
  <li><span>&#x2BC1;</span>Sign Up as a Child or Parent Counselor and Introduce Yourself for Free!</li>
  <hr></hr>
  <li><span>&#x2BC1;</span>Set Your Availabilities with Flexible Commitment...</li>
  <hr></hr>
  <li><span>&#x2BC1;</span>Set Your Session Pricing...</li>
  <hr></hr>
  <li><span>&#x2BC1;</span>Promote your counselling through our Advertising module for parents to find you easily, and stand out in audience!</li>
  <hr></hr>
  <li><span>&#x2BC1;</span>Track, manage and measure the success of your parent and child counselling programs with one-click reports from our Dashboard...</li>
</ul>
</div>
  </div>
  <div class="Sidecolumn">
      <div className="auth-inner">
      <form method="post" onSubmit= {this.contactSubmit.bind(this)}>
                <h5><b>Sign Up as a Counselor</b></h5>

                <div className="row">
                <div className="form-row">
                {/* <div className="col">
                    <input type="text" className="form-control form-control-sm" placeholder="First Name" className={this.state.fname.valid ? "form-control is-valid" : "form-control is-invalid"}
                    name="fname"
                    onChange={this.changeHandler}
                    id="materialFormRegisterNameEx"
                    required />
                </div> */}

<div className="col">
                    <input type="text" className="form-control form-control-sm" placeholder="First Name" ref="fname"  onChange={this.handleChange.bind(this, "fname")} value={this.state.fields["fname"]} id="materialFormRegisterNameEx"
                    required/>
                </div>

                <div className="col">
                <input type="text" className="form-control form-control-sm" placeholder="Last Name" ref="lname"  onChange={this.handleChange.bind(this, "lname")} value={this.state.fields["lname"]} required/>
                </div>
                </div>
                <span style={{color: "red"}}>{this.state.errors["fname"]}</span>

                <span style={{color: "red"},{fontFamily:'Helvetica Neue'}}>{this.state.errors["lname"]}</span>
                </div>

<div className="row">
                    <input type="email" className="form-control form-control-sm" placeholder="Email" ref="email"  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} required/>
                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                </div>

                <div className="row">
                    <input type="password" className="form-control form-control-sm" placeholder="Password"  ref="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required/>
                    <span style={{color: "red"}}>{this.state.errors["password"]}</span> 
                </div>

                <div className="row">
                    <input type="password" className="form-control form-control-sm" placeholder="Confirm Password" ref="cpassword" onChange={this.handleChange.bind(this, "cpassword")} value={this.state.fields["cpassword"]} required/>
                     <span style={{color: "red"}}>{this.state.errors["cpassword"]}</span>  
                </div>

                <div className="row">
                    <input type="comment" className="form-control form-control-sm" placeholder="Communication Address" ref="address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} required/>
                    <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                </div>
               
                <div className="row">
                    <input type="number" min={0} className="form-control form-control-sm" placeholder="Pin Code" ref="pincode" onChange={this.handleChange.bind(this, "pincode")} value={this.state.fields["pincode"]} required/>
                    <span style={{color: "red"}}>{this.state.errors["pincode"]}</span>
                </div>

                <div className="row">
                    <input type="tel" min={0} className="form-control form-control-sm" placeholder="Contact Number" ref="mobileno" onChange={this.handleChange.bind(this, "mobileno")} value={this.state.fields["mobileno"]} required />
                    <span style={{color: "red"}}>{this.state.errors["mobileno"]}</span>
                </div>

                {/* <div className="row">
                    <input type="file" className="form-control form-control-sm" placeholder="Your Id Proof" />
                </div> */}

<div className="row">
<div className="custom-file">
          <input
            type="file"
             placeholder="Your Id Proof"
            id="file" class="custom-file-input"
            ref="file" name="selectedFile" 
            onChange={  (event) => this.onChange(event)} 
            // onChange={this.handleChange.bind(this, "file")} 
            value={this.state.fields["file"]} 
              required/>


          <label style={{marginBottom:"1px"}}  onChange={this.handleChange.bind(this, "file")} 
            className="form-control form-control-sm custfile custom-file-label"
            htmlFor="validatedCustomFile" placeholder="Your Id Proof"
          >
            Your Id Proof
          </label>
          <div htmlFor="file" className="filedisplay" style={{marginTop:"-17px", marginLeft:"1px", textAlign:"right"}}>{file}</div>
          </div>
          <span style={{color: "red",marginTop:"-10px"}}>{this.state.errors["file"]}</span>


          {/* <div className="fileDisplay" htmlfor="file" style={{paddingBottom:"50px"}} >
  {file}
</div> */}
          </div>


    

                <div className="row">
                    <input type="comment" className="form-control form-control-sm" placeholder="Counselling Skills"  required/>
                </div>

                <div className="row">
                    <input type="number" min={0} className="form-control form-control-sm" placeholder="Years of Experience" ref="experience" onChange={this.handleChange.bind(this, "experience")} value={this.state.fields["experience"]}  required/>
                    <span style={{color: "red"}}>{this.state.errors["experience"]}</span>
                </div>
                <div className="row">
                <button type="submit" className="btn btn-success btn-block btn-sm">Join our Network of Top Expert Counselors!</button>
                </div>
                <p className="agreement text-center">
                    By signing up, you are agreeing to our <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a>.
                </p>
            </form>
            </div>
  </div>
 </div>
</div>

           
        );
    }
}
export default Login;
