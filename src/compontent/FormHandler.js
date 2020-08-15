import React, { Component } from 'react'

export class FormHandler extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             FirstName:'',
             LastName:'',
             Address:'',
             Gender:'',
             Type:'',
        }
     
    }
       
    handlerChangeFirstName=event=>{
        this.setState({
          FirstName:event.target.value
        })
    }
    handlerChangeLastName=event=>{
        this.setState({
            LastName:event.target.value
        })
    }
    handlerChangeMale=event=>{
        this.setState({
            Gender:event.currentTarget.value
        })
    }
    handlerChangeFemale=event=>{
        this.setState({
            Gender:event.currentTarget.value
        })

    }
    handlerChangeType=event=>{
        this.setState({
            Type:event.target.value
        })
    }
    SaveData=event=>{
 alert(`${this.state.FirstName}${this.state.LastName}${this.state.Type}`)
    }
    
    render() {
        return (
            <form onSubmit={this.SaveData}>
                
                <div>
                    <label>First Name :</label>
                    <input type='text' value={this.state.FirstName} onChange={this.handlerChangeFirstName}></input>
                </div>
                <div>
                    <label>Last Name :</label>
                    <input type='text' value={this.state.LastName} onChange={this.handlerChangeLastName}></input>
                </div>
                <div>
                   {/* <label>Gender :</label>
                      <label>
                    <input type='radio' value='M' onChange={this.handlerChangeMale} name='Gender' checked={this.state.Gender===this.event.currentTarget.value}></input>
                     Male
                    </label>
                    <label> <input type='radio' value='F' onChange={this.handlerChangeFemale} name='Gender' checked={this.state.Gender===this.currentTarget.value}></input> Female</label>
                    */}
                </div>
                <div>
                    <label>Appliacation  Type :</label>
                    <select  onChange={this.handlerChangeType}>
                      <option value='private'>Private</option>
                      <option value='Public'>Public</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Save</button>
                    {/* <input type="button" value="Save" ></input> */}
                </div>
            </form>
        )
    }
}

export default FormHandler
